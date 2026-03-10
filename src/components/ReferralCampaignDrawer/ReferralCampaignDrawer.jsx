
import React from 'react';
import StatusBadge from '../StatusBadge/StatusBadge';
import AudienceBadge from '../AudienceBadge/AudienceBadge';
import './ReferralCampaignDrawer.css';

const ReferralCampaignDrawer = ({ campaign, isOpen, onClose }) => {
  if (!campaign) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(campaign.referralLink);
    alert('Referral link copied!');
  };

  return (
    <div className={`ref-drawer-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className={`ref-drawer-content ${isOpen ? 'open' : ''}`} onClick={e => e.stopPropagation()}>
        <div className="ref-drawer-header">
          <div className="ref-header-top">
            <div className="ref-id-badge">ID: {campaign.id}</div>
            <button className="ref-close-btn" onClick={onClose}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>
          <div className="ref-header-main">
            <h2>{campaign.campaignName}</h2>
            <div className="ref-sub-line">
              <span className="ref-role-indicator">{campaign.jobRole}</span>
              <span className="dot-sep">•</span>
              <span className="ref-created-by">By {campaign.createdBy}</span>
            </div>
          </div>
          <div className="ref-badges-row">
            <StatusBadge status={campaign.campaignStatus} />
            <AudienceBadge type={campaign.audienceType} />
            <div className="channel-badge">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              {campaign.notificationChannel}
            </div>
          </div>
        </div>

        <div className="ref-drawer-body">
          {/* Performance Dashboard */}
          <section className="drawer-section">
            <h4 className="section-label">Real-time Performance</h4>
            <div className="performance-stats-grid">
              <div className="p-stat-card">
                <label>Recipients</label>
                <span className="p-value">{campaign.sentCount}</span>
                <span className="p-sub">Notifications</span>
              </div>
              <div className="p-stat-card">
                <label>Engagement</label>
                <span className="p-value">{campaign.clickCount}</span>
                <span className="p-sub">Total Clicks</span>
              </div>
              <div className="p-stat-card highlight">
                <label>Conversion</label>
                <span className="p-value">{campaign.applicationsReceived}</span>
                <span className="p-sub">Applications</span>
              </div>
            </div>
          </section>

          {/* Infrastructure */}
          <section className="drawer-section">
            <h4 className="section-label">Link Infrastructure</h4>
            <div className="link-workspace">
              <div className="link-code-box">
                <code>{campaign.referralLink}</code>
                <button className="link-copy-action" onClick={handleCopyLink}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                  Copy Link
                </button>
              </div>
              <p className="link-expiry">Targeting: {campaign.audienceType} Network • Status: {campaign.notificationStatus}</p>
            </div>
          </section>

          {/* Message Preview */}
          <section className="drawer-section">
            <div className="section-header-row">
              <h4 className="section-label">Recruiter Outreach Content</h4>
              <button className="preview-action-btn">Preview Full Message</button>
            </div>
            <div className="msg-preview-container">
              <div className="msg-envelope">
                <div className="msg-subject-line">
                  <strong>Subject:</strong> {campaign.messageSubject}
                </div>
                <div className="msg-body-content">
                  {campaign.messageBody}
                </div>
              </div>
            </div>
          </section>

          {/* Strategy & Notes */}
          <section className="drawer-section split">
            <div className="strategy-box">
              <h4 className="section-label">Performance Summary</h4>
              <p className="strategy-text">{campaign.performanceSummary}</p>
            </div>
            <div className="notes-box">
              <h4 className="section-label">Campaign Notes</h4>
              <p className="notes-text">{campaign.campaignNotes || "No internal notes provided for this campaign."}</p>
            </div>
          </section>

          <footer className="drawer-meta-info">
            <span>Created on {campaign.createdDate}</span>
            <span className="dot-sep">•</span>
            <span>Last Updated: Today</span>
          </footer>
        </div>

        <div className="ref-drawer-footer">
          <div className="footer-left">
            <button className="btn-secondary" onClick={() => alert('Resending...')}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 2L11 13"/><path d="M22 2L15 22L11 13L2 9L22 2z"/></svg>
              Resend Notif.
            </button>
            <button className="btn-secondary" onClick={() => alert('Pausing...')}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
              Pause
            </button>
          </div>
          <button className="btn-close-action" onClick={onClose}>Close Workspace</button>
        </div>
      </div>
    </div>
  );
};

export default ReferralCampaignDrawer;
