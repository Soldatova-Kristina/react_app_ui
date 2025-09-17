import {useMemo} from 'react'

export const useSortedPost = (posts, sort) => {
     const sortedPost = useMemo(() => {
       console.log("getSortedPosts отработала")
    if (sort) {
      return [...posts.sort((a, b) => a[sort].localeCompare(b[sort]))]
    } else {
      return posts;
    }
   }, [sort, posts])
   return sortedPost;
} 

export const usePosts = (posts, sort, query) => {
    const sortedPosts = useSortedPost(posts, sort)

    const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
  }, [query, sortedPosts])

  return sortedAndSearchedPosts;
}