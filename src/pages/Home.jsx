import React, { useState } from "react";
import TextInput from "../components/TextInput";

const Home = () => {
  const [doctorCode, setDoctorCode] = useState("");

  return (
    <div>
      <TextInput value={doctorCode} setValue={setDoctorCode} placeholder="doctor code here"/>
    </div>
  )
};

export default Home;