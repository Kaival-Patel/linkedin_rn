import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img src="https://images.unsplash.com/photo-1650599811699-a531af8496dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" />
        <Avatar className="sidebar_avatar" />
        <h2>Kaival Patel</h2>
        <h4>kaivalpatel53@gmail.com</h4>
      </div>
      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed your profile</p>
          <p className="sidebar_statnumber">2,542</p>
        </div>
        <div className="sidebar_stat">
          <p>Views of your post</p>
          <p className="sidebar_statnumber">13</p>
        </div>
      </div>
      <div className="sidebar_bottom"></div>
    </div>
  );
}

export default Sidebar;
