
import React from 'react';
import './JDComplianceForm.css';

const JDComplianceForm = ({ onRunValidation, isGenerating }) => {
  return (
    <div className="jd-compliance-form">
      <div className="form-header">
        <h3>Job Description Input</h3>
        <p>Complete the role details below to trigger the AI governance audit.</p>
      </div>
      
      <form className="jd-audit-form" onSubmit={(e) => { e.preventDefault(); onRunValidation(); }}>
        <div className="f-group">
          <label>Job Title</label>
          <input type="text" placeholder="e.g. Senior Product Manager" defaultValue="Senior Cloud Architect" required />
        </div>

        <div className="f-row">
          <div className="f-group">
            <label>Department</label>
            <select required>
              <option value="Engineering">Engineering</option>
              <option value="Product">Product</option>
              <option value="Design">Design</option>
            </select>
          </div>
          <div className="f-group">
            <label>Job Level</label>
            <select required>
              <option value="Senior">Senior</option>
              <option value="Executive">Executive</option>
              <option value="Staff">Staff</option>
            </select>
          </div>
        </div>

        <div className="f-row">
          <div className="f-group">
            <label>Location</label>
            <input type="text" placeholder="e.g. London, UK" defaultValue="New York, NY" required />
          </div>
          <div className="f-group">
            <label>Employment Type</label>
            <select required>
              <option value="Full-time">Full-time</option>
              <option value="Contract">Contract</option>
            </select>
          </div>
        </div>

        <div className="f-group f-full">
          <label>Job Description</label>
          <textarea 
            placeholder="Paste your JD here for compliance review..."
            defaultValue="We are looking for a rockstar cloud architect to own our infrastructure. This is a highly competitive role for a digital native who can work long hours without supervision. Must be able to lift 50lbs as part of server maintenance tasks."
            rows={10}
            required
          ></textarea>
        </div>

        <div className="f-footer">
          <button type="submit" className="btn-run-audit" disabled={isGenerating}>
            {isGenerating ? 'Analyzing...' : 'Run Validation'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default JDComplianceForm;
