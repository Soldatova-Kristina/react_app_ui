import './App.css'
import PostList from './components/PostList/PostList'
import { useState, useRef, useMemo } from 'react'
import PostForm from './components/PostForm/PostForm'
import PostFilter from './components/PostFilter/PostFilter'


function App() {
     const [posts, setPosts] = useState([
    {id: 1, title: " JavaScript", body: "description"},
    {id: 2, title: " TypeScript", body: "description"},
    {id: 3, title: " Redux", body: "description"},
    {id: 4, title: " React", body: "description"}
  ])

  const [filter, setFilter] = useState({sort: '', query: ''})

   const sortedPost = useMemo(() => {
       console.log("getSortedPosts отработала")
    if (selected) {
      return [...posts.sort((a, b) => a[selected].localeCompare(b[selected]))]
    } else {
      return posts;
    }
   }, [selected, posts])

const sortedAndSearchedPosts = useMemo(() => {
    console.log("getSortedAndSearchedPosts отработала")
    return sortedPost.filter(post => post.title.toLowerCase().includes(search.toLowerCase()))
  }, [search, sortedPost])

   const sortPosts= (sort) => {
   setSelected(sort)
 }

   const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const deletePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const serched = e => setSearch(e.target.value)
 
  return (
    <div className="App">
     <PostForm create={createPost}/>
      <hr style={{margin: "20px 0"}}/> 
     <PostFilter 
     serched = {serched}
     selected={selected}
     />
     {sortedAndSearchedPosts.length !== 0
     ? 
     <PostList deletePost={deletePost} posts={sortedAndSearchedPosts} title={"Список постов 1"}/>
     : 
     <h2 style={{textAlign: "center"}}>
     Список задач пуст
     </h2>
     }
     </div>
  )
}

export default App
