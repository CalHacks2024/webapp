import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Report from "../pages/Report";

const Router = () => {
  const [currentReport, setCurrentReport] = useState({});

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard/:doctorId" element={<Dashboard setCurrentReport={setCurrentReport} />} />
        <Route path="/report" element={<Report report={currentReport} />} />
      </Routes>
    </BrowserRouter>
  )
};

export default Router;