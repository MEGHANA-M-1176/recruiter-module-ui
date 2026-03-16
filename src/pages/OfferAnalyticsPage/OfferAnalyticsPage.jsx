import React from 'react';
import './OfferAnalyticsPage.css';

const OfferAnalyticsPage = () => {
  const stats = [
    { label: 'Acceptance Prob.', value: '82%', trend: '+4.2%', color: '#10b981' },
    { label: 'Offers Accepted', value: '142', trend: '+12', color: '#3b82f6' },
    { label: 'Offers Rejected', value: '18', trend: '-3', color: '#ef4444' },
    { label: 'Negotiation Rate', value: '34%', trend: '-2.1%', color: '#f59e0b' }
  ];

  const tableData = [
    { id: 1, name: 'Asha Nair', role: 'VP Engineering', status: 'Accepted', negotiation: 'No', probability: '98%' },
    { id: 2, name: 'Rajesh Kumar', role: 'Sr. ML Engineer', status: 'Pending', negotiation: 'Yes', probability: '72%' },
    { id: 3, name: 'Sarah Chen', role: 'Staff Designer', status: 'Accepted', negotiation: 'Maybe', probability: '85%' },
    { id: 4, name: 'Michael Ross', role: 'Project Manager', status: 'Rejected', negotiation: 'Yes', probability: '15%' },
    { id: 5, name: 'Elena Gilbert', role: 'Data Scientist', status: 'Pending', negotiation: 'No', probability: '91%' }
  ];

  return (
    <div className="offer-analytics-page">
      <header className="oap-header">
        <div className="oap-header-left">
          <span className="oap-eyebrow">LEADERSHIP CONSOLE · INTELLIGENCE</span>
          <h1>Offer Analytics Dashboard</h1>
          <p className="oap-subtitle">Strategic overview of offer performance, acceptance trends, and negotiation dynamics.</p>
        </div>
        <div className="oap-header-actions">
          <button className="btn-oap-outline">Download Report</button>
          <button className="btn-oap-primary">Refresh Data</button>
        </div>
      </header>

      {/* Summary Cards */}
      <div className="oap-stats-grid">
        {stats.map((stat, idx) => (
          <div key={idx} className="oap-stat-card">
            <span className="stat-label">{stat.label}</span>
            <div className="stat-value-row">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-trend" style={{ color: stat.trend.includes('+') ? '#10b981' : '#ef4444' }}>
                {stat.trend}
              </span>
            </div>
            <div className="stat-progress">
              <div className="stat-fill" style={{ width: '70%', backgroundColor: stat.color }}></div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="oap-charts-grid">
        <div className="oap-chart-card">
          <div className="chart-header">
            <h3>Acceptance Trend (6 Months)</h3>
            <span className="chart-meta">Avg. 78%</span>
          </div>
          <div className="chart-visual line-chart-sim">
            {/* Simulating a line chart with CSS/SVG */}
            <svg viewBox="0 0 400 150" className="svg-chart">
              <path d="M0,120 Q50,110 100,80 T200,60 T300,40 T400,20" fill="none" stroke="#3b82f6" strokeWidth="3" />
              <path d="M0,120 Q50,110 100,80 T200,60 T300,40 T400,20 V150 H0 Z" fill="url(#grad1)" />
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{stopColor:'#3b82f6', stopOpacity:0.2}} />
                  <stop offset="100%" style={{stopColor:'#3b82f6', stopOpacity:0}} />
                </linearGradient>
              </defs>
            </svg>
            <div className="chart-labels">
              <span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span>
            </div>
          </div>
        </div>

        <div className="oap-chart-card">
          <div className="chart-header">
            <h3>Comp Acceptance Pattern</h3>
            <span className="chart-meta">Market Alignment</span>
          </div>
          <div className="chart-visual scatter-pattern-sim">
            <div className="pattern-grid">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="dot" style={{ 
                  left: `${Math.random() * 80 + 10}%`, 
                  top: `${Math.random() * 80 + 10}%`,
                  opacity: Math.random() * 0.5 + 0.3
                }}></div>
              ))}
              <div className="dot highlight" style={{ left: '75%', top: '25%' }}></div>
            </div>
            <span className="axis-label y">Acceptance %</span>
            <span className="axis-label x">Salary Percentile</span>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="oap-table-section">
        <div className="table-header">
          <h3>Active Offer Pipeline Analytics</h3>
          <div className="table-filters">
            <input type="text" placeholder="Filter candidate or role..." />
          </div>
        </div>
        <table className="oap-table">
          <thead>
            <tr>
              <th>Candidate</th>
              <th>Proposed Role</th>
              <th>Status</th>
              <th>Negotiated</th>
              <th>Acceptance Prob.</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map(row => (
              <tr key={row.id}>
                <td>
                  <div className="c-name-cell">
                    <span className="avatar-sm">{row.name.charAt(0)}</span>
                    {row.name}
                  </div>
                </td>
                <td>{row.role}</td>
                <td>
                  <span className={`status-pill ${row.status.toLowerCase()}`}>
                    {row.status}
                  </span>
                </td>
                <td>
                  <span className={`neg-pill ${row.negotiation.toLowerCase()}`}>
                    {row.negotiation}
                  </span>
                </td>
                <td>
                  <div className="prob-cell">
                    <span className="prob-val">{row.probability}</span>
                    <div className="prob-bar">
                      <div className="prob-fill" style={{ width: row.probability }}></div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OfferAnalyticsPage;
