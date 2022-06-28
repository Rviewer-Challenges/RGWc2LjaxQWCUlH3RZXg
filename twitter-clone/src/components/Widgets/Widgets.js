import React from "react";
import "./Widgets.css";
import SearchIcon from "@mui/icons-material/Search";
function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets-input">
        <SearchIcon className="search-icon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widget-container">
        <h2>Whats happening</h2>
      </div>

      <div className="widget-container">
        <h2>Who to follow</h2>
      </div>
    </div>
  );
}

export default Widgets;
