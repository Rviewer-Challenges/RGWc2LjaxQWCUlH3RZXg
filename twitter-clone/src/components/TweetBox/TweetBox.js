import React from "react";
import "./TweetBox.css";
import {Avatar, Button} from '@mui/material/';

function TweetBox() {
  return <div className="tweet-box">
    <form>
        <div className="input-box">
        <Avatar src="https://avatars.githubusercontent.com/u/36738579?v=4"/>
        <input type="text" placeholder="What's happening"></input>
        </div>
        <Button variant="outlined" className="tweet-button">Tweet</Button>
    </form>
  </div>;
}

export default TweetBox;
