import React from "react";
import "./Card.css";
import IconMore from "../images/icon-more.png";

const Card = ({
  title,
  currentHours,
  dailyTotalText,
  dailyTotal,
  yesterdayTotal,
  lastWeekTotalText,
  lastWeekTotal,
  monthlyTotalText,
  monthlyTotal,
  color,
  icon,
}) => {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className="card" style={{ backgroundColor: color }}>
      <div className="icon">
        <img src={icon} alt={title} />
      </div>
      <div className="stats">
        <h2>{capitalizeFirstLetter(title)}</h2>
        <div className="stats-number">
          <h1>{currentHours}hrs</h1>
          <h3>
            {yesterdayTotal ? `${dailyTotalText} - ${yesterdayTotal}hrs` : null}
          </h3>
          <h3>
            {lastWeekTotal
              ? `${lastWeekTotalText} - ${lastWeekTotal}hrs`
              : null}
          </h3>
          <h3>
            {monthlyTotal ? `${monthlyTotalText} - ${monthlyTotal}hrs` : null}
          </h3>
        </div>
        <img src={IconMore} alt="more" className="more-icon" />
      </div>
    </div>
  );
};

export default Card;
