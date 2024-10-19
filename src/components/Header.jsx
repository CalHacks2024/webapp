import React from "react";
import Glasses from "../assets/glasses.svg";
import "./Header.css";

const Header = ({ name }) => {
  return (
    <div className="header background-darkblue text-white aoboshi">
      <img src={Glasses} alt="Glasses" height="50%"/>
      <h2 className="name">{name}</h2>
    </div>
  )
}

export default Header;
