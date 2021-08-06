import React from "react";
import "./Topbar.css";
import {
  Mic,
  Search,
  VideoCall,
  Apps,
  Notifications,
} from "@material-ui/icons";
import Skeleton from "../skeleton/Skeleton";

const Topbar = (props) => {
  return (
    <div className="topbar">
      <div className="topLeft">
        <img className="logo" src="https://i.ibb.co/KDtnJVY/logo.png" alt="" />
        <span className="logoText">SamTube</span>
      </div>
      <div className="topCenter">
        <div className="topSearch">
          <input type="text" placeholder="Search" />
          <div className="topSearchIconContainer">
            <Search className="topSearchIcon" />
          </div>
          <Mic />
        </div>
      </div>
      {props.isLoading ? (
        <Skeleton type="top" />
      ) : (
        <div className="topRight">
          <VideoCall className="topIcon" />
          <Apps className="topIcon" />
          <Notifications className="topIcon" />
          <img className="topImg" src={props.user.avatar} alt="" />
        </div>
      )}
    </div>
  );
};

export default Topbar;
