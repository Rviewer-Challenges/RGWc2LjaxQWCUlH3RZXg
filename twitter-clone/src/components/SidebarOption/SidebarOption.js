import React from "react";
import "./SidebarOption.css";

export default function SidebarOption({ text, Icon }) {
  return (
    <div className="sidebar-option">
      <h2>{text}</h2>
      <Icon />
    </div>
  );
}
