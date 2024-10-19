import React from "react";
import "./Textbox.css";

const Textbox = ({ placeholder, value, setValue, label }) => {
  return (
    <div>
      <div className="textbox-label text-olive aoboshi">{label}</div>
      <textarea className="textbox background-white" value={value} onChange={(e) => setValue(e.target.value)} placeholder={placeholder} />
    </div>
  )
};

export default Textbox;