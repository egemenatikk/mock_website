import React from "react";
import "./UserCard.css";

function UserCard(props){

    return (
        <div className="UserCardOuterDiv">
            <div className="userCardPicture">
                <img src={props.user.picture} alt={""}/>
            </div>
            <div className="userCardIDTitle">
                <div>
                    User ID: {props.user.id}
                </div>
                <div className="userCardTitle">
                    {props.user.title+". "+props.user.firstName+" "+props.user.lastName}
                </div>
            </div>
        </div>
    )
}

export default UserCard;