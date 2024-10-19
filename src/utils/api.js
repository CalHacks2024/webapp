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
}

export {
  getReports,
};
