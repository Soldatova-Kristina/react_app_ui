import PostItem from '../PostItem/PostItem'
const PostList = ({posts, title, deletePost}) => {
    return (
        <>
         <h1 style={{color: 'blue', textAlign: 'center'}}>
          {title}
          </h1>
        {posts.map((item, index) => (
          <PostItem deletePost={deletePost} number={index + 1} post={item} key={item.id}/>
        ))}
        </>
    )
}

export default PostList