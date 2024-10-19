import React, { useState } from "react";
import Header from "../components/Header";
import TextInput from "../components/TextInput";
import Textbox from "../components/Textbox";
import "./Report.css";
import Button from "../components/Button";

const Report = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [complaint, setComplaint] = useState("");
  const [illness, setIllness] = useState("");
  const [family, setFamily] = useState("");
  const [history, setHistory] = useState("");
  const [symptoms, setSymptoms] = useState("");

  return (
    <div>
      <Header name="Alvin Kam - Oct 18, 2pm"/>
      <div className="report-container">
        <div className="report-form background-grey">
          <div className="report-textinputs">
            <TextInput value={name} setValue={setName} label="Name"/>
            <TextInput value={age} setValue={setAge} label="Age"/>
          </div>
          <div className="report-textboxes">
            <Textbox value={complaint} setValue={setComplaint} label="Chief complaint"/>
            <Textbox value={illness} setValue={setIllness} label="History of present illness"/>
            <Textbox value={family} setValue={setFamily} label="Family history"/>
            <Textbox value={history} setValue={setHistory} label="Social history"/>
            <Textbox value={symptoms} setValue={setSymptoms} label="Review of symptoms"/>
          </div>
          <Button label="&nbsp;&nbsp;&nbsp;&nbsp;Save&nbsp;&nbsp;&nbsp;&nbsp;" onClick={() => {}}/>
        </div>
      </div>
    </div>
  )
};

export default Report;