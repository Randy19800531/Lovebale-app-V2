import React from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useTheme } from '@/components/theme/ThemeProvider';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Code, 
  Workflow, 
  TestTube, 
  Building, 
  DollarSign, 
  TrendingUp,
  Users,
  FileText,
  Clock,
  CheckCircle,
  Palette,
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const { theme } = useTheme();

  const quickActions = [
    {
      title: 'Generate VBA Code',
      description: 'Create Excel/Sheets macros from natural language',
      icon: Code,
      href: '/vba-generator',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Build Workflow',
      description: 'Design automation workflows with drag-and-drop',
      icon: Workflow,
      href: '/workflow-builder',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Test Automation',
      description: 'Validate your automations with AI testing',
      icon: TestTube,
      href: '/ai-testing',
      gradient: 'from-purple-500 to-indigo-500',
    },
    {
      title: 'Customize Theme',
      description: 'Personalize your workspace appearance',
      icon: Palette,
      href: '/theme-customizer',
      gradient: 'from-pink-500 to-rose-500',
    },
  ];

  const stats = [
    {
      title: 'VBA Templates',
      value: '200+',
      description: 'Available templates',
      icon: FileText,
      trend: '+12%',
    },
    {
      title: 'Workflows',
      value: '2,000+',
      description: 'Prebuilt automations',
      icon: Workflow,
      trend: '+8%',
    },
    {
      title: 'Active Projects',
      value: '0',
      description: 'Your current projects',
      icon: Clock,
      trend: 'New',
    },
    {
      title: 'Completed Tests',
      value: '0',
      description: 'AI validations run',
      icon: CheckCircle,
      trend: 'Start',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className={`bg-gradient-to-r ${theme.primaryColor} rounded-lg p-6 text-white relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <div className="flex items-center space-x-4 mb-4">
            <img 
              src={theme.logoUrl} 
              alt={theme.brandName}
              className="h-12 w-12 object-contain bg-white/20 rounded-lg p-2"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
            <div>
              <h1 className="text-2xl font-bold">
                Welcome back, {user?.profile?.full_name || 'User'}!
              </h1>
              <p className="text-white/90">
                Ready to build, validate, and monetize your automations? Let's get started.
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium capitalize flex items-center space-x-1">
              <Sparkles className="h-4 w-4" />
              <span>{user?.profile?.tier || 'free'} Plan</span>
            </span>
            {user?.profile?.is_super_admin && (
              <span className="px-3 py-1 bg-yellow-500/20 rounded-full text-sm font-medium flex items-center space-x-1">
                <Crown className="h-4 w-4" />
                <span>Super Admin</span>
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-all duration-200 border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {stat.title}
                    </p>
                    <p className="text-2xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                      {stat.value}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {stat.description}
                    </p>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${theme.primaryColor} mb-2`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-xs font-medium text-green-600">
                      {stat.trend}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-lg font-semibold mb-4 flex items-center space-x-2">
          <Sparkles className="h-5 w-5 text-orange-500" />
          <span>Quick Actions</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 cursor-pointer group border-0 overflow-hidden">
                <Link to={action.href}>
                  <CardHeader className="pb-3 relative">
                    <div className={`w-12 h-12 bg-gradient-to-r ${action.gradient} rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-200`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:via-pink-500 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-200">
                      {action.title}
                    </CardTitle>
                    <CardDescription>{action.description}</CardDescription>
                  </CardHeader>
                </Link>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Recent Activity & Getting Started */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-0 bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-blue-900/20">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-blue-500" />
              <span>Recent Activity</span>
            </CardTitle>
            <CardDescription>Your latest automation work</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-sm">
                <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full"></div>
                <span className="text-muted-foreground">Welcome to {theme.brandName}!</span>
                <span className="text-xs text-muted-foreground ml-auto">Just now</span>
              </div>
              <div className="text-center py-8 text-muted-foreground">
                <FileText className="h-12 w-12 mx-auto mb-2 opacity-50" />
                <p>No recent activity yet</p>
                <p className="text-xs">Start by creating your first automation</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 bg-gradient-to-br from-white to-purple-50 dark:from-gray-800 dark:to-purple-900/20">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-purple-500" />
              <span>Getting Started</span>
            </CardTitle>
            <CardDescription>Complete these steps to unlock full potential</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-sm">Create your account</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="h-5 w-5 border-2 border-muted rounded-full"></div>
                <span className="text-sm text-muted-foreground">Generate your first VBA macro</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="h-5 w-5 border-2 border-muted rounded-full"></div>
                <span className="text-sm text-muted-foreground">Build a workflow</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="h-5 w-5 border-2 border-muted rounded-full"></div>
                <span className="text-sm text-muted-foreground">Customize your theme</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="h-5 w-5 border-2 border-muted rounded-full"></div>
                <span className="text-sm text-muted-foreground">Run an AI test</span>
              </div>
            </div>
            <Button className={`w-full mt-4 bg-gradient-to-r ${theme.primaryColor} hover:opacity-90 transition-opacity`} asChild>
              <Link to="/vba-generator">Get Started</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};