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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CheckCircle,
  XCircle,
  Clock,
  Users,
  TrendingUp,
  AlertCircle,
  Lightbulb,
  Bell,
  LogOut,
  Filter,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";

export default function ManagerDashboard() {
  const [user] = useState({
    name: "Sarah Manager",
    email: "sarah.manager@company.com",
    department: "Engineering",
    initials: "SM",
  });

  // Mock pending suggestions for review
  const [pendingSuggestions] = useState([
    {
      id: 5,
      title: "Implement automated code review system",
      category: "Process",
      submitter: "Alice Johnson",
      department: "Engineering",
      submittedDate: "2024-09-01",
      expectedImpact: "High",
      description:
        "Implement automated code review tools to catch bugs early and improve code quality...",
      priority: "High",
    },
    {
      id: 6,
      title: "Team building activities budget",
      category: "HR",
      submitter: "Bob Smith",
      department: "Engineering",
      submittedDate: "2024-08-30",
      expectedImpact: "Medium",
      description:
        "Allocate budget for monthly team building activities to improve morale...",
      priority: "Medium",
    },
    {
      id: 7,
      title: "Reduce meeting room booking conflicts",
      category: "Process",
      submitter: "Carol Davis",
      department: "Engineering",
      submittedDate: "2024-08-28",
      expectedImpact: "Low",
      description: "Implement better room booking system to avoid conflicts...",
      priority: "Low",
    },
  ]);

  const [recentActivity] = useState([
    {
      type: "approved",
      title: "Flexible working hours policy",
      submitter: "John Employee",
      date: "2024-09-02",
    },
    {
      type: "rejected",
      title: "Expensive software license",
      submitter: "Jane Doe",
      date: "2024-09-01",
    },
    {
      type: "implemented",
      title: "Cost reduction in cloud services",
      submitter: "Mike Wilson",
      date: "2024-08-30",
    },
  ]);

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "bg-red-500";
      case "Medium":
        return "bg-orange-500";
      case "Low":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  const stats = {
    pendingReview: pendingSuggestions.length,
    thisMonth: 12,
    approved: 8,
    avgResponseTime: "2.3 days",
  };

  const handleApprove = (id) => {
    console.log("Approve suggestion:", id);
    // TODO: Implement approval logic
  };

  const handleReject = (id) => {
    console.log("Reject suggestion:", id);
    // TODO: Implement rejection logic
  };

  const handleRequestInfo = (id) => {
    console.log("Request more info for suggestion:", id);
    // TODO: Implement request info logic
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
                <p className='text-sm text-gray-500'>Manager Portal</p>
              </div>
            </div>

            <div className='flex items-center space-x-4'>
              <Button variant='ghost' size='sm'>
                <Bell className='h-4 w-4' />
                {stats.pendingReview > 0 && (
                  <Badge className='ml-1 bg-red-500 text-white text-xs px-1 py-0 min-w-5 h-5'>
                    {stats.pendingReview}
                  </Badge>
                )}
              </Button>
              <Avatar>
                <AvatarFallback>{user.initials}</AvatarFallback>
              </Avatar>
              <div className='hidden md:block'>
                <p className='text-sm font-medium text-gray-700'>{user.name}</p>
                <p className='text-xs text-gray-500'>
                  {user.department} Manager
                </p>
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
            Manager Dashboard
          </h2>
          <p className='text-gray-600'>
            Review and manage suggestions from your team members.
          </p>
        </div>

        {/* Quick Stats */}
        <div className='grid grid-cols-1 md:grid-cols-4 gap-6 mb-8'>
          <Card>
            <CardContent className='p-6'>
              <div className='flex items-center'>
                <Clock className='h-8 w-8 text-orange-500' />
                <div className='ml-4'>
                  <p className='text-sm font-medium text-gray-600'>
                    Pending Review
                  </p>
                  <p className='text-2xl font-bold text-gray-900'>
                    {stats.pendingReview}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='p-6'>
              <div className='flex items-center'>
                <TrendingUp className='h-8 w-8 text-blue-500' />
                <div className='ml-4'>
                  <p className='text-sm font-medium text-gray-600'>
                    This Month
                  </p>
                  <p className='text-2xl font-bold text-gray-900'>
                    {stats.thisMonth}
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
                <Users className='h-8 w-8 text-purple-500' />
                <div className='ml-4'>
                  <p className='text-sm font-medium text-gray-600'>
                    Avg Response
                  </p>
                  <p className='text-2xl font-bold text-gray-900'>
                    {stats.avgResponseTime}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue='pending' className='space-y-6'>
          <TabsList>
            <TabsTrigger value='pending'>
              Pending Review ({stats.pendingReview})
            </TabsTrigger>
            <TabsTrigger value='activity'>Recent Activity</TabsTrigger>
            <TabsTrigger value='analytics'>Team Analytics</TabsTrigger>
          </TabsList>

          {/* Pending Suggestions */}
          <TabsContent value='pending'>
            <Card>
              <CardHeader>
                <div className='flex items-center justify-between'>
                  <div>
                    <CardTitle>Suggestions Awaiting Review</CardTitle>
                    <CardDescription>
                      Review and take action on team suggestions
                    </CardDescription>
                  </div>
                  <Button variant='outline' size='sm'>
                    <Filter className='h-4 w-4 mr-2' />
                    Filter
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className='space-y-6'>
                  {pendingSuggestions.map((suggestion) => (
                    <div
                      key={suggestion.id}
                      className='border border-gray-200 rounded-lg p-6 space-y-4'
                    >
                      {/* Header */}
                      <div className='flex items-start justify-between'>
                        <div className='flex-1'>
                          <div className='flex items-center space-x-3 mb-2'>
                            <h4 className='text-lg font-medium text-gray-900'>
                              {suggestion.title}
                            </h4>
                            <Badge variant='outline'>
                              {suggestion.category}
                            </Badge>
                            <Badge
                              className={`text-white ${getPriorityColor(
                                suggestion.priority
                              )}`}
                            >
                              {suggestion.priority} Priority
                            </Badge>
                          </div>
                          <div className='flex items-center space-x-4 text-sm text-gray-500 mb-3'>
                            <span>By: {suggestion.submitter}</span>
                            <span>Department: {suggestion.department}</span>
                            <span>Submitted: {suggestion.submittedDate}</span>
                            <span>Impact: {suggestion.expectedImpact}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <div className='bg-gray-50 rounded-lg p-4'>
                        <p className='text-gray-700'>
                          {suggestion.description}
                        </p>
                      </div>

                      {/* Action Buttons */}
                      <div className='flex items-center justify-between'>
                        <div className='flex items-center space-x-3'>
                          <Button
                            size='sm'
                            className='bg-green-600 hover:bg-green-700'
                            onClick={() => handleApprove(suggestion.id)}
                          >
                            <CheckCircle className='h-4 w-4 mr-2' />
                            Approve
                          </Button>
                          <Button
                            size='sm'
                            variant='destructive'
                            onClick={() => handleReject(suggestion.id)}
                          >
                            <XCircle className='h-4 w-4 mr-2' />
                            Reject
                          </Button>
                          <Button
                            size='sm'
                            variant='outline'
                            onClick={() => handleRequestInfo(suggestion.id)}
                          >
                            <MessageSquare className='h-4 w-4 mr-2' />
                            Request Info
                          </Button>
                        </div>
                        <Button variant='ghost' size='sm'>
                          View Full Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Recent Activity */}
          <TabsContent value='activity'>
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>
                  Your recent actions and decisions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className='space-y-4'>
                  {recentActivity.map((activity, index) => (
                    <div
                      key={index}
                      className='flex items-center space-x-4 p-4 bg-gray-50 rounded-lg'
                    >
                      <div
                        className={`p-2 rounded-full ${
                          activity.type === "approved"
                            ? "bg-green-100 text-green-600"
                            : activity.type === "rejected"
                            ? "bg-red-100 text-red-600"
                            : "bg-blue-100 text-blue-600"
                        }`}
                      >
                        {activity.type === "approved" && (
                          <CheckCircle className='h-4 w-4' />
                        )}
                        {activity.type === "rejected" && (
                          <XCircle className='h-4 w-4' />
                        )}
                        {activity.type === "implemented" && (
                          <Lightbulb className='h-4 w-4' />
                        )}
                      </div>
                      <div className='flex-1'>
                        <p className='text-sm font-medium text-gray-900'>
                          You {activity.type} "{activity.title}"
                        </p>
                        <p className='text-sm text-gray-500'>
                          Submitted by {activity.submitter} • {activity.date}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Team Analytics */}
          <TabsContent value='analytics'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <Card>
                <CardHeader>
                  <CardTitle>Team Engagement</CardTitle>
                  <CardDescription>
                    Suggestion submission trends
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className='space-y-4'>
                    <div className='flex items-center justify-between'>
                      <span className='text-sm text-gray-600'>This Month</span>
                      <span className='text-lg font-semibold'>
                        12 suggestions
                      </span>
                    </div>
                    <div className='flex items-center justify-between'>
                      <span className='text-sm text-gray-600'>Last Month</span>
                      <span className='text-lg font-semibold'>
                        8 suggestions
                      </span>
                    </div>
                    <div className='flex items-center justify-between'>
                      <span className='text-sm text-gray-600'>Growth</span>
                      <span className='text-lg font-semibold text-green-600'>
                        +50%
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Category Breakdown</CardTitle>
                  <CardDescription>
                    Most popular suggestion categories
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className='space-y-3'>
                    <div className='flex items-center justify-between'>
                      <span className='text-sm text-gray-600'>Process</span>
                      <div className='flex items-center space-x-2'>
                        <div className='w-20 bg-gray-200 rounded-full h-2'>
                          <div
                            className='bg-blue-600 h-2 rounded-full'
                            style={{ width: "60%" }}
                          ></div>
                        </div>
                        <span className='text-sm font-medium'>6</span>
                      </div>
                    </div>
                    <div className='flex items-center justify-between'>
                      <span className='text-sm text-gray-600'>Innovation</span>
                      <div className='flex items-center space-x-2'>
                        <div className='w-20 bg-gray-200 rounded-full h-2'>
                          <div
                            className='bg-green-600 h-2 rounded-full'
                            style={{ width: "40%" }}
                          ></div>
                        </div>
                        <span className='text-sm font-medium'>4</span>
                      </div>
                    </div>
                    <div className='flex items-center justify-between'>
                      <span className='text-sm text-gray-600'>HR</span>
                      <div className='flex items-center space-x-2'>
                        <div className='w-20 bg-gray-200 rounded-full h-2'>
                          <div
                            className='bg-purple-600 h-2 rounded-full'
                            style={{ width: "20%" }}
                          ></div>
                        </div>
                        <span className='text-sm font-medium'>2</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
