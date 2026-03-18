import React from "react";
import "./DescriptionBox.css";
const DescriptionBox = () => {
  return (
    <div className="descriptionBox">
      <div className="navigator">
        <div className="navbox">Description</div>
        <div className="navbox fade">Reviews (122)</div>
      </div>

      <div className="description">
        <p>This is a description.</p>
      </div>
    </div>
  );
};

export default DescriptionBox;
