import React from 'react';
import { Link } from 'react-router-dom';

const CRMSystem = ({ status, handleLogout, handleGlobalLogout }) => {
    return (
        <div className="card app-card crm-theme" style={{ padding: 0, overflow: 'hidden', height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <div className="app-header" style={{ position: 'absolute', top: 0, width: '100%', zIndex: 10, background: 'rgba(0,0,0,0.8)', padding: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                    <h1>CRM System</h1>
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
                    <h2 style={{ marginBottom: '1rem', color: '#60a5fa' }}>SSO Authentication Verified</h2>
                    <p style={{ opacity: 0.8 }}>Access granted to <strong>Sales Module</strong>. Integrated security Context Active.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                    {/* Pipeline */}
                    <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.5rem', borderRadius: '12px' }}>
                        <h3 style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>Sales Pipeline</h3>
                        <div style={{ marginBottom: '1rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', marginBottom: '0.2rem' }}>
                                <span>Prospecting</span>
                                <span>$12,000</span>
                            </div>
                            <div style={{ height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px' }}>
                                <div style={{ width: '70%', height: '100%', background: '#60a5fa', borderRadius: '4px' }}></div>
                            </div>
                        </div>
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', marginBottom: '0.2rem' }}>
                                <span>Closing</span>
                                <span>$45,000</span>
                            </div>
                            <div style={{ height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px' }}>
                                <div style={{ width: '40%', height: '100%', background: '#a855f7', borderRadius: '4px' }}></div>
                            </div>
                        </div>
                    </div>

                    {/* Leads */}
                    <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.5rem', borderRadius: '12px' }}>
                        <h3 style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>Hot Leads</h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ padding: '0.5rem 0', display: 'flex', alignItems: 'center' }}>
                                <span style={{ width: '10px', height: '10px', background: '#4ade80', borderRadius: '50%', marginRight: '10px' }}></span>
                                Acme Corp (Enterprise)
                            </li>
                            <li style={{ padding: '0.5rem 0', display: 'flex', alignItems: 'center' }}>
                                <span style={{ width: '10px', height: '10px', background: '#fbbf24', borderRadius: '50%', marginRight: '10px' }}></span>
                                Stark Industries (Renewal)
                            </li>
                            <li style={{ padding: '0.5rem 0', display: 'flex', alignItems: 'center' }}>
                                <span style={{ width: '10px', height: '10px', background: '#ef4444', borderRadius: '50%', marginRight: '10px' }}></span>
                                Wayne Enterprises (At Risk)
                            </li>
                        </ul>
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
                    <button onClick={handleLogout}>Logout (CRM Only)</button>
                    <button onClick={handleGlobalLogout} className="btn-danger">Global Force Logout</button>
                </div>
            </div>
        </div>
    );
};

export default CRMSystem;
