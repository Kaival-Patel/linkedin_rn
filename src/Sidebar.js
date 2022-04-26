import { Avatar, Icon } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./Sidebar.css";
import avatar from './default_avatar.jpg';
function Sidebar() {
  return (
    <div className="sidebar_parent">
      <div className="sidebar">
        {/* SIDEBAR TOP */}
        <div className="sidebar_top">
          <img src="https://images.unsplash.com/photo-1650599811699-a531af8496dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" />
          <Avatar src={avatar} sx={{ width: 56, height: 56 }} className="sidebar_avatar" />
          <h4 className="sidebar_top_title">Kaival Patel</h4>
          <p className="sidebar_top_description">
            Flutter Developer | Former Scientist Intern (ISRO)
          </p>
        </div>
        {/* SIDEBAR STATS */}
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
        {/* SIDEBAR BOTTOM */}
        <div className="sidebar_bottom">
          <p>Access exclusive tools & insights</p>
          <div className="sidebar_bottom_premium">
            <Box
              sx={{
                width: 15,
                height: 15,
                backgroundColor: "#f7e174",
              }}
              marginY={1}
            />
            <p>Try Premium for free</p>
          </div>
        </div>
      </div>

      <div className="recent_bar">
        {/* RECENTBAR TOP */}
        <div className="recent_top">
          <p>Recent</p>
        </div>
        <div className="recent_middle">
          <p>#</p>
          <h4>Ahmedabad Jobs Group</h4>
        </div>
        <div className="recent_middle">
          <p>#</p>
          <h4>jobs</h4>
        </div>
        <div className="recent_middle">
          <p>#</p>
          <h4>mobiletechnology</h4>
        </div>
        <div className="recent_middle">
          <p>#</p>
          <h4>flutter</h4>
        </div>

        {/* RECENTBAR MIDDLE */}
        <div className="recent_top">
          <p>Groups</p>
        </div>
        <div className="recent_middle">
          <p>#</p>
          <h4>UI/UX</h4>
        </div>
        <div className="recent_middle">
          <p>#</p>
          <h4>React Jobs</h4>
        </div>
        <div className="recent_middle">
          <p>#</p>
          <h4>mobiletechnology</h4>
        </div>
        <div className="recent_middle">
          <p>#</p>
          <h4>flutter</h4>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
