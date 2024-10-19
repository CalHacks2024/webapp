import React from "react";
import "./Textbox.css";

const Textbox = ({ placeholder, value, setValue }) => {
  return (
    <textarea className="textbox" value={value} onChange={(e) => setValue(e.target.value)} placeholder={placeholder} />
  )
};

export default Textbox;