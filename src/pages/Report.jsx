import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import TextInput from "../components/TextInput";
import Textbox from "../components/Textbox";
import Button from "../components/Button";
import { updateReport } from "../utils/api";
import "./Report.css";

const Report = ({ report }) => {
  const [name, setName] = useState(report?.data.name);
  const [age, setAge] = useState(report?.data.age);
  const [complaint, setComplaint] = useState(report?.data.chief_complaint);
  const [illness, setIllness] = useState(report?.data.history_of_present_illness);
  const [family, setFamily] = useState(report?.data.family_history);
  const [social, setSocial] = useState(report?.data.social_history);
  const [symptoms, setSymptoms] = useState(report?.data.review_of_symptoms);

  const navigate = useNavigate();

  const saveReport = async () => {
    await updateReport({
      ...report,
      data: {
        name,
        age,
        chief_complaint: complaint,
        history_of_present_illness: illness,
        family_history: family,
        social_history: social,
        review_of_symptoms: symptoms
      }
    });
    navigate(-1);
  };

  return (
    <div>
      <Header name={`${report.data.name} - ${report.date}`}/>
      <div className="report-container">
        <div className="report-form background-lightblue">
          <div className="report-textinputs">
            <TextInput value={name} setValue={setName} label="Name"/>
            <TextInput value={age} setValue={setAge} label="Age"/>
          </div>
          <div className="report-textboxes">
            <Textbox value={complaint} setValue={setComplaint} label="Chief complaint"/>
            <Textbox value={illness} setValue={setIllness} label="History of present illness"/>
            <Textbox value={family} setValue={setFamily} label="Family history"/>
            <Textbox value={social} setValue={setSocial} label="Social history"/>
            <Textbox value={symptoms} setValue={setSymptoms} label="Review of symptoms"/>
          </div>
          <Button 
            label="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Save&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
            onClick={() => { saveReport() }}
          />
        </div>
      </div>
    </div>
  )
};

export default Report;