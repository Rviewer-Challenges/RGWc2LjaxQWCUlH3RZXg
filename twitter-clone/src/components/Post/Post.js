import React from "react";
import PropTypes from "prop-types";
import "./Post.css";
import { Avatar } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import RepeatOutlinedIcon from "@mui/icons-material/RepeatOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PublishOutlinedIcon from "@mui/icons-material/PublishOutlined";

function Post({ post }) {
  return (
    <div className="post">
      <div className="avatar">
        <Avatar src="https://imgix.revue.co/profiles/images/000/308/990/original/4QrbudVb.jpg?ixlib=rails-3.1.0&w=168&h=168" />
      </div>
      <div className="content">
        <div className="header">
          <div className="header-text">
            <h3>
              {post.user.name}
              <span>
                {post.user.verified && (
                  <VerifiedIcon className="verified-badge"></VerifiedIcon>
                )}
              </span>
              <span>{post.user.account}</span>
              <span className="date-separator"></span>
              <span>{post.date.toLocaleDateString()}</span>
            </h3>
          </div>
        </div>
        <div className="body">
          <div className="description">{post.content.text}</div>
          {post.content.img && (
            <img src={post.content.img} alt="user post"></img>
          )}
        </div>
        <div className="footer">
          <ChatBubbleOutlineOutlinedIcon fontSize="small" />
          <RepeatOutlinedIcon fontSize="small" />
          <FavoriteBorderOutlinedIcon fontSize="small" />
          <PublishOutlinedIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}

Post.propTypes = {
  userPost: PropTypes.object,
};

export default Post;
