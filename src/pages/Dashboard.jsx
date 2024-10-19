import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import IconButton from "../components/IconButton";
import Delete from "../assets/delete.svg";
import Download from "../assets/download.svg";
import "./Dashboard.css";
import { getReports } from "../utils/api";

const dummyData = [
  {
    name: "Alan Wang",
    date: "Oct 15"
  },
  {
    name: "Adi Poluri",
    date: "Oct 16",
  },
  {
    name: "Byron Wang",
    date: "Oct 17",
  },
]

const Dashboard = () => {
  const [reportData, setReportData] = useState([]);

  const { doctorId } = useParams();

  const getReportData = async () => {
    const data = await getReports(doctorId);
    setReportData(data?.reports);
  };

  useEffect(() => {
    getReportData();
  }, []);

  return (
    <div>
      <Header name="Dashboard"/>
      <div className="dashboard-container">
        <div className="dashboard-description text-olive aoboshi">Manage your reports here.</div> 
        <ul className="reports">
          {dummyData.map((report) => (
            <li className="report background-grey text-olive aoboshi">
              <div className="report-name">
                {report.name}
              </div> 
              <div className="report-date">
                {report.date}
              </div>
              <div className="report-options">
                <Button label="View Report" onClick={() => {}}/>
                <IconButton icon={Delete} onClick={() => {}}/>
                <IconButton icon={Download} onClick={() => {}}/>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
};

export default Dashboard;