import './App.css'
import axios from 'axios'
import PostList from './components/PostList/PostList'
import { useState} from 'react'
import PostForm from './components/PostForm/PostForm'
import PostFilter from './components/PostFilter/PostFilter'
import MyModal from './components/MyModal/MyModal'
import MyButton from './components/UI/button/MyButton'
import {usePosts} from './components/hooks/usePosts'

function App() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const deletePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  async function getPosts ()  {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    setPosts(response.data)
  }
 
  return (
    <div className="App">

      <MyButton onClick={getPosts}>
        Получить посты
      </MyButton>

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
     <PostList deletePost={deletePost} posts={sortedAndSearchedPosts} title={"Список постов 1"}/>
     </div>
  )
}

export default App
