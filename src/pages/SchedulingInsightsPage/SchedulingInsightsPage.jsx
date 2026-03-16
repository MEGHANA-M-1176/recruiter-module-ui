import React from 'react';
import './SchedulingInsightsPage.css';

const MOCK_SCHEDULING_DATA = [
  {
    id: 1,
    candidate: 'Rohan Sharma',
    round: 'Technical Panel (Stage 3)',
    time: 'Today, 10:00 AM',
    status: 'Attended',
    reason: '-'
  },
  {
    id: 2,
    candidate: 'Emily Chen',
    round: 'Leadership Final (Stage 5)',
    time: 'Today, 11:30 AM',
    status: 'No-Show',
    reason: 'Candidate unreachable. Triggered Nudge.'
  },
  {
    id: 3,
    candidate: 'Asha Nair',
    round: 'System Design (Stage 4)',
    time: 'Today, 02:00 PM',
    status: 'Rescheduled',
    reason: 'Panelist conflict (HM requested move)'
  },
  {
    id: 4,
    candidate: 'David Kim',
    round: 'Cultural Fit (Stage 4)',
    time: 'Today, 04:15 PM',
    status: 'Confirmed',
    reason: '-'
  },
  {
    id: 5,
    candidate: 'Sarah Jenkins',
    round: 'Initial Screening (Stage 1)',
    time: 'Yesterday, 09:00 AM',
    status: 'Attended',
    reason: '-'
  }
];

const SchedulingInsightsPage = () => {
  return (
    <div className="scheduling-insights-page">
      <header className="si-header">
        <div className="si-header-left">
          <span className="si-eyebrow">LEADERSHIP CONSOLE · OPERATIONS</span>
          <h1>Scheduling Insights</h1>
          <p className="si-subtitle">Real-time analytics on interview velocity, panel utilization, and no-show trends.</p>
        </div>
        <div className="si-header-actions">
          <div className="si-filter-dropdown">
            <select>
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>This Quarter</option>
            </select>
          </div>
          <button className="btn-si-primary">
            Export Data
          </button>
        </div>
      </header>

      {/* Summary Cards */}
      <div className="si-stats-row">
        <div className="si-stat-card">
          <div className="ds-header">
            <span className="ds-label">Scheduled Interviews</span>
            <div className="ds-icon blue">📅</div>
          </div>
          <span className="ds-value">248</span>
          <span className="ds-trend up">+15% vs last week</span>
        </div>
        <div className="si-stat-card">
          <div className="ds-header">
            <span className="ds-label">No-Show Rate</span>
            <div className="ds-icon red">🛑</div>
          </div>
          <span className="ds-value">4.2%</span>
          <span className="ds-trend down">-1.1% improvement</span>
        </div>
        <div className="si-stat-card">
          <div className="ds-header">
            <span className="ds-label">Rescheduling Rate</span>
            <div className="ds-icon orange">🔄</div>
          </div>
          <span className="ds-value">12.5%</span>
          <span className="ds-trend up">+2.5% (Panel conflicts)</span>
        </div>
        <div className="si-stat-card">
          <div className="ds-header">
            <span className="ds-label">Avg. Confirmation Time</span>
            <div className="ds-icon green">⚡</div>
          </div>
          <span className="ds-value">4.5h</span>
          <span className="ds-trend up">High responsiveness</span>
        </div>
      </div>

      <div className="si-dashboard-grid">
        {/* Top visual row: Charts */}
        <div className="si-charts-row">
          
          {/* Chart 1: No-Show Trend */}
          <div className="si-chart-panel no-show-panel">
            <div className="chart-header">
              <h3>Candidate No-Show Trend (Trailing 6 Weeks)</h3>
              <span className="trend-badge positive">Decreasing</span>
            </div>
            <div className="visual-bar-chart">
              <div className="bar-col">
                <div className="bar-track"><div className="bar-fill red" style={{ height: '70%' }}></div></div>
                <span className="bar-val">7.2%</span>
                <span className="bar-lbl">W1</span>
              </div>
              <div className="bar-col">
                <div className="bar-track"><div className="bar-fill red" style={{ height: '65%' }}></div></div>
                <span className="bar-val">6.5%</span>
                <span className="bar-lbl">W2</span>
              </div>
              <div className="bar-col">
                <div className="bar-track"><div className="bar-fill red" style={{ height: '55%' }}></div></div>
                <span className="bar-val">5.8%</span>
                <span className="bar-lbl">W3</span>
              </div>
              <div className="bar-col">
                <div className="bar-track"><div className="bar-fill red" style={{ height: '60%' }}></div></div>
                <span className="bar-val">6.1%</span>
                <span className="bar-lbl">W4</span>
              </div>
              <div className="bar-col">
                <div className="bar-track"><div className="bar-fill red" style={{ height: '48%' }}></div></div>
                <span className="bar-val">4.9%</span>
                <span className="bar-lbl">W5</span>
              </div>
              <div className="bar-col">
                <div className="bar-track"><div className="bar-fill red" style={{ height: '40%' }}></div></div>
                <span className="bar-val">4.2%</span>
                <span className="bar-lbl">W6</span>
              </div>
            </div>
          </div>

          {/* Chart 2: Slot Utilization */}
          <div className="si-chart-panel util-panel">
            <div className="chart-header">
              <h3>Panel Interview Utilization Matrix</h3>
            </div>
            <div className="utilization-grid">
              <div className="util-metric">
                <div className="u-circ" style={{ background: `conic-gradient(#3b82f6 82%, #f1f5f9 0)` }}>
                  <div className="u-inner">82%</div>
                </div>
                <span className="u-lbl">Eng Panel Slots Utilized</span>
              </div>
              <div className="util-metric">
                <div className="u-circ" style={{ background: `conic-gradient(#10b981 94%, #f1f5f9 0)` }}>
                  <div className="u-inner">94%</div>
                </div>
                <span className="u-lbl">Prod Panel Slots Utilized</span>
              </div>
              <div className="util-metric">
                <div className="u-circ" style={{ background: `conic-gradient(#f59e0b 65%, #f1f5f9 0)` }}>
                  <div className="u-inner">65%</div>
                </div>
                <span className="u-lbl">Sales Panel Slots Utilized</span>
              </div>
            </div>
            <p className="insight-text">⚠️ Sales leadership has over 35% empty interview capacity this week.</p>
          </div>

        </div>

        {/* Bottom row: Operations Table */}
        <div className="si-table-panel">
          <div className="panel-header">
            <h3>Daily Operations Tracking</h3>
            <div className="table-filters">
              <button className="tb-filter active">All</button>
              <button className="tb-filter">No-Shows</button>
              <button className="tb-filter">Reschedules</button>
            </div>
          </div>
          
          <table className="si-table">
            <thead>
              <tr>
                <th>Candidate</th>
                <th>Interview Round</th>
                <th>Scheduled Time</th>
                <th>Attendance Status</th>
                <th>Context / Reason</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_SCHEDULING_DATA.map((row) => (
                <tr key={row.id}>
                  <td className="st-candidate">{row.candidate}</td>
                  <td className="st-round">{row.round}</td>
                  <td className="st-time">{row.time}</td>
                  <td>
                    <span className={`st-status ${row.status.toLowerCase()}`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="st-reason">{row.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SchedulingInsightsPage;
