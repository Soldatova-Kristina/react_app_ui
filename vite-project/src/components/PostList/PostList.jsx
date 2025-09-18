import React, { useRef, useEffect } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PostItem from '../PostItem/PostItem';

const PostList = ({ posts, title, deletePost }) => {
  const nodeRefs = useRef({});

  useEffect(() => {
  const aliveIds = new Set(posts.map(p => String(p.id)));
  for (const key of Object.keys(nodeRefs.current)) {
    if (!aliveIds.has(key)) delete nodeRefs.current[key];
  }
}, [posts]);

   if (!posts.length) {
     return (<h2 style={{textAlign: "center"}}>
     Список задач пуст
     </h2>
     
  )} 
  
  return (
    <div>
      <h1 style={{ color: 'black', textAlign: 'center' }}>{title}</h1>
      <TransitionGroup>
        {posts.map((item, index) => {
          if (!nodeRefs.current[item.id]) {
            nodeRefs.current[item.id] = React.createRef(); 
          }

          return (
            <CSSTransition
              key={item.id}
              timeout={500}
              classNames="post"
              nodeRef={nodeRefs.current[item.id]}
            >
              <div ref={nodeRefs.current[item.id]}>
                <PostItem
                  deletePost={deletePost}
                  number={index + 1}
                  post={item}
                />
              </div>
            </CSSTransition>
          )
        })}
      </TransitionGroup>
    </div>
  )
}

export default PostList;