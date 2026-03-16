import React, { useState } from 'react';
import './DecisionInsightsPage.css';

const MOCK_TABLE_DATA = [
  {
    id: 'CND-89021',
    name: 'Asha Nair',
    role: 'Senior Data Engineer',
    department: 'Engineering',
    decisionStatus: 'Selected',
    fairnessResult: 'Cleared',
    predictiveIndex: 'Ramp Vel: High (3.5W)',
    lastUpdated: '2 hours ago',
    details: {
      brief: 'Exceptional technical depth. Clear spike in cloud architecture. Ready for immediate impact.',
      fairness: { status: 'Cleared', notes: 'No scoring deviations. Text audit passed with 98% neutrality.' },
      predictive: { ramp: '3.5 Weeks', potential: 'High', retention: 'Low Risk' },
      stakeholders: ['HM: Approved', 'HR: Viewed', 'Leadership: Approved']
    }
  },
  {
    id: 'CND-49821',
    name: 'Rohan Sharma',
    role: 'Lead Product Designer',
    department: 'Product & Design',
    decisionStatus: 'Escalated',
    fairnessResult: 'Flagged',
    predictiveIndex: 'Ramp Vel: Med (5.0W)',
    lastUpdated: '10 mins ago',
    details: {
      brief: 'Strong portfolio but concerns around cross-functional collaboration. Selected with reservations.',
      fairness: { status: 'Flagged', notes: 'WillFit scoring deviation > P90. Potential bias terminology in Panel 2.' },
      predictive: { ramp: '5.0 Weeks', potential: 'Medium', retention: 'Moderate Risk' },
      stakeholders: ['HM: Pending', 'HR: Action Required', 'Compliance: Flagged']
    }
  },
  {
    id: 'CND-23451',
    name: 'Emily Chen',
    role: 'Product Marketing Manager',
    department: 'Marketing',
    decisionStatus: 'Selected',
    fairnessResult: 'Cleared',
    predictiveIndex: 'Ramp Vel: Fast (2.5W)',
    lastUpdated: '1 day ago',
    details: {
      brief: 'Outstanding GTM strategy presentation. Perfect cultural alignment.',
      fairness: { status: 'Cleared', notes: 'Scoring well within normal distribution. Language audit perfectly neutral.' },
      predictive: { ramp: '2.5 Weeks', potential: 'Exceptional', retention: 'Low Risk' },
      stakeholders: ['HM: Approved', 'HR: Viewed', 'VP Marketing: Approved']
    }
  }
];

