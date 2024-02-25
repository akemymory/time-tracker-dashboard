import React, { useState } from "react";
import "./UserReport.css";

const UserReport = ({ userName }) => {
  const [selectedFilter, setSelectedFilter] = useState("daily");

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  return (
    <div className="user-report">
      <div className="user-info">
        <img
          className="profile"
          src={require("../images/image-jeremy.png")}
          alt="User"
        />
        <h3 className="report">Report for</h3>
        <h1 className="user">Jeremy Robson</h1>
      </div>
      <div className="filters">
        <ul>
          <li>
            <a href="#" onClick={() => handleFilterChange("daily")}>
              Daily
            </a>
          </li>
          <li>
            <a href="#" onClick={() => handleFilterChange("weekly")}>
              Weekly
            </a>
          </li>
          <li>
            <a href="#" onClick={() => handleFilterChange("monthly")}>
              Monthly
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserReport;
