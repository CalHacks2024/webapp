import React from "react";
import "./TextInput.css";

const TextInput = ({ placeholder, value, setValue, label }) => {
  return (
    <div>
      <div className="textinput-label text-olive aoboshi">{label}</div>
      <input className="textinput background-white" type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder={placeholder} />
    </div>
  )
};

export default TextInput;