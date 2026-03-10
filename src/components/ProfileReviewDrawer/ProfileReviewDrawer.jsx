
import React from 'react';
import StatusBadge from '../StatusBadge/StatusBadge';
import ScoreBadge from '../ScoreBadge/ScoreBadge';
import './ProfileReviewDrawer.css';

const ProfileReviewDrawer = ({ profile, isOpen, onClose, onApprove, onReject }) => {
  if (!profile) return null;

  return (
    <div className={`drawer-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className={`drawer-content ${isOpen ? 'open' : ''}`} onClick={e => e.stopPropagation()}>
        <div className="drawer-header">
          <div className="header-top">
            <div className="header-title-group">
              <span className="breadcrumb">Review Center / Candidate ID: {profile.id}</span>
              <h2>Profile Investigation Panel</h2>
            </div>
            <button className="close-btn" onClick={onClose} aria-label="Close panel">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          
          <div className="profile-hero">
            <img src={profile.candidate.avatar} alt={profile.candidate.name} className="hero-avatar" />
            <div className="hero-info">
              <h1 className="hero-name">{profile.candidate.name}</h1>
              <p className="hero-role">{profile.jobRole}</p>
              <div className="hero-meta">
                <StatusBadge status={profile.status} />
                <span className={`risk-pill risk-${profile.riskLevel.toLowerCase()}`}>
                  {profile.riskLevel} Risk
                </span>
              </div>
            </div>
            <div className="hero-score">
              <span className="score-label">Authenticity</span>
              <ScoreBadge score={profile.authenticityScore} />
            </div>
          </div>
        </div>

        <div className="drawer-body">
          <div className="investigation-grid">
            {/* Candidate Details Section */}
            <section className="investigation-card">
              <div className="card-header">
                <h3>Candidate Information</h3>
                <a href={profile.resumeUrl} className="resume-link" target="_blank" rel="noopener noreferrer">
                  View Resume
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
                  </svg>
                </a>
              </div>
              <div className="data-grid">
                <div className="data-item">
                  <label>Email Address</label>
                  <span>{profile.candidate.email}</span>
                </div>
                <div className="data-item">
                  <label>Phone Number</label>
                  <span>{profile.candidate.phone || 'N/A'}</span>
                </div>
                <div className="data-item">
                  <label>Current Location</label>
                  <span>{profile.location}</span>
                </div>
                <div className="data-item">
                  <label>Total Experience</label>
                  <span>{profile.experience}</span>
                </div>
                <div className="data-item">
                  <label>Application Date</label>
                  <span>{profile.appliedDate}</span>
                </div>
              </div>
            </section>

            {/* Systematic Detection Section */}
            <section className="investigation-card detection-card">
              <div className="card-header">
                <h3>System Detection Summary</h3>
                <span className="detection-tag">Automated Flag</span>
              </div>
              <div className="detection-content">
                <div className="flag-reason-box">
                  <label>Primary Flag Reason</label>
                  <p className="reason-text-highlight">{profile.flagReason}</p>
                </div>
                <div className="detection-details">
                  <label>Detection Summary</label>
                  <p className="details-text">{profile.flagDetails}</p>
                </div>
              </div>
            </section>

            {/* Skills Section */}
            <section className="investigation-card">
              <div className="card-header">
                <h3>Candidate Skills</h3>
              </div>
              <div className="skills-container">
                {profile.skills.map(skill => (
                  <span key={skill} className="skill-chip">{skill}</span>
                ))}
              </div>
            </section>

            {/* Recruiter Review Actions */}
            <section className="investigation-card review-actions-card">
              <div className="card-header">
                <h3>Recruiter Assessment</h3>
              </div>
              <div className="review-form">
                <label htmlFor="recruiter-notes">Verification Notes</label>
                <textarea 
                  id="recruiter-notes"
                  className="review-textarea" 
                  placeholder="Record your findings after manual verification (e.g., social media check, ID verification)..."
                ></textarea>
                
                <div className="decision-actions">
                  <button 
                    className="btn-action btn-reject-action" 
                    onClick={() => onReject(profile.id)}
                  >
                    Reject Candidate
                  </button>
                  <button 
                    className="btn-action btn-approve-action" 
                    onClick={() => onApprove(profile.id)}
                  >
                    Approve Candidate
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="drawer-footer">
          <button className="btn-close-panel" onClick={onClose}>Close Investigation</button>
          <span className="footer-timestamp">Last updated: {new Date().toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileReviewDrawer;
