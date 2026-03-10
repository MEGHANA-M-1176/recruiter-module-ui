
import React from 'react';
import './BrandKitEmptyState.css';

const BrandKitEmptyState = () => {
  return (
    <div className="brand-kit-empty-state">
      <div className="empty-state-visual">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
          <polyline points="14 2 14 8 20 8" />
          <path d="M12 18v-6" />
          <path d="M9 15h6" />
          <circle cx="12" cy="12" r="9" opacity="0.1" fill="currentColor" stroke="none" />
        </svg>
      </div>
      <h3>Ready to Amplify your Brand?</h3>
      <p>Enter the role details on the left and click "Generate Brand Kit" to create high-impact recruitment content.</p>
    </div>
  );
};

export default BrandKitEmptyState;
