'use client';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ThemeToggle } from '@/components/ThemeToggle';
import { BookOpen, LogOut, User } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const { user, loading, logout } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4 animate-pulse" />
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="absolute top-4 right-4">
          <ThemeToggle />
        </div>
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <BookOpen className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <CardTitle className="text-3xl font-bold">E-Vidya</CardTitle>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Educational Management System</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <Link href="/login">
              <Button className="w-full">Sign In</Button>
            </Link>
            <Link href="/register">
              <Button variant="outline" className="w-full">Create Account</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <nav className="bg-white dark:bg-gray-800 shadow-sm border-b dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <BookOpen className="h-8 w-8 text-blue-600 mr-3" />
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">E-Vidya</h1>
            </div>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                <span className="text-sm text-gray-700 dark:text-gray-300">{user.name}</span>
              </div>
              <Button variant="outline" onClick={logout}>
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Welcome back, {user.name}!
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Access your educational management dashboard
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Module Cards */}
          {[
            { name: 'Academic', href: '/academic', color: 'bg-blue-500' },
            { name: 'Students', href: '/student', color: 'bg-green-500' },
            { name: 'Finance', href: '/finance', color: 'bg-yellow-500' },
            { name: 'Library', href: '/library', color: 'bg-purple-500' },
            { name: 'Exams', href: '/exams', color: 'bg-red-500' },
            { name: 'Transport', href: '/transport', color: 'bg-indigo-500' }
          ].map((module) => (
            <Card key={module.name} className="hover:shadow-lg transition-shadow dark:bg-gray-800 dark:border-gray-700">
              <CardContent className="p-6">
                <div className={`w-12 h-12 ${module.color} rounded-lg mb-4 flex items-center justify-center`}>
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 dark:text-white">{module.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Manage {module.name.toLowerCase()} related activities
                </p>
                <Link href={module.href}>
                  <Button variant="outline" size="sm">
                    Access Module
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
