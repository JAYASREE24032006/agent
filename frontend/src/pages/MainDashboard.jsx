import React from 'react';
import { Link } from 'react-router-dom';

const MainDashboard = ({ status, handleLogout, handleGlobalLogout }) => {
    const currentApp = localStorage.getItem('current_app_name') || 'Portal Dashboard';

    const handleAppSwitch = (e) => {
        const newApp = e.target.value;
        localStorage.setItem('current_app_name', newApp);
        window.location.reload(); // Reload to reconnect socket with new app name
    };

    const handleLaunchAll = () => {
        const urls = ['/hr', '/crm', '/erp', '/admin'];
        let blocked = false;

        urls.forEach(url => {
            const win = window.open(url, '_blank');
            if (!win || win.closed || typeof win.closed === 'undefined') {
                blocked = true;
            }
        });

        if (blocked) {
            alert("⚠️ BROWSER BLOCKED WINDOWS\n\nThe browser allowed 1 tab but blocked the others.\n\nTO FIX THIS:\n1. Look for a 'Popup Blocked' icon (🚫) in your browser address bar (top right).\n2. Click it and select 'Always allow popups and redirects from localhost'.\n3. Click 'Done' and try 'Launch Complete Workspace' again.");
        }
    };

    return (
        <div className="card dashboard-card">
            <h1>{currentApp}</h1>
            <p className="welcome-text">Connected to Enterprise SSO Hub</p>

            {status && <span className="status-badge status-success">{status}</span>}

            <div className="grid-menu">
                <Link to="/hr" className="menu-item hr" target="_blank" rel="noopener noreferrer">
                    <h3> HR Portal</h3>
                    <p>Employee Records & Payroll</p>
                </Link>
                <Link to="/crm" className="menu-item crm" target="_blank" rel="noopener noreferrer">
                    <h3> CRM System</h3>
                    <p>Sales & Customer Leads</p>
                </Link>
                <Link to="/erp" className="menu-item erp" target="_blank" rel="noopener noreferrer">
                    <h3> ERP Suite</h3>
                    <p>Inventory & Operations</p>
                </Link>
                <Link to="/admin" className="menu-item admin" target="_blank" rel="noopener noreferrer">
                    <h3> Admin Console</h3>
                    <p>Security Logs & Access</p>
                </Link>
            </div>

            <div className="actions" style={{ marginBottom: '1rem', marginTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <button
                    onClick={handleLaunchAll}
                    style={{
                        background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
                        fontSize: '1.2rem',
                        padding: '1rem 2rem',
                        border: '1px solid rgba(255,255,255,0.2)',
                        boxShadow: '0 0 20px rgba(6,182,212,0.3)'
                    }}
                >
                    Launch Complete Workspace
                </button>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <button onClick={handleLogout} className="btn-secondary">Local Logout ({currentApp})</button>
                    <button onClick={handleGlobalLogout} className="btn-danger"> Global Force Logout (Kill All Apps)</button>
                </div>
            </div>
        </div>
    );
};

export default MainDashboard;
