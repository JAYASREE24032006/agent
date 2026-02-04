import React from 'react';
import { Link } from 'react-router-dom';

const ERPSuite = ({ status, handleLogout, handleGlobalLogout }) => {
    return (
        <div className="card app-card erp-theme" style={{ padding: 0, overflow: 'hidden', height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <div className="app-header" style={{ position: 'absolute', top: 0, width: '100%', zIndex: 10, background: 'rgba(0,0,0,0.8)', padding: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                    <h1>ERP Suite</h1>
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
                    <h2 style={{ marginBottom: '1rem', color: '#facc15' }}>Enterprise Access Verified</h2>
                    <p style={{ opacity: 0.8 }}>Secure tunnel established to <strong>Finance & Logistics Core</strong>.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                    {/* Financials */}
                    <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.5rem', borderRadius: '12px' }}>
                        <h3 style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>Financial Overview</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
                                <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>Revenue (Q1)</div>
                                <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#4ade80' }}>$2.4M</div>
                            </div>
                            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
                                <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>Opex</div>
                                <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#f87171' }}>$1.1M</div>
                            </div>
                        </div>
                    </div>

                    {/* Inventory */}
                    <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.5rem', borderRadius: '12px' }}>
                        <h3 style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>Inventory Alerts</h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ padding: '0.5rem 0', display: 'flex', justifyContent: 'space-between' }}>
                                <span>Chipset XZ-900</span>
                                <span style={{ color: '#ef4444', fontWeight: 'bold' }}>Low Stock (50)</span>
                            </li>
                            <li style={{ padding: '0.5rem 0', display: 'flex', justifyContent: 'space-between' }}>
                                <span>Display Panel 4K</span>
                                <span style={{ color: '#facc15' }}>Reorder Soon</span>
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
                    <button onClick={handleLogout}>Logout (ERP Only)</button>
                    <button onClick={handleGlobalLogout} className="btn-danger">Global Force Logout</button>
                </div>
            </div>
        </div>
    );
};

export default ERPSuite;
