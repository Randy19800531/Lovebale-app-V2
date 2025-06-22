import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, CheckCircle, Code, Palette, Zap, Shield, Smartphone, Globe, Database, Settings, Users, BarChart } from 'lucide-react';

const About = () => {
  const technologyFeatures = [
    'React 18 with TypeScript',
    'Vite for fast development',
    'Tailwind CSS for styling',
    'shadcn/ui components',
    'React Router for navigation',
    'Dark mode support',
    'Responsive design',
    'Modern development tools'
  ];

  const applicationFeatures = [
    {
      icon: <Code className="h-6 w-6 text-blue-500" />,
      title: "Modern Architecture",
      description: "Built with component-based architecture for scalability and maintainability"
    },
    {
      icon: <Palette className="h-6 w-6 text-purple-500" />,
      title: "Beautiful UI/UX",
      description: "Carefully crafted user interface with attention to design details and user experience"
    },
    {
      icon: <Zap className="h-6 w-6 text-yellow-500" />,
      title: "High Performance",
      description: "Optimized for speed with lazy loading, code splitting, and efficient rendering"
    },
    {
      icon: <Shield className="h-6 w-6 text-green-500" />,
      title: "Security First",
      description: "Built with security best practices and modern authentication methods"
    },
    {
      icon: <Smartphone className="h-6 w-6 text-pink-500" />,
      title: "Mobile Responsive",
      description: "Fully responsive design that works seamlessly across all device sizes"
    },
    {
      icon: <Globe className="h-6 w-6 text-indigo-500" />,
      title: "Cross-Platform",
      description: "Works consistently across different browsers and operating systems"
    },
    {
      icon: <Database className="h-6 w-6 text-cyan-500" />,
      title: "Data Management",
      description: "Efficient state management and data handling with React Query integration"
    },
    {
      icon: <Settings className="h-6 w-6 text-gray-500" />,
      title: "Customizable",
      description: "Highly configurable with theme support and customizable components"
    },
    {
      icon: <Users className="h-6 w-6 text-orange-500" />,
      title: "User-Centric",
      description: "Designed with user accessibility and usability as top priorities"
    },
    {
      icon: <BarChart className="h-6 w-6 text-red-500" />,
      title: "Analytics Ready",
      description: "Built-in support for analytics and performance monitoring"
    }
  ];

  const developmentFeatures = [
    "Hot Module Replacement (HMR)",
    "TypeScript for type safety",
    "ESLint for code quality",
    "Automatic dependency management",
    "Build optimization",
    "Development server with live reload",
    "Component library integration",
    "Modern CSS with Tailwind",
    "Icon library with Lucide React",
    "Form handling with React Hook Form",
    "Toast notifications",
    "Theme switching capability"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900 dark:to-indigo-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <Button variant="ghost" asChild className="mb-4">
              <Link to="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6">
              About This Application
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Learn more about the technologies and features that power this application.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Technology Stack</CardTitle>
                <CardDescription>
                  Modern tools for modern development
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {technologyFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Getting Started</CardTitle>
                <CardDescription>
                  Everything you need to know
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    This application is built with modern web technologies to provide
                    a fast, accessible, and maintainable codebase.
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    The navigation system uses React Router for client-side routing,
                    ensuring smooth transitions between pages without full page reloads.
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    All components are built with accessibility in mind and support
                    both light and dark themes.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Application Features Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">Application Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {applicationFeatures.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      {feature.icon}
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Development Features Section */}
          <div className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Development Features</CardTitle>
                <CardDescription>
                  Advanced development capabilities and tools
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {developmentFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Performance & Quality Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Performance Optimizations</CardTitle>
                <CardDescription>
                  Built for speed and efficiency
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Code splitting for faster initial load</li>
                  <li>• Lazy loading of components</li>
                  <li>• Optimized bundle size</li>
                  <li>• Efficient re-rendering with React 18</li>
                  <li>• CSS optimization with Tailwind</li>
                  <li>• Image optimization support</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Code Quality</CardTitle>
                <CardDescription>
                  Maintainable and reliable codebase
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• TypeScript for type safety</li>
                  <li>• ESLint for code consistency</li>
                  <li>• Component-based architecture</li>
                  <li>• Reusable UI components</li>
                  <li>• Clean code practices</li>
                  <li>• Comprehensive error handling</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to get in touch?</h2>
            <p className="text-muted-foreground mb-6">
              Visit our contact page to learn how to reach us.
            </p>
            <Button asChild>
              <Link to="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;