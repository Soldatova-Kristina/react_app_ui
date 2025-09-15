import './App.css'
import PostList from './components/PostList/PostList'
import { useState } from 'react'
import MyButton from './components/UI/button/MyButton'
import MyInput from './components/UI/input/MyInput'


function App() {
     const [posts, setPosts] = useState([
    {id: 1, title: " JavaScript", body: "description"},
    {id: 2, title: " TypeScript", body: "description"},
    {id: 3, title: " Redux", body: "description"},
    {id: 4, title: " React", body: "description"}
  ])

  const [title, setTitle] = useState('')
  
  const addNewPost = (e) => {
    e.preventDefault()
   const newPost = {
      id: Date.now(),
      title: title,
   }
  }
  return (
    <div className="App">
      <form>
        <MyInput 
        type="text" 
        placeholder="Название поста"
        value={title}
        onChange={(e) => setTitle(e.target.value)}/>
        <MyInput type="text" 
        placeholder="Описание поста"
        value={title}
        onChange={(e) => setTitle(e.target.value)}/>
        <MyButton onClick={addNewPost}>Добавить пост</MyButton>
      </form>
     <PostList posts={posts} title={"Список постов 1"}/>
     </div>
  )
}

export default App
