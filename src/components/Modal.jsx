import React from "react";
import Button from "./Button";
import "./Modal.css";

const Modal = ({ isOpen, text, primaryButtonLabel, onPrimaryClick, secondaryButtonLabel, onSecondaryClick }) => {
  return (
    isOpen && 
    <div className="modal-background">
      <div className="modal-body background-lightblue text-darkblue">
        {text}
        <div className="modal-buttons">
          <Button label={secondaryButtonLabel} onClick={onSecondaryClick} type="secondary"/>
          <Button label={primaryButtonLabel} onClick={onPrimaryClick} />
        </div>
      </div>
    </div>
  )
};

export default Modal;
