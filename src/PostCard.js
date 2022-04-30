import React from "react";
import "./PostCard.css";

function PostCard(props) {
  const publishMonth = new Date(props.post.publishDate).toLocaleString(
    "en-US",
    { month: "short" }
  );
  const publishDay = new Date(props.post.publishDate).toLocaleString("en-US", {
    day: "2-digit",
  });
  const publishYear = new Date(props.post.publishDate).getFullYear();
  let clockHours = new Date(props.post.publishDate).getHours();
  let clockMinutes = new Date(props.post.publishDate).getMinutes();
  let clockSeconds = new Date(props.post.publishDate).getSeconds();

  if(clockHours < 10){
    clockHours = "0"+clockHours;
  }

  if(clockMinutes < 10){
    clockMinutes = "0"+clockMinutes;
  }

  if(clockSeconds < 10){
    clockSeconds = "0"+clockSeconds;
  }

  return (
    <div className="PostCardOuterDiv">
      <div className="PostCardFirstDiv">
        <img
          src={props.post.owner.picture}
          alt=""
          className="PostCardRoundedImage"
        />
        <div>
          {props.post.owner.title +
            ". " +
            props.post.owner.firstName +
            " " +
            props.post.owner.lastName}
          <div>
            {publishMonth +
              " " +
              publishDay +
              " " +
              publishYear +
              " " +
              clockHours +
              ":" +
              clockMinutes +
              ":" +
              clockSeconds}
          </div>
        </div>
      </div>
      <div className="PostCardImageDiv">
        <img src={props.post.image} alt="" className="PostCardShrinkedImage" />
      </div>
      <div>
        <div className="PostCardDateText">
          <div>Post ID: {props.post.id}</div>
            <div>{publishMonth +
                " " +
                publishDay +
                " " +
                publishYear +
                " " +
                clockHours +
                ":" +
                clockMinutes +
                ":" +
                clockSeconds}</div>
        <div>{props.post.text}</div>
        </div>
        <div>
          {props.post.tags.map((item) => {
            return <div className="PostCardTags" key={item}>{item}</div>;
          })}
        </div>
        <div className="PostCardLike">&#128077; {props.post.likes}</div>
      </div>
    </div>
  );
}

export default PostCard;
