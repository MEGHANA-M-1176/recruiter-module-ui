
import React from 'react';
import './AudienceBadge.css';

const AudienceBadge = ({ type }) => {
  const getBadgeClass = (type) => {
    switch (type.toLowerCase()) {
      case 'employees': return 'audience-employees';
      case 'alumni': return 'audience-alumni';
      case 'both': return 'audience-both';
      default: return 'audience-default';
    }
  };

  return (
    <span className={`audience-badge ${getBadgeClass(type)}`}>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
      {type}
    </span>
  );
};

export default AudienceBadge;
