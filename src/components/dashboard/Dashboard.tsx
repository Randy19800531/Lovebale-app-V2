import React from 'react';
import { useAuth } from '@/hooks/useAuth';
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
  CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const Dashboard: React.FC = () => {
  const { user } = useAuth();

  const quickActions = [
    {
      title: 'Generate VBA Code',
      description: 'Create Excel/Sheets macros from natural language',
      icon: Code,
      href: '/vba-generator',
      color: 'bg-blue-500',
    },
    {
      title: 'Build Workflow',
      description: 'Design automation workflows with drag-and-drop',
      icon: Workflow,
      href: '/workflow-builder',
      color: 'bg-green-500',
    },
    {
      title: 'Test Automation',
      description: 'Validate your automations with AI testing',
      icon: TestTube,
      href: '/ai-testing',
      color: 'bg-purple-500',
    },
    {
      title: 'Manage Projects',
      description: 'Organize your automation projects',
      icon: Building,
      href: '/agency-workspace',
      color: 'bg-orange-500',
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
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">
          Welcome back, {user?.profile?.full_name || 'User'}!
        </h1>
        <p className="text-blue-100">
          Ready to build, validate, and monetize your automations? Let's get started.
        </p>
        <div className="mt-4 flex items-center space-x-2">
          <span className="px-2 py-1 bg-white/20 rounded-full text-xs font-medium capitalize">
            {user?.profile?.tier || 'free'} Plan
          </span>
          {user?.profile?.is_super_admin && (
            <span className="px-2 py-1 bg-yellow-500/20 rounded-full text-xs font-medium">
              Super Admin
            </span>
          )}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {stat.title}
                    </p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">
                      {stat.description}
                    </p>
                  </div>
                  <div className="flex flex-col items-end">
                    <Icon className="h-8 w-8 text-muted-foreground mb-2" />
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
        <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <Link to={action.href}>
                  <CardHeader className="pb-3">
                    <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center mb-3`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{action.title}</CardTitle>
                    <CardDescription>{action.description}</CardDescription>
                  </CardHeader>
                </Link>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest automation work</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-sm">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-muted-foreground">Welcome to Zero-Point.AI!</span>
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

        <Card>
          <CardHeader>
            <CardTitle>Getting Started</CardTitle>
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
                <span className="text-sm text-muted-foreground">Run an AI test</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="h-5 w-5 border-2 border-muted rounded-full"></div>
                <span className="text-sm text-muted-foreground">Create your first project</span>
              </div>
            </div>
            <Button className="w-full mt-4" asChild>
              <Link to="/vba-generator">Get Started</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};