"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Lightbulb,
  Users,
  TrendingUp,
  Shield,
  ArrowRight,
  CheckCircle,
  Star,
  BarChart3,
} from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const features = [
    {
      icon: Users,
      title: "Multi-Role Access",
      description:
        "Employee, Manager, Admin, and Executive portals with tailored experiences.",
    },
    {
      icon: TrendingUp,
      title: "Real-time Analytics",
      description:
        "Track suggestion performance, engagement metrics, and ROI in real-time.",
    },
    {
      icon: Shield,
      title: "Secure & Scalable",
      description:
        "Enterprise-grade security with role-based access control and data protection.",
    },
    {
      icon: CheckCircle,
      title: "Workflow Management",
      description:
        "Streamlined approval processes with notifications and status tracking.",
    },
  ];

  const stats = [
    { label: "Suggestions Processed", value: "1,200+", icon: Lightbulb },
    { label: "Cost Savings Generated", value: "$2.5M+", icon: BarChart3 },
    { label: "Employee Participation", value: "89%", icon: Users },
    { label: "Implementation Rate", value: "67%", icon: Star },
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50'>
      {/* Header */}
      <header className='bg-white/80 backdrop-blur-md border-b border-gray-200/50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-16'>
            <div className='flex items-center space-x-3'>
              <Lightbulb className='h-8 w-8 text-blue-600' />
              <div>
                <h1 className='text-xl font-bold text-gray-900'>
                  Employee Suggestion System
                </h1>
                <p className='text-sm text-gray-500'>
                  Empowering Innovation Through Ideas
                </p>
              </div>
            </div>

            <Button asChild>
              <Link href='/auth/login'>
                Get Started
                <ArrowRight className='ml-2 h-4 w-4' />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className='py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <Badge className='mb-6' variant='secondary'>
            🚀 Now Live - Phase 1 Demo
          </Badge>

          <h2 className='text-5xl font-bold text-gray-900 mb-6'>
            Transform Ideas Into
            <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
              {" "}
              Impact
            </span>
          </h2>

          <p className='text-xl text-gray-600 mb-8 max-w-3xl mx-auto'>
            Streamline employee suggestions with our comprehensive platform.
            From submission to implementation, track every idea's journey while
            driving continuous improvement across your organization.
          </p>

          <div className='flex items-center justify-center space-x-4'>
            <Button size='lg' asChild>
              <Link href='/auth/login'>
                <Lightbulb className='mr-2 h-5 w-5' />
                Try Demo
              </Link>
            </Button>
            <Button size='lg' variant='outline'>
              Learn More
            </Button>
          </div>

          {/* Manual access notice */}
          <div className='mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg inline-block'>
            <p className='text-sm text-blue-700'>
              🎯 <strong>Demo Ready!</strong>
              <Link href='/auth/login' className='underline font-medium ml-1'>
                Click here to access the demo
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='py-16 bg-white/50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className='text-center'>
                  <div className='inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4'>
                    <IconComponent className='h-6 w-6 text-blue-600' />
                  </div>
                  <div className='text-3xl font-bold text-gray-900 mb-2'>
                    {stat.value}
                  </div>
                  <div className='text-gray-600'>{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h3 className='text-3xl font-bold text-gray-900 mb-4'>
              Everything You Need for Suggestion Management
            </h3>
            <p className='text-xl text-gray-600'>
              Powerful features designed for modern organizations
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card
                  key={index}
                  className='border-0 shadow-lg hover:shadow-xl transition-shadow'
                >
                  <CardHeader>
                    <div className='flex items-center space-x-3'>
                      <div className='p-2 bg-blue-100 rounded-lg'>
                        <IconComponent className='h-6 w-6 text-blue-600' />
                      </div>
                      <CardTitle className='text-xl'>{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className='text-base'>
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Demo Access Section */}
      <section className='py-16 bg-gradient-to-r from-blue-600 to-purple-600'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h3 className='text-3xl font-bold text-white mb-6'>
            Ready to Experience the Platform?
          </h3>
          <p className='text-xl text-blue-100 mb-8'>
            Access different role-based demos to see how each user type
            interacts with the system.
          </p>

          <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mb-8'>
            {[
              {
                role: "Employee",
                desc: "Submit & track ideas",
                color: "bg-blue-500",
              },
              {
                role: "Manager",
                desc: "Review & approve",
                color: "bg-green-500",
              },
              {
                role: "Admin",
                desc: "Configure system",
                color: "bg-purple-500",
              },
              {
                role: "Executive",
                desc: "Strategic insights",
                color: "bg-orange-500",
              },
            ].map((demo) => (
              <div
                key={demo.role}
                className={`${demo.color} rounded-lg p-4 text-white`}
              >
                <h4 className='font-semibold text-lg mb-1'>{demo.role}</h4>
                <p className='text-sm opacity-90'>{demo.desc}</p>
              </div>
            ))}
          </div>

          <Button size='lg' variant='secondary' asChild>
            <Link href='/auth/login'>
              <Users className='mr-2 h-5 w-5' />
              Access All Demos
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-gray-900 text-white py-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-3'>
              <Lightbulb className='h-8 w-8 text-blue-400' />
              <div>
                <h1 className='text-xl font-bold'>
                  Employee Suggestion System
                </h1>
                <p className='text-sm text-gray-400'>
                  Phase 1 - Foundation & Multi-Role Authentication
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
