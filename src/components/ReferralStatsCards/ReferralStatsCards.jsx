
import React from 'react';
import './ReferralStatsCards.css';

const ReferralStatsCards = ({ stats }) => {
  const cards = [
    { title: 'Total Campaigns', value: stats.totalCampaigns, icon: 'campaign' },
    { title: 'Active Referral Links', value: stats.activeLinks, icon: 'link' },
    { title: 'Notifications Sent', value: stats.notificationsSent.toLocaleString(), icon: 'send' },
    { title: 'Referral Applications', value: stats.referralApplications, icon: 'people' },
  ];

  return (
    <div className="referral-stats-grid">
      {cards.map((card, idx) => (
        <div key={idx} className="r-stats-card">
          <div className="r-stats-icon">
            <div className={`icon-circle ic-${card.icon}`}>
              {card.icon === 'campaign' && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>}
              {card.icon === 'link' && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>}
              {card.icon === 'send' && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>}
              {card.icon === 'people' && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>}
            </div>
          </div>
          <div className="r-stats-content">
            <span className="r-stats-label">{card.title}</span>
            <span className="r-stats-value">{card.value}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReferralStatsCards;
