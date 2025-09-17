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
    if (filter.sort) {
      return [...posts.sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))]
    } else {
      return posts;
    }
   }, [filter.sort, posts])

const sortedAndSearchedPosts = useMemo(() => {
    return sortedPost.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, sortedPost])


   const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const deletePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }
 
  return (
    <div className="App">
     <PostForm create={createPost}/>
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
