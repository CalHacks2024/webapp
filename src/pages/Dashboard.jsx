import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { pdf } from "@react-pdf/renderer";
import { FadeLoader } from "react-spinners";
import Header from "../components/Header";
import Button from "../components/Button";
import IconButton from "../components/IconButton";
import Modal from "../components/Modal";
import Delete from "../assets/delete.svg";
import Download from "../assets/download.svg";
import { saveAs } from "file-saver";
import { getReports, deleteReport } from "../utils/api";
import PDFReport from "../utils/report";
import "./Dashboard.css";

const Dashboard = ({ setCurrentReport }) => {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedReport, setSelectedReport] = useState({});

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
    saveAs(blob, `${report.data.name} - ${report.date}.pdf`);
  };

  useEffect(() => {
    getReportData();
  }, []);

  return (
    <div>
      <Modal
        isOpen={isModalOpen}
        text="Are you sure you would like to delete this report?"
        primaryButtonLabel="Yes"
        onPrimaryClick={async () => {
          await deleteReport(selectedReport.appointment_id);
          setSelectedReport({});
          setIsModalOpen(false);
          await getReportData();
        }}
        secondaryButtonLabel="No"
        onSecondaryClick={() => {
          setSelectedReport({});
          setIsModalOpen(false);
        }}
      />
      <Header name="Dashboard"/>
      <div className="dashboard-container">
        <div className="dashboard-description text-darkblue">Manage your reports here.</div> 
        <div className="loader">
          <FadeLoader loading={loading} />
        </div>
        {!loading && 
          <ul className="reports">
            {reportData.map((report) => (
              <li className="report background-lightblue text-darkblue" key={report.appointment_id}>
                <div className="report-name">
                  {report.data.name || "New Report"}
                </div> 
                <div className="report-date">
                  {report.date}
                </div>
                <div className="report-options">
                  <Button label="View Report" onClick={() => { viewReport(report) }}/>
                  <IconButton icon={Delete} onClick={() => { 
                    setSelectedReport(report);
                    setIsModalOpen(true);
                  }}/>
                  <IconButton icon={Download} onClick={() => { saveReport(report) }}/>  
                </div>
              </li>
            ))}
          </ul>
        }
      </div>
    </div>
  )
};

export default Dashboard;