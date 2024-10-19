const getReports = async (doctorId) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/reports?doctor_id=${doctorId}`, {
      headers: {
        "ngrok-skip-browser-warning": true,
      },
    });
    return await response.json();
  } catch (error) {
    console.error(error.message);
  }
};

const deleteReport = async (appointmentId) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/deleteAppointment`, {
      method: "delete",
      headers: {
        "ngrok-skip-browser-warning": true
      },
      body: {
        appointment_id: appointmentId,
      }
    });
    return await response.json();
  } catch (error) {
    console.error(error.message);
  }
};

const updateReport = async (report) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/updateAppointment`, {
      method: "post",
      headers: {
        "ngrok-skip-browser-warning": true,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(report)
    });
    return await response.json();
  } catch (error) {
    console.error(error.message);
  }
};

export {
  getReports,
  deleteReport,
  updateReport,
};