const DecisionInsightsPage = () => {
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  const handleRowClick = (candidate) => {
    // Record view event logic here
    console.log(`Recorded view event for candidate: ${candidate.id}`);
    setSelectedCandidate(candidate);
  };

  const closeDrawer = () => {
    setSelectedCandidate(null);
  };

  return (
    <div className="decision-insights-page">
      <header className="di-header">
        <div className="di-header-left">
          <span className="di-eyebrow">LEADERSHIP CONSOLE · ANALYTICS</span>
          <h1>Decision Insights</h1>
          <p className="di-subtitle">Review final selection briefs, fairness audits, and predictive hiring indicators.</p>
        </div>
        <div className="di-header-actions">
          <button className="btn-di-primary">Export Report</button>
        </div>
      </header>

      {/* Filters */}
      <div className="di-filters-bar">
        <div className="filter-group">
          <label>Role</label>
          <select><option>All Roles</option></select>
        </div>
        <div className="filter-group">
          <label>Department</label>
          <select><option>All Departments</option></select>
        </div>
        <div className="filter-group">
          <label>Decision Status</label>
          <select><option>All Statuses</option></select>
        </div>
        <div className="filter-group">
          <label>Date Range</label>
          <select><option>Last 30 Days</option></select>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="di-stats-row">
        <div className="di-stat-card">
          <div className="ds-header">
            <span className="ds-label">Finalized Decisions</span>
            <div className="ds-icon blue">✓</div>
          </div>
          <span className="ds-value">124</span>
          <span className="ds-trend up">+12% vs last month</span>
        </div>
        <div className="di-stat-card">
          <div className="ds-header">
            <span className="ds-label">Fairness Cleared</span>
            <div className="ds-icon green">🛡️</div>
          </div>
          <span className="ds-value">94.5%</span>
          <span className="ds-trend up">+2.1% improvement</span>
        </div>
        <div className="di-stat-card">
          <div className="ds-header">
            <span className="ds-label">Pending Escalations</span>
            <div className="ds-icon red">⚠️</div>
          </div>
          <span className="ds-value">6</span>
          <span className="ds-trend down">Requires Action</span>
        </div>
        <div className="di-stat-card">
          <div className="ds-header">
            <span className="ds-label">Avg. Predictive Confidence</span>
            <div className="ds-icon purple">🎯</div>
          </div>
          <span className="ds-value">88.2%</span>
          <span className="ds-trend up">High</span>
        </div>
      </div>

      {/* Main Table */}
      <div className="di-table-container">
        <table className="di-table">
          <thead>
            <tr>
              <th>Candidate Name</th>
              <th>Role</th>
              <th>Decision Status</th>
              <th>Fairness Result</th>
              <th>Predictive Index</th>
              <th>Last Updated</th>
            </tr>
          </thead>
          <tbody>
            {MOCK_TABLE_DATA.map((candidate) => (
              <tr key={candidate.id} onClick={() => handleRowClick(candidate)}>
                <td>
                  <div className="c-name">{candidate.name}</div>
                  <div className="c-id">{candidate.id}</div>
                </td>
                <td>
                  <div className="c-role">{candidate.role}</div>
                  <div className="c-dept">{candidate.department}</div>
                </td>
                <td>
                  <span className={`status-pill ${candidate.decisionStatus.toLowerCase()}`}>
                    {candidate.decisionStatus}
                  </span>
                </td>
                <td>
                  <span className={`fairness-pill ${candidate.fairnessResult.toLowerCase()}`}>
                    {candidate.fairnessResult}
                  </span>
                </td>
                <td>{candidate.predictiveIndex}</td>
                <td className="last-updated">{candidate.lastUpdated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Full Decision Brief Drawer */}
      {selectedCandidate && (
        <div className="di-drawer-overlay" onClick={closeDrawer}>
          <div className="di-drawer" onClick={e => e.stopPropagation()}>
            <div className="drawer-header">
              <div className="drawer-title">
                <h2>{selectedCandidate.name}</h2>
                <span className="role-tag">{selectedCandidate.role}</span>
              </div>
              <button className="btn-close" onClick={closeDrawer}>✕</button>
            </div>
            
            <div className="drawer-content">
              {/* 1. Decision Brief Panel */}
              <div className="panel brief-panel">
                <h3>1. Final Decision Brief</h3>
                <p>{selectedCandidate.details.brief}</p>
              </div>

              {/* 2. Fairness Audit Panel */}
              <div className={`panel fairness-panel ${selectedCandidate.fairnessResult.toLowerCase()}`}>
                <h3>2. Fairness Audit Profile</h3>
                <div className="panel-flex">
                  <div className="badge-indicator">
                    {selectedCandidate.fairnessResult === 'Flagged' ? '⚠️ Flagged' : '🛡️ Cleared'}
                  </div>
                  <p>{selectedCandidate.details.fairness.notes}</p>
                </div>
              </div>

              {/* 3. Predictive Indices Panel */}
              <div className="panel predictive-panel">
                <h3>3. Predictive Hiring Indices</h3>
                <div className="metrics-grid">
                  <div className="metric-box">
                    <span className="m-label">Ramp Velocity</span>
                    <span className="m-value">{selectedCandidate.details.predictive.ramp}</span>
                  </div>
                  <div className="metric-box">
                    <span className="m-label">Candidate Potential</span>
                    <span className="m-value">{selectedCandidate.details.predictive.potential}</span>
                  </div>
                  <div className="metric-box">
                    <span className="m-label">Flight Risk</span>
                    <span className={`m-value ${selectedCandidate.details.predictive.retention === 'Low Risk' ? 'safe' : 'warn'}`}>
                      {selectedCandidate.details.predictive.retention}
                    </span>
                  </div>
                </div>
              </div>

              {/* 4. Stakeholder Visibility Log */}
              <div className="panel stakeholder-panel">
                <h3>4. Stakeholder Visibility Log</h3>
                <ul className="log-list">
                  {selectedCandidate.details.stakeholders.map((log, idx) => (
                    <li key={idx}>
                      <span className="log-dot"></span>
                      {log}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="drawer-footer">
              <button className="btn-di-secondary" onClick={closeDrawer}>Close</button>
              {selectedCandidate.decisionStatus === 'Escalated' && (
                <button className="btn-di-danger">Review Escalation</button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DecisionInsightsPage;
