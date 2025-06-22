import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, CheckCircle } from 'lucide-react';

const About = () => {
  const features = [
    'React 18 with TypeScript',
    'Vite for fast development',
    'Tailwind CSS for styling',
    'shadcn/ui components',
    'React Router for navigation',
    'Dark mode support',
    'Responsive design',
    'Modern development tools'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900 dark:to-indigo-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
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
                  {features.map((feature, index) => (
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