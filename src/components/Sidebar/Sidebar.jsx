
import React from 'react';
import './Sidebar.css';

const Sidebar = ({ activePage, onPageChange }) => {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="logo-icon">M</div>
        <span className="logo-text">Mantrika</span>
      </div>
      
      <nav className="sidebar-nav">
        <div className="nav-section">
          <span className="section-label">Recruiter Console</span>
          <a href="#" className={`nav-item ${activePage === 'dashboard' ? 'active' : ''}`} onClick={() => onPageChange('dashboard')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            </svg>
            Dashboard
          </a>
          <a href="#" className={`nav-item ${activePage === 'flagged' ? 'active' : ''}`} onClick={() => onPageChange('flagged')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            Flagged Profiles
          </a>
          <a href="#" className={`nav-item ${activePage === 'referrals' ? 'active' : ''}`} onClick={() => onPageChange('referrals')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
            </svg>
            Referral Campaigns
          </a>
          <a href="#" className={`nav-item ${activePage === 'brandkit' ? 'active' : ''}`} onClick={() => onPageChange('brandkit')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
            </svg>
            Brand Kit Studio
          </a>
          <a href="#" className={`nav-item ${activePage === 'compliance' ? 'active' : ''}`} onClick={() => onPageChange('compliance')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              <path d="M12 8v4M12 16h.01" />
            </svg>
            JD Compliance Studio
          </a>
          <a href="#" className={`nav-item ${activePage === 'fairness' ? 'active' : ''}`} onClick={() => onPageChange('fairness')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8 8-8 8-8-8 8-8 8 0 8 8 8z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
            Fairness checks
          </a>
          <a href="#" className={`nav-item ${activePage === 'offer-letter' ? 'active' : ''}`} onClick={() => onPageChange('offer-letter')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
            </svg>
            Offer Letter Studio
          </a>
          <a href="#" className={`nav-item ${activePage === 'counter-offer' ? 'active' : ''}`} onClick={() => onPageChange('counter-offer')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect><path d="M9 14h6"></path><path d="M9 18h6"></path><path d="M9 10h6"></path>
            </svg>
            Counteroffer Management
          </a>
          <a href="#" className={`nav-item ${activePage === 'wfm-check' ? 'active' : ''}`} onClick={() => onPageChange('wfm-check')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="M16 13H8"></path><path d="M16 17H8"></path><path d="M10 9H8"></path>
            </svg>
            WFM & Headcount
          </a>
          <a href="#" className={`nav-item ${activePage === 'candidates' ? 'active' : ''}`} onClick={() => onPageChange('candidates')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            Candidate Database
          </a>
        </div>
        
        <div className="nav-section">
          <span className="section-label">Operations</span>
          <a href="#" className="nav-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
            </svg>
            Job Board
          </a>
          <a href="#" className="nav-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
            </svg>
            AI Assessment
          </a>
          <a href="#" className={`nav-item ${activePage === 'nudge-engine' ? 'active' : ''}`} onClick={() => onPageChange('nudge-engine')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
            Nudge Engine
          </a>
          <a href="#" className={`nav-item ${activePage === 'bgv-initiation' ? 'active' : ''}`} onClick={() => onPageChange('bgv-initiation')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
            BGV Initiation
          </a>
          <a href="#" className={`nav-item ${activePage === 'bgv-exception' ? 'active' : ''}`} onClick={() => onPageChange('bgv-exception')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
            BGV Exception Review
          </a>
          <a href="#" className={`nav-item ${activePage === 'pre-onboarding-tasks' ? 'active' : ''}`} onClick={() => onPageChange('pre-onboarding-tasks')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            Pre-Onboarding Tasks
          </a>
          <a href="#" className={`nav-item ${activePage === 'joining-readiness' ? 'active' : ''}`} onClick={() => onPageChange('joining-readiness')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
            </svg>
            Joining Readiness
          </a>
          <a href="#" className="nav-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33 1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1-1.51 1.65 1.65 0 0 0 1.82.33l.06.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82 1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
            </svg>
            Settings
          </a>
        </div>

        <div className="nav-section">
          <span className="section-label">Leadership</span>
          <a href="#" className={`nav-item ${activePage === 'insights' ? 'active' : ''}`} onClick={() => onPageChange('insights')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>
            </svg>
            Decision Insights
          </a>
          <a href="#" className={`nav-item ${activePage === 'dei-widgets' ? 'active' : ''}`} onClick={() => onPageChange('dei-widgets')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path>
            </svg>
            DEI Monitoring
          </a>
          <a href="#" className={`nav-item ${activePage === 'scheduling-insights' ? 'active' : ''}`} onClick={() => onPageChange('scheduling-insights')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            Scheduling Insights
          </a>
          <a href="#" className={`nav-item ${activePage === 'ai-predictive' ? 'active' : ''}`} onClick={() => onPageChange('ai-predictive')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            AI Predictive Indices
          </a>
          <a href="#" className={`nav-item ${activePage === 'critical-hire' ? 'active' : ''}`} onClick={() => onPageChange('critical-hire')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
            Critical Hire Approval
          </a>
          <a href="#" className={`nav-item ${activePage === 'budget-validation' ? 'active' : ''}`} onClick={() => onPageChange('budget-validation')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
            Budget Validation
          </a>
          <a href="#" className={`nav-item ${activePage === 'offer-validation' ? 'active' : ''}`} onClick={() => onPageChange('offer-validation')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            Offer Validation
          </a>
          <a href="#" className={`nav-item ${activePage === 'offer-approval' ? 'active' : ''}`} onClick={() => onPageChange('offer-approval')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
            </svg>
            Offer Approval
          </a>
          <a href="#" className={`nav-item ${activePage === 'offer-analytics' ? 'active' : ''}`} onClick={() => onPageChange('offer-analytics')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
            </svg>
            Offer Analytics
          </a>
        </div>
      </nav>
      
      <div className="sidebar-footer">
        <div className="user-profile">
          <img src="https://ui-avatars.com/api/?name=Recruiter+User&background=0f172a&color=fff" alt="User" />
          <div className="user-info">
            <span className="user-name">Recruiter Admin</span>
            <span className="user-role">Premium Plan</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
