import React, {useState} from "react";
import Comment from "./Comment";

function Post({post}) {
  const [comments, setComments] = useState([]);
  
  const loadComments = async (event) => {
    event.preventDefault();
    const loaded = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`);
    const jsonLoad = await loaded.json();
    const commentHtml = jsonLoad.map(comment => <Comment key={comment.id} comment={comment} />);
    setComments(commentHtml);
  }
  
 
  

  return (
    <div key={post.id}>
        <h1>{post.title}</h1>
        <p onClick={loadComments} id={post.id}>{post.body}</p>
        {comments.length ? <ul>{comments}</ul> : null}
   </div>

  )
}

export default Post;
