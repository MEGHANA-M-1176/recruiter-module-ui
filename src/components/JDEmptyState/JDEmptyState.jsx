
import React from 'react';
import './JDEmptyState.css';

const JDEmptyState = () => {
  return (
    <div className="jd-empty-state">
      <div className="jd-empty-visual">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M12 8v4" />
          <path d="M12 16h.01" />
          <circle cx="12" cy="12" r="9" opacity="0.1" fill="currentColor" stroke="none" />
        </svg>
      </div>
      <h3>Compliance Audit Pending</h3>
      <p>Submit your Job Description on the left to run a comprehensive bias detection and compliance check.</p>
    </div>
  );
};

export default JDEmptyState;
