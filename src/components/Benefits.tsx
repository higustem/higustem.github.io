import React from 'react';
import { CheckCircle2, CreditCard, Users, PieChart } from 'lucide-react';

const benefits = [
  {
    icon: <CheckCircle2 className="w-12 h-12 text-blue-600" />,
    title: 'No Credit History Checks',
    description: 'Sign up and start without worrying about credit scores.'
  },
  {
    icon: <CreditCard className="w-12 h-12 text-blue-600" />,
    title: 'Unlimited Virtual Cards',
    description: 'Create as many virtual cards as you need with no limits.'
  },
  {
    icon: <Users className="w-12 h-12 text-blue-600" />,
    title: 'No Employee Cards',
    description: 'Simplify expense management—no need for physical employee cards.'
  },
  {
    icon: <PieChart className="w-12 h-12 text-blue-600" />,
    title: 'Smart Limits & Budgets',
    description: 'Stay in control with advanced spending tools.'
  }
];

export function Benefits() {
  return (
    <section id="benefits" className="py-20 bg-gray-50 scroll-mt-16">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}