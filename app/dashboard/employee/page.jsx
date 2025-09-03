"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  Plus,
  Clock,
  CheckCircle,
  XCircle,
  Eye,
  FileText,
  Lightbulb,
  Bell,
  LogOut,
  Search,
} from "lucide-react";
import Link from "next/link";

export default function EmployeeDashboard() {
  const [user] = useState({
    name: "John Employee",
    email: "john.employee@company.com",
    department: "Engineering",
    initials: "JE",
  });

  // Mock suggestions data
  const [suggestions] = useState([
    {
      id: 1,
      title: "Implement automated testing pipeline",
      category: "Process",
      status: "Under Review",
      submittedDate: "2024-09-01",
      expectedImpact: "High",
      description:
        "Automate our current manual testing process to reduce deployment time...",
    },
    {
      id: 2,
      title: "Flexible working hours policy",
      category: "HR",
      status: "Approved",
      submittedDate: "2024-08-15",
      expectedImpact: "Medium",
      description:
        "Allow employees to choose their working hours within core business hours...",
    },
    {
      id: 3,
      title: "Cost reduction in cloud services",
      category: "Cost Saving",
      status: "Implemented",
      submittedDate: "2024-07-20",
      expectedImpact: "High",
      description: "Switch to more cost-effective cloud storage solutions...",
    },
    {
      id: 4,
      title: "New employee onboarding app",
      category: "Innovation",
      status: "Rejected",
      submittedDate: "2024-08-01",
      expectedImpact: "Medium",
      description: "Mobile app for streamlined employee onboarding process...",
    },
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "bg-gray-500";
      case "Under Review":
        return "bg-blue-500";
      case "Approved":
        return "bg-green-500";
      case "Rejected":
        return "bg-red-500";
      case "Implemented":
        return "bg-purple-500";
      default:
        return "bg-gray-500";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Pending":
        return Clock;
      case "Under Review":
        return Eye;
      case "Approved":
        return CheckCircle;
      case "Rejected":
        return XCircle;
      case "Implemented":
        return CheckCircle;
      default:
        return Clock;
    }
  };

  const stats = {
    total: suggestions.length,
    pending: suggestions.filter(
      (s) => s.status === "Pending" || s.status === "Under Review"
    ).length,
    approved: suggestions.filter((s) => s.status === "Approved").length,
    implemented: suggestions.filter((s) => s.status === "Implemented").length,
  };

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Header */}
      <header className='bg-white border-b border-gray-200'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-16'>
            <div className='flex items-center space-x-3'>
              <Lightbulb className='h-8 w-8 text-blue-600' />
              <div>
                <h1 className='text-xl font-semibold text-gray-900'>
                  Employee Suggestion System
                </h1>
                <p className='text-sm text-gray-500'>Employee Portal</p>
              </div>
            </div>

            <div className='flex items-center space-x-4'>
              <Button variant='ghost' size='sm'>
                <Bell className='h-4 w-4' />
              </Button>
              <Avatar>
                <AvatarFallback>{user.initials}</AvatarFallback>
              </Avatar>
              <div className='hidden md:block'>
                <p className='text-sm font-medium text-gray-700'>{user.name}</p>
                <p className='text-xs text-gray-500'>{user.department}</p>
              </div>
              <Button variant='ghost' size='sm' asChild>
                <Link href='/auth/login'>
                  <LogOut className='h-4 w-4' />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        {/* Welcome Section */}
        <div className='mb-8'>
          <h2 className='text-2xl font-bold text-gray-900 mb-2'>
            Welcome back, {user.name}!
          </h2>
          <p className='text-gray-600'>
            Share your ideas and track your suggestions to help improve our
            workplace.
          </p>
        </div>

        {/* Quick Stats */}
        <div className='grid grid-cols-1 md:grid-cols-4 gap-6 mb-8'>
          <Card>
            <CardContent className='p-6'>
              <div className='flex items-center'>
                <FileText className='h-8 w-8 text-blue-500' />
                <div className='ml-4'>
                  <p className='text-sm font-medium text-gray-600'>
                    Total Suggestions
                  </p>
                  <p className='text-2xl font-bold text-gray-900'>
                    {stats.total}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='p-6'>
              <div className='flex items-center'>
                <Clock className='h-8 w-8 text-orange-500' />
                <div className='ml-4'>
                  <p className='text-sm font-medium text-gray-600'>
                    Pending Review
                  </p>
                  <p className='text-2xl font-bold text-gray-900'>
                    {stats.pending}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='p-6'>
              <div className='flex items-center'>
                <CheckCircle className='h-8 w-8 text-green-500' />
                <div className='ml-4'>
                  <p className='text-sm font-medium text-gray-600'>Approved</p>
                  <p className='text-2xl font-bold text-gray-900'>
                    {stats.approved}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='p-6'>
              <div className='flex items-center'>
                <Lightbulb className='h-8 w-8 text-purple-500' />
                <div className='ml-4'>
                  <p className='text-sm font-medium text-gray-600'>
                    Implemented
                  </p>
                  <p className='text-2xl font-bold text-gray-900'>
                    {stats.implemented}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Section */}
        <div className='mb-8'>
          <Card>
            <CardContent className='p-6'>
              <div className='flex items-center justify-between'>
                <div>
                  <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                    Have a great idea?
                  </h3>
                  <p className='text-gray-600'>
                    Submit your suggestion and help us improve our workplace
                    together.
                  </p>
                </div>
                <Button className='ml-4'>
                  <Plus className='h-4 w-4 mr-2' />
                  New Suggestion
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Suggestions */}
        <Card>
          <CardHeader>
            <div className='flex items-center justify-between'>
              <div>
                <CardTitle>Your Suggestions</CardTitle>
                <CardDescription>
                  Track the status of your submitted suggestions
                </CardDescription>
              </div>
              <Button variant='outline' size='sm'>
                <Search className='h-4 w-4 mr-2' />
                Search
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className='space-y-4'>
              {suggestions.map((suggestion) => {
                const StatusIcon = getStatusIcon(suggestion.status);
                return (
                  <div
                    key={suggestion.id}
                    className='border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow'
                  >
                    <div className='flex items-start justify-between'>
                      <div className='flex-1'>
                        <div className='flex items-center space-x-3 mb-2'>
                          <h4 className='text-lg font-medium text-gray-900'>
                            {suggestion.title}
                          </h4>
                          <Badge variant='outline'>{suggestion.category}</Badge>
                          <Badge
                            className={`text-white ${getStatusColor(
                              suggestion.status
                            )}`}
                          >
                            <StatusIcon className='h-3 w-3 mr-1' />
                            {suggestion.status}
                          </Badge>
                        </div>
                        <p className='text-gray-600 text-sm mb-3'>
                          {suggestion.description}
                        </p>
                        <div className='flex items-center space-x-4 text-sm text-gray-500'>
                          <span>Submitted: {suggestion.submittedDate}</span>
                          <span>Impact: {suggestion.expectedImpact}</span>
                        </div>
                      </div>
                      <Button variant='outline' size='sm'>
                        View Details
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
