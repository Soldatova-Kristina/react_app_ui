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

  return (
    <div className="App">
     <PostList posts={posts} title={"Список постов 1"}/>
     </div>
  )
}

export default App
