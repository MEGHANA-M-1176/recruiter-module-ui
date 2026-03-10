
import React, { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import FlaggedProfilesPage from './pages/FlaggedProfilesPage/FlaggedProfilesPage';
import ReferralCampaignPage from './pages/ReferralCampaignPage/ReferralCampaignPage';
import BrandKitPage from './pages/BrandKitPage/BrandKitPage';
import JDCompliancePage from './pages/JDCompliancePage/JDCompliancePage';
import './index.css';

function App() {
  const [activePage, setActivePage] = useState('compliance');

  const renderPage = () => {
    switch (activePage) {
      case 'flagged':
        return <FlaggedProfilesPage />;
      case 'referrals':
        return <ReferralCampaignPage />;
      case 'brandkit':
        return <BrandKitPage />;
      case 'compliance':
        return <JDCompliancePage />;
      default:
        return (
          <div style={{ padding: '40px', textAlign: 'center' }}>
            <h2>Dashboard coming soon...</h2>
            <p>Please select <strong>JD Compliance Studio</strong> from the sidebar.</p>
          </div>
        );
    }
  };

  return (
    <div className="app-container" style={{ display: 'flex' }}>
      <Sidebar activePage={activePage} onPageChange={setActivePage} />
      <div className="main-content-layout" style={{ flex: 1, marginLeft: '260px' }}>
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
