import React, { useState } from 'react';
import './NudgeEnginePage.css';

const MOCK_NUDGES = [
  {
    id: 'NDG-001',
    triggerType: 'Approval Delay',
    priority: 'High',
    candidate: 'Rohan Sharma',
    role: 'Lead Product Designer',
    assignedUser: 'Sarah Jenkins (HM)',
    suggestedAction: 'Send automated reminder for Offer Approval',
    timeElapsed: '48h Overdue',
    status: 'Pending'
  },
  {
    id: 'NDG-002',
    triggerType: 'Candidate Follow-up',
    priority: 'Medium',
    candidate: 'Asha Nair',
    role: 'Senior Data Engineer',
    assignedUser: 'You',
    suggestedAction: 'Schedule final leadership round',
    timeElapsed: 'Due Today',
    status: 'Pending'
  },
  {
    id: 'NDG-003',
    triggerType: 'Feedback Missing',
    priority: 'Critical',
    candidate: 'Emily Chen',
    role: 'Product Marketing Manager',
    assignedUser: 'Marcus Thorne',
    suggestedAction: 'Request Panel 2 interview scorecard',
    timeElapsed: '24h Overdue',
    status: 'Pending'
  },
  {
    id: 'NDG-004',
    triggerType: 'Offer Expiry',
    priority: 'High',
    candidate: 'David Kim',
    role: 'Frontend Developer',
    assignedUser: 'You',
    suggestedAction: 'Call candidate to discuss pending offer',
    timeElapsed: 'Expires in 24h',
    status: 'Pending'
  }
];

const MOCK_ACTIVITY = [
  { time: '10:45 AM', action: 'Nudge NDG-008 completed by You.' },
  { time: '10:12 AM', action: 'System triggered Offer Expiry alert for David Kim.' },
  { time: '09:30 AM', action: 'Nudge NDG-005 snoozed by Sarah Jenkins.' },
  { time: '08:00 AM', action: 'Daily digest of 12 nudges sent to Recruiter Team.' }
];

const NudgeEnginePage = () => {
  const [nudges, setNudges] = useState(MOCK_NUDGES);

  const handleAction = (id, actionType) => {
    if (actionType === 'complete') {
      setNudges(nudges.filter(n => n.id !== id));
      console.log(`Marked ${id} as completed.`);
    } else if (actionType === 'snooze') {
      console.log(`Snoozed ${id}.`);
    } else if (actionType === 'reassign') {
      console.log(`Triggered reassign flow for ${id}.`);
    }
  };

  return (
    <div className="nudge-engine-page">
      <header className="ne-header">
        <div className="ne-header-left">
          <span className="ne-eyebrow">OPERATIONS · WORKFLOW ASSISTANT</span>
          <h1>Nudge Engine</h1>
          <p className="ne-subtitle">Proactive alerts, automated reminders, and smart task routing.</p>
        </div>
        <div className="ne-header-actions">
          <button className="btn-ne-outline">Configure Rules</button>
          <button className="btn-ne-primary">Run Sync Now</button>
        </div>
      </header>

      {/* Summary Cards */}
      <div className="ne-stats-row">
        <div className="ne-stat-card">
          <div className="ds-header">
            <span className="ds-label">Pending Actions</span>
            <div className="ds-icon blue">📋</div>
          </div>
          <span className="ds-value">{nudges.length}</span>
          <span className="ds-trend">In Queue</span>
        </div>
        <div className="ne-stat-card">
          <div className="ds-header">
            <span className="ds-label">Overdue Tasks</span>
            <div className="ds-icon red">⏰</div>
          </div>
          <span className="ds-value">2</span>
          <span className="ds-trend down">Requires Attention</span>
        </div>
        <div className="ne-stat-card">
          <div className="ds-header">
            <span className="ds-label">Follow-up Nudges</span>
            <div className="ds-icon green">👋</div>
          </div>
          <span className="ds-value">5</span>
          <span className="ds-trend up">Sent Today</span>
        </div>
        <div className="ne-stat-card">
          <div className="ds-header">
            <span className="ds-label">Approval Delays</span>
            <div className="ds-icon purple">⏳</div>
          </div>
          <span className="ds-value">1</span>
          <span className="ds-trend">Escalation Risk</span>
        </div>
      </div>

      <div className="ne-workspace-grid">
        {/* Left Column: Active Nudges Panel */}
        <div className="ne-main-panel">
          <div className="panel-header">
            <h3>Active System Nudges</h3>
            <div className="panel-filters">
              <span className="filter-badge active">All</span>
              <span className="filter-badge">Overdue</span>
              <span className="filter-badge">Assigned to Me</span>
            </div>
          </div>

          <div className="nudge-list">
            {nudges.length === 0 ? (
              <div className="empty-state">
                <div className="empty-icon">✨</div>
                <h4>All caught up!</h4>
                <p>No active nudges requiring your attention.</p>
              </div>
            ) : (
              nudges.map((nudge) => (
                <div key={nudge.id} className={`nudge-card priority-${nudge.priority.toLowerCase()}`}>
                  <div className="nudge-edge-indicator"></div>
                  
                  <div className="nudge-content-wrapper">
                    <div className="nudge-header">
                      <div className="nh-left">
                        <span className="n-id">{nudge.id}</span>
                        <span className="n-trigger">{nudge.triggerType}</span>
                        <span className={`n-priority ${nudge.priority.toLowerCase()}`}>{nudge.priority} Priority</span>
                      </div>
                      <div className="nh-right">
                        <span className={`n-time ${nudge.timeElapsed.includes('Overdue') ? 'overdue' : ''}`}>
                          {nudge.timeElapsed}
                        </span>
                      </div>
                    </div>

                    <div className="nudge-body">
                      <div className="context-box">
                        <div className="ctx-item">
                          <span className="ctx-lbl">Candidate:</span>
                          <span className="ctx-val">{nudge.candidate} ({nudge.role})</span>
                        </div>
                        <div className="ctx-item">
                          <span className="ctx-lbl">Assigned To:</span>
                          <span className="ctx-val assignee">{nudge.assignedUser}</span>
                        </div>
                      </div>

                      <div className="action-suggestion">
                        <span className="robot-icon">🤖</span>
                        <div className="as-text">
                          <span className="as-lbl">Suggested Action:</span>
                          <span className="as-val">{nudge.suggestedAction}</span>
                        </div>
                      </div>
                    </div>

                    <div className="nudge-footer">
                      <button className="btn-nudge-action complete" onClick={() => handleAction(nudge.id, 'complete')}>
                        ✓ Mark Completed
                      </button>
                      <button className="btn-nudge-action snooze" onClick={() => handleAction(nudge.id, 'snooze')}>
                        ⏱ Snooze
                      </button>
                      <button className="btn-nudge-action reassign" onClick={() => handleAction(nudge.id, 'reassign')}>
                        ⇄ Reassign
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Right Column: Activity Timeline */}
        <div className="ne-side-panel">
          <div className="panel-header">
            <h3>Activity Timeline</h3>
            <span className="today-badge">Today</span>
          </div>

          <div className="timeline-container">
            {MOCK_ACTIVITY.map((act, index) => (
              <div key={index} className="timeline-item">
                <div className="tl-node"></div>
                <div className="tl-content">
                  <span className="tl-time">{act.time}</span>
                  <p className="tl-text">{act.action}</p>
                </div>
              </div>
            ))}
            <div className="timeline-item">
              <div className="tl-node end"></div>
              <div className="tl-content">
                <p className="tl-text dim">End of today's logs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NudgeEnginePage;
