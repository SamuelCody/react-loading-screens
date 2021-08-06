import React from "react";
import "./Post.css";

const Post = (props) => {
  return (
    <div className="post">
      <div className="postImgContainer">
        <img src={props.video.img} alt="" className="postImg" />
        <span className="postDuration">{props.video.duration}</span>
      </div>
      <div className="postInfoContainer">
        <img className="postAvatar" src={props.video.channel.avatar} alt="" />
        <div className="postInfo">
          <span className="postTitle">{props.video.title}</span>
          <span className="postChannel">{props.video.channel.name}</span>
          <span className="postDetail">
            {props.video.views} • {props.video.date}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Post;
