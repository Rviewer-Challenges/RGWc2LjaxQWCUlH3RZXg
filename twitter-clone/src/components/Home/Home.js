import React from "react";
import Feed from "../Feed/Feed";
import Sidebar from "../Sidebar/Sidebar";
import "./Home.css";
const Home = (props) => {
  return (
    <div className="container">
      <Sidebar />
      <Feed />
      {/* Feed */}

      {/* Widgets */}
    </div>
  );
};

export default Home;
