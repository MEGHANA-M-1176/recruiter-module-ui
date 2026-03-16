import React, { useState } from 'react';
import './JoiningReadinessPage.css';

const JoiningReadinessPage = () => {
  const [isValidated, setIsValidated] = useState(false);
  const [readinessScore, setReadinessScore] = useState(85);

  const sections = [
    {
      id: 'setup',
      title: 'Setup Readiness',
      icon: '🏢',
      tasks: [
        { label: 'Workstation Allocated', status: 'Completed' },
        { label: 'IT Assets Provisioned', status: 'Completed' },
        { label: 'Security Badge Active', status: 'Pending' }
      ]
    },
    {
      id: 'compliance',
      title: 'HR Compliance',
      icon: '🛡️',
      tasks: [
        { label: 'BGV Final Report Cleared', status: 'Completed' },
        { label: 'Signed Offer & Contract', status: 'Completed' },
        { label: 'Statutory Docs Verified', status: 'Completed' }
      ]
    },
    {
      id: 'orientation',
      title: 'Orientation Slot',
      icon: '📅',
      tasks: [
        { label: 'Slot Confirmed (Nov 1)', status: 'Completed' },
        { label: 'Welcome Kit Dispatched', status: 'Completed' },
        { label: 'Buddy Meeting Scheduled', status: 'Pending' }
      ]
    },
    {
      id: 'plan',
      title: 'Joining Plan',
      icon: '📋',
      tasks: [
        { label: 'Day 1 Agenda Sent', status: 'Completed' },
        { label: 'Internal Team Slack Intro', status: 'Pending' },
        { label: '30-60-90 Day Goal Set', status: 'Completed' }
      ]
    }
  ];

  const handleValidate = () => {
    setIsValidated(true);
    setReadinessScore(100);
  };

  return (
    <div className="jr-page">
      <header className="jr-header">
        <div className="jr-header-left">
          <span className="jr-eyebrow">FINAL REVIEW · HIRING MANAGER / HRBP</span>
          <h1>Joining Readiness Validation</h1>
          <p className="jr-subtitle">Execute final checks across all operational verticals prior to the candidate's first day.</p>
        </div>
        <div className="jr-header-actions">
           <button className="btn-jr-secondary">Return for Pending Tasks</button>
           <button 
            className={`btn-jr-primary ${isValidated ? 'success' : ''}`}
            onClick={handleValidate}
           >
             {isValidated ? '✓ Ready to Join' : 'Validate Readiness'}
           </button>
        </div>
      </header>

      {/* Scorecard Summary */}
      <div className="jr-scorecard">
        <div className="js-item main">
          <div className="js-value-box">
             <span className="js-value">{readinessScore}%</span>
             <div className="js-ring-sim" style={{ background: `conic-gradient(#10b981 ${readinessScore}%, #f1f5f9 0)` }}></div>
          </div>
          <div className="js-label-group">
            <strong>Aggregate Readiness</strong>
            <span>Based on cross-departmental tasks</span>
          </div>
        </div>
        <div className="js-item">
          <span className="js-label">Candidate</span>
          <strong className="js-val">Asha Nair</strong>
        </div>
        <div className="js-item">
          <span className="js-label">Joining Date</span>
          <strong className="js-val">Nov 1, 2026</strong>
        </div>
        <div className="js-item">
          <span className="js-label">Target Role</span>
          <strong className="js-val">VP Engineering</strong>
        </div>
      </div>

      <div className="jr-check-grid">
        {sections.map(section => (
          <div key={section.id} className="jr-check-panel">
            <div className="jcp-header">
              <span className="jcp-icon">{section.icon}</span>
              <h3>{section.title}</h3>
            </div>
            <div className="jcp-body">
              {section.tasks.map((task, idx) => (
                <div key={idx} className={`jcp-task ${task.status.toLowerCase()}`}>
                  <div className="jcp-status-dot"></div>
                  <span className="jcp-task-label">{task.label}</span>
                  <span className="jcp-task-status">{task.status}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {isValidated && (
        <div className="jr-confirmation-banner">
          <div className="cb-icon">🎉</div>
          <div className="cb-text">
            <h4>Readiness Confirmed!</h4>
            <p>All stakeholder teams have been notified. The candidate is officially cleared for orientation.</p>
          </div>
          <button className="btn-jr-confirm">Confirm Joining Readiness</button>
        </div>
      )}
    </div>
  );
};

export default JoiningReadinessPage;
