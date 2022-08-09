import React, {useState, useEffect} from "react";
import Comment from "./Comment";

function Post({post}) {
  const [comments, setComments] = useState([]);
  let list;
  
  const loadComments = async (event) => {
    event.preventDefault();
    const loaded = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    const jsonLoad = await loaded.json();
    setComments(jsonLoad);
  }
  
  useEffect(() => {
    if (comments.length > 0) {
      list = comments.map(comment => {
        
        return (
          <Comment comment={comment.body} />
        )
      });
      console.log(list)
    }
    
    
  }, [comments])
  
 
  

  return (
    <div>
        <h1>{post.title}</h1>
        <p onClick={loadComments} id={post.id}>{post.body}</p>
        {comments.length ? <ul>{list}</ul> : null}
   </div>

  )
}

export default Post;
