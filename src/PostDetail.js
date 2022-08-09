import React from "react";
import Post from "./Post";

function PostDetail({posts}) {
  const list = posts.map(post => <Post key={post.id} post={post} />);
  
  return (<div>{list}</div>)
}

export default PostDetail;
