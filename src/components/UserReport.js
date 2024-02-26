import React, { useState } from "react";
import "./UserReport.css";

const UserReport = ({ userName, onFilterChange }) => {
  const [selectedFilter, setSelectedFilter] = useState("daily");

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    onFilterChange(filter); // Calls the onFilterChange function passed as a prop
  };

  return (
    <div className="user-report">
      <div className="user-info">
        <img
          className="profile"
          src={require("../images/image-jeremy.png")}
          alt="User"
        />
        <div className="name">
          <h3 className="report">Report for</h3>
          <h1 className="user">Jeremy Robson</h1>
        </div>
      </div>
      <div className="filters">
        <ul>
          <li>
            <a
              className={`filter ${selectedFilter === "daily" ? "active" : ""}`}
              href="javascript:void(0)"
              onClick={() => handleFilterChange("daily")}
            >
              Daily
            </a>
          </li>
          <li>
            <a
              className={`filter ${
                selectedFilter === "weekly" ? "active" : ""
              }`}
              href="javascript:void(0)"
              onClick={() => handleFilterChange("weekly")}
            >
              Weekly
            </a>
          </li>
          <li>
            <a
              className={`filter ${
                selectedFilter === "monthly" ? "active" : ""
              }`}
              href="javascript:void(0)"
              onClick={() => handleFilterChange("monthly")}
            >
              Monthly
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserReport;
