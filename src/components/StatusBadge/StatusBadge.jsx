
import React from 'react';
import './StatusBadge.css';

const StatusBadge = ({ status }) => {
  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case 'approved': 
      case 'active':
      case 'sent': return 'badge-success';
      case 'rejected': return 'badge-danger';
      case 'under review':
      case 'paused': return 'badge-warning';
      case 'flagged':
      case 'draft': return 'badge-neutral';
      case 'completed': return 'badge-info';
      default: return 'badge-neutral';
    }
  };

  return (
    <span className={`status-badge ${getStatusClass(status)}`}>
      {status}
    </span>
  );
};

export default StatusBadge;
