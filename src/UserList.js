import React from "react";
import UserCard from "./UserCard";
import "./UserList.css";

function UserList(props) {

  const isNotEmpty = props.userListProp;
  
  if(isNotEmpty){
    return (
      <div className="UserListOuterDiv">
        {props.userListProp.map((item) => {
            return <UserCard key={item.id} user={item} />;
          })}
      </div>
    
    );
  }
  return <div></div>
}

export default UserList;
