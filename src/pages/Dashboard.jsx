import React from "react";
import Button from "../components/Button";

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
  return (
    <div>
      <h1>Dashboard</h1>
      {dummyData.map((data) => (
        <div>
          {data.name} {data.date}
          <Button label="View Report" onClick={() => {}}/>
        </div>
      ))
      }
    </div>
  )
};

export default Dashboard;