# HR Analytics Platform

> Workforce intelligence dashboard — Auth0, ApexCharts, and React Hook Form in a production-grade SPA.

[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Auth0](https://img.shields.io/badge/Auth0-Ready-EB5424?style=flat-square&logo=auth0&logoColor=white)](https://auth0.com)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![Docker](https://img.shields.io/badge/Docker-ready-2496ED?style=flat-square&logo=docker&logoColor=white)](https://docker.com)

---

## Overview

Frontend for an **HR analytics and workforce management** platform. Executive dashboard with headcount trends, turnover metrics, employee directory, and validated forms.

Built for enterprise HR teams — demonstrates Auth0 integration, chart libraries, form validation, and responsive dark UI.

---

## Features

### Dashboard
- KPI cards — Active employees, Open positions, Time to hire, Retention rate
- **Headcount trend** — Area chart (Engineering vs Operations)
- **Quarterly turnover** — Bar chart

### Employees
- Sortable employee directory table
- Add employee form with **React Hook Form** validation
- Status badges (Active, On leave)

### Auth
- **Auth0** integration (optional — runs without credentials in demo mode)
- Protected routes when configured

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| UI | React 18 + TypeScript |
| Build | Vite 6 |
| Auth | Auth0 React SDK |
| Charts | ApexCharts + react-apexcharts |
| Forms | React Hook Form |
| Styling | Tailwind CSS 3 |
| Testing | Jest + Testing Library |

---

## Quick Start

### Demo mode (no Auth0)

```bash
git clone https://github.com/jonathasribeiro/FRONTEND.git
cd FRONTEND
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### With Auth0

```bash
cp .env.example .env
# Fill VITE_AUTH0_DOMAIN, VITE_AUTH0_CLIENT_ID, VITE_AUTH0_AUDIENCE
npm run dev
```

### Docker

```bash
docker compose up --build
```

---

## Environment

| Variable | Required | Description |
|----------|----------|-------------|
| `VITE_AUTH0_DOMAIN` | No* | Auth0 tenant domain |
| `VITE_AUTH0_CLIENT_ID` | No* | SPA client ID |
| `VITE_AUTH0_AUDIENCE` | No | API audience |

\* App runs in demo mode without Auth0 credentials.

---

## Project Structure

```
src/
├── components/layout/   # AppLayout, navigation
├── pages/
│   ├── DashboardPage.tsx    # Charts + KPIs
│   └── EmployeesPage.tsx    # Table + form
├── config/auth0.ts
└── App.tsx              # Routes + Auth0 provider
```

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run test` | Unit tests |
| `npm run lint` | ESLint |

---

## Author

**Jonathas Ribeiro** — Senior Fullstack Engineer  
[LinkedIn](https://www.linkedin.com/in/jonathasribeiroreal)
