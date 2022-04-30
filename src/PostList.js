import React from "react";
import PostCard from "./PostCard";
import "./PostList.css";

function PostList(props){

    const isNotEmpty = props.postListProp;
  
    if(isNotEmpty){
        return (
            <div className="PostListOuterDiv">
                {props.postListProp.map((item) => {
                    return <PostCard key={item.id} post={item} />;
                })}
            </div>
        );
    }

    return <div></div>;
    
    
}

export default PostList;