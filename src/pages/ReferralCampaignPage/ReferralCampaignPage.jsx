import React, { useState, useMemo } from 'react';
import ReferralStatsCards from '../../components/ReferralStatsCards/ReferralStatsCards';
import ReferralToolbar from '../../components/ReferralToolbar/ReferralToolbar';
import ReferralCampaignTable from '../../components/ReferralCampaignTable/ReferralCampaignTable';
import ReferralCampaignDrawer from '../../components/ReferralCampaignDrawer/ReferralCampaignDrawer';
import CreateReferralCampaignModal from '../../components/CreateReferralCampaignModal/CreateReferralCampaignModal';
import EmptyState from '../../components/EmptyState/EmptyState';
import Skeleton from '../../components/Skeleton/Skeleton';
import { REFERRAL_CAMPAIGNS, REFERRAL_STATS_DATA } from '../../mock/referralData';
import './ReferralCampaignPage.css';

const ReferralCampaignPage = () => {
  const [campaigns, setCampaigns] = useState(REFERRAL_CAMPAIGNS);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [audienceFilter, setAudienceFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Simulate loading
  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  // Filtering Logic
  const filteredCampaigns = useMemo(() => {
    let result = [...campaigns];

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(c => 
        c.campaignName.toLowerCase().includes(term) || 
        c.jobRole.toLowerCase().includes(term)
      );
    }

    if (audienceFilter) {
      result = result.filter(c => c.audienceType === audienceFilter);
    }

    if (statusFilter) {
      result = result.filter(c => c.campaignStatus === statusFilter);
    }

    // Sorting
    result.sort((a, b) => {
      if (sortBy === 'newest') return new Date(b.createdDate) - new Date(a.createdDate);
      if (sortBy === 'performance') return b.applicationsReceived - a.applicationsReceived;
      if (sortBy === 'clicks') return b.clickCount - a.clickCount;
      return 0;
    });

    return result;
  }, [campaigns, searchTerm, audienceFilter, statusFilter, sortBy]);

  // Handlers
  const handleCreateCampaign = () => {
    alert("New Campaign Initialized & Referral Links Generated!");
    setIsModalOpen(false);
  };

  const handleCopyLink = (link) => {
    navigator.clipboard.writeText(link);
    alert("Referral link copied to clipboard: " + link);
  };

  const handleResend = (id) => {
    alert("Notifications re-queued for sending to " + 
      campaigns.find(c => c.id === id).audienceType);
  };

  const handlePause = (id) => {
    setCampaigns(prev => prev.map(c => 
      c.id === id ? { ...c, campaignStatus: c.campaignStatus === 'Paused' ? 'Active' : 'Paused' } : c
    ));
  };

  const handleViewDetails = (campaign) => {
    setSelectedCampaign(campaign);
    setIsDrawerOpen(true);
  };

  return (
    <div className="referral-page-wrapper">
      <header className="referral-page-header">
        <div className="header-top-row">
          <div className="ref-title-group">
            <span className="step-label">Step 3.4b: Brand, Attract & Outreach</span>
            <h1>Referral Campaign Console</h1>
            <p className="ref-subtitle">Generate role-specific referral links and notify employees/alumni for high-performance outreach campaigns.</p>
          </div>
          <button className="btn-launch-campaign" onClick={() => setIsModalOpen(true)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
            Create Referral Campaign
          </button>
        </div>

        <ReferralStatsCards stats={REFERRAL_STATS_DATA} />
      </header>

      <main className="referral-page-main">
        <ReferralToolbar 
          onSearch={setSearchTerm}
          onFilterAudience={setAudienceFilter}
          onFilterStatus={setStatusFilter}
          onSort={setSortBy}
        />
        
        {isLoading ? (
          <div className="skeleton-table-wrap">
            <Skeleton height="60px" borderRadius="16px" className="mb-4" />
            <Skeleton height="80px" borderRadius="16px" className="mb-2" />
            <Skeleton height="80px" borderRadius="16px" className="mb-2" />
            <Skeleton height="80px" borderRadius="16px" className="mb-2" />
          </div>
        ) : filteredCampaigns.length > 0 ? (
          <ReferralCampaignTable 
            campaigns={filteredCampaigns}
            onViewDetails={handleViewDetails}
            onCopyLink={handleCopyLink}
            onResend={handleResend}
            onPause={handlePause}
          />
        ) : (
          <EmptyState 
            title="No campaigns found"
            description="Adjust your search or filters to see results, or create a brand new outreach campaign."
            actionLabel="Reset Search"
            onAction={() => {
              setSearchTerm('');
              setAudienceFilter('');
              setStatusFilter('');
            }}
          />
        )}
      </main>

      <ReferralCampaignDrawer 
        campaign={selectedCampaign}
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />

      <CreateReferralCampaignModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreate={handleCreateCampaign}
      />
    </div>
  );
};

export default ReferralCampaignPage;
