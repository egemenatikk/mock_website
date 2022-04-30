import React from "react";
import "./CommentCard.css";

function CommentCard(props){

    const publishMonth = new Date(props.comment.publishDate).toLocaleString(
        "en-US",
        { month: "short" }
      );
      const publishDay = new Date(props.comment.publishDate).toLocaleString("en-US", {
        day: "2-digit",
      });
      const publishYear = new Date(props.comment.publishDate).getFullYear();
      let clockHours = new Date(props.comment.publishDate).getHours();
      let clockMinutes = new Date(props.comment.publishDate).getMinutes();
      let clockSeconds = new Date(props.comment.publishDate).getSeconds();

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
        <div className="CommentCardOuterDiv">
            <div className="CommentCardFirstDiv">
                <img src={props.comment.owner.picture} alt="" className="CommentCardRoundedImage"/>
                <div>
                    {props.comment.owner.title+" "+props.comment.owner.firstName+" "+props.comment.owner.lastName}
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
            <div className="CommentCardTextDiv">{props.comment.message}</div>
        </div>
    )
}

export default CommentCard;