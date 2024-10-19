import React from "react";
import "./IconButton.css";

const IconButton = ({ icon, onClick }) => {
  return (
    <div className="icon-button" onClick={onClick}>
      <img src={icon} alt={icon} width="100%" height="100%"/>
    </div>
  )
};

export default IconButton;
