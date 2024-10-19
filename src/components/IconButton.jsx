import React from "react";
import "./IconButton.css";

const IconButton = ({ icon, onClick }) => {
  return (
    <div className="icon-button" onClick={onClick}>
      <img src={icon} alt={icon}/>
    </div>
  )
};

export default IconButton;
