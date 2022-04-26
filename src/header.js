import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SuperVisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationIcon from "@mui/icons-material/Notifications";
import LinkedIn from "./linkedin.png";
import "./header.css";
import HeaderOptions from "./header_option";
function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <img src={LinkedIn} />
        <div className="header-search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header-right">
        <HeaderOptions title={"Home"} Icon={HomeIcon} />
        <HeaderOptions title={"My Network"} Icon={SuperVisorAccountIcon} />
        <HeaderOptions title={"Jobs"} Icon={BusinessCenterIcon} />
        <HeaderOptions title={"Messaging"} Icon={ChatIcon} />
        <HeaderOptions title={"Notifications"} Icon={NotificationIcon} />
        <HeaderOptions title={"Me"} Avatar/>
      </div>
    </div>
  );
}

export default Header;
