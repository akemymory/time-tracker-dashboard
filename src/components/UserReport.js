import React, { useState } from "react";
import "./UserReport.css";

const UserReport = ({ userName }) => {
  const [selectedFilter, setSelectedFilter] = useState("daily");

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    // Aqui você pode realizar as operações necessárias para calcular os dados com base no filtro selecionado
  };

  return (
    <div className="user-report">
      <div className="user-info">
        <img
          className="profile"
          src={require("../images/image-jeremy.png")}
          alt="User"
        />
        <h3>Report for {userName}</h3>
        <h1>{userName}</h1>
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
