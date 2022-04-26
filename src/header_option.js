import React from "react";
import "./header_options.css";
import DefaultAvatar from "./default_avatar.jpg";
function HeaderOptions({ title, Icon,Avatar }) {
  return (
    <div className="header_options">
      {Icon && <Icon className="header_options_icon" />}
      {Avatar && <img src={DefaultAvatar} className="header_avatar" />}
      <h3 className="header_options_title">{title}</h3>
    </div>
  );
}

export default HeaderOptions;
