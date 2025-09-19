import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import useFetching from '../hooks/useFetching'
import PostService from '../API/PostService'
import Loader from '../UI/Loader/Loader'

const PostIdPage = () => {
  const params = useParams()
  const [post, setPost] = useState({})
  
  const [fetchPostbyId, isPostLoading, postError] = useFetching(async () => {
    const response = await PostService.getById(params.id);
    setPost(response.data)
  })

  useEffect(() => {
    fetchPostbyId()
  }, [params.id])

  return (
    <div>
       <h2> Вы открыли страницу поста c ID {params.id}</h2>
       {postError && <h1>Произошла ошибка: {postError}</h1>}
       {isPostLoading
       ? <Loader />
       : <div>{post.id && <><h3>{post.title}</h3><p>{post.body}</p></>}</div> }
    </div>
  )
}

export default PostIdPage