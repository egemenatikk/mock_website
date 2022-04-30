import React from "react";
import CommentCard from "./CommentCard";
import "./PostList.css";

function CommentList(props){

  const isNotEmpty = props.commentListProp;
  
  if(isNotEmpty){
    return (
      <div className="PostListOuterDiv">
        {props.commentListProp.map((item) => {
            return <CommentCard key={item.id} comment={item} />;
          })}
      </div>
    
    );
  }

  return <div></div>;

    
}

export default CommentList;