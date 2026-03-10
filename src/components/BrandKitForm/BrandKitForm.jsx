
import React from 'react';
import './BrandKitForm.css';

const BrandKitForm = ({ onGenerate }) => {
  return (
    <div className="brand-kit-form-card">
      <div className="form-card-header">
        <h3 className="form-section-title">Role Input Workspace</h3>
        <p className="form-section-subtitle">Provide details to frame your employer value proposition.</p>
      </div>
      
      <form className="bk-form" onSubmit={(e) => { e.preventDefault(); onGenerate(); }}>
        <div className="form-row">
          <div className="form-group">
            <label>Job Role</label>
            <input type="text" placeholder="e.g. Senior Backend Engineer" defaultValue="Senior Fullstack Engineer" required />
          </div>
          <div className="form-group">
            <label>Department</label>
            <select required>
              <option value="Engineering">Engineering</option>
              <option value="Product">Product</option>
              <option value="Design">Design</option>
              <option value="Marketing">Marketing</option>
              <option value="Sales">Sales</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Experience Level</label>
            <select required>
              <option value="Senior">Senior Level (5-8 yrs)</option>
              <option value="Principal">Principal / Lead (8+ yrs)</option>
              <option value="Mid">Mid Level (2-5 yrs)</option>
              <option value="Junior">Junior / Entry (0-2 yrs)</option>
            </select>
          </div>
          <div className="form-group">
            <label>Work Mode</label>
            <select required>
              <option value="Hybrid">Hybrid</option>
              <option value="Remote">Remote</option>
              <option value="On-site">On-site</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Location</label>
            <input type="text" placeholder="e.g. San Francisco, CA" defaultValue="San Francisco, CA" required />
          </div>
          <div className="form-group">
            <label>Employment Type</label>
            <select required>
              <option value="Full-time">Full-time</option>
              <option value="Contract">Contract</option>
              <option value="Part-time">Part-time</option>
            </select>
          </div>
        </div>

        <div className="form-group full-width">
          <label>Job Description / Role Summary</label>
          <textarea 
            placeholder="Paste your existing JD or provide a summary of the role's mission and technical requirements..."
            defaultValue="We are seeking a Fullstack Engineer to join our core team. Ideal candidate has 5+ years experience with React and Node.js. Knowledge of AWS and AI integration is a plus. You will be responsible for building new features for our recruitment platform."
            rows={6}
            required
          ></textarea>
        </div>

        <div className="form-actions-row">
          <button type="button" className="btn-form-secondary">Clear Inputs</button>
          <button type="submit" className="btn-form-primary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
            Generate Brand Kit
          </button>
        </div>
      </form>
    </div>
  );
};

export default BrandKitForm;
