import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { pdf } from "@react-pdf/renderer";
import { FadeLoader } from "react-spinners";
import Header from "../components/Header";
import Button from "../components/Button";
import IconButton from "../components/IconButton";
import Delete from "../assets/delete.svg";
import Download from "../assets/download.svg";
import { saveAs } from "file-saver";
import "./Dashboard.css";
import { getReports, deleteReport } from "../utils/api";
import PDFReport from "../utils/report";

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

const Dashboard = ({ setCurrentReport }) => {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(true);

  const { doctorId } = useParams();
  const navigate = useNavigate();

  const getReportData = async () => {
    setLoading(true);
    const data = await getReports(doctorId);
    setReportData(data?.reports);
    setLoading(false);
  };

  const viewReport = (report) => {
    setCurrentReport(report);
    navigate("/report");
  }

  const saveReport = async (report) => {
    const blob = await pdf(<PDFReport report={report} />).toBlob();
    saveAs(blob, 'generated.pdf');
  };

  useEffect(() => {
    getReportData();
  }, []);

  return (
    <div>
      <Header name="Dashboard"/>
      <div className="dashboard-container">
        <div className="dashboard-description text-darkblue">Manage your reports here.</div> 
        <div className="loader">
          <FadeLoader loading={loading} color="#686A54" />
        </div>
        <ul className="reports">
          {reportData.map((report) => (
            <li className="report background-lightblue text-darkblue">
              <div className="report-name">
                {report.data.name}
              </div> 
              <div className="report-date">
                {report.date}
              </div>
              <div className="report-options">
                <Button label="View Report" onClick={() => { viewReport(report) }}/>
                <IconButton icon={Delete} onClick={async () => { 
                  await deleteReport(report.appointment_id);
                  await getReportData();
                }}/>
                <IconButton icon={Download} onClick={() => { saveReport(report) }}/>  
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
};

export default Dashboard;