import React from "react";
import "./TagList.css";

function TagList(props){

    const isNotEmpty = props.tagListProp;
  
    if(isNotEmpty){
        return (
            <div className="TagListOuterDiv">
                [
              {props.tagListProp.map((item) => {
                    let resultItem="\""+item+"\"";
                    if(!(item===props.tagListProp.at(-1))){
                        resultItem+=",";
                    }
                    return resultItem;
                })}]
            </div>
        );
    }

    return <div></div>;
    
}

export default TagList;