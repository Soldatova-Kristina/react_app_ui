import MyInput from "../UI/input/MyInput"
import {useState} from 'react'
import MyButton from "../UI/button/MyButton"

export default function PostForm({create}) {

     const [post, setPost] = useState({
        title: "",
        body: ""
      })
    
      const addNewPost = (e) => {
        e.preventDefault()
       const newPost =  {
       ...post, 
       id: Date.now(),
      }
      setPost({title: "", body: ""})
      create(newPost)
      }

    return ( 
          <form>
        <MyInput 
        type="text" 
        placeholder="Название поста"
        value={post.title}
        onChange={e => setPost({...post, title: e.target.value})}
        />
        <MyInput
         type="text" 
         placeholder="Описание поста"
         value={post.body}
         onChange={e => setPost({...post, body: e.target.value})}
        />
        <MyButton onClick={addNewPost}>Добавить пост</MyButton>
      </form>
    )
}