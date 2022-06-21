import React from "react";
import "./Sidebar.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import NumbersIcon from "@mui/icons-material/Numbers";
import SidebarOption from "../SidebarOption/SidebarOption";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import PendingOutlinedIcon from "@mui/icons-material/PendingOutlined";

function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon />
      <SidebarOption icon={HomeIcon} text="Home" />
      <SidebarOption icon={NumbersIcon} text="Explore" />
      <SidebarOption icon={NotificationsNoneIcon} text="Notifications" />
      <SidebarOption icon={MailOutlineIcon} text="Messages" />
      <SidebarOption icon={BookmarkBorderIcon} text="Bookmarks" />
      <SidebarOption icon={ListAltIcon} text="Lists" />
      <SidebarOption icon={PermIdentityIcon} text="Profile" />
      <SidebarOption icon={PendingOutlinedIcon} text="More" />
      {/* Tweet button */}
    </div>
  );
}

export default Sidebar;
