import React, { useState } from 'react';
import './CounterOfferPage.css';

const CounterOfferPage = () => {
  const [originalOffer] = useState({
    base: 185000,
    equity: 80000,
    signon: 20000,
    bonus: 15
  });

  const [counterOffer] = useState({
    base: 205000,
    equity: 120000,
    signon: 30000,
    bonus: 15,
    reason: "Candidate has competing offer from Tier-1 competitor with higher base and equity structure."
  });

  const [simulation, setSimulation] = useState({
    base: 195000,
    equity: 100000,
    signon: 25000
  });

  const [isSimulating, setIsSimulating] = useState(false);
  const [approvalStatus, setApprovalStatus] = useState('AWAITING_SIMULATION'); // AWAITING_SIMULATION, PENDING_APPROVAL, SENT

  const handleSimulate = () => {
    setIsSimulating(true);
    setTimeout(() => {
      setIsSimulating(false);
      setApprovalStatus('PENDING_APPROVAL');
    }, 1000);
  };

  const handleSendApproval = () => {
    setApprovalStatus('SENT');
  };

  return (
    <div className="counter-offer-page">
      <header className="cop-header">
        <div className="cop-header-left">
          <span className="cop-eyebrow">RECRUITER CONSOLE · NEGOTIATION HUB</span>
          <h1>Counteroffer & Revised Offer Management</h1>
          <p className="cop-subtitle">Review candidate requests, model revised scenarios, and manage re-approvals.</p>
        </div>
        <div className="cop-header-actions">
          <button className="btn-cop-outline" onClick={() => setApprovalStatus('AWAITING_SIMULATION')}>Reset Negotiation</button>
        </div>
      </header>

      <div className="cop-main-grid">
        <div className="cop-left-col">
          {/* Comparison Panel */}
          <div className="cop-panel comp-panel">
            <div className="panel-header">
              <h3>Offer vs. Counteroffer Comparison</h3>
            </div>
            <div className="comparison-table">
              <div className="ct-row ct-head">
                <div className="ct-cell">Component</div>
                <div className="ct-cell">Original Offer</div>
                <div className="ct-cell highlight">Candidate Request</div>
              </div>
              <div className="ct-row">
                <div className="ct-cell">Base Salary</div>
                <div className="ct-cell">${originalOffer.base.toLocaleString()}</div>
                <div className="ct-cell highlight">${counterOffer.base.toLocaleString()} <span className="diff-up">▲ 10.8%</span></div>
              </div>
              <div className="ct-row">
                <div className="ct-cell">Equity (4-yr)</div>
                <div className="ct-cell">${originalOffer.equity.toLocaleString()}</div>
                <div className="ct-cell highlight">${counterOffer.equity.toLocaleString()} <span className="diff-up">▲ 50%</span></div>
              </div>
              <div className="ct-row">
                <div className="ct-cell">Sign-on Bonus</div>
                <div className="ct-cell">${originalOffer.signon.toLocaleString()}</div>
                <div className="ct-cell highlight">${counterOffer.signon.toLocaleString()} <span className="diff-up">▲ 50%</span></div>
              </div>
              <div className="ct-row ct-total">
                <div className="ct-cell">Year 1 Total</div>
                <div className="ct-cell">$247,750</div>
                <div className="ct-cell highlight">$280,000 <span className="diff-up">▲ 13%</span></div>
              </div>
            </div>
            <div className="counter-reason">
              <h5>Candidate Justification:</h5>
              <p>"{counterOffer.reason}"</p>
            </div>
          </div>

          {/* Simulation Panel */}
          <div className="cop-panel sim-panel">
            <div className="panel-header">
              <h3>Compensation Scenario Modeler</h3>
              <span className="ai-badge">AI Assistant Active</span>
            </div>
            <div className="sim-controls">
              <div className="sim-input-group">
                <label>Revised Base Salary: <strong>${simulation.base.toLocaleString()}</strong></label>
                <input 
                  type="range" min="185000" max="210000" step="1000" 
                  value={simulation.base} 
                  onChange={(e) => setSimulation({...simulation, base: parseInt(e.target.value)})}
                />
              </div>
              <div className="sim-input-group">
                <label>Revised Equity: <strong>${simulation.equity.toLocaleString()}</strong></label>
                <input 
                  type="range" min="80000" max="150000" step="5000" 
                  value={simulation.equity} 
                  onChange={(e) => setSimulation({...simulation, equity: parseInt(e.target.value)})}
                />
              </div>
              <div className="sim-input-group">
                <label>Revised Sign-on: <strong>${simulation.signon.toLocaleString()}</strong></label>
                <input 
                  type="range" min="20000" max="50000" step="5000" 
                  value={simulation.signon} 
                  onChange={(e) => setSimulation({...simulation, signon: parseInt(e.target.value)})}
                />
              </div>
            </div>
            <div className="sim-actions">
              <button className={`btn-cop-primary ${isSimulating ? 'loading' : ''}`} onClick={handleSimulate}>
                {isSimulating ? 'Calculating Impacts...' : 'Simulate Scenario'}
              </button>
            </div>
          </div>
        </div>

        <div className="cop-right-col">
          {/* AI Recommendation */}
          <div className="cop-panel rec-panel">
            <div className="panel-header">
              <h3>AI Recommendation</h3>
            </div>
            <div className="rec-content">
              <div className="rec-score">
                <div className="score-ring">
                  <span>88</span>
                </div>
                <p>Retention Stability Index</p>
              </div>
              <p className="rec-msg">
                Simulation at <strong>$195k / $100k</strong> sits at the 85th percentile. It is competitive enough to secure the candidate while maintaining <strong>Green</strong> budget status.
              </p>
              <div className="rec-tags">
                <span className="tag safe">✓ Within Budget</span>
                <span className="tag safe">✓ High Parity</span>
                <span className="tag warning">! Above Avg Sign-on</span>
              </div>
            </div>
          </div>

          {/* Workflow Actions */}
          <div className="negotiation-workflow">
            <div className={`wf-step ${approvalStatus !== 'AWAITING_SIMULATION' ? 'done' : 'active'}`}>
              <div className="wf-icon">1</div>
              <div className="wf-text">Model Revised Package</div>
            </div>
            <div className={`wf-step ${approvalStatus === 'SENT' ? 'done' : (approvalStatus === 'PENDING_APPROVAL' ? 'active' : '')}`}>
              <div className="wf-icon">2</div>
              <div className="wf-text">HM & Finance Re-approval</div>
            </div>
            <div className={`wf-step ${approvalStatus === 'SENT' ? 'active' : ''}`}>
              <div className="wf-icon">3</div>
              <div className="wf-text">Send Revised Offer</div>
            </div>

            <div className="wf-actions">
              <button 
                className="btn-wf primary" 
                disabled={approvalStatus === 'AWAITING_SIMULATION'}
                onClick={handleSendApproval}
              >
                {approvalStatus === 'SENT' ? 'Offer Already Sent' : 'Send for HM/Finance Approval'}
              </button>
              <button className="btn-wf outline">Close & Withdraw</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterOfferPage;
