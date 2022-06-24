import React from "react";
import Post from "../Post/Post";
import TweetBox from "../TweetBox/TweetBox";
import "./Feed.css";
import * as postMocks from '../Post/mocks/postMocks.js';

function Feed(props) {
  return (
    <div className="feed">
      <div className="header">
        <h2>Home</h2>
      </div>
      <TweetBox/>
      <Post post={postMocks.postProgrammersDay}/>
      <Post post={postMocks.postPilsen}/>
      {/* Post */}
      {/* Post */}
      {/* Post */}
      {/* Post */}
      {/* Post */}
      {/* Post */}
    </div>
  );
}

export default Feed;
