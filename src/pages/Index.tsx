import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Code, Palette, Zap } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            Welcome to Your App
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8">
            This is your custom React application built with Vite, TypeScript, and shadcn/ui components.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/about">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">Learn More</Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Code className="h-6 w-6 text-primary" />
                <CardTitle>Modern Stack</CardTitle>
              </div>
              <CardDescription>
                Built with the latest technologies
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                React 18, TypeScript, Vite, and Tailwind CSS for a modern development experience.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Palette className="h-6 w-6 text-primary" />
                <CardTitle>UI Components</CardTitle>
              </div>
              <CardDescription>
                Beautiful, accessible components
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Pre-built components from shadcn/ui with Radix UI primitives and Tailwind styling.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Zap className="h-6 w-6 text-primary" />
                <CardTitle>Ready to Build</CardTitle>
              </div>
              <CardDescription>
                Start developing immediately
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Everything is configured and ready for you to start building your application.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold mb-4">Ready to explore?</h2>
          <p className="text-muted-foreground mb-6">
            Check out the different pages to see the navigation in action.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" asChild>
              <Link to="/about">About Page</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/contact">Contact Page</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;