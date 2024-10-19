import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Report from "../pages/Report";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard/:doctorId" element={<Dashboard />} />
        <Route path="/report/:reportId" element={<Report />} />
      </Routes>
    </BrowserRouter>
  )
};

export default Router;