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
import Button from '@mui/material/Button';


function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon className="twitter-icon"/>
      <SidebarOption active Icon={HomeIcon} text="Home" />
      <SidebarOption Icon={NumbersIcon} text="Explore" />
      <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
      <SidebarOption Icon={MailOutlineIcon} text="Messages" />
      <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
      <SidebarOption Icon={ListAltIcon} text="Lists" />
      <SidebarOption Icon={PermIdentityIcon} text="Profile" />
      <SidebarOption Icon={PendingOutlinedIcon} text="More" />
      <Button variant="outlined" className="sidebar-tweet" fullWidth>Tweet</Button>
    </div>
  );
}

export default Sidebar;
