import './App.css'
import PostList from './components/PostList/PostList'
import { useState } from 'react'

function App() {
     const [posts, setPosts] = useState([
    {id: 1, title: " JavaScript", body: "description"},
    {id: 2, title: " TypeScript", body: "description"},
    {id: 3, title: " Redux", body: "description"},
    {id: 4, title: " React", body: "description"}
  ])

     const [posts2, setPosts2] = useState([
    {id: 1, title: " Git", body: "description"},
    {id: 2, title: " CI/CD", body: "description"},
    {id: 3, title: " UI Kit", body: "description"},
  ])

  return (
    <div className="App">
     <PostList posts={posts} title={"Список постов 1"}/>
      <PostList posts={posts2} title={"Список постов 2"}/>
     </div>
  )
}

export default App
