
import React from 'react';
import './JDValidationResults.css';

const JDValidationResults = ({ result }) => {
  return (
    <div className="jd-validation-results">
      {/* Risk Metrics Section */}
      <section className="results-section">
        <h4 className="results-label">Governance Breakdown</h4>
        <div className="metrics-grid">
          {result.sections.map((sec) => (
            <div key={sec.id} className="metric-card">
              <div className="metric-header">
                <span className="m-label">{sec.label}</span>
                <span className={`m-status ${sec.status.toLowerCase().replace(' ', '-')}`}>{sec.status}</span>
              </div>
              <div className="m-bar-wrap">
                <div className="m-bar-fill" style={{ width: `${sec.score}%` }}></div>
              </div>
              <p className="m-details">{sec.details}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Flagged Terms Section */}
      <section className="results-section">
        <h4 className="results-label">Bias Detection & Inclusive Language Flags</h4>
        <div className="flags-list">
          {result.flaggedTerms.map((flag, idx) => (
            <div key={idx} className="flag-item">
              <div className="flag-header">
                <div className="flag-term-wrap">
                  <span className="f-tag">{flag.category}</span>
                  <span className="f-term">"{flag.term}"</span>
                </div>
                <button className="btn-copy-term" onClick={() => alert('Suggestion copied!')}>Copy Suggestion</button>
              </div>
              <p className="f-reason">{flag.reason}</p>
              <div className="f-suggestion">
                <span className="s-label">Suggested Alternative:</span>
                <span className="s-value">{flag.suggestion}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Actions */}
      <div className="results-footer">
        <div className="f-left">
          <button className="btn-results-ghost">Apply All Suggestions</button>
          <button className="btn-results-ghost">Edit JD</button>
        </div>
        <button className="btn-results-primary">Mark as Publish Ready</button>
      </div>
    </div>
  );
};

export default JDValidationResults;
