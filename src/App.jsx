
import React, { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import FlaggedProfilesPage from './pages/FlaggedProfilesPage/FlaggedProfilesPage';
import ReferralCampaignPage from './pages/ReferralCampaignPage/ReferralCampaignPage';
import BrandKitPage from './pages/BrandKitPage/BrandKitPage';
import JDCompliancePage from './pages/JDCompliancePage/JDCompliancePage';
import OfferLetterPage from './pages/OfferLetterPage/OfferLetterPage';
import FairnessVerificationPage from './pages/FairnessVerificationPage/FairnessVerificationPage';
import DecisionInsightsPage from './pages/DecisionInsightsPage/DecisionInsightsPage';
import DEIWidgetsPage from './pages/DEIWidgetsPage/DEIWidgetsPage';
import NudgeEnginePage from './pages/NudgeEnginePage/NudgeEnginePage';
import WFMCheckPage from './pages/WFMCheckPage/WFMCheckPage';
import SchedulingInsightsPage from './pages/SchedulingInsightsPage/SchedulingInsightsPage';
import AIPredictiveIndicesPage from './pages/AIPredictiveIndicesPage/AIPredictiveIndicesPage';
import CriticalHireApprovalPage from './pages/CriticalHireApprovalPage/CriticalHireApprovalPage';
import BudgetValidationPage from './pages/BudgetValidationPage/BudgetValidationPage';
import OfferValidationPage from './pages/OfferValidationPage/OfferValidationPage';
import OfferApprovalPage from './pages/OfferApprovalPage/OfferApprovalPage';
import CounterOfferPage from './pages/CounterOfferPage/CounterOfferPage';
import OfferAnalyticsPage from './pages/OfferAnalyticsPage/OfferAnalyticsPage';
import BGVInitiationPage from './pages/BGVInitiationPage/BGVInitiationPage';
import BGVExceptionReviewPage from './pages/BGVExceptionReviewPage/BGVExceptionReviewPage';
import PreOnboardingTasksPage from './pages/PreOnboardingTasksPage/PreOnboardingTasksPage';
import JoiningReadinessPage from './pages/JoiningReadinessPage/JoiningReadinessPage';
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
      case 'fairness':
        return <FairnessVerificationPage />;
      case 'offer-letter':
        return <OfferLetterPage />;
      case 'insights':
        return <DecisionInsightsPage />;
      case 'dei-widgets':
        return <DEIWidgetsPage />;
      case 'nudge-engine':
        return <NudgeEnginePage />;
      case 'wfm-check':
        return <WFMCheckPage />;
      case 'scheduling-insights':
        return <SchedulingInsightsPage />;
      case 'ai-predictive':
        return <AIPredictiveIndicesPage />;
      case 'critical-hire':
        return <CriticalHireApprovalPage />;
      case 'budget-validation':
        return <BudgetValidationPage />;
      case 'offer-validation':
        return <OfferValidationPage />;
      case 'offer-approval':
        return <OfferApprovalPage />;
      case 'counter-offer':
        return <CounterOfferPage />;
      case 'offer-analytics':
        return <OfferAnalyticsPage />;
      case 'bgv-initiation':
        return <BGVInitiationPage />;
      case 'bgv-exception':
        return <BGVExceptionReviewPage />;
      case 'pre-onboarding-tasks':
        return <PreOnboardingTasksPage />;
      case 'joining-readiness':
        return <JoiningReadinessPage />;
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
