import React, { useState } from 'react';
import './CriticalHireApprovalPage.css';

const CriticalHireApprovalPage = () => {
  const [decision, setDecision] = useState(null);
  const [notes, setNotes] = useState('');

  const handleAction = (status) => {
    setDecision(status);
    console.log(`Decision recorded: ${status}`, { notes });
  };

  return (
    <div className="cha-page">
      <header className="cha-header">
        <div className="cha-header-left">
          <span className="cha-eyebrow">EXECUTIVE WORKFLOW · DECISION GATE</span>
          <h1>Critical Hire Approval</h1>
          <p className="cha-subtitle">Review business case, interview scores, and executive brief before final authorization.</p>
        </div>
        <div className="cha-header-actions">
          <button className="btn-cha-outline">View Full Dossier</button>
        </div>
      </header>

      <div className="cha-main-layout">
        <div className="cha-content-panel">
          
          {/* Candidate Context Block */}
          <div className="cha-candidate-card">
            <div className="cc-header">
              <div className="c-avatar">AS</div>
              <div className="c-details">
                <h2>Asha Nair</h2>
                <span className="c-role">VP, Principal Data Architecture</span>
              </div>
              <div className="critical-badge">
                <span className="cb-icon">⚡</span>
                <span className="cb-text">Tier-1 Critical Impact Role</span>
              </div>
            </div>
            
            <div className="cc-metrics">
              <div className="cm-item">
                <span className="cm-label">Requested Compensation</span>
                <span className="cm-value hl-blue">$245,000 OTE</span>
              </div>
              <div className="cm-item">
                <span className="cm-label">Business Unit</span>
                <span className="cm-value">Core Engineering</span>
              </div>
              <div className="cm-item">
                <span className="cm-label">Hiring Manager</span>
                <span className="cm-value">Sarah Jenkins (SVP)</span>
              </div>
              <div className="cm-item">
                <span className="cm-label">Overall Fit Score</span>
                <span className="cm-value hl-green">94 / 100</span>
              </div>
            </div>
          </div>

          {/* Decision Brief Area */}
          <div className="cha-brief-section">
            <h3>Executive Summary & Business Case</h3>
            <div className="brief-content">
              <p>
                <strong>Justification:</strong> The Principal Data Architecture role has been vacant for 6 months, slowing down the Q4 Data Lake migration by an estimated 14%. Asha Nair brings 12 years of specialized distributed systems experience directly relevant to our bottleneck.
              </p>
              <p>
                <strong>Interview Consensus:</strong> All 4 panel members strongly voted 'Hire'. She scored perfectly on System Design and demonstrated high strategic alignment during the leadership round.
              </p>
              <div className="risk-box">
                <span className="rb-title">Compliance & Fairness Check:</span>
                <span className="rb-status passed">Passed without alerts.</span>
              </div>
            </div>
          </div>

          {/* Action / Review Form */}
          <div className="cha-review-form">
            <h3>Leadership Review Notes</h3>
            <textarea 
              placeholder="Add internal notes visible only to executive reviewers and HR Ops..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              disabled={decision !== null}
            ></textarea>
            
            {decision === null ? (
              <div className="action-button-group">
                <button className="btn-cha-return" onClick={() => handleAction('Returned')}>
                  <span className="btn-icon">↩</span> Return to Recruiter
                </button>
                <button className="btn-cha-approve" onClick={() => handleAction('Approved')}>
                  <span className="btn-icon">✓</span> Authorize & Approve
                </button>
              </div>
            ) : (
              <div className={`decision-lock state-${decision.toLowerCase()}`}>
                <div className="lock-icon">{decision === 'Approved' ? '✅' : '↩'}</div>
                <div className="lock-text">
                  <strong>Decision Recorded: {decision}</strong>
                  <span>Your authorization has been logged and the workflow advanced.</span>
                </div>
              </div>
            )}
          </div>

        </div>

        {/* Right Sidebar - Workflow Timeline */}
        <div className="cha-sidebar-panel">
          <h3>Approval Tracker</h3>
          
          <div className="workflow-timeline">
            
            <div className="wt-node completed">
              <div className="wt-marker">✓</div>
              <div className="wt-content">
                <span className="wt-title">Request Submitted</span>
                <span className="wt-user">Marcus Thorne (Recruiter)</span>
                <span className="wt-time">Oct 12, 09:30 AM</span>
              </div>
            </div>

            <div className="wt-node completed">
              <div className="wt-marker">✓</div>
              <div className="wt-content">
                <span className="wt-title">HM Endorsement</span>
                <span className="wt-user">Sarah Jenkins (SVP)</span>
                <span className="wt-time">Oct 12, 14:15 PM</span>
              </div>
            </div>

            <div className="wt-node completed">
              <div className="wt-marker">✓</div>
              <div className="wt-content">
                <span className="wt-title">Finance Clear</span>
                <span className="wt-user">WFM System Auto-Check</span>
                <span className="wt-time">Oct 12, 14:16 PM</span>
              </div>
            </div>

            <div className={`wt-node ${decision ? (decision === 'Approved' ? 'completed' : 'rejected') : 'active'}`}>
              <div className="wt-marker">{decision ? (decision === 'Approved' ? '✓' : '✕') : '2'}</div>
              <div className="wt-content">
                <span className="wt-title">Executive Authorization</span>
                <span className="wt-user">Leadership Review</span>
                <span className="wt-time">{decision ? 'Action Taken' : 'Pending your review'}</span>
              </div>
            </div>

            <div className={`wt-node ${decision === 'Approved' ? 'next' : 'pending'}`}>
              <div className="wt-marker"></div>
              <div className="wt-content">
                <span className="wt-title">Generate Offer Stage</span>
                <span className="wt-user">HR Ops</span>
                <span className="wt-time">Awaiting Clearance</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CriticalHireApprovalPage;
