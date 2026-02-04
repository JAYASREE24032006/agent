import React from 'react';
import { Link } from 'react-router-dom';

const AdminConsole = ({ status, handleLogout, handleGlobalLogout }) => {
    return (
        <div className="card app-card admin-theme" style={{ padding: 0, overflow: 'hidden', height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <div className="app-header" style={{ position: 'absolute', top: 0, width: '100%', zIndex: 10, background: 'rgba(0,0,0,0.8)', padding: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                    <h1>Admin Console</h1>
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
                    <h2 style={{ marginBottom: '1rem', color: '#f87171' }}>System Overview</h2>
                    <div style={{ display: 'flex', gap: '2rem' }}>
                        <div>
                            <span style={{ display: 'block', fontSize: '0.8rem', opacity: 0.7 }}>Active Users</span>
                            <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>142</span>
                        </div>
                        <div>
                            <span style={{ display: 'block', fontSize: '0.8rem', opacity: 0.7 }}>Security Alerts</span>
                            <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fbbf24' }}>3</span>
                        </div>
                        <div>
                            <span style={{ display: 'block', fontSize: '0.8rem', opacity: 0.7 }}>System Uptime</span>
                            <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#4ade80' }}>99.99%</span>
                        </div>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '1.5rem' }}>
                    {/* Security Logs */}
                    <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.5rem', borderRadius: '12px' }}>
                        <h3 style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>Security Audit Logs</h3>
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                            <thead>
                                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', textAlign: 'left' }}>
                                    <th style={{ padding: '0.5rem' }}>Time</th>
                                    <th style={{ padding: '0.5rem' }}>Event</th>
                                    <th style={{ padding: '0.5rem' }}>User</th>
                                    <th style={{ padding: '0.5rem' }}>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ padding: '0.5rem', opacity: 0.7 }}>10:23 AM</td>
                                    <td style={{ padding: '0.5rem' }}>Login Attempt</td>
                                    <td style={{ padding: '0.5rem' }}>admin</td>
                                    <td style={{ padding: '0.5rem', color: '#4ade80' }}>Success</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '0.5rem', opacity: 0.7 }}>09:15 AM</td>
                                    <td style={{ padding: '0.5rem' }}>Password Change</td>
                                    <td style={{ padding: '0.5rem' }}>user.john</td>
                                    <td style={{ padding: '0.5rem', color: '#4ade80' }}>Success</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '0.5rem', opacity: 0.7 }}>03:45 AM</td>
                                    <td style={{ padding: '0.5rem' }}>Failed Login</td>
                                    <td style={{ padding: '0.5rem' }}>unknown</td>
                                    <td style={{ padding: '0.5rem', color: '#ef4444' }}>Blocked</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* User Management */}
                    <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.5rem', borderRadius: '12px' }}>
                        <h3 style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>User Directory (Recent)</h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ padding: '0.8rem 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '1rem' }}>AD</div>
                                    <div>
                                        <div style={{ fontWeight: 'bold' }}>Admin User</div>
                                        <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>System Administrator</div>
                                    </div>
                                </div>
                                <span style={{ padding: '0.2rem 0.5rem', borderRadius: '4px', background: 'rgba(74, 222, 128, 0.2)', color: '#4ade80', fontSize: '0.8rem' }}>Active</span>
                            </li>
                            <li style={{ padding: '0.8rem 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#a855f7', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '1rem' }}>JD</div>
                                    <div>
                                        <div style={{ fontWeight: 'bold' }}>John Doe</div>
                                        <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>HR Manager</div>
                                    </div>
                                </div>
                                <span style={{ padding: '0.2rem 0.5rem', borderRadius: '4px', background: 'rgba(74, 222, 128, 0.2)', color: '#4ade80', fontSize: '0.8rem' }}>Active</span>
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
                    <button onClick={handleGlobalLogout} className="btn-danger">Global Force Logout</button>
                </div>
            </div >
        </div>
    );
};

export default AdminConsole;
