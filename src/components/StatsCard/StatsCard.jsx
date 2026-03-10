
import React from 'react';
import './StatsCard.css';

const StatsCard = ({ title, value, variant }) => {
  return (
    <div className={`stats-card ${variant}`}>
      <div className="stats-info">
        <h3 className="stats-title">{title}</h3>
        <p className="stats-value">{value}</p>
      </div>
    </div>
  );
};

export default StatsCard;
