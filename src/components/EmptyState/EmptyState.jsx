
import React from 'react';
import './EmptyState.css';

const EmptyState = ({ title, description, icon, actionLabel, onAction }) => {
  return (
    <div className="empty-state">
      <div className="empty-icon-wrap">
        {icon || (
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
        )}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      {actionLabel && (
        <button className="empty-action-btn" onClick={onAction}>
          {actionLabel}
        </button>
      )}
    </div>
  );
};

export default EmptyState;
