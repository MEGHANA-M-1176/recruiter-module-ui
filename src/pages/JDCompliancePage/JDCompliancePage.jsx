
import React, { useState } from 'react';
import JDComplianceForm from '../../components/JDComplianceForm/JDComplianceForm';
import JDValidationSummary from '../../components/JDValidationSummary/JDValidationSummary';
import JDValidationResults from '../../components/JDValidationResults/JDValidationResults';
import JDEmptyState from '../../components/JDEmptyState/JDEmptyState';
import WorkflowMetadataPanel from '../../components/WorkflowMetadataPanel/WorkflowMetadataPanel';
import { JD_COMPLIANCE_STATS, MOCK_VALIDATION_RESULT } from '../../mock/jdComplianceData';
import './JDCompliancePage.css';

const JDCompliancePage = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [validationResult, setValidationResult] = useState(null);

  const handleRunValidation = () => {
    setIsGenerating(true);
    setValidationResult(null);
    
    // Simulate complex AI analysis
    setTimeout(() => {
      setValidationResult(MOCK_VALIDATION_RESULT);
      setIsGenerating(false);
    }, 1800);
  };

  return (
    <div className="jd-compliance-page">
      <header className="compliance-header">
        <div className="c-header-left">
          <span className="c-eyebrow">STEP 2.2a · JOB CREATION</span>
          <h1>JD Compliance Studio</h1>
          <p className="c-subtitle">Run bias detection, inclusive language checks, and compliance validation on job descriptions before publishing</p>
        </div>
        <div className="c-header-actions">
          <button className="btn-c-ghost">Save Draft</button>
          <button className="btn-c-primary" onClick={handleRunValidation} disabled={isGenerating}>
            {isGenerating ? 'Validating...' : 'Run Validation'}
          </button>
        </div>
      </header>

      {/* Stats Row */}
      <div className="compliance-stats-row">
        <div className="c-stat-card">
          <div className="cs-header">
            <span className="cs-label">JDs Reviewed</span>
            <div className="cs-icon blue">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
            </div>
          </div>
          <span className="cs-value">{JD_COMPLIANCE_STATS.jdsReviewed}</span>
        </div>
        <div className="c-stat-card">
          <div className="cs-header">
            <span className="cs-label">Bias Flags Found</span>
            <div className="cs-icon red">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            </div>
          </div>
          <span className="cs-value">{JD_COMPLIANCE_STATS.biasFlagsFound}</span>
        </div>
        <div className="c-stat-card">
          <div className="cs-header">
            <span className="cs-label">Compliance Score</span>
            <div className="cs-icon green">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
          </div>
          <span className="cs-value">{JD_COMPLIANCE_STATS.complianceScore}%</span>
        </div>
        <div className="c-stat-card">
          <div className="cs-header">
            <span className="cs-label">Publish Ready Rate</span>
            <div className="cs-icon purple">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            </div>
          </div>
          <span className="cs-value">{JD_COMPLIANCE_STATS.publishReadyRate}%</span>
        </div>
      </div>

      <div className="compliance-workspace-grid">
        <div className="workspace-left">
          <JDComplianceForm onRunValidation={handleRunValidation} isGenerating={isGenerating} />
        </div>
        <div className="workspace-right">
          <div className="validation-panel">
            {validationResult || isGenerating ? (
              <JDValidationSummary result={validationResult} isGenerating={isGenerating} />
            ) : (
              <JDEmptyState />
            )}
          </div>
        </div>
      </div>

      {validationResult && !isGenerating && (
        <div className="results-wrapper">
          <JDValidationResults result={validationResult} />
        </div>
      )}

      <WorkflowMetadataPanel 
        dataInputs={['JD text', 'Job title', 'Department', 'Location', 'Employment type']}
        dataOutputs={['Bias flags', 'Compliance status', 'Inclusive language suggestions', 'Validation result']}
        preConditions={['JD created', 'Hiring manager logged in']}
        postConditions={['JD compliance verified', 'JD ready for publishing']}
      />
    </div>
  );
};

export default JDCompliancePage;
