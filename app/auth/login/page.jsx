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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Users, Shield, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Demo accounts for different roles
  const demoAccounts = [
    {
      role: "Employee",
      email: "john.employee@company.com",
      icon: Users,
      color: "bg-blue-500",
    },
    {
      role: "Manager",
      email: "sarah.manager@company.com",
      icon: TrendingUp,
      color: "bg-green-500",
    },
    {
      role: "Admin",
      email: "admin@company.com",
      icon: Shield,
      color: "bg-purple-500",
    },
    {
      role: "Executive",
      email: "ceo@company.com",
      icon: Lightbulb,
      color: "bg-orange-500",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement authentication logic
    console.log("Login attempt:", formData);

    // For now, redirect based on email domain for demo
    if (formData.email.includes("employee")) {
      window.location.href = "/dashboard/employee";
    } else if (formData.email.includes("manager")) {
      window.location.href = "/dashboard/manager";
    } else if (formData.email.includes("admin")) {
      window.location.href = "/dashboard/admin";
    } else if (formData.email.includes("ceo")) {
      window.location.href = "/dashboard/executive";
    }
  };

  const fillDemo = (email) => {
    setFormData({ ...formData, email, password: "demo123" });
  };

  return (
    <div className='min-h-screen flex items-center justify-center p-4'>
      <div className='w-full max-w-md space-y-6'>
        {/* Header */}
        <div className='text-center space-y-2'>
          <div className='flex items-center justify-center space-x-2'>
            <Lightbulb className='h-8 w-8 text-blue-600' />
            <h1 className='text-3xl font-bold text-gray-900'>ESS</h1>
          </div>
          <p className='text-gray-600'>Employee Suggestion System</p>
        </div>

        {/* Login Form */}
        <Card>
          <CardHeader>
            <CardTitle>Sign In</CardTitle>
            <CardDescription>
              Access your suggestion management portal
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className='space-y-4'>
              <div className='space-y-2'>
                <Label htmlFor='email'>Email</Label>
                <Input
                  id='email'
                  type='email'
                  placeholder='Enter your email'
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>

              <div className='space-y-2'>
                <Label htmlFor='password'>Password</Label>
                <Input
                  id='password'
                  type='password'
                  placeholder='Enter your password'
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  required
                />
              </div>

              <Button type='submit' className='w-full'>
                Sign In
              </Button>
            </form>

            <div className='mt-6'>
              <p className='text-sm text-gray-600 text-center mb-3'>
                Don't have an account?{" "}
                <Link
                  href='/auth/register'
                  className='text-blue-600 hover:underline'
                >
                  Sign up
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Demo Accounts */}
        <Card>
          <CardHeader>
            <CardTitle className='text-lg'>Demo Accounts</CardTitle>
            <CardDescription>
              Click to fill login form with demo credentials
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className='grid grid-cols-2 gap-2'>
              {demoAccounts.map((account) => {
                const IconComponent = account.icon;
                return (
                  <Button
                    key={account.role}
                    variant='outline'
                    onClick={() => fillDemo(account.email)}
                    className='h-auto p-3 flex flex-col items-center space-y-2'
                  >
                    <div
                      className={`p-2 rounded-full ${account.color} text-white`}
                    >
                      <IconComponent className='h-4 w-4' />
                    </div>
                    <span className='text-xs font-medium'>{account.role}</span>
                  </Button>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
