
import React from 'react';
import './ReferralToolbar.css';

const ReferralToolbar = ({ onSearch, onFilterAudience, onFilterStatus, onSort }) => {
  return (
    <div className="referral-toolbar">
      <div className="r-search-wrapper">
        <svg className="r-search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        <input 
          type="text" 
          placeholder="Search by role or campaign name..." 
          onChange={(e) => onSearch(e.target.value)}
          className="r-search-input"
        />
      </div>
      
      <div className="r-filters-group">
        <div className="filter-item">
          <label>Audience</label>
          <select onChange={(e) => onFilterAudience(e.target.value)} className="r-select">
            <option value="">All Types</option>
            <option value="Employees">Employees</option>
            <option value="Alumni">Alumni</option>
            <option value="Both">Both</option>
          </select>
        </div>
        
        <div className="filter-item">
          <label>Status</label>
          <select onChange={(e) => onFilterStatus(e.target.value)} className="r-select">
            <option value="">All Statuses</option>
            <option value="Active">Active</option>
            <option value="Paused">Paused</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        
        <div className="filter-item">
          <label>Sort By</label>
          <select onChange={(e) => onSort(e.target.value)} className="r-select r-sort-select">
            <option value="newest">Created: Newest</option>
            <option value="performance">Performance: High</option>
            <option value="clicks">Clicks: High</option>
            <option value="apps">Apps: High</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ReferralToolbar;
