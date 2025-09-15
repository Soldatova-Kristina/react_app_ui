import PostItem from '../PostItem/PostItem'
export default function PostList({posts, title}) {
    return (
        <>
         <h1 style={{color: 'blue', textAlign: 'center'}}>{title}</h1>
        {posts.map((item, index) => (
          <PostItem number={index + 1} post={item} key={item.id}/>
        ))}
        </>
    )
}