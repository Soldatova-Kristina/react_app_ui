import './App.css' 
import PostList from './components/PostList/PostList'
import {useState, useEffect, useMemo} from 'react'
import PostForm from './components/PostForm/PostForm'
import PostFilter from './components/PostFilter/PostFilter'
import MyModal from './components/MyModal/MyModal'
import MyButton from './UI/button/MyButton'
import {usePosts} from './hooks/usePosts'
import PostService from './API/PostService'
import Loader from './UI/Loader/Loader'
import useFetching from './hooks/useFetching'
import { getPageCount } from './utils/pages'
import usePagination from './hooks/usePagination'
import Pagination from './components/Pagination/Pagination'

function App() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages]= useState(0);
  const [limit, setLimit]= useState(10)
  const [page, setPage]= useState(1)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  const { pages } = usePagination(totalPages)
    
  const [getPosts, isPostLoading, postError] = useFetching( async ()=> {
      const response = await PostService.getAll(limit, page)
      setPosts(response.data)
      const totalCount = response.headers['x-total-count'];
      setTotalPages(getPageCount(totalCount, limit))
  })

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const deletePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const changePage = (newPage) => {
    setPage(newPage)
  }

  useEffect(() => {
    getPosts()
  }, [page]) 
 
  return (
    <div className="App">

      <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
        Создать пост
      </MyButton>

      <MyModal
       visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>
      <hr style={{margin: "20px 0"}}/> 
     <PostFilter 
     filter={filter}
     setFilter={setFilter}
     />
     {postError && <h1>Произошла ошибка ${postError}</h1> }
     {isPostLoading 
     ? <div style={{display: "flex", justifyContent: "center", marginTop: 50}}><Loader /></div>
     : <>
         <PostList deletePost={deletePost} posts={sortedAndSearchedPosts} title={"Список постов"} />
         <Pagination 
           pages={pages}
           currentPage={page}
           onPageChange={changePage}
         />
       </>
}
</div>
)}
export default App
