import PostList from '../components/PostList/PostList'
import {useState, useEffect, useRef} from 'react'
import PostForm from '../components/PostForm/PostForm'
import PostFilter from '../components/PostFilter/PostFilter'
import MyModal from '../components/MyModal/MyModal'
import MyButton from '../UI/button/MyButton'
import {usePosts} from '../hooks/usePosts'
import PostService from '../API/PostService'
import Loader from '../UI/Loader/Loader'
import useFetching from '../hooks/useFetching'
import { getPageCount } from '../utils/pages'
import usePagination from '../hooks/usePagination'
import Pagination from '../components/Pagination/Pagination'
import { useObserver } from '../hooks/useObserver'

function Posts() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages]= useState(0);
  const [limit, setLimit]= useState(10)
  const [page, setPage]= useState(1)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  const { pages } = usePagination(totalPages)
  const lastElementRef = useRef()

  const [fetchPosts, isPostLoading, postError] = useFetching( async () => {
    const response = await PostService.getAll(limit, page)
    setPosts(prev => [...prev, ...response.data])
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit))
  })

  // наблюдатель: увеличиваем страницу
  useObserver(lastElementRef, page < totalPages, isPostLoading, () => {
    setPage(prev => prev + 1)
  })

  // грузим посты при первой загрузке и при смене page
  useEffect(() => {
    fetchPosts()
  }, [page, limit]) 

  // если меняем лимит — сбрасываем посты и страницу
  useEffect(() => {
    setPosts([])
    setPage(1)
  }, [limit])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const deletePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
        Создать пост
      </MyButton>

      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>

      <hr style={{margin: "20px 0"}}/> 

      <PostFilter filter={filter} setFilter={setFilter} />

      <select value={limit} onChange={e => setLimit(Number(e.target.value))}>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={25}>25</option>
      </select>

      {postError && <h1>Произошла ошибка ${postError}</h1>}

      <PostList deletePost={deletePost} posts={sortedAndSearchedPosts} title={"Список постов"} />

      <div ref={lastElementRef} style={{ height: 20 }} />

      {isPostLoading && (
        <div style={{display: "flex", justifyContent: "center", marginTop: 50}}>
          <Loader />
        </div>
      )}
    </div>
  )
}

export default Posts