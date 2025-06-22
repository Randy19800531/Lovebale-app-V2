import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';
import { Toaster } from '@/components/ui/sonner';
import { AuthProvider } from '@/components/auth/AuthProvider';
import { CustomThemeProvider } from '@/components/theme/ThemeProvider';
import { useAuth } from '@/hooks/useAuth';
import { LoginForm } from '@/components/auth/LoginForm';
import { SignUpForm } from '@/components/auth/SignUpForm';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { Dashboard } from '@/components/dashboard/Dashboard';
import { VBAGenerator } from '@/components/vba/VBAGenerator';
import { ThemeCustomizer } from '@/components/theme/ThemeCustomizer';
import { useState } from 'react';

const queryClient = new QueryClient();

const AuthPage: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-100 dark:from-orange-900/20 dark:via-pink-900/20 dark:to-purple-900/20 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23f97316" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="w-full max-w-md relative z-10">
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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-pink-50 to-purple-100">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">Loading your workspace...</p>
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
        <Route path="/theme-customizer" element={<ThemeCustomizer />} />
        <Route path="/workflow-builder" element={<div className="text-center py-12"><h2 className="text-2xl font-bold mb-4">Workflow Builder</h2><p className="text-muted-foreground">Coming Soon - Advanced drag-and-drop workflow designer</p></div>} />
        <Route path="/ai-testing" element={<div className="text-center py-12"><h2 className="text-2xl font-bold mb-4">AI Testing Suite</h2><p className="text-muted-foreground">Coming Soon - Automated validation and testing</p></div>} />
        <Route path="/agency-workspace" element={<div className="text-center py-12"><h2 className="text-2xl font-bold mb-4">Agency Workspace</h2><p className="text-muted-foreground">Coming Soon - Project management and collaboration</p></div>} />
        <Route path="/monetization-hub" element={<div className="text-center py-12"><h2 className="text-2xl font-bold mb-4">Monetization Hub</h2><p className="text-muted-foreground">Coming Soon - Marketplace and revenue tools</p></div>} />
        <Route path="/admin" element={<div className="text-center py-12"><h2 className="text-2xl font-bold mb-4">Admin Panel</h2><p className="text-muted-foreground">Coming Soon - Super admin controls</p></div>} />
      </Routes>
    </DashboardLayout>
  );
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <CustomThemeProvider>
          <AuthProvider>
            <Router>
              <div className="min-h-screen bg-background text-foreground">
                <AppRoutes />
              </div>
            </Router>
            <Toaster />
          </AuthProvider>
        </CustomThemeProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;