import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import useFetching from '../hooks/useFetching'
import PostService from '../API/PostService'
import Loader from '../UI/Loader/Loader'

const PostIdPage = () => {
  const params = useParams()
  const [post, setPost] = useState({})
  const [comm, setComm] = useState([])

  const [fetchPostbyId, isPostLoading, postError] = useFetching(async () => {
    const response = await PostService.getById(params.id);
    setPost(response.data)
  })

  const [fetchCommbyId, isCommLoading, comError] = useFetching(async () => {
    const response = await PostService.getComId(params.id);
    setComm(response.data)
  })

  useEffect(() => {
    fetchPostbyId()
    fetchCommbyId()
  }, [params.id])

  return (
    <div>
       <h2> Вы открыли страницу поста c ID {params.id}</h2>
       {postError && <h1>Произошла ошибка: {postError}</h1>}
       {isPostLoading
       ? <Loader />
       : <div>{post.id && <><p>Описание поста: {post.title}</p></>}</div> }
       {isCommLoading
       ? <Loader />
       : <div> {comm.map(com => (
          <div key={com.id}>Комментарии к посту:
           <p>Email комментатора: {com.email}</p>
            <p>Комментарий: {com.body}</p>
          </div>))}
           </div>
}   
</div>
  )
}
export default PostIdPage;