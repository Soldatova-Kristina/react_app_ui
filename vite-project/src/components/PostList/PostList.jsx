import {useState} from 'react'
import PostItem from '../PostItem/PostItem'
export default function PostList() {

    const [posts, setPosts] = useState([
    {id: 1, title: " JavaScript", body: "description"},
    {id: 2, title: " TypeScript", body: "description"},
    {id: 3, title: " Redux", body: "description"},
    {id: 4, title: " React", body: "description"}
  ])

    return (
        <>
         <h1 style={{color: 'blue', textAlign: 'center'}}>Список постов</h1>
        {posts.map(item => (
          <PostItem post={item} key={item.id}/>
        ))}
        </>
    )
}