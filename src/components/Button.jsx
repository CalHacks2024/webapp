import React from "react";
import "./Button.css";

const Button = ({ label, onClick }) => {
  return (
    <button
      className="button background-olive text-white"
      onClick={onClick}
    >
      {label}
    </button>
  )
};

export default Button;
