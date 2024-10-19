import React from "react";
import { useNavigate } from "react-router-dom";
import Glasses from "../assets/glasses.svg";
import "./Header.css";

const Header = ({ name }) => {
  const navigate = useNavigate();

  return (
    <div className="header background-darkblue text-white aoboshi">
      <img className="glasses" src={Glasses} alt="Glasses" height="50%" onClick={() => navigate("/")}/>
      <h2 className="name">{name}</h2>
    </div>
  )
}

export default Header;
