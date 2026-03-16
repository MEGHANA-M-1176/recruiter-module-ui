import React, { useState } from 'react';
import './BGVExceptionReviewPage.css';

const BGVExceptionReviewPage = () => {
  const [decision, setDecision] = useState(null);
  const [reviewNote, setReviewNote] = useState('');

  const exceptions = [
    {
      id: 1,
      category: 'Employment Verification',
      issue: 'Dates Mismatch: Previous Employer',
      description: 'Candidate stated they worked at TechCorp from Jan 2018 - Dec 2021. Verification result shows Jan 2018 - Sept 2021. Mismatch of 3 months.',
      severity: 'Medium',
      flagCode: 'EMP-DATA-04'
    },
    {
      id: 2,
      category: 'Address History',
      issue: 'Residential Gap',
      description: 'Gap of 6 months (July 2022 - Jan 2023) in residential history not covered by documentation.',
      severity: 'Low',
      flagCode: 'ADDR-GAP-01'
    }
  ];

  const handleDecision = (type) => {
    setDecision(type);
    console.log(`BGV Exception Decision: ${type}`, { reviewNote });
  };

  return (
    <div className="bgv-review-page">
      <header className="bgv-review-header">
        <div className="header-left">
          <span className="eyebrow">COMPLIANCE HUB · EXCEPTION REVIEW</span>
          <h1>BGV Exception Review</h1>
          <p className="subtitle">Audit flagged verification discrepancies and determine final adjudication based on risk policy.</p>
        </div>
        <div className="header-actions">
          <button className="btn-outline">Download Full BGV Report</button>
        </div>
      </header>

      <div className="bgv-review-grid">
        <div className="left-column">
          {/* Candidate Profile Summary */}
          <div className="review-panel candidate-summary-card">
            <div className="panel-header">
              <h3>Subject Information</h3>
              <span className="case-id">CASE-99283-BGV</span>
            </div>
            <div className="profile-row">
              <div className="profile-avatar">RK</div>
              <div className="profile-details">
                <h2>Rajesh Kumar</h2>
                <div className="profile-meta">
                  <span>Senior ML Engineer (L6)</span>
                  <span className="dot"></span>
                  <span>Offer Status: Pending BGV</span>
                </div>
              </div>
              <div className="risk-indicator">
                <span className="ri-label">Overall Risk</span>
                <span className="ri-value yellow">Moderate</span>
              </div>
            </div>
          </div>

          {/* Exception Cards */}
          <div className="exceptions-section">
            <div className="section-title">
              <h3>Flagged Discrepancies ({exceptions.length})</h3>
            </div>
            <div className="exceptions-list">
              {exceptions.map(ex => (
                <div key={ex.id} className={`exception-card sev-${ex.severity.toLowerCase()}`}>
                  <div className="ex-header">
                    <div className="ex-type">
                      <span className="category-tag">{ex.category}</span>
                      <span className="flag-code">{ex.flagCode}</span>
                    </div>
                    <div className={`severity-pill ${ex.severity.toLowerCase()}`}>
                      {ex.severity} Priority
                    </div>
                  </div>
                  <div className="ex-body">
                    <h4>{ex.issue}</h4>
                    <p>{ex.description}</p>
                  </div>
                  <div className="ex-footer">
                    <button className="btn-text">View Evidence Document ➔</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="right-column">
          {/* Decision Panel */}
          <div className="review-panel decision-panel">
            <div className="panel-header">
              <h3>Adjudication Center</h3>
            </div>
            <div className="decision-body">
              <div className="form-group">
                <label>Compliance / Adjudication Notes</label>
                <textarea 
                  placeholder="Provide context for the exception decision. These notes will be archived in the candidate's compliance dossier..."
                  value={reviewNote}
                  onChange={(e) => setReviewNote(e.target.value)}
                  disabled={decision !== null}
                ></textarea>
              </div>

              {decision ? (
                <div className={`decision-result state-${decision.toLowerCase()}`}>
                  <div className="dr-icon">
                    {decision === 'Accepted' ? '✅' : decision === 'Escalated' ? '⚖️' : '↩'}
                  </div>
                  <div className="dr-text">
                    <strong>Final Decision: {decision}</strong>
                    <span>Action logged by HR Operations. Re-approval required if change requested.</span>
                  </div>
                  <button className="btn-undo" onClick={() => setDecision(null)}>Change Decision</button>
                </div>
              ) : (
                <div className="decision-actions">
                  <button className="btn-decision btn-accept" onClick={() => handleDecision('Accepted')}>
                    <span className="btn-icon">✓</span> Accept Exception
                  </button>
                  <button className="btn-decision btn-candidate" onClick={() => handleDecision('Send Back')}>
                    <span className="btn-icon">↩</span> Send Back to Candidate
                  </button>
                  <button className="btn-decision btn-escalate" onClick={() => handleDecision('Escalated')}>
                    <span className="btn-icon">⚖️</span> Escalate for VP Review
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="policy-reminder">
            <h4>Quick Policy Guide</h4>
            <p><strong>Rule 102.b:</strong> Date mismatches exceeding 6 months require direct candidate clarification.</p>
            <p><strong>Rule 405.a:</strong> Residential gaps are acceptable if documented by statutory declaration.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BGVExceptionReviewPage;
