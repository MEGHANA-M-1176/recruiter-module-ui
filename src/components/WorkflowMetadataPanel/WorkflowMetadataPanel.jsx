
import React from 'react';
import './WorkflowMetadataPanel.css';

const WorkflowMetadataPanel = ({ dataInputs, dataOutputs, preConditions, postConditions }) => {
  return (
    <div className="workflow-metadata-panel">
      <div className="metadata-header">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="metadata-icon">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
          <polyline points="10 9 9 9 8 9"/>
        </svg>
        <h3>Workflow Metadata</h3>
      </div>
      
      <div className="metadata-grid">
        <div className="metadata-section">
          <label>Data Inputs</label>
          <ul className="metadata-list">
            {dataInputs.map((item, idx) => (
              <li key={idx} className="metadata-item input-tag">{item}</li>
            ))}
          </ul>
        </div>

        <div className="metadata-section">
          <label>Data Outputs</label>
          <ul className="metadata-list">
            {dataOutputs.map((item, idx) => (
              <li key={idx} className="metadata-item output-tag">{item}</li>
            ))}
          </ul>
        </div>

        <div className="metadata-section">
          <label>Pre-Conditions</label>
          <ul className="metadata-list">
            {preConditions.map((item, idx) => (
              <li key={idx} className="metadata-item condition-tag">{item}</li>
            ))}
          </ul>
        </div>

        <div className="metadata-section">
          <label>Post-Conditions</label>
          <ul className="metadata-list">
            {postConditions.map((item, idx) => (
              <li key={idx} className="metadata-item condition-tag">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WorkflowMetadataPanel;
