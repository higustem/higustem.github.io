import React from 'react';
import { CheckCircle2, CreditCard, LineChart, Wallet } from 'lucide-react';


const benefits = [
  {
    icon: <LineChart className="w-12 h-12 text-blue-600" />,
    title: 'Unified Ad Spend Tracking',
    description: 'Monitor all your social media ad spending in one dashboard.'
  },
  {
    icon: <CreditCard className="w-12 h-12 text-blue-600" />,
    title: 'Virtual Cards for Ads',
    description: 'Secure virtual cards for each advertising platform.'
  },
  {
    icon: <Wallet className="w-12 h-12 text-blue-600" />,
    title: 'Budget Control',
    description: 'Set and manage budgets across different platforms easily.'
  },
  {
    icon: <CheckCircle2 className="w-12 h-12 text-blue-600" />,
    title: 'Automated Tracking',
    description: 'Real-time spend tracking and automated reporting.'
  }
];

export function Benefits() {
  return (
    <section id="benefits" className="py-20 bg-gray-50 scroll-mt-16">
      <div className="container max-w-6xl px-6 mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center">Why Choose Us?</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="p-6 transition-shadow bg-white shadow-sm rounded-xl hover:shadow-md">
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="mb-2 text-xl font-semibold">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}