import React, { useState } from 'react';
import './PreOnboardingTasksPage.css';

const PreOnboardingTasksPage = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Workspace Setup', owner: 'Facilities Admin', dueDate: 'Oct 28', status: 'Pending', category: 'Workspace' },
    { id: 2, title: 'IT Access & Laptop Provisioning', owner: 'IT Service Desk', dueDate: 'Oct 27', status: 'In Progress', category: 'IT' },
    { id: 3, title: 'Onboarding Buddy Assignment', owner: 'Hiring Manager', dueDate: 'Oct 25', status: 'Completed', category: 'Culture' },
    { id: 4, title: 'Joining Kit Delivery', owner: 'HR Ops', dueDate: 'Oct 30', status: 'Pending', category: 'Logistics' }
  ]);

  const toggleStatus = (id) => {
    setTasks(tasks.map(t => 
      t.id === id ? { ...t, status: t.status === 'Completed' ? 'Pending' : 'Completed' } : t
    ));
  };

  return (
    <div className="pot-page">
      <header className="pot-header">
        <div className="pot-header-left">
          <span className="pot-eyebrow">OPERATIONS · POST-BGV CLEARANCE</span>
          <h1>Pre-Onboarding Task Management</h1>
          <p className="pot-subtitle">Synchronize IT, Facilities, and HR tasks to ensure a seamless Day 1 experience.</p>
        </div>
        <div className="pot-header-actions">
          <button className="btn-pot-primary">+ Assign New Task</button>
        </div>
      </header>

      <div className="pot-candidate-summary">
        <div className="pcs-profile">
          <div className="pcs-avatar">AN</div>
          <div className="pcs-info">
            <h2>Asha Nair</h2>
            <p>VP Engineering • Joining Oct 31, 2026</p>
          </div>
        </div>
        <div className="pcs-status">
          <span className="pcs-badge">BGV Cleared</span>
          <span className="pcs-progress">Post-Offer Stage 2</span>
        </div>
      </div>

      <div className="pot-tasks-grid">
        {tasks.map(task => (
          <div key={task.id} className={`task-card ${task.status.toLowerCase().replace(' ', '-')}`}>
            <div className="tc-header">
              <span className={`tc-category ${task.category.toLowerCase()}`}>{task.category}</span>
              <span className="tc-due">Due: {task.dueDate}</span>
            </div>
            <div className="tc-body">
              <h3>{task.title}</h3>
              <div className="tc-owner">
                <img src={`https://ui-avatars.com/api/?name=${task.owner}&background=f1f5f9&color=475569`} alt="Owner" />
                <span>{task.owner}</span>
              </div>
            </div>
            <div className="tc-footer">
              <div className="tc-status-row">
                <span className="status-label">{task.status}</span>
                <button className="btn-toggle" onClick={() => toggleStatus(task.id)}>
                  {task.status === 'Completed' ? 'UNDO' : 'MARK COMPLETE'}
                </button>
              </div>
              <button className="btn-notify">Notify Stakeholder</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreOnboardingTasksPage;
