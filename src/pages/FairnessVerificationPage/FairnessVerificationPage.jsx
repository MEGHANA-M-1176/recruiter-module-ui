import React, { useState } from 'react';
import './FairnessVerificationPage.css';

const MOCK_CANDIDATE = {
  name: 'Rohan Sharma',
  role: 'Lead Product Designer',
  department: 'Product & Design',
  interviewStatus: 'Completed',
  fitReviewedStatus: 'Pending Final Clearance',
  evaluations: {
    skillFit: 'Strong',
    taskFit: 'Excellent',
    timeFit: 'Average',
    willFit: 'Strong',
  }
};

const FairnessVerificationPage = () => {
  const [isChecking, setIsChecking] = useState(false);
  const [checkResult, setCheckResult] = useState(null); // 'IDLE', 'PASS', 'FAIL'
  const [savedResult, setSavedResult] = useState(false);

  // Mock checking logic
  const handleRunChecks = () => {
    setIsChecking(true);
    setCheckResult(null);
    setSavedResult(false);

    // Simulate ML-based fairness check (BMM-S)
    setTimeout(() => {
      // randomly pass or fail for staging purpose, mostly pass
      const isPass = Math.random() > 0.3;
      setCheckResult(isPass ? 'PASS' : 'FAIL');
      setIsChecking(false);
    }, 2000);
  };

  const handleSaveResult = () => {
    setSavedResult(true);
    alert('Verification results saved to audit log.');
  };

  const handleProceed = () => {
    alert('Candidate cleared for Stage 8 (Offer Preparation).');
  };

  const handleReturnReview = () => {
    alert('Candidate returned to Panel/HM for review due to flagged bias.');
  };

  return (
    <div className="fairness-verification-page">
      <header className="fv-header">
        <div className="fv-header-left">
          <span className="fv-eyebrow">STAGE 7 · SELECT (ADAPTIVE FIT)</span>
          <h1>Fairness & Verification Checks</h1>
          <p className="fv-subtitle">Run BMM-S fairness audit and bias checks on candidate selection decisions.</p>
        </div>
        <div className="fv-header-actions">
          <button className="btn-fv-secondary">View Interview Summary</button>
        </div>
      </header>

      <div className="fv-workspace-grid">
        <div className="fv-workspace-left">
          
          <div className="fv-card candidate-summary">
            <div className="card-header">
              <h3>Candidate Selection File</h3>
              <span className="candidate-id">ID: CND-49821</span>
            </div>
            
            <div className="summary-grid">
              <div className="summary-item">
                <span className="label">Candidate Name</span>
                <span className="value">{MOCK_CANDIDATE.name}</span>
              </div>
              <div className="summary-item">
                <span className="label">Role Title</span>
                <span className="value">{MOCK_CANDIDATE.role}</span>
              </div>
              <div className="summary-item">
                <span className="label">Department</span>
                <span className="value">{MOCK_CANDIDATE.department}</span>
              </div>
              <div className="summary-item">
                <span className="label">Interview Status</span>
                <span className="value status-pill success">{MOCK_CANDIDATE.interviewStatus}</span>
              </div>
              <div className="summary-item">
                <span className="label">Fit Reviewed Status</span>
                <span className="value status-pill pending">{MOCK_CANDIDATE.fitReviewedStatus}</span>
              </div>
            </div>
          </div>

          <div className="fv-card validation-panel">
            <div className="card-header">
              <h3>BMM-S Audit Criteria</h3>
              {checkResult && (
                <span className={`status-badge ${checkResult === 'PASS' ? 'status-pass' : 'status-fail'}`}>
                  {checkResult === 'PASS' ? 'AUDIT CLEARED' : 'AUDIT FLAGGED'}
                </span>
              )}
            </div>

            <p className="fv-card-desc">System analyzes panel scoring patterns, notes sentiment, and evaluation parity.</p>
            
            <div className="check-list">
              <div className={`check-item ${isChecking ? 'checking' : ''} ${checkResult ? 'done' : ''}`}>
                <div className="check-icon">
                  {isChecking ? <span className="spinner"></span> : (checkResult === 'PASS' ? '✓' : (checkResult === 'FAIL' ? '!' : '·'))}
                </div>
                <div className="check-content">
                  <span className="check-title">Fairness Parity Audit</span>
                  <span className="check-desc">Checks for scoring deviations outside expected standard deviation compared to cohort.</span>
                </div>
                <div className="check-status">
                  {checkResult === 'PASS' ? <span className="status-text pass">Verified</span> : (checkResult === 'FAIL' ? <span className="status-text fail">Deviation found</span> : <span className="status-text idle">Pending</span>)}
                </div>
              </div>

              <div className={`check-item ${isChecking ? 'checking' : ''} ${checkResult ? 'done' : ''}`}>
                <div className="check-icon">
                  {isChecking ? <span className="spinner"></span> : (checkResult === 'PASS' ? '✓' : (checkResult === 'FAIL' ? '!' : '·'))}
                </div>
                <div className="check-content">
                  <span className="check-title">Language Bias Checker</span>
                  <span className="check-desc">Analyzes panel notes for exclusionary, subjective, or non-behavioral terminology.</span>
                </div>
                <div className="check-status">
                  {checkResult === 'PASS' ? <span className="status-text pass">Clean</span> : (checkResult === 'FAIL' ? <span className="status-text fail">Unconscious bias flagged</span> : <span className="status-text idle">Pending</span>)}
                </div>
              </div>

              <div className={`check-item ${isChecking ? 'checking' : ''} ${checkResult ? 'done' : ''}`}>
                <div className="check-icon">
                  {isChecking ? <span className="spinner"></span> : '✓'}
                </div>
                <div className="check-content">
                  <span className="check-title">Background Verification Pre-check</span>
                  <span className="check-desc">Ensures necessary compliance documents are staged for third-party BGV.</span>
                </div>
                <div className="check-status">
                  {checkResult ? <span className="status-text pass">Ready</span> : <span className="status-text idle">Pending</span>}
                </div>
              </div>
            </div>

            <div className="decision-actions">
              <button 
                className="btn-fv-primary run-btn" 
                onClick={handleRunChecks} 
                disabled={isChecking}
              >
                {isChecking ? 'Running BMM-S Engine...' : (checkResult ? 'Re-run Checks' : 'Run Fairness & Bias Checks')}
              </button>
            </div>
          </div>
        </div>

        <div className="fv-workspace-right">
          <div className="fv-card audit-summary">
            <h3>Audit Action Summary</h3>
            
            <div className="audit-content">
              {isChecking ? (
                <div className="loading-state">
                  <div className="pulse-circle"></div>
                  <p>Analyzing selection signals...</p>
                </div>
              ) : !checkResult ? (
                <div className="empty-state">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" strokeWidth="1"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  <p>Run checks to generate audit summary.</p>
                </div>
              ) : (
                <div className="result-state">
                  <div className={`result-hero ${checkResult === 'PASS' ? 'pass-bg' : 'fail-bg'}`}>
                    <div className="hero-icon">
                      {checkResult === 'PASS' ? '🛡️' : '⚠️'}
                    </div>
                    <h4>{checkResult === 'PASS' ? 'Validation Successful' : 'Risk Flags Detected'}</h4>
                    <p>
                      {checkResult === 'PASS' 
                        ? 'No significant bias or parity issues found in the evaluation data. The candidate is cleared for standard offer processing.' 
                        : 'Potential unconscious bias terms detected in Panel 2 notes. Scoring deviation on "WillFit" exceeds P90 threshold.'}
                    </p>
                  </div>
                  
                  <div className="decision-box">
                    <h4>Required Decision Action</h4>
                    <p className="desc">Choose how to proceed based on this audit outcome.</p>
                    
                    {checkResult === 'PASS' ? (
                      <div className="action-group">
                        <button className="btn-decision-success" onClick={handleProceed}>
                          Cleared, proceed to Offer
                        </button>
                        <button className="btn-fv-outline" onClick={handleSaveResult} disabled={savedResult}>
                          {savedResult ? 'Result Saved' : 'Save Result to Log'}
                        </button>
                      </div>
                    ) : (
                      <div className="action-group">
                        <button className="btn-decision-danger" onClick={handleReturnReview}>
                          Flag bias issue for review
                        </button>
                        <button className="btn-fv-outline" onClick={handleProceed} style={{ opacity: 0.6 }}>
                          Override & Proceed (Admin Only)
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FairnessVerificationPage;
