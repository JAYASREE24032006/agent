# 🚀 Full Stack Deployment Guide

Your project consists of 3 parts. You have already done Part 1.

| Part | Service | Where to Deploy | Status |
| :--- | :--- | :--- | :--- |
| **Frontend** | React (Vite) | **Netlify** / Vercel | ✅ **Done** |
| **Backend** | Python (FastAPI) | **Render.com** (Recommended) | ⏳ **Next Step** |
| **Database** | Redis | **Render.com** (Managed Redis) | ⏳ **Next Step** |

---

## 1. Deploying the Backend (Python + Redis)

We will use **Render.com** because it supports Python and Redis easily.

### A. Create an Account
1.  Go to [dashboard.render.com](https://dashboard.render.com/) and Sign Up (you can use GitHub).

### B. Create the Redis Database
1.  Click **New +** -> **Redis**.
2.  Name: `agentic-sso-redis`.
3.  Region: Choose one close to you (e.g., Singapore, Frankfurt).
4.  Plan: **Free** (if available) or Starter.
5.  Click **Create Redis**.
6.  **Copy the "Internal Redis URL"** (looks like `redis://red-c12345...:6379`). You will need this.

### C. Create the Web Service (Python Backend)
1.  Click **New +** -> **Web Service**.
2.  Choose "Build and deploy from a Git repository".
3.  Connect your GitHub account and select `agentic-sso`.
4.  **Name**: `agentic-sso-backend`.
5.  **Root Directory**: `backend` (Important!).
6.  **Runtime**: `Python 3`.
7.  **Build Command**: `pip install -r requirements.txt`.
8.  **Start Command**: `uvicorn app.main:app --host 0.0.0.0 --port $PORT`.
9.  **Environment Variables** (Click "Add Environment Variable"):
    *   Key: `REDIS_URL`
    *   Value: *(Paste the Redis URL you copied in Step B)*
    *   Key: `PYTHON_VERSION`
    *   Value: `3.9.18`
10. Click **Create Web Service**.

*Wait about 2-5 minutes. Once it says "Live", copy your new Backend URL (e.g., `https://agentic-sso-backend.onrender.com`).*

---

## 2. Connect Frontend to Backend

Now that the backend is live, tell your Netlify Frontend where to find it.

1.  Go to **Netlify** -> Site Settings -> **Environment variables**.
2.  Add a new variable:
    *   Key: `VITE_API_URL`
    *   Value: `https://agentic-sso-backend.onrender.com` (Your Render Backend URL)
3.  Go to **Deploys** -> **Trigger deploy**.

---

## ✅ Deployment Complete!
Your application is now fully live on the cloud.
- **Frontend**: Netlify (Talks to Render)
- **Backend**: Render (Talks to Redis)
- **Redis**: Render (Stores Sessions)
