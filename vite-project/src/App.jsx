import './App.css'
import PostList from './components/PostList/PostList'
import { useState, useRef } from 'react'
import MyButton from './components/UI/button/MyButton'
import MyInput from './components/UI/input/MyInput'
import PostForm from './components/PostForm/PostForm'


function App() {
     const [posts, setPosts] = useState([
    {id: 1, title: " JavaScript", body: "description"},
    {id: 2, title: " TypeScript", body: "description"},
    {id: 3, title: " Redux", body: "description"},
    {id: 4, title: " React", body: "description"}
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
 
  const deletePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
     <PostForm create={createPost}/>
     <PostList deletePost={deletePost} posts={posts} title={"Список постов 1"}/>
     </div>
  )
}

export default App
