import React from 'react';
import { Sliders, Bell, BarChart, Shield } from 'lucide-react';

const features = [
  {
    icon: <BarChart className="w-10 h-10 text-blue-600" />,
    title: 'Cross-Platform Analytics',
    description: 'Track spending across Facebook, Google, TikTok, and more in one place.'
  },
  {
    icon: <Bell className="w-10 h-10 text-blue-600" />,
    title: 'Spend Alerts',
    description: 'Get notified when campaigns reach budget thresholds.'
  },
  {
    icon: <Sliders className="w-10 h-10 text-blue-600" />,
    title: 'Budget Controls',
    description: 'Set platform-specific spending limits and budgets.'
  },
  {
    icon: <Shield className="w-10 h-10 text-blue-600" />,
    title: 'Secure Transactions',
    description: 'Bank-grade security with Penny Inc virtual cards.'
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 scroll-mt-16">
      <div className="container max-w-6xl px-6 mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center">Key Features You'll Love</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-6 p-6 transition-colors rounded-xl hover:bg-gray-50">
              <div className="flex-shrink-0">{feature.icon}</div>
              <div>
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}