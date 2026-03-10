
import React from 'react';
import './JDValidationSummary.css';

const JDValidationSummary = ({ result, isGenerating }) => {
  if (isGenerating) {
    return (
      <div className="jd-validation-loading">
        <div className="audit-spinner"></div>
        <p>Analyzing JD for bias and compliance...</p>
      </div>
    );
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'Publish Ready': return 'var(--success)';
      case 'Needs Review': return 'var(--warning)';
      case 'High Risk': return 'var(--danger)';
      default: return 'var(--text-muted)';
    }
  };

  return (
    <div className="jd-validation-summary">
      <div className="summary-header">
        <div className="score-ring-wrap">
          <svg className="score-ring" width="80" height="80">
            <circle className="ring-bg" cx="40" cy="40" r="34" />
            <circle className="ring-fill" cx="40" cy="40" r="34" style={{ strokeDashoffset: 213 - (213 * (100 - result.riskScore)) / 100 }} />
          </svg>
          <div className="score-text">
            <span className="sc-val">{100 - result.riskScore}</span>
            <span className="sc-label">Score</span>
          </div>
        </div>
        <div className="summary-title-wrap">
          <h4>Executive Audit Summary</h4>
          <div className="status-indicator" style={{ backgroundColor: getStatusColor(result.status) }}>
            {result.status}
          </div>
        </div>
      </div>
      
      <p className="summary-desc">{result.summary}</p>

      <div className="summary-grid">
        <div className="summary-stat">
          <label>Inclusion</label>
          <span className="val">{result.inclusiveCheck.score}%</span>
          <span className="status">{result.inclusiveCheck.status}</span>
        </div>
        <div className="summary-stat">
          <label>Compliance</label>
          <span className="val">{result.complianceStatus.score}%</span>
          <span className="status">{result.complianceStatus.status}</span>
        </div>
      </div>
    </div>
  );
};

export default JDValidationSummary;
