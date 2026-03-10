
import React, { useState } from 'react';
import BrandKitStats from '../../components/BrandKitStats/BrandKitStats';
import BrandKitForm from '../../components/BrandKitForm/BrandKitForm';
import BrandKitOutput from '../../components/BrandKitOutput/BrandKitOutput';
import BrandKitEmptyState from '../../components/BrandKitEmptyState/BrandKitEmptyState';
import WorkflowMetadataPanel from '../../components/WorkflowMetadataPanel/WorkflowMetadataPanel';
import { BRAND_KIT_STATS, MOCK_GENERATED_KIT } from '../../mock/brandKitData';
import './BrandKitPage.css';

const BrandKitPage = () => {
  const [generatedData, setGeneratedData] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    // Simulate AI generation time
    setTimeout(() => {
      setGeneratedData(MOCK_GENERATED_KIT);
      setIsGenerating(false);
    }, 1500);
  };

  const handleAction = (action) => {
    alert(`${action} triggered for the entire Brand Kit.`);
  };

  return (
    <div className="brand-kit-page-wrapper">
      <header className="brand-kit-page-header">
        <div className="bk-header-top">
          <div className="bk-title-group">
            <span className="bk-eyebrow">STEP 3.1 · BRAND, ATTRACT & OUTREACH</span>
            <h1>Brand Kit Studio</h1>
            <p className="bk-subtitle">Generate role-specific employer branding content, EVP framing, and outreach-ready messaging from role details</p>
          </div>
          <div className="bk-header-actions">
            <button className="btn-bk-ghost" onClick={() => handleAction('Save Draft')}>Save Draft</button>
            <button className="btn-bk-primary" onClick={handleGenerate} disabled={isGenerating}>
              {isGenerating ? (
                <>
                  <span className="spinner"></span>
                  Architecting Kit...
                </>
              ) : (
                <>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
                  Generate Brand Kit
                </>
              )}
            </button>
          </div>
        </div>

        <BrandKitStats stats={BRAND_KIT_STATS} />
      </header>

      <main className="brand-kit-content-grid">
        <div className="bk-left-sidebar">
          <BrandKitForm onGenerate={handleGenerate} />
        </div>
        
        <div className="bk-main-workspace">
          <div className="workspace-card">
            <div className="workspace-header">
              <h3 className="workspace-title">AI Content Generation Preview</h3>
              {generatedData && (
                <div className="workspace-actions">
                   <button className="bk-action-link" onClick={() => handleAction('Regenerate All')}>Regenerate All</button>
                   <button className="bk-action-link primary" onClick={() => handleAction('Publish')}>Publish Kit</button>
                </div>
              )}
            </div>
            
            <div className={`workspace-body ${isGenerating ? 'is-loading' : ''}`}>
              {isGenerating ? (
                <div className="generation-loader">
                   <div className="loader-orbit"></div>
                   <p>Synthesizing role details into high-impact branding copy...</p>
                </div>
              ) : generatedData ? (
                <BrandKitOutput data={generatedData} />
              ) : (
                <BrandKitEmptyState />
              )}
            </div>
          </div>
        </div>
      </main>

      <WorkflowMetadataPanel 
        dataInputs={['Job role', 'Department', 'Experience level', 'Work mode', 'Role summary']}
        dataOutputs={['Enhanced role summary', 'EVP messaging', 'Candidate pitch', 'Outreach copy']}
        preConditions={['JD approved', 'Brand assets available']}
        postConditions={['Brand kit generated', 'Brand-enhanced JD ready']}
      />
    </div>
  );
};

export default BrandKitPage;
