import React, { useState } from "react";
import TextInput from "../components/TextInput";
import Textbox from "../components/Textbox";

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
      <TextInput value={name} setValue={setName} placeholder="Enter a name"/>
      <TextInput value={age} setValue={setAge} placeholder="Enter an age"/>
      <Textbox value={complaint} setValue={setComplaint} placeholder="Enter chief complaint..."/>
      <Textbox value={illness} setValue={setIllness} placeholder="Enter present illness history..."/>
      <Textbox value={family} setValue={setFamily} placeholder="Enter family history..."/>
      <Textbox value={history} setValue={setHistory} placeholder="Enter social history..."/>
      <Textbox value={symptoms} setValue={setSymptoms} placeholder="Enter review of symptoms..."/>
    </div>
  )
};

export default Report;