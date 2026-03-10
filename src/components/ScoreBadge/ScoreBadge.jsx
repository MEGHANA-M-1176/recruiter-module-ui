
import React from 'react';
import './ScoreBadge.css';

const ScoreBadge = ({ score }) => {
  const getScoreColor = (score) => {
    if (score >= 80) return 'score-high';
    if (score >= 50) return 'score-medium';
    return 'score-low';
  };

  return (
    <div className={`score-badge ${getScoreColor(score)}`}>
      <span className="score-value">{score}%</span>
    </div>
  );
};

export default ScoreBadge;
