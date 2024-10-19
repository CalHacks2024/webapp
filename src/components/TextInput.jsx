import React from "react";
import "./TextInput.css";

const TextInput = ({ placeholder, value, setValue }) => {
  return (
    <input className="textinput" type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder={placeholder} />
  )
};

export default TextInput;