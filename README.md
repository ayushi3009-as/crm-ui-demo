# TIVRA CRM - AI Automation Platform

This is a modern, high-velocity CRM application built with Next.js (Frontend) and Node.js/Express (Backend) with an SQLite database.

## Features Included
- **Phase 1 & 2:** Authentication and Leads Table
- **Phase 3:** Interactive Sales Pipeline (Drag-and-Drop Kanban Board)
- **Phase 4:** Dynamic Lead Sources Analytics Dashboard

## How to Run the Project Locally

Because this project uses a local SQLite database and backend server, you must run **both** the backend and the frontend for the application to work.

### 1. Start the Backend (Server)
Open a terminal and run the following commands:
```bash
cd server
npm install
npm run dev
```
*(The backend runs on http://localhost:5000)*

### 2. Start the Frontend (Client)
Open a **new** separate terminal and run the following commands:
```bash
cd client
npm install
npm run dev
```
*(The frontend runs on http://localhost:3000)*

### 3. Open the App
Once both servers are running, open your browser and visit [http://localhost:3000](http://localhost:3000). You can log in with any credentials you create, or use `admin@tivra.com` / `admin123`.
