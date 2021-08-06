import React from "react";
import "./Sidebar.css";
import {
  Menu,
  Home,
  Explore,
  Subscriptions,
  VideoLibrary,
} from "@material-ui/icons";
import Skeleton from "../skeleton/Skeleton";

const Sidebar = (props) => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <Menu />
        <div className="sidebarItem active">
          <Home />
          <span>Home</span>
        </div>
        {props.isLoading ? (
          <Skeleton type="menu" />
        ) : (
          <div>
            <div className="sidebarItem">
              <Explore />
              <span>Explore</span>
            </div>
            <div className="sidebarItem">
              <Subscriptions />
              <span>Subscriptions</span>
            </div>
            <div className="sidebarItem">
              <VideoLibrary />
              <span>Library</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
