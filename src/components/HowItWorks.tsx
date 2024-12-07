import React from 'react';
import { UserPlus, CreditCard, BarChart3 } from 'lucide-react';

const steps = [
  {
    icon: <UserPlus className="w-12 h-12 text-blue-600" />,
    title: 'Sign Up',
    description: 'Create your account in minutes.'
  },
  {
    icon: <CreditCard className="w-12 h-12 text-blue-600" />,
    title: 'Create Cards',
    description: 'Generate unlimited virtual cards instantly.'
  },
  {
    icon: <BarChart3 className="w-12 h-12 text-blue-600" />,
    title: 'Control Spending',
    description: 'Monitor and manage your expenses effortlessly.'
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50 scroll-mt-16">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {steps.map((step, index) => (
            <div key={index} className="flex-1 text-center">
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute transform translate-x-full right-0 top-1/2">
                  <div className="w-12 h-0.5 bg-gray-300"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}