import React, { useState } from 'react';
import StatusBadge from '../StatusBadge/StatusBadge';
import AudienceBadge from '../AudienceBadge/AudienceBadge';
import './ReferralCampaignTable.css';

const ReferralCampaignTable = ({ campaigns, onViewDetails, onCopyLink, onResend, onPause }) => {
  const [copyFeedback, setCopyFeedback] = useState(null);

  const handleCopy = (link, id) => {
    onCopyLink(link);
    setCopyFeedback(id);
    setTimeout(() => setCopyFeedback(null), 2000);
  };
  return (
    <div className="referral-table-container">
      <table className="referral-table">
        <thead>
          <tr>
            <th>Campaign & Role</th>
            <th>Referral Link</th>
            <th>Target Audience</th>
            <th>Status</th>
            <th>Real-time Performance</th>
            <th>Created</th>
            <th className="actions-header">Quick Actions</th>
          </tr>
        </thead>
        <tbody>
          {campaigns.map((camp) => (
            <tr key={camp.id} className="ref-row">
              <td>
                <div className="camp-identity">
                  <span className="camp-name">{camp.campaignName}</span>
                  <span className="camp-role">{camp.jobRole}</span>
                </div>
              </td>
              <td>
                <div className="link-ctrl">
                  <code className="ref-link-text">{camp.referralLink}</code>
                  <button 
                    className={`copy-btn ${copyFeedback === camp.id ? 'copied' : ''}`} 
                    onClick={() => handleCopy(camp.referralLink, camp.id)} 
                    title="Copy Link"
                  >
                    {copyFeedback === camp.id ? (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                    ) : (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                    )}
                  </button>
                </div>
              </td>
              <td><AudienceBadge type={camp.audienceType} /></td>
              <td>
                <div className="status-stack">
                  <StatusBadge status={camp.campaignStatus} />
                  <span className="notif-status">Notification: {camp.notificationStatus}</span>
                </div>
              </td>
              <td>
                <div className="perf-grid">
                  <div className="perf-stat">
                    <label>Sent</label>
                    <span>{camp.sentCount}</span>
                  </div>
                  <div className="perf-stat">
                    <label>Clicks</label>
                    <span>{camp.clickCount}</span>
                  </div>
                  <div className="perf-stat highlight">
                    <label>Apps</label>
                    <span>{camp.applicationsReceived}</span>
                  </div>
                </div>
              </td>
              <td className="date-col">{camp.createdDate}</td>
              <td>
                <div className="ref-actions">
                  <button className="ref-btn-icon" onClick={() => onViewDetails(camp)} title="View Analytics">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                  </button>
                  <button className="ref-btn-icon" onClick={() => onResend(camp.id)} title="Resend Notification">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 2L11 13"/><path d="M22 2L15 22L11 13L2 9L22 2z"/></svg>
                  </button>
                  <button className={`ref-btn-icon ${camp.campaignStatus === 'Paused' ? 'play' : 'pause'}`} onClick={() => onPause(camp.id)} title={camp.campaignStatus === 'Paused' ? 'Resume' : 'Pause'}>
                    {camp.campaignStatus === 'Paused' ? 
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3"/></svg> :
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
                    }
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReferralCampaignTable;
