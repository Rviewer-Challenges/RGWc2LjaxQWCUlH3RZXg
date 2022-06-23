import React from "react";
import Feed from "../Feed/Feed";
import Sidebar from "../Sidebar/Sidebar";
import "./Home.css";
import Widgets from "../Widgets/Widgets";
const Home = (props) => {
  return (
    <div className="container">
      <Sidebar />
      <Feed />
      <Widgets />
      {/* Widgets */}
    </div>
  );
};

export default Home;
