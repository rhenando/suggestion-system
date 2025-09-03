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
import {
  TrendingUp,
  DollarSign,
  Users,
  Lightbulb,
  BarChart3,
  PieChart,
  TrendingDown,
  Star,
  Bell,
  LogOut,
  Download,
  Calendar,
} from "lucide-react";
import Link from "next/link";

export default function ExecutiveDashboard() {
  const [user] = useState({
    name: "CEO Executive",
    email: "ceo@company.com",
    role: "Chief Executive Officer",
    initials: "CE",
  });

  const [highImpactSuggestions] = useState([
    {
      id: 101,
      title: "Implement AI-powered customer service chatbot",
      submitter: "Alice Johnson",
      department: "Technology",
      estimatedSavings: "$120,000/year",
      status: "Under Executive Review",
      priority: "High",
      submittedDate: "2024-08-30",
    },
    {
      id: 102,
      title: "Consolidate cloud infrastructure providers",
      submitter: "Mike Wilson",
      department: "IT",
      estimatedSavings: "$85,000/year",
      status: "Under Executive Review",
      priority: "High",
      submittedDate: "2024-08-28",
    },
    {
      id: 103,
      title: "Remote work policy optimization",
      submitter: "Sarah Manager",
      department: "HR",
      estimatedSavings: "$200,000/year",
      status: "Pending Executive Approval",
      priority: "Medium",
      submittedDate: "2024-08-25",
    },
  ]);

  const [departmentMetrics] = useState([
    {
      name: "Engineering",
      suggestions: 45,
      implemented: 28,
      savings: "$320K",
      engagement: 89,
    },
    {
      name: "Marketing",
      suggestions: 18,
      implemented: 12,
      savings: "$85K",
      engagement: 72,
    },
    {
      name: "HR",
      suggestions: 12,
      implemented: 8,
      savings: "$150K",
      engagement: 67,
    },
    {
      name: "Sales",
      suggestions: 22,
      implemented: 15,
      savings: "$95K",
      engagement: 81,
    },
  ]);

  const stats = {
    totalSuggestions: 97,
    implementedThisYear: 63,
    estimatedSavings: "$650K",
    employeeParticipation: "74%",
    avgImplementationTime: "18 days",
    roiMultiplier: "3.2x",
  };

  const handleApproveHighImpact = (id) => {
    console.log("Approve high-impact suggestion:", id);
    // TODO: Implement executive approval logic
  };

  const handleRejectHighImpact = (id) => {
    console.log("Reject high-impact suggestion:", id);
    // TODO: Implement executive rejection logic
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
                <p className='text-sm text-gray-500'>Executive Portal</p>
              </div>
            </div>

            <div className='flex items-center space-x-4'>
              <Button variant='outline' size='sm'>
                <Download className='h-4 w-4 mr-2' />
                Export Report
              </Button>
              <Button variant='ghost' size='sm'>
                <Bell className='h-4 w-4' />
                <Badge className='ml-1 bg-red-500 text-white text-xs px-1 py-0 min-w-5 h-5'>
                  3
                </Badge>
              </Button>
              <Avatar>
                <AvatarFallback>{user.initials}</AvatarFallback>
              </Avatar>
              <div className='hidden md:block'>
                <p className='text-sm font-medium text-gray-700'>{user.name}</p>
                <p className='text-xs text-gray-500'>{user.role}</p>
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
            Executive Dashboard
          </h2>
          <p className='text-gray-600'>
            Strategic insights and high-impact suggestion approvals.
          </p>
        </div>

        {/* Key Performance Indicators */}
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8'>
          <Card>
            <CardContent className='p-6'>
              <div className='flex items-center'>
                <Lightbulb className='h-8 w-8 text-blue-500' />
                <div className='ml-4'>
                  <p className='text-sm font-medium text-gray-600'>
                    Total Suggestions
                  </p>
                  <p className='text-2xl font-bold text-gray-900'>
                    {stats.totalSuggestions}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='p-6'>
              <div className='flex items-center'>
                <Star className='h-8 w-8 text-green-500' />
                <div className='ml-4'>
                  <p className='text-sm font-medium text-gray-600'>
                    Implemented
                  </p>
                  <p className='text-2xl font-bold text-gray-900'>
                    {stats.implementedThisYear}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='p-6'>
              <div className='flex items-center'>
                <DollarSign className='h-8 w-8 text-purple-500' />
                <div className='ml-4'>
                  <p className='text-sm font-medium text-gray-600'>
                    Est. Savings
                  </p>
                  <p className='text-2xl font-bold text-gray-900'>
                    {stats.estimatedSavings}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='p-6'>
              <div className='flex items-center'>
                <Users className='h-8 w-8 text-orange-500' />
                <div className='ml-4'>
                  <p className='text-sm font-medium text-gray-600'>
                    Participation
                  </p>
                  <p className='text-2xl font-bold text-gray-900'>
                    {stats.employeeParticipation}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='p-6'>
              <div className='flex items-center'>
                <Calendar className='h-8 w-8 text-red-500' />
                <div className='ml-4'>
                  <p className='text-sm font-medium text-gray-600'>Avg Time</p>
                  <p className='text-2xl font-bold text-gray-900'>
                    {stats.avgImplementationTime}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='p-6'>
              <div className='flex items-center'>
                <TrendingUp className='h-8 w-8 text-teal-500' />
                <div className='ml-4'>
                  <p className='text-sm font-medium text-gray-600'>ROI</p>
                  <p className='text-2xl font-bold text-gray-900'>
                    {stats.roiMultiplier}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* High-Impact Suggestions Requiring Executive Approval */}
        <Card className='mb-8'>
          <CardHeader>
            <div className='flex items-center justify-between'>
              <div>
                <CardTitle className='flex items-center space-x-2'>
                  <Star className='h-5 w-5 text-yellow-500' />
                  <span>High-Impact Suggestions Requiring Your Approval</span>
                </CardTitle>
                <CardDescription>
                  Strategic initiatives with significant organizational impact
                </CardDescription>
              </div>
              <Badge variant='destructive'>
                {highImpactSuggestions.length} Pending
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className='space-y-6'>
              {highImpactSuggestions.map((suggestion) => (
                <div
                  key={suggestion.id}
                  className='border border-gray-200 rounded-lg p-6 bg-gradient-to-r from-blue-50 to-purple-50'
                >
                  <div className='flex items-start justify-between mb-4'>
                    <div className='flex-1'>
                      <div className='flex items-center space-x-3 mb-2'>
                        <h4 className='text-lg font-semibold text-gray-900'>
                          {suggestion.title}
                        </h4>
                        <Badge
                          variant={
                            suggestion.priority === "High"
                              ? "destructive"
                              : "default"
                          }
                        >
                          {suggestion.priority} Priority
                        </Badge>
                        <Badge
                          variant='outline'
                          className='bg-green-100 text-green-800'
                        >
                          {suggestion.estimatedSavings}
                        </Badge>
                      </div>
                      <div className='flex items-center space-x-4 text-sm text-gray-600 mb-3'>
                        <span>
                          Submitted by: <strong>{suggestion.submitter}</strong>
                        </span>
                        <span>
                          Department: <strong>{suggestion.department}</strong>
                        </span>
                        <span>Date: {suggestion.submittedDate}</span>
                      </div>
                      <Badge variant='secondary'>{suggestion.status}</Badge>
                    </div>
                  </div>

                  <div className='flex items-center space-x-3'>
                    <Button
                      className='bg-green-600 hover:bg-green-700'
                      onClick={() => handleApproveHighImpact(suggestion.id)}
                    >
                      Approve Initiative
                    </Button>
                    <Button
                      variant='outline'
                      onClick={() => handleRejectHighImpact(suggestion.id)}
                    >
                      Request More Info
                    </Button>
                    <Button variant='ghost'>View Full Proposal</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Department Performance & Analytics */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
          {/* Department Performance */}
          <Card>
            <CardHeader>
              <CardTitle className='flex items-center space-x-2'>
                <BarChart3 className='h-5 w-5' />
                <span>Department Performance</span>
              </CardTitle>
              <CardDescription>
                Innovation metrics by department
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className='space-y-4'>
                {departmentMetrics.map((dept) => (
                  <div
                    key={dept.name}
                    className='border border-gray-100 rounded-lg p-4'
                  >
                    <div className='flex items-center justify-between mb-3'>
                      <h4 className='font-medium text-gray-900'>{dept.name}</h4>
                      <div className='flex items-center space-x-2'>
                        <Badge variant='outline'>
                          {dept.engagement}% engaged
                        </Badge>
                        <Badge variant='secondary'>{dept.savings}</Badge>
                      </div>
                    </div>
                    <div className='grid grid-cols-2 gap-4 text-sm'>
                      <div>
                        <p className='text-gray-600'>Suggestions</p>
                        <p className='font-semibold text-lg'>
                          {dept.suggestions}
                        </p>
                      </div>
                      <div>
                        <p className='text-gray-600'>Implemented</p>
                        <p className='font-semibold text-lg text-green-600'>
                          {dept.implemented}
                        </p>
                      </div>
                    </div>
                    <div className='mt-2'>
                      <div className='w-full bg-gray-200 rounded-full h-2'>
                        <div
                          className='bg-blue-600 h-2 rounded-full'
                          style={{
                            width: `${
                              (dept.implemented / dept.suggestions) * 100
                            }%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Strategic Insights */}
          <Card>
            <CardHeader>
              <CardTitle className='flex items-center space-x-2'>
                <PieChart className='h-5 w-5' />
                <span>Strategic Insights</span>
              </CardTitle>
              <CardDescription>Key trends and opportunities</CardDescription>
            </CardHeader>
            <CardContent className='space-y-6'>
              <div className='border border-green-200 bg-green-50 rounded-lg p-4'>
                <div className='flex items-center space-x-2 mb-2'>
                  <TrendingUp className='h-5 w-5 text-green-600' />
                  <h4 className='font-medium text-green-900'>
                    Top Opportunity
                  </h4>
                </div>
                <p className='text-sm text-green-800 mb-2'>
                  Process automation suggestions show 40% higher ROI
                </p>
                <p className='text-xs text-green-600'>
                  Consider prioritizing automation initiatives for maximum
                  impact
                </p>
              </div>

              <div className='border border-blue-200 bg-blue-50 rounded-lg p-4'>
                <div className='flex items-center space-x-2 mb-2'>
                  <Users className='h-5 w-5 text-blue-600' />
                  <h4 className='font-medium text-blue-900'>
                    Engagement Trend
                  </h4>
                </div>
                <p className='text-sm text-blue-800 mb-2'>
                  Employee participation increased 28% this quarter
                </p>
                <p className='text-xs text-blue-600'>
                  Highest engagement in Engineering and Sales departments
                </p>
              </div>

              <div className='border border-orange-200 bg-orange-50 rounded-lg p-4'>
                <div className='flex items-center space-x-2 mb-2'>
                  <DollarSign className='h-5 w-5 text-orange-600' />
                  <h4 className='font-medium text-orange-900'>Cost Savings</h4>
                </div>
                <p className='text-sm text-orange-800 mb-2'>
                  On track to exceed annual savings target by 15%
                </p>
                <p className='text-xs text-orange-600'>
                  Current projection: $750K vs $650K target
                </p>
              </div>

              <div className='border border-purple-200 bg-purple-50 rounded-lg p-4'>
                <div className='flex items-center space-x-2 mb-2'>
                  <Star className='h-5 w-5 text-purple-600' />
                  <h4 className='font-medium text-purple-900'>
                    Innovation Score
                  </h4>
                </div>
                <p className='text-sm text-purple-800 mb-2'>
                  Company innovation index: 8.4/10 (Industry avg: 6.2)
                </p>
                <p className='text-xs text-purple-600'>
                  Strong performance in breakthrough innovation category
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Executive Actions</CardTitle>
            <CardDescription>
              Quick access to key executive functions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
              <Button
                variant='outline'
                className='h-16 flex flex-col items-center justify-center'
              >
                <Download className='h-5 w-5 mb-1' />
                <span className='text-sm'>Download Annual Report</span>
              </Button>
              <Button
                variant='outline'
                className='h-16 flex flex-col items-center justify-center'
              >
                <BarChart3 className='h-5 w-5 mb-1' />
                <span className='text-sm'>View Detailed Analytics</span>
              </Button>
              <Button
                variant='outline'
                className='h-16 flex flex-col items-center justify-center'
              >
                <Users className='h-5 w-5 mb-1' />
                <span className='text-sm'>Schedule Leadership Review</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
