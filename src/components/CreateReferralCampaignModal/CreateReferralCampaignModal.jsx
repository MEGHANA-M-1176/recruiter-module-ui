
import React, { useState, useEffect } from 'react';
import './CreateReferralCampaignModal.css';

const CreateReferralCampaignModal = ({ isOpen, onClose, onCreate }) => {
  const [role, setRole] = useState('');
  const [audience, setAudience] = useState('Employees');
  const [generatedLink, setGeneratedLink] = useState('');
  
  // Auto-generate link preview based on role/audience
  useEffect(() => {
    if (role) {
      const slug = role.toLowerCase().replace(/\s+/g, '-');
      const audienceSuffix = audience.toLowerCase();
      setGeneratedLink(`mantrika.ai/ref/${slug}-${audienceSuffix}-${Math.floor(1000 + Math.random() * 9000)}`);
    } else {
      setGeneratedLink('Choose a role to generate link...');
    }
  }, [role, audience]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-wrap">
            <span className="modal-step">Outreach Workflow / Phase 1</span>
            <h2>Configure Referral Campaign</h2>
            <p className="modal-desc">Define campaign parameters, target audience, and outreach messaging.</p>
          </div>
          <button className="m-close-btn" onClick={onClose} aria-label="Close modal">&times;</button>
        </div>

        <form className="modal-form" onSubmit={(e) => { e.preventDefault(); onCreate(); }}>
          <div className="form-sections-wrapper">
            
            {/* Section 1: Campaign Basics */}
            <section className="form-section-card">
              <h3 className="section-title">Campaign Parameters</h3>
              <div className="form-grid">
                <div className="form-group full-width">
                  <label>Campaign Name</label>
                  <input type="text" placeholder="e.g. Q2 Product Team Referral Drive" required />
                </div>
                <div className="form-group">
                  <label>Target Job Role</label>
                  <select value={role} onChange={(e) => setRole(e.target.value)} required>
                    <option value="">Select a Role</option>
                    <option>Senior Backend Engineer</option>
                    <option>Product Marketing Manager</option>
                    <option>Data Scientist</option>
                    <option>UX Designer</option>
                    <option>DevOps Lead</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Campaign Expiry Date</label>
                  <input type="date" required defaultValue={new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]} />
                </div>
              </div>
            </section>

            {/* Section 2: Audience & Infrastructure */}
            <section className="form-section-card">
              <h3 className="section-title">Audience & Infrastructure</h3>
              <div className="form-grid">
                <div className="form-group">
                  <label>Target Audience</label>
                  <select value={audience} onChange={(e) => setAudience(e.target.value)} required>
                    <option value="Employees">Active Employees</option>
                    <option value="Alumni">Company Alumni</option>
                    <option value="Both">Combined Network (Both)</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Notification Channel</label>
                  <select required>
                    <option value="Email">Email Only</option>
                    <option value="In-app">In-app Notification Only</option>
                    <option value="Both" selected>Both (Multi-channel)</option>
                  </select>
                </div>
                <div className="form-group full-width">
                  <label>Auto-generated Referral Link Preview</label>
                  <div className="link-preview-container">
                    <code className="generated-link">{generatedLink}</code>
                    <button type="button" className="btn-regenerate" onClick={() => setRole(role)}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M23 4v6h-6M1 20v-6h6M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/></svg>
                      Regenerate
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: Outreach Messaging */}
            <section className="form-section-card">
              <h3 className="section-title">Outreach Messaging</h3>
              <div className="form-grid">
                <div className="form-group full-width">
                  <label>Message Subject</label>
                  <input type="text" placeholder="e.g. Help us build the team - New referral opportunity!" required />
                </div>
                <div className="form-group full-width">
                  <label>Message Body (Template)</label>
                  <textarea 
                    placeholder="Describe the role and referral incentive..."
                    defaultValue="Hi Team,&#10;&#10;We're looking for a brilliant [Role] to join us! If you know someone perfect, refer them through your unique link below and qualify for a referral bonus.&#10;&#10;Link: {{referral_link}}&#10;&#10;Best,&#10;Recruitment Team"
                    rows={5}
                  ></textarea>
                </div>
              </div>
            </section>

            {/* Section 4: Internal Notes */}
            <section className="form-section-card">
              <h3 className="section-title">Recruiter Administrative Notes</h3>
              <div className="form-group full-width">
                <textarea 
                  placeholder="Internal notes regarding budget, specific target teams, or custom incentives..."
                  className="notes-textarea"
                ></textarea>
              </div>
            </section>

          </div>

          <div className="form-footer">
            <button type="button" className="m-btn-cancel" onClick={onClose}>Cancel</button>
            <div className="btn-actions-right">
              <button type="button" className="m-btn-draft">Save as Draft</button>
              <button type="submit" className="m-btn-launch">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
                Deploy Campaign
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateReferralCampaignModal;
