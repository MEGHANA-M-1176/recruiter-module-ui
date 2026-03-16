import React from 'react';
import './AIPredictiveIndicesPage.css';

const AIPredictiveIndicesPage = () => {
  return (
    <div className="ai-predictive-page">
      <header className="aip-header">
        <div className="aip-header-left">
          <span className="aip-eyebrow">RECRUITER CONSOLE · AI INTELLIGENCE</span>
          <h1>Predictive Hiring Indices</h1>
          <p className="aip-subtitle">AI-driven forecasts on candidate performance, ramp velocity, and long-term potential.</p>
        </div>
        <div className="aip-header-actions">
          <button className="btn-aip-outline">Compare Candidates</button>
          <button className="btn-aip-primary">Generate Forecast Report</button>
        </div>
      </header>

      {/* Candidate Summary Block */}
      <div className="aip-candidate-summary">
        <div className="c-avatar-ring">
          <div className="c-avatar">AS</div>
        </div>
        <div className="c-info">
          <h2>Asha Nair</h2>
          <div className="c-meta-row">
            <span className="c-role">Senior Data Engineer</span>
            <span className="c-divider">•</span>
            <span className="c-dept">Engineering</span>
            <span className="c-divider">•</span>
            <span className="c-id">CND-89021</span>
          </div>
          <p className="c-ai-summary">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
            <strong>AI Assessment:</strong> Asha demonstrates exceptional alignment with Mantrika's core engineering values. Her predictive models strongly suggest rapid autonomous productivity within 3.5 weeks of onboarding.
          </p>
        </div>
        <div className="c-status-container">
          <span className="status-badge cleared">Selected</span>
        </div>
      </div>

      <div className="aip-main-grid">
        {/* Left Column: Indices & Insights */}
        <div className="aip-left-col">
          
          {/* Main Score Cards Area */}
          <div className="score-cards-wrapper">
            {/* Card 1: Ramp Velocity */}
            <div className="aip-score-card">
              <div className="sc-header">
                <div className="sc-title-area">
                  <h3>Ramp Velocity Index</h3>
                  <span className="tooltip-icon" title="Predicted time to full productivity based on technical overlap.">ℹ</span>
                </div>
                <span className="trend-badge positive">Top 10% Fast</span>
              </div>
              <div className="sc-dial-container">
                <div className="velocity-dial">
                  <svg viewBox="0 0 36 36" className="circular-chart blue">
                    <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    <path className="circle" strokeDasharray="85, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  </svg>
                  <div className="dial-value">
                    <span className="dv-num">3.5</span>
                    <span className="dv-lbl">Weeks</span>
                  </div>
                </div>
                <div className="sc-details">
                  <div className="det-row">
                    <span className="det-icon">✅</span>
                    <span className="det-txt">Tech Stack Match (94%)</span>
                  </div>
                  <div className="det-row">
                    <span className="det-icon">✅</span>
                    <span className="det-txt">Domain Expertise (High)</span>
                  </div>
                  <div className="det-row">
                    <span className="det-icon">⚠️</span>
                    <span className="det-txt">Internal Tools Gap</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Candidate Potential */}
            <div className="aip-score-card">
              <div className="sc-header">
                <div className="sc-title-area">
                  <h3>Candidate Potential Index</h3>
                  <span className="tooltip-icon" title="Long-term growth trajectory and leadership fitness.">ℹ</span>
                </div>
                <span className="trend-badge positive">Exceptional</span>
              </div>
              <div className="sc-dial-container">
                <div className="velocity-dial">
                  <svg viewBox="0 0 36 36" className="circular-chart purple">
                    <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    <path className="circle" strokeDasharray="92, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  </svg>
                  <div className="dial-value">
                    <span className="dv-num">92</span>
                    <span className="dv-lbl">/100 CPI</span>
                  </div>
                </div>
                <div className="sc-details">
                  <div className="det-row">
                    <span className="det-icon">📈</span>
                    <span className="det-txt">High Learning Agility</span>
                  </div>
                  <div className="det-row">
                    <span className="det-icon">🎯</span>
                    <span className="det-txt">Strategic Thinking Base</span>
                  </div>
                  <div className="det-row">
                    <span className="det-icon">🛡️</span>
                    <span className="det-txt">Low Flight Risk</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Benchmark Chart Panel */}
          <div className="aip-chart-panel">
            <div className="panel-header">
              <h3>Benchmark Comparison: Senior Data Engineer Cohort</h3>
              <select className="bench-filter"><option>Trailing 12 Months</option></select>
            </div>
            
            <div className="scatter-plot-sim">
              {/* Simulated CSS Scatter Plot Grid */}
              <div className="y-axis-lbl">Candidate Potential (CPI) →</div>
              <div className="x-axis-lbl">← Ramp Velocity (Weeks to Impact)</div>
              
              <div className="scatter-grid">
                {/* Benchmark dots */}
                <div className="plot-dot bench" style={{ left: '80%', bottom: '40%' }} title="Baseline: 8 Weeks / 40 CPI"></div>
                <div className="plot-dot bench" style={{ left: '60%', bottom: '55%' }}></div>
                <div className="plot-dot bench" style={{ left: '50%', bottom: '60%' }}></div>
                <div className="plot-dot bench" style={{ left: '45%', bottom: '70%' }}></div>
                <div className="plot-dot bench" style={{ left: '30%', bottom: '65%' }}></div>
                
                {/* Quadrant Lines */}
                <div className="quad-hline"></div>
                <div className="quad-vline"></div>
                
                {/* Asha Nair highlighted dot (Fast Ramp, High Potential) */}
                <div className="plot-dot highlight pulse" style={{ left: '15%', bottom: '92%' }}>
                  <div className="dot-label">Asha Nair</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: AI Insights & Recommendations */}
        <div className="aip-right-col">
          <div className="aip-insight-panel">
            <div className="panel-header">
              <h3>AI Operations Insight</h3>
              <span className="ai-flash">✧ Intelligence Hub</span>
            </div>
            
            <div className="insight-body">
              <p className="insight-primary-text">
                Candidate exhibits a rare <strong>High Potential + Fast Ramp</strong> combination, putting them in the top 4% of historical applicants for this specific Engineering pod.
              </p>
              
              <div className="insight-factors">
                <h4>Key Drivers:</h4>
                <ul>
                  <li>Direct experience with Apache Kafka (Req matching factor 1.8x).</li>
                  <li>Exceptional communication scores (Language clarity 98%).</li>
                  <li>Problem-solving patterns mirror top performing internal employees.</li>
                </ul>
              </div>
            </div>

            <div className="recommendation-zone">
              <h4>System Recommendations</h4>
              
              <div className="rec-item success">
                <div className="rec-icon">⚡</div>
                <div className="rec-text">
                  <span className="rt-title">Strong Ramp</span>
                  <span className="rt-desc">Fast-track onboarding process. Candidate can bypass introductory pipeline training.</span>
                </div>
              </div>

              <div className="rec-item success">
                <div className="rec-icon">🌟</div>
                <div className="rec-text">
                  <span className="rt-title">High Potential</span>
                  <span className="rt-desc">Flag for early leadership track inclusion within first 18 months.</span>
                </div>
              </div>
              
              <div className="rec-item warning">
                <div className="rec-icon">🛠️</div>
                <div className="rec-text">
                  <span className="rt-title">Needs Support</span>
                  <span className="rt-desc">Provide Day 1 access to internal deployment tools documentation to bridge the only identified knowledge gap.</span>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AIPredictiveIndicesPage;
