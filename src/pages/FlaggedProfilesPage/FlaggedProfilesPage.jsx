
import React, { useState, useMemo } from 'react';
import StatsCard from '../../components/StatsCard/StatsCard';
import FilterToolbar from '../../components/FilterToolbar/FilterToolbar';
import FlaggedProfilesTable from '../../components/FlaggedProfilesTable/FlaggedProfilesTable';
import ProfileReviewDrawer from '../../components/ProfileReviewDrawer/ProfileReviewDrawer';
import WorkflowMetadataPanel from '../../components/WorkflowMetadataPanel/WorkflowMetadataPanel';
import { MOCK_FLAGGED_PROFILES, MOCK_STATS } from '../../mock/data';
import './FlaggedProfilesPage.css';

const FlaggedProfilesPage = () => {
  const [profiles, setProfiles] = useState(MOCK_FLAGGED_PROFILES);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [roleFilter, setRoleFilter] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Filtering and Sorting Logic
  const filteredProfiles = useMemo(() => {
    let result = [...profiles];

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(p => 
        p.candidate.name.toLowerCase().includes(term) || 
        p.candidate.email.toLowerCase().includes(term) ||
        p.id.toLowerCase().includes(term)
      );
    }

    if (statusFilter) {
      result = result.filter(p => p.status === statusFilter);
    }

    if (roleFilter) {
      result = result.filter(p => p.jobRole.includes(roleFilter));
    }

    result.sort((a, b) => {
      if (sortBy === 'newest') return new Date(b.appliedDate) - new Date(a.appliedDate);
      if (sortBy === 'oldest') return new Date(a.appliedDate) - new Date(b.appliedDate);
      if (sortBy === 'score-low') return a.authenticityScore - b.authenticityScore;
      if (sortBy === 'score-high') return b.authenticityScore - a.authenticityScore;
      return 0;
    });

    return result;
  }, [profiles, searchTerm, statusFilter, roleFilter, sortBy]);

  // Handlers
  const handleViewDetails = (profile) => {
    setSelectedProfile(profile);
    setIsDrawerOpen(true);
  };

  const handleApprove = (id) => {
    setProfiles(prev => prev.map(p => p.id === id ? { ...p, status: 'Approved' } : p));
  };

  const handleReject = (id) => {
    setProfiles(prev => prev.map(p => p.id === id ? { ...p, status: 'Rejected' } : p));
  };

  return (
    <div className="page-wrapper">
      {/* 1. Top Header */}
      <header className="page-header">
        <div className="header-content">
          <div className="title-group">
            <h1>Flagged Profiles Review</h1>
            <p className="subtitle">Manual validation workspace for suspicious candidate profiles and automated behavior detection.</p>
          </div>
          <div className="header-actions">
            <button className="btn-export">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Export Review Report
            </button>
          </div>
        </div>
        
        {/* 2. Stat Cards */}
        <div className="stats-grid">
          <StatsCard title="Total Flagged" value={MOCK_STATS.totalFlagged} variant="flagged" />
          <StatsCard title="Under Review" value={MOCK_STATS.underReview} variant="review" />
          <StatsCard title="Approved Cases" value={MOCK_STATS.approved} variant="approved" />
          <StatsCard title="Rejected Cases" value={MOCK_STATS.rejected} variant="rejected" />
        </div>
      </header>

      <main className="page-main">
        {/* 3. Filter/Search Toolbar */}
        <FilterToolbar 
          onSearch={setSearchTerm}
          onFilterStatus={setStatusFilter}
          onFilterRole={setRoleFilter}
          onSort={setSortBy}
        />
        
        {/* 4. Flagged Profiles Table */}
        <FlaggedProfilesTable 
          profiles={filteredProfiles}
          onViewDetails={handleViewDetails}
          onApprove={handleApprove}
          onReject={handleReject}
        />

        <WorkflowMetadataPanel 
          dataInputs={['Flagged profiles', 'Authenticity score', 'Risk level', 'Candidate details']}
          dataOutputs={['Validation decision', 'Approve / Reject result', 'Spam filtering status']}
          preConditions={['Bot flags raised', 'Candidate applied']}
          postConditions={['Spam filtered out', 'Candidate status updated']}
        />
      </main>

      {/* 5. Review Drawer */}
      <ProfileReviewDrawer 
        profile={selectedProfile}
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        onApprove={handleApprove}
        onReject={handleReject}
      />
    </div>
  );
};

export default FlaggedProfilesPage;
