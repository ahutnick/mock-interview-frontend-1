import React from "react";
import Post from "./Post";

function PostDetail({posts}) {
  const list = posts.map(post => <Post post={post} />);
  
  return (<div>{list}</div>)
}

export default PostDetail;