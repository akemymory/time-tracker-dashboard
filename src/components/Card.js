// Card.js
import React from "react";
import "./Card.css";
import IconMore from "../images/icon-more.png";

const Card = ({
  id,
  title,
  currentHours,
  lastWeekHours,
  onDelete,
  color,
  icon,
}) => {
  const handleDelete = () => {
    onDelete(id); // Chama a função de exclusão passada como prop
  };

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
        <h1>{currentHours}hrs</h1>
        <h3>Last Week - {lastWeekHours}hrs</h3>
        <img
          src={IconMore}
          alt="more"
          className="more-icon"
          onClick={handleDelete}
        />
      </div>
    </div>
  );
};

export default Card;
