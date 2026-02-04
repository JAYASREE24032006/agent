import React from 'react';
import { Link } from 'react-router-dom';

const HRPortal = ({ status, handleLogout, handleGlobalLogout }) => {
    return (
        <div className="card app-card hr-theme" style={{ padding: 0, overflow: 'hidden', height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <div className="app-header" style={{ position: 'absolute', top: 0, width: '100%', zIndex: 10, background: 'rgba(0,0,0,0.8)', padding: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                    <h1>HR Portal</h1>
                    <Link to="/dashboard" className="back-link" style={{ marginLeft: 'auto', color: 'var(--text-muted)' }}>← Hub</Link>
                </div>
            </div>

            <div style={{
                flex: 1,
                marginTop: '60px',
                padding: '2rem',
                overflowY: 'auto',
                color: '#fff'
            }}>
                <div style={{
                    background: 'rgba(255,255,255,0.05)',
                    padding: '2rem',
                    borderRadius: '16px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    marginBottom: '2rem'
                }}>
                    <h2 style={{ marginBottom: '1rem', color: '#4ade80' }}>Authenticated via Agentic SSO</h2>
                    <p style={{ opacity: 0.8 }}>Welcome back, <strong>Demo User</strong>. You have successfully logged in using your centralized identity.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                    {/* Stats Card */}
                    <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.5rem', borderRadius: '12px' }}>
                        <h3 style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>My Leave Balance</h3>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                            <span>Annual Leave</span>
                            <span style={{ color: '#4ade80' }}>12 Days</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span>Sick Leave</span>
                            <span style={{ color: '#fbbf24' }}>5 Days</span>
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.5rem', borderRadius: '12px' }}>
                        <h3 style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>Quick Actions</h3>
                        <div style={{ release: 'grid', gap: '0.5rem' }}>
                            <button style={{ width: '100%', padding: '0.8rem', background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '8px', color: 'white', textAlign: 'left', cursor: 'pointer', marginBottom: '0.5rem' }}>Apply for Leave</button>
                            <button style={{ width: '100%', padding: '0.8rem', background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '8px', color: 'white', textAlign: 'left', cursor: 'pointer' }}>View Payslips</button>
                        </div>
                    </div>
                </div>

                <div style={{ marginTop: '2rem', background: 'rgba(0,0,0,0.3)', padding: '1.5rem', borderRadius: '12px' }}>
                    <h3 style={{ marginBottom: '1rem', color: '#facc15' }}>Recent Activity</h3>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ padding: '0.5rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                            <span style={{ opacity: 0.6, fontSize: '0.9rem', marginRight: '1rem' }}>
                                Today, {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}
                            </span>
                            Logged in via SSO (Session ID: {Math.random().toString(36).substr(2, 9)})
                        </li>
                        <li style={{ padding: '0.5rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                            <span style={{ opacity: 0.6, fontSize: '0.9rem', marginRight: '1rem' }}>Yesterday, 05:30 PM</span>
                            Timesheet Auto-Submitted
                        </li>
                    </ul>
                </div>

                <div className="actions" style={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    zIndex: 100,
                    display: 'flex',
                    gap: '10px',
                    background: 'rgba(0,0,0,0.8)',
                    padding: '10px',
                    borderRadius: '8px'
                }}>
                    <button onClick={handleLogout}>Logout (HR Only)</button>
                    <button onClick={handleGlobalLogout} className="btn-danger">Global Force Logout</button>
                </div>
            </div>
        </div>
    );
};

export default HRPortal;
