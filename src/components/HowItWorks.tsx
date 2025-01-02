import React from 'react';
import { UserCheck, CreditCard, LineChart, PieChart } from 'lucide-react';

const steps = [
  {
    icon: <UserCheck className="w-12 h-12 text-blue-600" />,
    title: 'Get Approved',
    description: 'Contact us to start your onboarding process and get approved for virtual cards.'
  },
  {
    icon: <CreditCard className="w-12 h-12 text-blue-600" />,
    title: 'Create Cards',
    description: 'Set up dedicated virtual cards for each advertising platform like Facebook, TikTok etc.'
  },
  {
    icon: <LineChart className="w-12 h-12 text-blue-600" />,
    title: 'Track Spending',
    description: 'Monitor your ad spending across platforms with detailed analytics and insights.'
  },
  {
    icon: <PieChart className="w-12 h-12 text-blue-600" />,
    title: 'Optimize Budgets',
    description: 'Make data-driven decisions and set budgets based on historical performance.'
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50 scroll-mt-16">
      <div className="container max-w-6xl px-6 mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center">How It Works</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="h-full p-6 bg-white shadow-sm rounded-xl">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">{step.icon}</div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="flex items-center justify-center w-6 h-6 text-sm font-semibold text-white bg-blue-600 rounded-full">
                      {index + 1}
                    </span>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="absolute hidden w-8 transform -translate-y-1/2 lg:block top-1/2 -right-4">
                  <div className="w-full h-0.5 bg-gray-300"></div>
                  <div className="absolute right-0 w-2 h-2 transform rotate-45 -translate-y-1/2 border-t-2 border-r-2 border-gray-300 top-1/2"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}