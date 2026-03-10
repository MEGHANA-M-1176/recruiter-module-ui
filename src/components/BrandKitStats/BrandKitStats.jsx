
import React from 'react';
import './BrandKitStats.css';

const BrandKitStats = ({ stats }) => {
  const statItems = [
    { label: 'Total Brand Kits', value: stats.totalKits, icon: 'folder' },
    { label: 'Active Roles', value: stats.activeRoles, icon: 'briefcase' },
    { label: 'Draft Kits', value: stats.draftKits, icon: 'edit' },
    { label: 'Published Kits', value: stats.publishedKits, icon: 'check-circle' },
  ];

  return (
    <div className="brand-kit-stats">
      {statItems.map((item, index) => (
        <div key={index} className="bk-stat-card">
          <div className={`bk-stat-icon-wrap icon-${item.icon}`}>
            {item.icon === 'folder' && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>}
            {item.icon === 'briefcase' && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>}
            {item.icon === 'edit' && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>}
            {item.icon === 'check-circle' && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>}
          </div>
          <div className="bk-stat-info">
            <span className="bk-stat-label">{item.label}</span>
            <span className="bk-stat-value">{item.value}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BrandKitStats;
