import React, { useState } from "react";
import Card from "./components/Card";
import UserReport from "./components/UserReport";
import exerciseIcon from "./images/icon-exercise.svg";
import playIcon from "./images/icon-play.svg";
import selfCareIcon from "./images/icon-self-care.svg";
import socialIcon from "./images/icon-social.svg";
import studyIcon from "./images/icon-study.svg";
import workIcon from "./images/icon-work.svg";
import "./App.css";

const categoryInfo = {
  exercise: {
    color: "hsl(145, 58%, 55%)",
    icon: exerciseIcon,
    defaultHours: {
      daily: 2,
      weekly: 10,
      monthly: 40,
    },
    yesterdayHours: 8,
    lastWeekHours: 35,
    lastMonthHours: 90,
  },
  play: {
    color: "hsl(195, 74%, 62%)",
    icon: playIcon,
    defaultHours: {
      daily: 3,
      weekly: 21,
      monthly: 44,
    },
    yesterdayHours: 6,
    lastWeekHours: 30,
    lastMonthHours: 80,
  },
  "self-care": {
    color: "hsl(43, 84%, 65%)",
    icon: selfCareIcon,
    defaultHours: {
      daily: 1,
      weekly: 7,
      monthly: 28,
    },
    yesterdayHours: 4,
    lastWeekHours: 25,
    lastMonthHours: 70,
  },
  social: {
    color: "hsl(264, 64%, 52%)",
    icon: socialIcon,
    defaultHours: {
      daily: 10,
      weekly: 35,
      monthly: 90,
    },
    yesterdayHours: 2,
    lastWeekHours: 20,
    lastMonthHours: 60,
  },
  study: {
    color: "hsl(348, 100%, 68%)",
    icon: studyIcon,
    defaultHours: {
      daily: 5,
      weekly: 35,
      monthly: 140,
    },
    yesterdayHours: 6,
    lastWeekHours: 35,
    lastMonthHours: 100,
  },
  work: {
    color: "hsl(15, 100%, 70%)",
    icon: workIcon,
    defaultHours: {
      daily: 8,
      weekly: 40,
      monthly: 12,
    },
    yesterdayHours: 8,
    lastWeekHours: 40,
    lastMonthHours: 120,
  },
};

const userName = "Jeremy Robson";

function App() {
  const [activeFilter, setActiveFilter] = useState("daily");
  const [totalHours, setTotalHours] = useState({
    daily: { today: 0, yesterday: 0 },
    weekly: { currentWeek: 0, lastWeek: 0 },
    monthly: { currentMonth: 0, lastMonth: 0 },
  });

  const updateTotalHours = (filter) => {
    setActiveFilter(filter);
    if (filter === "daily") {
      setTotalHours({
        daily: { today: 10, yesterday: 8 },
        weekly: { ...totalHours.weekly },
        monthly: { ...totalHours.monthly },
      });
    } else if (filter === "weekly") {
      const weeklyTotals = {};
      Object.keys(categoryInfo).forEach((key) => {
        weeklyTotals[key] = categoryInfo[key].lastWeekHours;
      });
      setTotalHours({
        daily: { ...totalHours.daily },
        weekly: { ...weeklyTotals },
        monthly: { ...totalHours.monthly },
      });
    } else if (filter === "monthly") {
      const monthlyTotals = {};
      Object.keys(categoryInfo).forEach((key) => {
        monthlyTotals[key] = categoryInfo[key].lastMonthHours;
      });
      setTotalHours({
        daily: { ...totalHours.daily },
        weekly: { ...totalHours.weekly },
        monthly: { ...monthlyTotals },
      });
    }
  };

  return (
    <div className="App">
      <div className="dashboard">
        <div className="user-report">
          <UserReport
            name={userName}
            activeFilter={activeFilter}
            onFilterChange={updateTotalHours}
          />
        </div>

        {/* Cards Component */}
        <div className="log">
          {Object.keys(categoryInfo).map((key) => (
            <Card
              key={key}
              title={key.charAt(0).toUpperCase() + key.slice(1)}
              currentHours={categoryInfo[key].defaultHours[activeFilter]}
              dailyTotalText="Yesterday"
              dailyTotal={
                activeFilter === "daily" ? categoryInfo[key].yesterdayHours : 0
              }
              yesterdayTotal={
                activeFilter === "daily" ? categoryInfo[key].yesterdayHours : 0
              }
              lastWeekTotalText="Last Week"
              lastWeekTotal={
                activeFilter === "weekly" ? categoryInfo[key].lastWeekHours : 0
              }
              monthlyTotalText="Last Month"
              monthlyTotal={
                activeFilter === "monthly"
                  ? categoryInfo[key].lastMonthHours
                  : 0
              }
              color={categoryInfo[key].color}
              icon={categoryInfo[key].icon}
              activeFilter={activeFilter}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
