
import React from 'react';
import './FilterToolbar.css';

const FilterToolbar = ({ onSearch, onFilterStatus, onFilterRole, onSort }) => {
  return (
    <div className="filter-toolbar">
      <div className="search-wrapper">
        <svg className="search-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 19L14.65 14.65M17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <input 
          type="text" 
          placeholder="Search candidates by name or email..." 
          onChange={(e) => onSearch(e.target.value)}
          className="search-input"
        />
      </div>
      
      <div className="filters-group">
        <select onChange={(e) => onFilterStatus(e.target.value)} className="filter-select">
          <option value="">All Statuses</option>
          <option value="Flagged">Flagged</option>
          <option value="Under Review">Under Review</option>
          <option value="Approved">Approved</option>
          <option value="Rejected">Rejected</option>
        </select>
        
        <select onChange={(e) => onFilterRole(e.target.value)} className="filter-select">
          <option value="">All Job Roles</option>
          <option value="Software Engineer">Software Engineer</option>
          <option value="Product Manager">Product Manager</option>
          <option value="Data Scientist">Data Scientist</option>
          <option value="UX Designer">UX Designer</option>
        </select>
        
        <select onChange={(e) => onSort(e.target.value)} className="filter-select sort-select">
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
          <option value="score-low">Risk: High to Low</option>
          <option value="score-high">Risk: Low to High</option>
        </select>
      </div>
    </div>
  );
};

export default FilterToolbar;
