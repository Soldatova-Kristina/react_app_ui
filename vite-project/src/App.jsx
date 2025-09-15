import {useState} from 'react'
import Counter from './components/Counter/Counter'
import './App.css'
import ClassCounter from './components/Counter/ClassCounter'
import PostItem from './components/PostItem/PostItem'

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: " JavaScript", body: "description"},
    {id: 2, title: " TypeScript", body: "description"},
    {id: 3, title: " Redux", body: "description"},
    {id: 4, title: " React", body: "description"}
  ])
  return (
    <div className="App">
      <h1>Список постов</h1>
        {posts.map(item => (
          <PostItem post={item} key={item.id}/>
        ))}
     </div>
  )
}

export default App
