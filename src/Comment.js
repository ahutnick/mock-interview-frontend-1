import React from "react";

function Comment({comment}) {
  return <li key={comment.id}>{comment.body}</li>;
}


export default Comment;
