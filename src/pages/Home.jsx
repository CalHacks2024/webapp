import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Button from "../components/Button";

const Home = () => {
  const [doctorCode, setDoctorCode] = useState("");

  const navigate = useNavigate();

  const navigateToDashboard = () => {
    navigate(`/dashboard/${doctorCode}`);
  }

  return (
    <div className="home-container">
      <section className="left">
        <div>
          Logo here
          <div className="description text-olive">the description goes here.</div>
        </div>
        <input className="doctor-input background-lightgrey text-darkgrey" type="text" placeholder="doctor code here" value={doctorCode} onChange={(e) => setDoctorCode(e.target.value)} />
        <Button label="continue &rarr;" onClick={() => navigateToDashboard()} />
      </section>
      <div>
        mascot?
      </div>
    </div>
  )
};

export default Home;