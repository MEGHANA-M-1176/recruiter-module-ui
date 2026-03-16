import React, { useState, useEffect } from 'react';
import './OfferLetterPage.css';
import { OFFER_LETTER_DRAFT_TEMPLATE } from '../../constants/OfferLetterPrompts';

// Mock Data
const MOCK_CANDIDATE = {
  name: 'Asha Nair',
  role: 'Senior Data Engineer',
  location: 'Bengaluru',
  scores: {
    skill: 1.20,     // S 88
    task: 1.25,      // T Strong
    time: 1.10,      // Ti High
    will: 1.15,      // W High
    scarcity: 1.25   // Sc High
  }
};

const MARKET_P50 = 2800000;
const MARKET_P75 = 3300000;
const FMV_MIN = MARKET_P50 * 0.9;
const FMV_MID = MARKET_P50;
const FMV_MAX = MARKET_P75;

const APPROVER_ROLES = ['Leadership', 'Account Manager', 'Demand Manager'];

const formatCurrency = (value) => {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumSignificantDigits: 4 }).format(value);
};

const OfferLetterPage = () => {
  // Offer Lifecycle State
  const [offerStatus, setOfferStatus] = useState('DRAFT'); // DRAFT, PENDING_APPROVAL, APPROVED, SENT_TO_CANDIDATE

  // Evaluation & Band State
  const [cmValue, setCmValue] = useState(1.0);
  const [bands, setBands] = useState({ R1: 0, R2: 0, R3: 0 });
  const [selectedBand, setSelectedBand] = useState('R2');
  
  // Custom Override State
  const [compMode, setCompMode] = useState('CM_RECOMMENDED'); // CM_RECOMMENDED, CUSTOM_OVERRIDE
  const [customCTC, setCustomCTC] = useState('');
  const [overrideReason, setOverrideReason] = useState('');

  // Approver State
  const [approverRole, setApproverRole] = useState('');
  
  // Generation State
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedLetter, setGeneratedLetter] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  // Calculate CM on Mount
  useEffect(() => {
    const { skill, task, time, will, scarcity } = MOCK_CANDIDATE.scores;
    const computedCM = (0.35 * skill) + (0.25 * task) + (0.15 * time) + (0.15 * will) + (0.10 * scarcity);
    const cm = Math.min(computedCM, 1.35); // Capped at 1.35
    setCmValue(cm);

    setBands({
      R1: FMV_MIN * cm,
      R2: FMV_MID * cm,
      R3: FMV_MAX * cm
    });
  }, []);

  const getFinalCTC = () => {
    if (compMode === 'CM_RECOMMENDED') {
      return bands[selectedBand];
    }
    return customCTC || 0;
  };

  const handleGenerate = () => {
    setIsGenerating(true);
    setIsEditing(false);
    setTimeout(() => {
      let generated = OFFER_LETTER_DRAFT_TEMPLATE
        .replace(/\[Candidate Name\]/g, MOCK_CANDIDATE.name)
        .replace(/\[Role Title\]/g, MOCK_CANDIDATE.role)
        .replace(/\[Final CTC Amount\]/g, formatCurrency(getFinalCTC()));
      
      setGeneratedLetter(generated);
      setIsGenerating(false);
    }, 1200);
  };

  const handleSubmitApproval = () => {
    if (compMode === 'CUSTOM_OVERRIDE' && !overrideReason) {
      alert("Override reason is mandatory when using Custom Compensation.");
      return;
    }
    if (!approverRole) {
      alert("Please select an approver role.");
      return;
    }
    setOfferStatus('PENDING_APPROVAL');
  };

  const mockApprove = () => {
    setOfferStatus('APPROVED');
  };

  const handleReleaseOffer = () => {
    if (offerStatus !== 'APPROVED') return;
    setOfferStatus('SENT_TO_CANDIDATE');
    alert(`Offer released to ${MOCK_CANDIDATE.name}!`);
  };

  return (
    <div className="offer-letter-page">
      <header className="ol-header">
        <div className="ol-header-left">
          <span className="ol-eyebrow">STAGE 8 · OFFER & ACCEPTANCE</span>
          <h1>Offer Letter Studio</h1>
          <p className="ol-subtitle">Generate data-driven offers with full approval workflow and validation bounds.</p>
        </div>
        <div className="ol-header-actions">
          <div className={`status-badge status-${offerStatus.toLowerCase()}`}>{offerStatus.replace(/_/g, ' ')}</div>
        </div>
      </header>

      <div className="ol-workspace-grid">
        <div className="ol-workspace-left">
          
          {/* Internal Metrics - Hidden from Candidate */}
          <div className="ol-card internal-card">
            <div className="card-header">
              <h3>Compensation Engine (INTERNAL ONLY)</h3>
              <span className="cm-badge">CM: {cmValue.toFixed(2)}</span>
            </div>
            
            <div className="comp-mode-toggle">
              <button 
                className={`mode-btn ${compMode === 'CM_RECOMMENDED' ? 'active' : ''}`}
                onClick={() => setCompMode('CM_RECOMMENDED')}
                disabled={offerStatus !== 'DRAFT'}
              >
                CM-Recommended Mode
              </button>
              <button 
                className={`mode-btn ${compMode === 'CUSTOM_OVERRIDE' ? 'active' : ''}`}
                onClick={() => setCompMode('CUSTOM_OVERRIDE')}
                disabled={offerStatus !== 'DRAFT'}
              >
                Custom Override Mode
              </button>
            </div>

            {compMode === 'CM_RECOMMENDED' && (
              <div className="band-selector">
                <label className={`band-option ${selectedBand === 'R1' ? 'selected' : ''}`}>
                  <input type="radio" checked={selectedBand === 'R1'} onChange={() => setSelectedBand('R1')} disabled={offerStatus !== 'DRAFT'}/>
                  <div className="band-info">
                    <span className="band-name">R1: Fair Base Offer</span>
                    <span className="band-value">{formatCurrency(bands.R1)}</span>
                  </div>
                </label>
                <label className={`band-option ${selectedBand === 'R2' ? 'selected' : ''}`}>
                  <input type="radio" checked={selectedBand === 'R2'} onChange={() => setSelectedBand('R2')} disabled={offerStatus !== 'DRAFT'}/>
                  <div className="band-info">
                    <span className="band-name">R2: Competitive Offer <span className="recommended-tag">Recommended</span></span>
                    <span className="band-value">{formatCurrency(bands.R2)}</span>
                  </div>
                </label>
                <label className={`band-option ${selectedBand === 'R3' ? 'selected' : ''}`}>
                  <input type="radio" checked={selectedBand === 'R3'} onChange={() => setSelectedBand('R3')} disabled={offerStatus !== 'DRAFT'}/>
                  <div className="band-info">
                    <span className="band-name">R3: Premium Lock-In</span>
                    <span className="band-value">{formatCurrency(bands.R3)}</span>
                  </div>
                </label>
              </div>
            )}

            {compMode === 'CUSTOM_OVERRIDE' && (
              <div className="custom-override-form">
                <div className="ol-form-group">
                  <label>Custom CTC Value (INR)</label>
                  <input type="number" 
                    value={customCTC} 
                    onChange={(e) => setCustomCTC(e.target.value)}
                    placeholder="e.g. 3500000"
                    disabled={offerStatus !== 'DRAFT'}
                  />
                </div>
                <div className="ol-form-group">
                  <label>Override Reason (Mandatory)</label>
                  <textarea 
                    value={overrideReason} 
                    onChange={(e) => setOverrideReason(e.target.value)}
                    placeholder="Provide business justification for bypass..."
                    disabled={offerStatus !== 'DRAFT'}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Workflow & Approvals */}
          <div className="ol-card">
            <h3>Approval Routing</h3>
            <p className="ol-card-desc">Select designated approver before submission.</p>
            <div className="ol-form-group">
              <label>Select Approver Role</label>
              <select value={approverRole} onChange={(e) => setApproverRole(e.target.value)} disabled={offerStatus !== 'DRAFT'}>
                <option value="">-- Choose Approver --</option>
                {APPROVER_ROLES.map(role => (
                  <option key={role} value={role}>{role}</option>
                ))}
              </select>
            </div>
            
            <div className="action-buttons">
              {offerStatus === 'DRAFT' && (
                <button className="btn-ol-secondary" onClick={handleGenerate} disabled={isGenerating}>
                  {isGenerating ? 'Generating...' : '1. Generate Letter'}
                </button>
              )}
              {offerStatus === 'DRAFT' && generatedLetter && (
                <button className="btn-ol-primary" onClick={handleSubmitApproval}>
                  2. Submit for Approval
                </button>
              )}
              {offerStatus === 'PENDING_APPROVAL' && (
                <button className="btn-ol-success" onClick={mockApprove}>
                  [Mock] Approver: Approve
                </button>
              )}
              {(offerStatus === 'APPROVED' || offerStatus === 'SENT_TO_CANDIDATE') && (
                <button className="btn-ol-primary" onClick={handleReleaseOffer} disabled={offerStatus === 'SENT_TO_CANDIDATE'}>
                  {offerStatus === 'SENT_TO_CANDIDATE' ? 'Offer Released' : 'Release Offer to Candidate'}
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="ol-workspace-right">
          <div className="ol-preview-card">
            <div className="preview-header">
              <h3>Narrative Offer Draft</h3>
              <div className="header-actions">
                {generatedLetter && offerStatus === 'DRAFT' && !isEditing && (
                  <button className="btn-edit-sm" onClick={() => setIsEditing(true)}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
                    Edit Draft
                  </button>
                )}
                {isEditing && (
                  <button className="btn-save-sm" onClick={() => setIsEditing(false)}>
                    Done Editing
                  </button>
                )}
                <div className="safe-badge">Candidate Safe</div>
              </div>
            </div>
            <div className="preview-content">
              {isGenerating ? (
                <div className="loading-state">
                  Scanning bounds & validating AI output...
                  <br/><span className="sub">Ensuring no internal scores or labels are present.</span>
                </div>
              ) : generatedLetter ? (
                isEditing ? (
                  <textarea 
                    className="letter-edit-area" 
                    value={generatedLetter} 
                    onChange={(e) => setGeneratedLetter(e.target.value)}
                    autoFocus
                  />
                ) : (
                  <pre className="letter-output">{generatedLetter}</pre>
                )
              ) : (
                <div className="empty-state">
                  <p>Candidate: {MOCK_CANDIDATE.name}</p>
                  <p>Final CTC Configuration: <strong>{formatCurrency(getFinalCTC())}</strong></p>
                  <br/>
                  <p>Click "Generate Letter" to run the narrative engine.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferLetterPage;
