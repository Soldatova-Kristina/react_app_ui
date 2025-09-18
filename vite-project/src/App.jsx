import './App.css' 
import PostList from './components/PostList/PostList'
import {useState, useEffect} from 'react'
import PostForm from './components/PostForm/PostForm'
import PostFilter from './components/PostFilter/PostFilter'
import MyModal from './components/MyModal/MyModal'
import MyButton from './UI/button/MyButton'
import {usePosts} from './hooks/usePosts'
import PostService from './API/PostService'
import Loader from './UI/Loader/Loader'

function App() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  const [isPostLoading, setIsPostLoading]= useState(true)

  useEffect (() => {
    getPosts()
  }, [])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const deletePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  async function getPosts () {
    setIsPostLoading(true);
    setTimeout( async() => {
   const posts= await PostService.getAll()
    setPosts(posts)
    setIsPostLoading(false)
    }, 3000)  
  }
 
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
   {isPostLoading 
     ? <div style={{display: "flex", justifyContent: "center", marginTop: 50}}><Loader /></div>
     : <PostList deletePost={deletePost} posts={sortedAndSearchedPosts} title={"Список постов"} /> 
}
</div>
)}
export default App
