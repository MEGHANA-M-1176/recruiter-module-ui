import React, { useState } from 'react';
import './BudgetValidationPage.css';

const MOCK_BUDGET_DATA = {
  candidateName: 'Rohan Sharma',
  roleTitle: 'Senior Data Engineer',
  department: 'Core Engineering',
  costCenter: 'CC-ENG-402',
  budgetCode: 'BGT-2026-ENG-Q3',
  salaryBand: 'L6 (140k - 190k base)',
  proposedCompensation: {
    baseSalary: '$185,000',
    bonusTarget: '15%',
    equity: '$60,000 (over 4 yrs)',
    signOn: '$20,000'
  },
  budgetStatus: 'Within Range',
  totalFirstYearCost: '$247,750',
  allocatedBudget: '$250,000'
};

const BudgetValidationPage = () => {
  const [decision, setDecision] = useState(null);
  const [notes, setNotes] = useState('');

  const handleAction = (status) => {
    setDecision(status);
  };

  const getPercentage = () => {
    // 247750 / 250000 = ~99.1%
    return '99.1%';
  };

  return (
    <div className="budget-validation-page">
      <header className="bv-header">
        <div className="bv-header-left">
          <span className="bv-eyebrow">FINANCE · COST CONSOLE</span>
          <h1>Budget & Band Validation</h1>
          <p className="bv-subtitle">Ensure proposed compensation packages align with departmental cost centers and band structures.</p>
        </div>
      </header>

      <div className="bv-main-grid">
        {/* Left Column: Offer Details */}
        <div className="bv-left-col">
          
          <div className="bv-panel">
            <div className="bv-panel-header">
              <h3>Offer Metadata</h3>
              <span className="status-badge active">Pending Validation</span>
            </div>
            
            <div className="bv-candidate-info">
              <div className="ci-block">
                <span className="ci-lbl">Candidate</span>
                <span className="ci-val">{MOCK_BUDGET_DATA.candidateName}</span>
              </div>
              <div className="ci-block">
                <span className="ci-lbl">Target Role</span>
                <span className="ci-val">{MOCK_BUDGET_DATA.roleTitle}</span>
              </div>
              <div className="ci-block">
                <span className="ci-lbl">Department</span>
                <span className="ci-val">{MOCK_BUDGET_DATA.department}</span>
              </div>
            </div>

            <div className="bv-cards-grid">
              <div className="bv-info-card">
                <span className="ic-icon">🏢</span>
                <div className="ic-content">
                  <span className="ic-label">Cost Center</span>
                  <span className="ic-value">{MOCK_BUDGET_DATA.costCenter}</span>
                </div>
              </div>
              <div className="bv-info-card">
                <span className="ic-icon">🔢</span>
                <div className="ic-content">
                  <span className="ic-label">Budget Code</span>
                  <span className="ic-value">{MOCK_BUDGET_DATA.budgetCode}</span>
                </div>
              </div>
              <div className="bv-info-card">
                <span className="ic-icon">📊</span>
                <div className="ic-content">
                  <span className="ic-label">Salary Band</span>
                  <span className="ic-value">{MOCK_BUDGET_DATA.salaryBand}</span>
                </div>
              </div>
              <div className="bv-info-card highlight">
                <span className="ic-icon">💰</span>
                <div className="ic-content">
                  <span className="ic-label">Proposed Base</span>
                  <span className="ic-value">{MOCK_BUDGET_DATA.proposedCompensation.baseSalary}</span>
                </div>
              </div>
            </div>

            <div className="comp-breakdown">
              <h4>Compensation Breakdown Summary</h4>
              <div className="cb-table">
                <div className="cb-row">
                  <span>Base Salary</span>
                  <span>{MOCK_BUDGET_DATA.proposedCompensation.baseSalary}</span>
                </div>
                <div className="cb-row">
                  <span>Bonus Target</span>
                  <span>{MOCK_BUDGET_DATA.proposedCompensation.bonusTarget}</span>
                </div>
                <div className="cb-row">
                  <span>Sign-on Bonus (One-time)</span>
                  <span>{MOCK_BUDGET_DATA.proposedCompensation.signOn}</span>
                </div>
                <div className="cb-row">
                  <span>Equity Vest (Year 1)</span>
                  <span>$15,000</span>
                </div>
                <div className="cb-row total">
                  <span>Total First-Year Cost Target</span>
                  <span>{MOCK_BUDGET_DATA.totalFirstYearCost}</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Validation & Action */}
        <div className="bv-right-col">
          <div className="bv-panel validation-panel">
            <div className="bv-panel-header">
              <h3>System Validation</h3>
            </div>

            <div className="v-status-hero">
              <div className="v-icon">✓</div>
              <div className="v-text">
                <h4>Budget Check: {MOCK_BUDGET_DATA.budgetStatus}</h4>
                <p>The total package meets the approved structural bands for L6 engineering.</p>
              </div>
            </div>

            <div className="budget-utilization">
              <div className="bu-header">
                <span className="bu-lbl">Budget Allocation Utilized</span>
                <span className="bu-pct">{getPercentage()}</span>
              </div>
              <div className="bu-track">
                <div className="bu-fill warning" style={{ width: getPercentage() }}></div>
              </div>
              <div className="bu-footer">
                <span>Total Package: {MOCK_BUDGET_DATA.totalFirstYearCost}</span>
                <span>Max Allocated: {MOCK_BUDGET_DATA.allocatedBudget}</span>
              </div>
            </div>

            <div className="band-alignment">
              <h4>Band Position (Base Salary)</h4>
              <div className="ba-chart">
                <span className="ba-min">$140k</span>
                <div className="ba-line">
                  <div className="ba-marker" style={{ left: '90%' }}>
                    <div className="ba-tooltip">$185k (P90)</div>
                  </div>
                </div>
                <span className="ba-max">$190k</span>
              </div>
              <p className="ba-note">Candidate is at the 90th percentile of the L6 band. This leaves limited room for standard merit cycles before promotion is required.</p>
            </div>

            <div className="action-zone">
              <textarea 
                className="finance-notes"
                placeholder="Add condition or rejection notes for the recruiter..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                disabled={decision !== null}
              ></textarea>
              
              {decision === null ? (
                <div className="btn-group-vertical">
                  <button className="btn-fin btn-approve" onClick={() => handleAction('Approved')}>
                    Approve Budget Allocation
                  </button>
                  <button className="btn-fin btn-return" onClick={() => handleAction('Returned')}>
                    Return & Request Adjustment
                  </button>
                </div>
              ) : (
                <div className={`fin-decision-alert ${decision.toLowerCase()}`}>
                  <div className="fda-icon">{decision === 'Approved' ? '✅' : '↩'}</div>
                  <div className="fda-content">
                    <strong>Budget {decision}</strong>
                    <span>Notification sent to the hiring team.</span>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetValidationPage;
