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
  Settings,
  Users,
  Shield,
  Download,
  Plus,
  Edit,
  Trash2,
  Lightbulb,
  Bell,
  LogOut,
  FileText,
  BarChart3,
  UserCheck,
  Building,
} from "lucide-react";
import Link from "next/link";

export default function AdminDashboard() {
  const [user] = useState({
    name: "Admin User",
    email: "admin@company.com",
    role: "System Administrator",
    initials: "AU",
  });

  const [categories] = useState([
    {
      id: 1,
      name: "HR",
      description: "Human Resources related suggestions",
      count: 15,
      active: true,
    },
    {
      id: 2,
      name: "Process",
      description: "Business process improvements",
      count: 28,
      active: true,
    },
    {
      id: 3,
      name: "Product",
      description: "Product development and features",
      count: 12,
      active: true,
    },
    {
      id: 4,
      name: "Cost Saving",
      description: "Cost reduction initiatives",
      count: 8,
      active: true,
    },
    {
      id: 5,
      name: "Innovation",
      description: "Innovative ideas and solutions",
      count: 22,
      active: true,
    },
  ]);

  const [users] = useState([
    {
      id: 1,
      name: "John Employee",
      email: "john@company.com",
      role: "Employee",
      department: "Engineering",
      active: true,
    },
    {
      id: 2,
      name: "Sarah Manager",
      email: "sarah@company.com",
      role: "Manager",
      department: "Engineering",
      active: true,
    },
    {
      id: 3,
      name: "Mike Wilson",
      email: "mike@company.com",
      role: "Employee",
      department: "Marketing",
      active: true,
    },
    {
      id: 4,
      name: "Lisa Chen",
      email: "lisa@company.com",
      role: "Manager",
      department: "HR",
      active: false,
    },
  ]);

  const [departments] = useState([
    {
      id: 1,
      name: "Engineering",
      manager: "Sarah Manager",
      employeeCount: 25,
      suggestionCount: 45,
    },
    {
      id: 2,
      name: "Marketing",
      manager: "Tom Roberts",
      employeeCount: 15,
      suggestionCount: 18,
    },
    {
      id: 3,
      name: "HR",
      manager: "Lisa Chen",
      employeeCount: 8,
      suggestionCount: 12,
    },
    {
      id: 4,
      name: "Sales",
      manager: "David Lee",
      employeeCount: 20,
      suggestionCount: 22,
    },
  ]);

  const stats = {
    totalUsers: users.length,
    activeUsers: users.filter((u) => u.active).length,
    totalSuggestions: 95,
    categories: categories.length,
  };

  const handleAddCategory = () => {
    console.log("Add new category");
    // TODO: Implement add category logic
  };

  const handleEditCategory = (id) => {
    console.log("Edit category:", id);
    // TODO: Implement edit category logic
  };

  const handleDeleteCategory = (id) => {
    console.log("Delete category:", id);
    // TODO: Implement delete category logic
  };

  const handleExportData = () => {
    console.log("Export system data");
    // TODO: Implement export logic
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
                <p className='text-sm text-gray-500'>Admin Portal</p>
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
            System Administration
          </h2>
          <p className='text-gray-600'>
            Manage users, configure categories, and monitor system performance.
          </p>
        </div>

        {/* Quick Stats */}
        <div className='grid grid-cols-1 md:grid-cols-4 gap-6 mb-8'>
          <Card>
            <CardContent className='p-6'>
              <div className='flex items-center'>
                <Users className='h-8 w-8 text-blue-500' />
                <div className='ml-4'>
                  <p className='text-sm font-medium text-gray-600'>
                    Total Users
                  </p>
                  <p className='text-2xl font-bold text-gray-900'>
                    {stats.totalUsers}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='p-6'>
              <div className='flex items-center'>
                <UserCheck className='h-8 w-8 text-green-500' />
                <div className='ml-4'>
                  <p className='text-sm font-medium text-gray-600'>
                    Active Users
                  </p>
                  <p className='text-2xl font-bold text-gray-900'>
                    {stats.activeUsers}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='p-6'>
              <div className='flex items-center'>
                <FileText className='h-8 w-8 text-purple-500' />
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
                <Settings className='h-8 w-8 text-orange-500' />
                <div className='ml-4'>
                  <p className='text-sm font-medium text-gray-600'>
                    Categories
                  </p>
                  <p className='text-2xl font-bold text-gray-900'>
                    {stats.categories}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue='categories' className='space-y-6'>
          <TabsList>
            <TabsTrigger value='categories'>Categories</TabsTrigger>
            <TabsTrigger value='users'>User Management</TabsTrigger>
            <TabsTrigger value='departments'>Departments</TabsTrigger>
            <TabsTrigger value='reports'>Reports</TabsTrigger>
          </TabsList>

          {/* Categories Management */}
          <TabsContent value='categories'>
            <Card>
              <CardHeader>
                <div className='flex items-center justify-between'>
                  <div>
                    <CardTitle>Suggestion Categories</CardTitle>
                    <CardDescription>
                      Manage suggestion categories and workflows
                    </CardDescription>
                  </div>
                  <Button onClick={handleAddCategory}>
                    <Plus className='h-4 w-4 mr-2' />
                    Add Category
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className='space-y-4'>
                  {categories.map((category) => (
                    <div
                      key={category.id}
                      className='border border-gray-200 rounded-lg p-4 flex items-center justify-between'
                    >
                      <div className='flex-1'>
                        <div className='flex items-center space-x-3 mb-2'>
                          <h4 className='text-lg font-medium text-gray-900'>
                            {category.name}
                          </h4>
                          <Badge
                            variant={category.active ? "default" : "secondary"}
                          >
                            {category.active ? "Active" : "Inactive"}
                          </Badge>
                          <Badge variant='outline'>
                            {category.count} suggestions
                          </Badge>
                        </div>
                        <p className='text-gray-600 text-sm'>
                          {category.description}
                        </p>
                      </div>
                      <div className='flex items-center space-x-2'>
                        <Button
                          variant='outline'
                          size='sm'
                          onClick={() => handleEditCategory(category.id)}
                        >
                          <Edit className='h-4 w-4' />
                        </Button>
                        <Button
                          variant='outline'
                          size='sm'
                          onClick={() => handleDeleteCategory(category.id)}
                        >
                          <Trash2 className='h-4 w-4' />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* User Management */}
          <TabsContent value='users'>
            <Card>
              <CardHeader>
                <div className='flex items-center justify-between'>
                  <div>
                    <CardTitle>User Management</CardTitle>
                    <CardDescription>
                      Manage user accounts and roles
                    </CardDescription>
                  </div>
                  <Button>
                    <Plus className='h-4 w-4 mr-2' />
                    Add User
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className='space-y-4'>
                  {users.map((user) => (
                    <div
                      key={user.id}
                      className='border border-gray-200 rounded-lg p-4 flex items-center justify-between'
                    >
                      <div className='flex items-center space-x-4'>
                        <Avatar>
                          <AvatarFallback>
                            {user.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className='flex items-center space-x-3 mb-1'>
                            <h4 className='font-medium text-gray-900'>
                              {user.name}
                            </h4>
                            <Badge
                              variant={user.active ? "default" : "secondary"}
                            >
                              {user.active ? "Active" : "Inactive"}
                            </Badge>
                          </div>
                          <p className='text-sm text-gray-600'>{user.email}</p>
                          <p className='text-sm text-gray-500'>
                            {user.role} • {user.department}
                          </p>
                        </div>
                      </div>
                      <div className='flex items-center space-x-2'>
                        <Button variant='outline' size='sm'>
                          <Edit className='h-4 w-4' />
                        </Button>
                        <Button variant='outline' size='sm'>
                          <Shield className='h-4 w-4' />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Departments */}
          <TabsContent value='departments'>
            <Card>
              <CardHeader>
                <div className='flex items-center justify-between'>
                  <div>
                    <CardTitle>Department Management</CardTitle>
                    <CardDescription>
                      Manage departments and assign reviewers
                    </CardDescription>
                  </div>
                  <Button>
                    <Plus className='h-4 w-4 mr-2' />
                    Add Department
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className='space-y-4'>
                  {departments.map((dept) => (
                    <div
                      key={dept.id}
                      className='border border-gray-200 rounded-lg p-4'
                    >
                      <div className='flex items-center justify-between mb-4'>
                        <div className='flex items-center space-x-3'>
                          <Building className='h-6 w-6 text-blue-500' />
                          <h4 className='text-lg font-medium text-gray-900'>
                            {dept.name}
                          </h4>
                        </div>
                        <Button variant='outline' size='sm'>
                          <Edit className='h-4 w-4 mr-2' />
                          Configure
                        </Button>
                      </div>
                      <div className='grid grid-cols-3 gap-4 text-sm'>
                        <div>
                          <p className='text-gray-600'>Manager</p>
                          <p className='font-medium'>{dept.manager}</p>
                        </div>
                        <div>
                          <p className='text-gray-600'>Employees</p>
                          <p className='font-medium'>{dept.employeeCount}</p>
                        </div>
                        <div>
                          <p className='text-gray-600'>Suggestions</p>
                          <p className='font-medium'>{dept.suggestionCount}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Reports */}
          <TabsContent value='reports'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <Card>
                <CardHeader>
                  <CardTitle>System Reports</CardTitle>
                  <CardDescription>
                    Generate and export system reports
                  </CardDescription>
                </CardHeader>
                <CardContent className='space-y-4'>
                  <Button
                    variant='outline'
                    className='w-full justify-start'
                    onClick={handleExportData}
                  >
                    <Download className='h-4 w-4 mr-2' />
                    Export All Suggestions (Excel)
                  </Button>
                  <Button
                    variant='outline'
                    className='w-full justify-start'
                    onClick={handleExportData}
                  >
                    <Download className='h-4 w-4 mr-2' />
                    User Activity Report (PDF)
                  </Button>
                  <Button
                    variant='outline'
                    className='w-full justify-start'
                    onClick={handleExportData}
                  >
                    <BarChart3 className='h-4 w-4 mr-2' />
                    Analytics Dashboard (PDF)
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Stats</CardTitle>
                  <CardDescription>System overview metrics</CardDescription>
                </CardHeader>
                <CardContent className='space-y-4'>
                  <div className='flex justify-between items-center'>
                    <span className='text-sm text-gray-600'>
                      Suggestions This Month
                    </span>
                    <span className='font-semibold'>24</span>
                  </div>
                  <div className='flex justify-between items-center'>
                    <span className='text-sm text-gray-600'>
                      Average Response Time
                    </span>
                    <span className='font-semibold'>2.3 days</span>
                  </div>
                  <div className='flex justify-between items-center'>
                    <span className='text-sm text-gray-600'>Approval Rate</span>
                    <span className='font-semibold'>68%</span>
                  </div>
                  <div className='flex justify-between items-center'>
                    <span className='text-sm text-gray-600'>
                      Implementation Rate
                    </span>
                    <span className='font-semibold'>45%</span>
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
