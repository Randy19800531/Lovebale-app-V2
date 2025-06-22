import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';
import { Toaster } from '@/components/ui/sonner';
import { AuthProvider } from '@/components/auth/AuthProvider';
import { useAuth } from '@/hooks/useAuth';
import { LoginForm } from '@/components/auth/LoginForm';
import { SignUpForm } from '@/components/auth/SignUpForm';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { Dashboard } from '@/components/dashboard/Dashboard';
import { VBAGenerator } from '@/components/vba/VBAGenerator';
import { useState } from 'react';

const queryClient = new QueryClient();

const AuthPage: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900 dark:to-indigo-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Zero-Point.AI
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Agency-focused automation platform
          </p>
        </div>
        
        {isSignUp ? (
          <SignUpForm onToggleMode={() => setIsSignUp(false)} />
        ) : (
          <LoginForm onToggleMode={() => setIsSignUp(true)} />
        )}
      </div>
    </div>
  );
};

const AppRoutes: React.FC = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <AuthPage />;
  }

  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/vba-generator" element={<VBAGenerator />} />
        <Route path="/workflow-builder" element={<div>Workflow Builder - Coming Soon</div>} />
        <Route path="/ai-testing" element={<div>AI Testing Suite - Coming Soon</div>} />
        <Route path="/agency-workspace" element={<div>Agency Workspace - Coming Soon</div>} />
        <Route path="/monetization-hub" element={<div>Monetization Hub - Coming Soon</div>} />
        <Route path="/admin" element={<div>Admin Panel - Coming Soon</div>} />
      </Routes>
    </DashboardLayout>
  );
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <AuthProvider>
          <Router>
            <div className="min-h-screen bg-background text-foreground">
              <AppRoutes />
            </div>
          </Router>
          <Toaster />
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;