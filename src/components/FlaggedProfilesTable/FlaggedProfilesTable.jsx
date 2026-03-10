
import React from 'react';
import StatusBadge from '../StatusBadge/StatusBadge';
import ScoreBadge from '../ScoreBadge/ScoreBadge';
import './FlaggedProfilesTable.css';

const FlaggedProfilesTable = ({ profiles, onViewDetails, onApprove, onReject }) => {
  return (
    <div className="table-container">
      <table className="flagged-table">
        <thead>
          <tr>
            <th>Candidate</th>
            <th>Job Role</th>
            <th>Authenticity Score</th>
            <th>Risk Level</th>
            <th>Flag Reason</th>
            <th>Applied Date</th>
            <th>Review Status</th>
            <th className="actions-header">Actions</th>
          </tr>
        </thead>
        <tbody>
          {profiles.map((profile) => (
            <tr key={profile.id} className="table-row">
              <td>
                <div className="candidate-cell">
                  <img src={profile.candidate.avatar} alt={profile.candidate.name} className="avatar-img" />
                  <div className="candidate-info">
                    <span className="candidate-name">{profile.candidate.name}</span>
                    <span className="candidate-email">{profile.candidate.email}</span>
                  </div>
                </div>
              </td>
              <td className="role-cell">{profile.jobRole}</td>
              <td><ScoreBadge score={profile.authenticityScore} /></td>
              <td>
                <span className={`risk-tag risk-${profile.riskLevel.toLowerCase()}`}>
                  {profile.riskLevel}
                </span>
              </td>
              <td className="reason-cell">
                <span className="reason-text" title={profile.flagReason}>
                  {profile.flagReason}
                </span>
              </td>
              <td className="date-cell">{profile.appliedDate}</td>
              <td><StatusBadge status={profile.status} /></td>
              <td>
                <div className="action-buttons">
                  <button 
                    className="btn-icon btn-view" 
                    onClick={() => onViewDetails(profile)}
                    title="View Details"
                  >
                    Details
                  </button>
                  <button 
                    className="btn-icon btn-approve"
                    onClick={() => onApprove(profile.id)}
                    title="Approve"
                  >
                    Approve
                  </button>
                  <button 
                    className="btn-icon btn-reject"
                    onClick={() => onReject(profile.id)}
                    title="Reject"
                  >
                    Reject
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {profiles.length === 0 && (
        <div className="empty-state">
          <p>No profiles match your filters.</p>
        </div>
      )}
    </div>
  );
};

export default FlaggedProfilesTable;
