# Agentic AI-Driven SSO System-SHIELD

A next-generation Single Sign-On (SSO) system powered by autonomous AI agents for real-time security monitoring, risk assessment, and session management. This system features a unified dashboard hub connecting HR, CRM, ERP, and Admin portals.

##  Features

- **Agentic Security Layer**:
  - **Risk Agent**: Continuously evaluates user behavior and session anomalies.
  - **Decision Agent**: Automates access revocation and step-up authentication.
  - **Audit Agent**: Logs all security events for compliance.
- **Multi-Tenant Dashboards**:
  - **Main Hub**: Central launching point for all enterprise apps.
  - **HR Portal**: Employee records and leave management.
  - **CRM System**: Sales pipeline and lead tracking.
  - **ERP Suite**: Inventory alerts and financial overviews.
  - **Admin Console**: System health, audit logs, and user management.
- **Advanced Auth**:
  - JWT-based stateless authentication.
  - Redis-backed session management with real-time revocation.
  - Multi-tab synchronization (Global Logout kills all active sessions).
- **Modern UI**:
  - Glassmorphism design with "Dark Yellow" activity highlights.
  - Responsive layout with integrated app launchers.

##  Tech Stack

- **Frontend**: React (Vite), CSS3 (Glassmorphism), Axios
- **Backend**: Python (FastAPI)
- **Database/Cache**: Redis (Session Store)
- **AI/ML**: Python-based autonomous agents
- **Containerization**: Docker & Docker Compose

## Installation & Setup

### Prerequisites
- Node.js (v18+)
- Python (v3.9+)
- Redis Server (Running locally or via Docker)

### 1. Backend Setup
```bash
cd backend
python -m venv venv
# Windows
.\venv\Scripts\activate
# Linux/Mac
source venv/bin/activate

pip install -r requirements.txt
python -m uvicorn app.main:app --reload --port 8000
```

### 2. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
Access the application at `http://localhost:5173`.

##  Deployment

### Frontend (Vercel)
1. Import the `frontend` folder as the root directory.
2. Build command: `npm run build`
3. Output directory: `dist`

### Backend (Render/Railway)
1. Deploy the `backend` folder as a Python web service.
2. Build command: `pip install -r requirements.txt`
3. Start command: `uvicorn app.main:app --host 0.0.0.0 --port $PORT`

##  Project Structure
```
agentic-sso/
├── backend/            # FastAPI Application & AI Agents
│   ├── app/
│   │   ├── agents/    # Risk, Decision, Audit Agents
│   │   ├── api/       # Auth & User Endpoints
│   │   └── core/      # Config & Database
│   └── requirements.txt
├── frontend/           # React Application
│   ├── src/
│   │   ├── pages/     # Dashboard Components (HR, CRM, etc.)
│   │   ├── auth/      # Interceptors & Socket Logic
│   │   └── App.jsx
│   └── package.json
└── README.md
```

##  Security
The system uses a "Zero Trust" approach where every request is vetted by the AI layer. Anomalies (e.g., impossible travel, device mismatch) trigger immediate session termination.


