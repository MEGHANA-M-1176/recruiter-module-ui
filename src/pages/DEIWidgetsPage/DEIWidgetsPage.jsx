import React from 'react';
import './DEIWidgetsPage.css';

const MOCK_DEI_ALERTS = [
  { id: 1, type: 'warning', message: 'Gender imbalance detected in Engineering Stage 3 (Technical Round). Female representation dropped by 14% vs Stage 2.', dept: 'Engineering', time: '2 hours ago' },
  { id: 2, type: 'critical', message: 'Sourcing pipeline for Senior Leadership roles shows 0% diversity in candidate pool for the last 30 days.', dept: 'Executive', time: '1 day ago' },
  { id: 3, type: 'info', message: 'Marketing department achieved 50/50 gender parity goal in final selection this quarter.', dept: 'Marketing', time: '3 days ago' }
];

const DEIWidgetsPage = () => {
  return (
    <div className="dei-widgets-page">
      <header className="dei-header">
        <div className="dei-header-left">
          <span className="dei-eyebrow">LEADERSHIP CONSOLE · MONITORING</span>
          <h1>DEI Monitoring Dashboard</h1>
          <p className="dei-subtitle">Track diversity metrics, pipeline representation, and inclusion trends across all hiring stages.</p>
        </div>
        <div className="dei-header-actions">
          <div className="filter-dropdown">
            <select>
              <option>Q3 2026</option>
              <option>Q2 2026</option>
              <option>YTD</option>
            </select>
          </div>
          <button className="btn-dei-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Export Report
          </button>
        </div>
      </header>

      {/* Summary Cards */}
      <div className="dei-stats-grid">
        <div className="dei-stat-card">
          <div className="ds-header">
            <span className="ds-label">Overall Diversity Ratio</span>
            <div className="ds-icon purple">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
            </div>
          </div>
          <div className="ds-content">
            <span className="ds-value">38.4%</span>
            <div className="ds-progress-bar"><div className="ds-fill purple" style={{ width: '38.4%' }}></div></div>
          </div>
          <span className="ds-trend up">Target: 40.0% by EOQ</span>
        </div>

        <div className="dei-stat-card">
          <div className="ds-header">
            <span className="ds-label">Gender Distribution (Hired)</span>
            <div className="ds-icon blue">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
          </div>
          <div className="ds-content dual-metrics">
            <div className="metric-col">
              <span className="m-val blue-text">54%</span>
              <span className="m-lbl">Male</span>
            </div>
            <div className="ds-divider"></div>
            <div className="metric-col">
              <span className="m-val pink-text">44%</span>
              <span className="m-lbl">Female</span>
            </div>
            <div className="ds-divider"></div>
            <div className="metric-col">
              <span className="m-val gray-text">2%</span>
              <span className="m-lbl">NB/Other</span>
            </div>
          </div>
        </div>

        <div className="dei-stat-card">
          <div className="ds-header">
            <span className="ds-label">Inclusion Index Score</span>
            <div className="ds-icon green">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            </div>
          </div>
          <div className="ds-content">
            <span className="ds-value">8.2<span className="ds-max">/10</span></span>
            <span className="ds-trend up">+0.4 vs previous cycle</span>
          </div>
        </div>
      </div>

      <div className="dei-main-grid">
        {/* Left Column - Charts */}
        <div className="dei-charts-col">
          
          {/* Chart 1: Funnel Drop-off */}
          <div className="dei-chart-card">
            <div className="chart-header">
              <h3>Hiring Funnel Representation</h3>
              <select className="chart-filter"><option>All Roles</option></select>
            </div>
            <div className="chart-body visual-funnel">
              <div className="funnel-row">
                <span className="f-label">Sourced</span>
                <div className="f-bar-container">
                  <div className="f-bar bg-blue" style={{ width: '51%' }}>51% M</div>
                  <div className="f-bar bg-pink" style={{ width: '45%' }}>45% F</div>
                  <div className="f-bar bg-gray" style={{ width: '4%' }}></div>
                </div>
              </div>
              <div className="funnel-row">
                <span className="f-label">Screened</span>
                <div className="f-bar-container">
                  <div className="f-bar bg-blue" style={{ width: '55%' }}>55% M</div>
                  <div className="f-bar bg-pink" style={{ width: '42%' }}>42% F</div>
                  <div className="f-bar bg-gray" style={{ width: '3%' }}></div>
                </div>
              </div>
              <div className="funnel-row">
                <span className="f-label">Interviewed</span>
                <div className="f-bar-container">
                  <div className="f-bar bg-blue" style={{ width: '62%' }}>62% M</div>
                  <div className="f-bar bg-pink" style={{ width: '36%' }}>36% F <span className="drop-alert">↓</span></div>
                  <div className="f-bar bg-gray" style={{ width: '2%' }}></div>
                </div>
              </div>
              <div className="funnel-row">
                <span className="f-label">Offered</span>
                <div className="f-bar-container">
                  <div className="f-bar bg-blue" style={{ width: '58%' }}>58% M</div>
                  <div className="f-bar bg-pink" style={{ width: '40%' }}>40% F</div>
                  <div className="f-bar bg-gray" style={{ width: '2%' }}></div>
                </div>
              </div>
            </div>
            <p className="chart-insight">
              <span className="insight-badge warn">Insight</span> 
              Noticeable 6% drop in female representation between Screening and Interview stages.
            </p>
          </div>

          {/* Chart 2: Department Heatmap Simulation */}
          <div className="dei-chart-card split-charts">
            <div className="sub-chart">
              <div className="chart-header">
                <h3>Dept Diversity Index</h3>
              </div>
              <div className="dept-bar-list">
                <div className="dept-row">
                  <span className="d-name">Marketing</span>
                  <div className="d-track"><div className="d-fill high" style={{width: '62%'}}>62%</div></div>
                </div>
                <div className="dept-row">
                  <span className="d-name">HR & Legal</span>
                  <div className="d-track"><div className="d-fill high" style={{width: '58%'}}>58%</div></div>
                </div>
                <div className="dept-row">
                  <span className="d-name">Product</span>
                  <div className="d-track"><div className="d-fill med" style={{width: '41%'}}>41%</div></div>
                </div>
                <div className="dept-row">
                  <span className="d-name">Engineering</span>
                  <div className="d-track"><div className="d-fill low" style={{width: '24%'}}>24%</div></div>
                </div>
              </div>
            </div>

            <div className="sub-chart">
              <div className="chart-header">
                <h3>Monthly Trend</h3>
              </div>
              <div className="trend-sim-container">
                {/* CSS simulated line chart for visual effect */}
                <div className="sim-chart-area">
                  <svg viewBox="0 0 100 100" className="trend-svg" preserveAspectRatio="none">
                    <path d="M0,80 C20,70 40,90 60,60 C80,30 100,20 100,20 L100,100 L0,100 Z" className="trend-area"></path>
                    <path d="M0,80 C20,70 40,90 60,60 C80,30 100,20 100,20" className="trend-line"></path>
                    <circle cx="20" cy="74" r="3" className="trend-dot"></circle>
                    <circle cx="60" cy="62" r="3" className="trend-dot"></circle>
                    <circle cx="100" cy="20" r="3" className="trend-dot active"></circle>
                  </svg>
                </div>
                <div className="trend-xaxis">
                  <span>Jul</span><span>Aug</span><span>Sep</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column - Alerts & Activity */}
        <div className="dei-alerts-col">
          <div className="alerts-card">
            <div className="card-header">
              <h3>System Imbalance Alerts</h3>
              <span className="alert-count">2 Active</span>
            </div>
            
            <div className="alerts-list">
              {MOCK_DEI_ALERTS.map(alert => (
                <div key={alert.id} className={`alert-item ${alert.type}`}>
                  <div className="alert-icon">
                    {alert.type === 'critical' ? '🚫' : alert.type === 'warning' ? '⚠️' : '💡'}
                  </div>
                  <div className="alert-content">
                    <span className="alert-msg">{alert.message}</span>
                    <div className="alert-meta">
                      <span className="a-dept">{alert.dept}</span>
                      <span className="a-time">{alert.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="btn-view-all-alerts">Configure Alert Thresholds</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DEIWidgetsPage;
