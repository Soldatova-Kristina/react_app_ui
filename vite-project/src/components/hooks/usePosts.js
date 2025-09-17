import {useMemo} from 'react'

export const useSortefPost = (posts, sort) => {
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