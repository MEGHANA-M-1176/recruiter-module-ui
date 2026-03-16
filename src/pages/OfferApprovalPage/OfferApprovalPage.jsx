import React, { useState } from 'react';
import './OfferApprovalPage.css';

const OfferApprovalPage = () => {
  const [offerStatus, setOfferStatus] = useState('PENDING'); // PENDING, APPROVED, REVISION, RETURNED
  const [financeApproval, setFinanceApproval] = useState(null); // null, 'APPROVED', 'REJECTED'
  const [leadershipApproval, setLeadershipApproval] = useState(null); // null, 'APPROVED', 'REJECTED'

  const handleAction = (type) => {
    setOfferStatus(type);
    if (type === 'APPROVED') {
      setFinanceApproval('APPROVED');
      setLeadershipApproval('APPROVED');
    }
  };

  return (
    <div className="offer-approval-page">
      <header className="oa-header">
        <div className="oa-header-left">
          <span className="oa-eyebrow">ENTERPRISE WORKFLOW · FINAL GATE</span>
          <h1>Offer Approval Workflow</h1>
          <p className="oa-subtitle">Multi-tier validation for compensation alignment, budget compliance, and strategic fit.</p>
        </div>
        <div className="oa-header-actions">
          <span className={`oa-status-badge ${offerStatus.toLowerCase()}`}>{offerStatus}</span>
        </div>
      </header>

      <div className="oa-main-grid">
        <div className="oa-left-col">
          {/* Offer Package Summary */}
          <div className="oa-panel offer-summary">
            <div className="panel-header">
              <h3>Offer Package Summary</h3>
            </div>
            <div className="summary-content">
              <div className="candidate-mini-card">
                <div className="cmc-avatar">RK</div>
                <div className="cmc-info">
                  <h4>Rajesh Kumar</h4>
                  <p>Senior ML Engineer (L6) • Engineering</p>
                </div>
              </div>
              <div className="summary-grid">
                <div className="sg-item">
                  <span className="sg-lbl">Requisition</span>
                  <span className="sg-val">REQ-DS-902</span>
                </div>
                <div className="sg-item">
                  <span className="sg-lbl">Location</span>
                  <span className="sg-val">Remote (India)</span>
                </div>
                <div className="sg-item">
                  <span className="sg-lbl">Joining Date</span>
                  <span className="sg-val">Nov 15, 2026</span>
                </div>
                <div className="sg-item">
                  <span className="sg-lbl">Recruiter</span>
                  <span className="sg-val">Marcus Thorne</span>
                </div>
              </div>
            </div>
          </div>

          {/* Compensation Details */}
          <div className="oa-panel comp-section">
            <div className="panel-header">
              <h3>Compensation Details</h3>
            </div>
            <div className="comp-grid">
              <div className="cg-main">
                <div className="cg-row">
                  <span className="cg-lbl">Base Salary (Annual)</span>
                  <span className="cg-val highlight">$185,000</span>
                </div>
                <div className="cg-row">
                  <span className="cg-lbl">Variable Bonus (15%)</span>
                  <span className="cg-val">$27,750</span>
                </div>
                <div className="cg-row">
                  <span className="cg-lbl">Equity (RSUs)</span>
                  <span className="cg-val">$80,000 / 4 yrs</span>
                </div>
                <div className="cg-row">
                  <span className="cg-lbl">Sign-on Bonus</span>
                  <span className="cg-val">$20,000</span>
                </div>
                <div className="cg-row total">
                  <span className="cg-lbl">Total Year 1 Package</span>
                  <span className="cg-val">$247,750</span>
                </div>
              </div>
              <div className="cg-benchmarks">
                <h4>Market Benchmarks</h4>
                <div className="bench-item">
                  <div className="bi-header">
                    <span>Internal Parity (L6)</span>
                    <span>P90</span>
                  </div>
                  <div className="bi-track"><div className="bi-fill" style={{width: '90%'}}></div></div>
                </div>
                <div className="bench-item">
                  <div className="bi-header">
                    <span>Market Range</span>
                    <span>High</span>
                  </div>
                  <div className="bi-track"><div className="bi-fill green" style={{width: '85%'}}></div></div>
                </div>
              </div>
            </div>
          </div>

          {/* Multi-tier Approval Panels */}
          <div className="oa-approval-sections">
            {/* Finance Panel */}
            <div className={`approval-panel ${financeApproval === 'APPROVED' ? 'approved' : ''}`}>
              <div className="ap-header">
                <div className="ap-title">
                  <span className="ap-icon">📊</span>
                  <h4>Finance & Budget Review</h4>
                </div>
                {financeApproval === 'APPROVED' ? <span className="ap-stat approved">Verified</span> : <span className="ap-stat pending">Pending</span>}
              </div>
              <div className="ap-body">
                <p>Cost Center CC-402 has sufficient allocated budget ($250k). Sign-on bonus is within Q4 discretionary limits.</p>
                <div className="ap-approver">
                  <img src="https://ui-avatars.com/api/?name=Finance+Admin&background=f1f5f9&color=475569" alt="Finance" />
                  <div>
                    <span>Finance Approver</span>
                    <small>Cost Control Team</small>
                  </div>
                </div>
              </div>
            </div>

            {/* Leadership Panel */}
            <div className={`approval-panel ${leadershipApproval === 'APPROVED' ? 'approved' : ''}`}>
              <div className="ap-header">
                <div className="ap-title">
                  <span className="ap-icon">👑</span>
                  <h4>Leadership Strategic Approval</h4>
                </div>
                {leadershipApproval === 'APPROVED' ? <span className="ap-stat approved">Authorized</span> : <span className="ap-stat pending">Pending</span>}
              </div>
              <div className="ap-body">
                <p>Strategic role for Data Lake initiatives. Compensation premium is justified by candidate's ML patent portfolio.</p>
                <div className="ap-approver">
                  <img src="https://ui-avatars.com/api/?name=VP+Eng&background=0f172a&color=fff" alt="VP" />
                  <div>
                    <span>Sarah Jenkins</span>
                    <small>SVP, Engineering</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="oa-right-col">
          {/* Status Timeline */}
          <div className="oa-panel timeline-panel">
            <div className="panel-header">
              <h3>Status Timeline</h3>
            </div>
            <div className="oa-timeline">
              <div className="ot-item done">
                <div className="ot-node"></div>
                <div className="ot-content">
                  <span className="ot-step">Offer Drafted</span>
                  <span className="ot-meta">Marcus Thorne • Oct 14, 10:00 AM</span>
                </div>
              </div>
              <div className="ot-item done">
                <div className="ot-node"></div>
                <div className="ot-content">
                  <span className="ot-step">Offer Validated</span>
                  <span className="ot-meta">System Audit • Oct 14, 10:05 AM</span>
                </div>
              </div>
              <div className={`ot-item ${offerStatus === 'APPROVED' ? 'done' : 'current'}`}>
                <div className="ot-node"></div>
                <div className="ot-content">
                  <span className="ot-step">Pending Final Approval</span>
                  <span className="ot-meta">Current Stage</span>
                </div>
              </div>
              <div className="ot-item future">
                <div className="ot-node"></div>
                <div className="ot-content">
                  <span className="ot-step">Release to Candidate</span>
                  <span className="ot-meta">Awaiting Approvals</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="oa-actions-panel">
            {offerStatus === 'PENDING' ? (
              <>
                <button className="btn-oa primary" onClick={() => handleAction('APPROVED')}>
                  Approve Offer
                </button>
                <button className="btn-oa secondary" onClick={() => handleAction('REVISION')}>
                  Request Revision
                </button>
                <button className="btn-oa outline" onClick={() => handleAction('RETURNED')}>
                  Return for Review
                </button>
              </>
            ) : (
              <div className="post-action-message">
                <div className="pam-icon">✨</div>
                <h4>Decision Logged</h4>
                <p>The offer status has been updated to <strong>{offerStatus}</strong>.</p>
                <button className="btn-oa outline" onClick={() => handleAction('PENDING')}>Reset View</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferApprovalPage;
