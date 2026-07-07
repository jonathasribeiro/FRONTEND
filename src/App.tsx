import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import DashboardPage from './pages/DashboardPage';
import EmployeesPage from './pages/EmployeesPage';
import { auth0Config, isAuthConfigured } from './config/auth0';

function LoginScreen() {
  const { loginWithRedirect, isLoading } = useAuth0();

  if (isLoading) {
    return <p className="p-8 text-center text-slate-300">Loading authentication...</p>;
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-6">
      <div className="max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center">
        <h1 className="text-2xl font-semibold text-white">HR Analytics Platform</h1>
        <p className="mt-3 text-slate-400">
          Sign in with Auth0 to access workforce dashboards and employee management.
        </p>
        <button
          type="button"
          onClick={() => loginWithRedirect()}
          className="mt-6 w-full rounded-lg bg-cyan-500 px-4 py-2 font-medium text-slate-950"
        >
          Sign in
        </button>
      </div>
    </div>
  );
}

function ProtectedApp() {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  if (isLoading) {
    return <p className="p-8 text-center text-slate-300">Loading session...</p>;
  }

  if (!isAuthenticated) {
    if (isAuthConfigured) {
      loginWithRedirect();
      return null;
    }
  }

  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/employees" element={<EmployeesPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AppLayout>
  );
}

function AppRoutes() {
  if (!isAuthConfigured) {
    return (
      <BrowserRouter>
        <AppLayout>
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/employees" element={<EmployeesPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AppLayout>
      </BrowserRouter>
    );
  }

  return (
    <Auth0Provider
      domain={auth0Config.domain}
      clientId={auth0Config.clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: auth0Config.audience || undefined,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/*" element={<ProtectedApp />} />
        </Routes>
      </BrowserRouter>
    </Auth0Provider>
  );
}

export default function App() {
  return <AppRoutes />;
}
