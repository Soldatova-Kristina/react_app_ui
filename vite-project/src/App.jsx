import './App.css'
import PostList from './components/PostList/PostList'
import { useState, useRef, useMemo } from 'react'
import MyButton from './components/UI/button/MyButton'
import MyInput from './components/UI/input/MyInput'
import PostForm from './components/PostForm/PostForm'
import MySelect from './components/UI/select/MySelect'


function App() {
     const [posts, setPosts] = useState([
    {id: 1, title: " JavaScript", body: "description"},
    {id: 2, title: " TypeScript", body: "description"},
    {id: 3, title: " Redux", body: "description"},
    {id: 4, title: " React", body: "description"}
  ])

   const [search, setSearch] = useState("")
   const [selected, setSeceked] = useState("")

   const sortedPost = useMemo(() => {
       console.log("getSortedPosts отработала")
    if (selected) {
      return [...posts.sort((a, b) => a[selected].localeCompare(b[selected]))]
    } else {
      return posts;
    }
   }, [selected, posts])


   const sortPosts= (sort) => {
   setSeceked(sort)
 }

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
      <div>
        <MyInput
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Поиск..."
        />

     <MySelect
      value={selected}
      onChange={sortPosts}
      defaultValue="Сортировка"
      options={[
        {value: "title", name: "По названию"},
        {value: "body", name: "По описанию"}
      ]}
      />
     </div>
     {posts.length !== 0
     ? 
     <PostList deletePost={deletePost} posts={sortedPost} title={"Список постов 1"}/>
     : 
     <h2 style={{textAlign: "center"}}>
     Список задач пуст
     </h2>
     }
     </div>
  )
}

export default App
