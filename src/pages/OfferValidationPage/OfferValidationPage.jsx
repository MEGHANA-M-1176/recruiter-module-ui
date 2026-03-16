import React, { useState } from 'react';
import './OfferValidationPage.css';

const OfferValidationPage = () => {
  const [isValidating, setIsValidating] = useState(false);
  const [validationComplete, setValidationComplete] = useState(false);

  // Mock initial state for the results before validation runs
  const [results, setResults] = useState({
    policy: { status: 'PENDING', message: 'Awaiting validation trigger.' },
    equity: { status: 'PENDING', message: 'Awaiting validation trigger.' },
    demographic: { status: 'PENDING', message: 'Awaiting validation trigger.' }
  });

  const handleRunValidation = () => {
    setIsValidating(true);
    setValidationComplete(false);

    // Simulate system policy rule processing (demographic parity, bands, internal checks)
    setTimeout(() => {
      setResults({
        policy: { 
          status: 'PASSED', 
          message: 'Offer attributes align exactly with the approved requisition (REQ-ENG-202). Standard 4-year equity vesting schedule verified.' 
        },
        equity: { 
          status: 'WARNING', 
          message: 'Proposed base salary ($185k) is 12% above the departmental average for L6 role. High-end band placement flagged.' 
        },
        demographic: { 
          status: 'PASSED', 
          message: 'No statistically significant structural bias detected in final offer formulation against matched cohorts.' 
        }
      });
      setIsValidating(false);
      setValidationComplete(true);
    }, 2000);
  };

  const getStatusChip = (status) => {
    switch(status) {
      case 'PASSED': return <span className="v-chip passed">Passed</span>;
      case 'WARNING': return <span className="v-chip warning">Warning</span>;
      case 'FAILED': return <span className="v-chip failed">Failed</span>;
      default: return <span className="v-chip pending">Pending</span>;
    }
  };

  return (
    <div className="offer-validation-page">
      <header className="ov-header">
        <div className="ov-header-left">
          <span className="ov-eyebrow">HR OPS / ADMIN CONSOLE</span>
          <h1>Offer Validation Gate</h1>
          <p className="ov-subtitle">Run automated policy adherence, internal compensation parity, and demographic fairness audits.</p>
        </div>
      </header>

      <div className="ov-main-layout">
        
        {/* Left Col: Offer Context */}
        <div className="ov-context-col">
          <div className="ov-card candidate-context">
            <div className="card-header">
              <h3>Draft Offer Subject</h3>
            </div>
            <div className="subject-box">
              <div className="sb-avatar">RK</div>
              <div className="sb-details">
                <h2>Rajesh Kumar</h2>
                <div className="sb-meta">
                  <span>Senior ML Engineer (L6)</span>
                  <span>•</span>
                  <span>Data Science Team</span>
                </div>
              </div>
            </div>
            
            <div className="offer-terms-grid">
              <div className="term-item">
                <span className="ti-lbl">Requisition ID</span>
                <span className="ti-val">REQ-ENG-202</span>
              </div>
              <div className="term-item">
                <span className="ti-lbl">Base Salary</span>
                <span className="ti-val">$185,000</span>
              </div>
              <div className="term-item">
                <span className="ti-lbl">Target Bonus</span>
                <span className="ti-val">15% ($27,750)</span>
              </div>
              <div className="term-item">
                <span className="ti-lbl">Sign-on Bonus</span>
                <span className="ti-val">$20,000</span>
              </div>
              <div className="term-item full">
                <span className="ti-lbl">Equity</span>
                <span className="ti-val">$80,000 RSU (4-yr vest, 1-yr cliff)</span>
              </div>
            </div>
          </div>

          <div className="ov-card policy-rules">
            <div className="card-header">
              <h3>Applied Audit Models</h3>
            </div>
            <ul className="audit-models-list">
              <li>M-COMP-301: Internal Parity Thresholds (±15% variance limit)</li>
              <li>M-FAIR-909: Intersectional Demographic Offer Balance</li>
              <li>M-POL-022: Standard Benefits & Vesting Alignment</li>
            </ul>
          </div>
        </div>

        {/* Right Col: Validation Run & Results */}
        <div className="ov-validation-col">
          <div className="ov-card validation-dashboard">
            <div className="card-header v-dash-header">
              <h3>Compliance & Fairness Audit</h3>
              <button 
                className={`btn-run-audit ${isValidating ? 'running' : ''}`}
                onClick={handleRunValidation}
                disabled={isValidating}
              >
                {isValidating ? (
                  <><span className="spinner"></span> Running Deep Audit...</>
                ) : (
                  <>▶ Run Full Validation</>
                )}
              </button>
            </div>

            <div className="validation-results">
              
              {/* 1. Policy Adherence */}
              <div className={`v-block ${results.policy.status.toLowerCase()}`}>
                <div className="v-block-header">
                  <div className="v-block-title">
                    <span className="v-icon">📜</span>
                    <h4>1. Policy Adherence Check</h4>
                  </div>
                  {getStatusChip(results.policy.status)}
                </div>
                <div className="v-block-body">
                  <p>{results.policy.message}</p>
                  {results.policy.status === 'PASSED' && (
                    <div className="v-micro-metrics">
                      <span className="vmm-item">✓ Vesting compliance verified</span>
                      <span className="vmm-item">✓ Base constraints matched</span>
                    </div>
                  )}
                </div>
              </div>

              {/* 2. Compensation Equity */}
              <div className={`v-block ${results.equity.status.toLowerCase()}`}>
                <div className="v-block-header">
                  <div className="v-block-title">
                    <span className="v-icon">⚖️</span>
                    <h4>2. Compensation Parity & Equity</h4>
                  </div>
                  {getStatusChip(results.equity.status)}
                </div>
                <div className="v-block-body">
                  <p>{results.equity.message}</p>
                  {results.equity.status === 'WARNING' && (
                    <div className="v-micro-metrics warning-box">
                      <span className="vmm-item"><strong>L6 Avg Base:</strong> $165,000</span>
                      <span className="vmm-item"><strong>Proposed Base:</strong> $185,000 (+12.1%)</span>
                      <div className="v-action-req">Action: Requires HM compensation justification note.</div>
                    </div>
                  )}
                </div>
              </div>

              {/* 3. Demographic Fairness */}
              <div className={`v-block ${results.demographic.status.toLowerCase()}`}>
                <div className="v-block-header">
                  <div className="v-block-title">
                    <span className="v-icon">🛡️</span>
                    <h4>3. Demographic Fairness Audit</h4>
                  </div>
                  {getStatusChip(results.demographic.status)}
                </div>
                <div className="v-block-body">
                  <p>{results.demographic.message}</p>
                </div>
              </div>

            </div>

            {/* Final Actions Container */}
            <div className={`ov-final-actions ${validationComplete ? 'revealed' : ''}`}>
              <div className="fa-divider"></div>
              <h4>Next Steps</h4>
              <div className="fa-button-row">
                <button className="btn-ov-secondary" disabled={!validationComplete}>
                  💾 Save Snapshot
                </button>
                <button className="btn-ov-secondary btn-return" disabled={!validationComplete}>
                  ↩ Return for Edit
                </button>
                <button className="btn-ov-primary" disabled={!validationComplete}>
                  Send for Finance Review ➔
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default OfferValidationPage;
