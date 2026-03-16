import React, { useState } from 'react';
import './BGVInitiationPage.css';

const BGVInitiationPage = () => {
  const [vendor, setVendor] = useState('');
  const [region, setRegion] = useState('APAC');
  const [uploadedDocs, setUploadedDocs] = useState([]);
  const [caseStatus, setCaseStatus] = useState('DRAFT'); // DRAFT, INITIATED, COMPLETED

  const handleUpload = (e) => {
    const files = Array.from(e.target.files);
    setUploadedDocs([...uploadedDocs, ...files.map(f => f.name)]);
  };

  const handleInitiate = () => {
    if (!vendor) {
      alert('Please assign a vendor before initiation.');
      return;
    }
    setCaseStatus('INITIATED');
  };

  return (
    <div className="bgv-initiation-page">
      <header className="bgv-header">
        <div className="bgv-header-left">
          <span className="bgv-eyebrow">PRE-ONBOARDING · WORKFLOW</span>
          <h1>Background Verification Initiation</h1>
          <p className="bgv-subtitle">Trigger automated background screening, assign certified vendors, and manage candidate documentation.</p>
        </div>
        <div className="bgv-header-actions">
          <span className={`status-tag ${caseStatus.toLowerCase()}`}>{caseStatus}</span>
        </div>
      </header>

      <div className="bgv-main-grid">
        <div className="bgv-left-col">
          {/* Candidate & Role Context */}
          <div className="bgv-panel context-panel">
            <div className="panel-header">
              <h3>Candidate & Role Configuration</h3>
            </div>
            <div className="context-body">
              <div className="candidate-box">
                <div className="cb-avatar">AN</div>
                <div className="cb-info">
                  <h4>Asha Nair</h4>
                  <p>VP, Data Architecture • APAC-IN-01</p>
                </div>
              </div>
              <div className="config-grid">
                <div className="config-item">
                  <label>Service Region</label>
                  <select value={region} onChange={(e) => setRegion(e.target.value)}>
                    <option value="APAC">APAC (India, SG, AU)</option>
                    <option value="EMEA">EMEA (UK, Germany, PL)</option>
                    <option value="AMER">AMER (US, Canada, BR)</option>
                  </select>
                </div>
                <div className="config-item">
                  <label>Verification Tier</label>
                  <div className="pill-group">
                    <span className="tier-pill active">Executive (Tier 1)</span>
                    <span className="tier-pill">Standard (Tier 2)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Vendor Assignment */}
          <div className="bgv-panel vendor-panel">
            <div className="panel-header">
              <h3>Vendor Assignment</h3>
            </div>
            <div className="vendor-body">
              <div className="vendor-grid">
                <div className={`vendor-card ${vendor === 'FirstAdvantage' ? 'selected' : ''}`} onClick={() => setVendor('FirstAdvantage')}>
                  <div className="v-logo">1A</div>
                  <div className="v-info">
                    <strong>FirstAdvantage</strong>
                    <span>Global Coverage • 5-7 Day SLA</span>
                  </div>
                  <div className="v-check"></div>
                </div>
                <div className={`vendor-card ${vendor === 'Sterling' ? 'selected' : ''}`} onClick={() => setVendor('Sterling')}>
                  <div className="v-logo">S</div>
                  <div className="v-info">
                    <strong>Sterling Check</strong>
                    <span>APAC Specialized • 3-5 Day SLA</span>
                  </div>
                  <div className="v-check"></div>
                </div>
                <div className={`vendor-card ${vendor === 'Checkr' ? 'selected' : ''}`} onClick={() => setVendor('Checkr')}>
                  <div className="v-logo">C</div>
                  <div className="v-info">
                    <strong>Checkr</strong>
                    <span>Tech Focused • 2-4 Day SLA</span>
                  </div>
                  <div className="v-check"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Document Upload */}
          <div className="bgv-panel doc-panel">
            <div className="panel-header">
              <h3>Mandatory Candidate Documents</h3>
            </div>
            <div className="doc-body">
              <div className="upload-zone">
                <input type="file" multiple id="bgv-upload" onChange={handleUpload} hidden />
                <label htmlFor="bgv-upload" className="upload-label">
                  <span className="ul-icon">☁️</span>
                  <strong>Click to upload or drag and drop</strong>
                  <span>Support PDF, JPG, PNG (Max 10MB)</span>
                </label>
              </div>
              {uploadedDocs.length > 0 && (
                <div className="file-list">
                  {uploadedDocs.map((name, i) => (
                    <div key={i} className="file-item">
                      <span className="fi-icon">📄</span>
                      <span className="fi-name">{name}</span>
                      <span className="fi-status">Ready</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="bgv-right-col">
          {/* Case Status Tracker */}
          <div className="bgv-panel tracker-panel">
            <div className="panel-header">
              <h3>Case Lifecycle Tracker</h3>
            </div>
            <div className="lifecycle-track">
              <div className={`lt-node ${caseStatus !== 'DRAFT' ? 'done' : 'active'}`}>
                <div className="lt-dot"></div>
                <div className="lt-content">
                  <strong>Case Initialization</strong>
                  <span>{caseStatus === 'DRAFT' ? 'Pending Action' : 'Completed'}</span>
                </div>
              </div>
              <div className={`lt-node ${caseStatus === 'INITIATED' ? 'active' : ''}`}>
                <div className="lt-dot"></div>
                <div className="lt-content">
                  <strong>Vendor Sync</strong>
                  <span>Awaiting vendor acknowledgment</span>
                </div>
              </div>
              <div className="lt-node">
                <div className="lt-dot"></div>
                <div className="lt-content">
                  <strong>Verification in Progress</strong>
                  <span>Candidate data processing</span>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="bgv-actions">
            <button 
              className="btn-bgv primary" 
              onClick={handleInitiate}
              disabled={caseStatus !== 'DRAFT'}
            >
              Configure & Create Case
            </button>
            <button className="btn-bgv outline">Save Draft</button>
            <p className="bgv-action-note">By initiating, a secure portal link will be sent to the candidate for digital consent.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BGVInitiationPage;
