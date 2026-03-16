import React, { useState } from 'react';
import './WFMCheckPage.css';

const WFMCheckPage = () => {
  const [searchParams, setSearchParams] = useState({
    roleId: '',
    departmentId: '',
    businessUnit: 'Engineering'
  });
  const [isSearching, setIsSearching] = useState(false);
  const [wfmResult, setWfmResult] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    setIsSearching(true);
    setWfmResult(null);

    // Simulate backend lookup
    setTimeout(() => {
      setIsSearching(false);
      
      // Mock logic: If role ID includes "DEV", approve it. Otherwise, flag it.
      if (searchParams.roleId.toUpperCase().includes('DEV') || searchParams.roleId === '') {
        setWfmResult({
          status: 'APPROVED',
          headcountStatus: 'Allocated',
          approvedPositions: 3,
          filledPositions: 1,
          departmentOwner: 'Sarah Jenkins (VP Engineering)',
          budgetCode: 'ENG-2026-Q3-01',
          lastUpdated: 'Today, 09:00 AM'
        });
      } else {
        setWfmResult({
          status: 'FLAGGED',
          headcountStatus: 'Over-allocated',
          approvedPositions: 1,
          filledPositions: 1,
          departmentOwner: 'Marcus Thorne (Director)',
          budgetCode: 'MKT-2026-Q3-12',
          lastUpdated: 'Yesterday, 14:30 PM'
        });
      }
    }, 1200);
  };

  const resetSearch = () => {
    setWfmResult(null);
    setSearchParams({ roleId: '', departmentId: '', businessUnit: 'Engineering' });
  };

  return (
    <div className="wfm-check-page">
      <header className="wfm-header">
        <div className="wfm-header-left">
          <span className="wfm-eyebrow">HR OPS · WORKFLOW GATE</span>
          <h1>Workforce Management Check</h1>
          <p className="wfm-subtitle">Verify approved headcount and budget allocation before advancing requisitions.</p>
        </div>
      </header>

      <div className="wfm-content-grid">
        {/* Left Side: Search Panel */}
        <div className="wfm-panel search-panel">
          <div className="panel-header">
            <h3>WFM Verification Query</h3>
          </div>
          <form className="wfm-form" onSubmit={handleSearch}>
            <div className="form-group">
              <label>Role / Requisition ID</label>
              <input 
                type="text" 
                placeholder="e.g. REQ-DEV-892" 
                value={searchParams.roleId}
                onChange={(e) => setSearchParams({...searchParams, roleId: e.target.value})}
              />
              <span className="input-hint">Tip: Use "DEV" in ID to simulate an approved state.</span>
            </div>
            
            <div className="form-group">
              <label>Department ID</label>
              <input 
                type="text" 
                placeholder="e.g. DEPT-400" 
                value={searchParams.departmentId}
                onChange={(e) => setSearchParams({...searchParams, departmentId: e.target.value})}
              />
            </div>
            
            <div className="form-group">
              <label>Business Unit</label>
              <select 
                value={searchParams.businessUnit}
                onChange={(e) => setSearchParams({...searchParams, businessUnit: e.target.value})}
              >
                <option>Engineering</option>
                <option>Product</option>
                <option>Marketing</option>
                <option>Sales</option>
                <option>Operations</option>
              </select>
            </div>
            
            <div className="form-actions">
              <button 
                type="button" 
                className="btn-wfm-outline" 
                onClick={resetSearch}
                disabled={isSearching}
              >
                Clear
              </button>
              <button 
                type="submit" 
                className="btn-wfm-primary"
                disabled={isSearching}
              >
                {isSearching ? 'Verifying WFM Database...' : 'Run WFM Check'}
              </button>
            </div>
          </form>
        </div>

        {/* Right Side: Result Panel */}
        <div className="wfm-panel result-panel">
          <div className="panel-header">
            <h3>Verification Result</h3>
          </div>
          
          <div className="result-content-area">
            {!wfmResult && !isSearching ? (
              <div className="wfm-empty-state">
                <div className="w-icon">🔍</div>
                <h4>Awaiting Query</h4>
                <p>Run a WFM check to verify headcount allocation.</p>
              </div>
            ) : isSearching ? (
              <div className="wfm-loading-state">
                <div className="w-spinner"></div>
                <h4>Querying Workday/WFM Network...</h4>
                <p>Cross-referencing budget allocation and active requisitions.</p>
              </div>
            ) : (
              <div className="wfm-result-data">
                {/* Status Hero Block */}
                <div className={`result-hero ${wfmResult.status.toLowerCase()}`}>
                  <div className="rh-icon">
                    {wfmResult.status === 'APPROVED' ? '✅' : '⛔'}
                  </div>
                  <div className="rh-text">
                    <h4>WFM Allocation: {wfmResult.status}</h4>
                    <p>{wfmResult.status === 'APPROVED' ? 'Valid headcount exists for this requisition.' : 'No active headcount available on budget.'}</p>
                  </div>
                </div>

                {/* Details Grid */}
                <div className="details-grid">
                  <div className="detail-item">
                    <span className="d-label">Headcount Status</span>
                    <span className={`d-value ${wfmResult.status.toLowerCase()}`}>
                      {wfmResult.headcountStatus}
                    </span>
                  </div>
                  <div className="detail-item">
                    <span className="d-label">Approved Positions</span>
                    <span className="d-value">{wfmResult.approvedPositions}</span>
                  </div>
                  <div className="detail-item">
                    <span className="d-label">Available to Fill</span>
                    <span className="d-value hl-bold">{wfmResult.approvedPositions - wfmResult.filledPositions}</span>
                  </div>
                  <div className="detail-item">
                    <span className="d-label">Budget Code</span>
                    <span className="d-value">{wfmResult.budgetCode}</span>
                  </div>
                  <div className="detail-item full-width">
                    <span className="d-label">Department Owner</span>
                    <span className="d-value">{wfmResult.departmentOwner}</span>
                  </div>
                </div>

                {/* Decision Actions */}
                <div className="decision-actions">
                  <span className="da-label">Required Workflow Routing</span>
                  <div className="da-buttons">
                    <button 
                      className={`btn-decision primary ${wfmResult.status !== 'APPROVED' ? 'disabled' : ''}`}
                      disabled={wfmResult.status !== 'APPROVED'}
                    >
                      Proceed to Stage 3 (External Check)
                    </button>
                    <button className="btn-decision secondary">
                      Route to Internal Talent Check
                    </button>
                    {wfmResult.status !== 'APPROVED' && (
                      <button className="btn-decision danger">
                        Request Exception from Finance
                      </button>
                    )}
                  </div>
                </div>
                
                <div className="wfm-timestamp">Data Last Synced: {wfmResult.lastUpdated}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WFMCheckPage;
