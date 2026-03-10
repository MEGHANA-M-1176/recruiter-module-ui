
import React from 'react';
import './BrandKitOutput.css';

const BrandKitOutput = ({ data }) => {
  const sections = [
    { title: 'Enhanced Role Summary', content: data.roleSummary, icon: 'zap' },
    { title: 'EVP / Why Join Us', content: data.evp, icon: 'heart' },
    { title: 'Key Selling Points', content: data.sellingPoints, isList: true, icon: 'star' },
    { title: 'Candidate Pitch', content: data.candidatePitch, icon: 'message-square' },
    { title: 'Referral Message', content: data.referralMessage, icon: 'users' },
    { title: 'Short Outreach Copy', content: data.outreachCopy, icon: 'send' },
  ];

  const handleAction = (action, title) => {
    alert(`${action} triggered for: ${title}`);
  };

  return (
    <div className="brand-kit-output-grid">
      {sections.map((section, index) => (
        <div key={index} className="bk-output-card">
          <div className="bk-output-header">
            <div className="bk-output-title-wrap">
              <div className={`bk-icon-sm icon-bg-${section.icon}`}>
                 {section.icon === 'zap' && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>}
                 {section.icon === 'heart' && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>}
                 {section.icon === 'star' && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>}
                 {section.icon === 'message-square' && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>}
                 {section.icon === 'users' && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>}
                 {section.icon === 'send' && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>}
              </div>
              <h4>{section.title}</h4>
            </div>
            <div className="bk-output-actions">
              <button onClick={() => handleAction('Copy', section.title)} title="Copy Content">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
              </button>
              <button onClick={() => handleAction('Edit', section.title)} title="Edit">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
              </button>
            </div>
          </div>
          
          <div className="bk-output-content">
            {section.isList ? (
              <ul className="bk-bullet-list">
                {section.content.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            ) : (
              <p>{section.content}</p>
            )}
          </div>

          <div className="bk-output-footer">
             <button className="btn-regenerate-single" onClick={() => handleAction('Regenerate', section.title)}>
               Regenerate Segment
             </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BrandKitOutput;
