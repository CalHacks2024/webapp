import React from "react";
import "./Button.css";

const Button = ({ label, onClick, type }) => {
  return (
    <button
      className={`button ${ type === 'secondary' ? "background-white text-darkblue" : "background-darkblue text-white"}`}
      onClick={onClick}
    >
      {label}
    </button>
  )
};

export default Button;
