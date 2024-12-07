import React from 'react';
import { Sliders, Bell, Globe, Shield } from 'lucide-react';

const features = [
  {
    icon: <Sliders className="w-10 h-10 text-blue-600" />,
    title: 'Customizable Limits',
    description: 'Set individual card limits for better control.'
  },
  {
    icon: <Bell className="w-10 h-10 text-blue-600" />,
    title: 'Transaction Alerts',
    description: 'Stay updated on every transaction in real-time.'
  },
  {
    icon: <Globe className="w-10 h-10 text-blue-600" />,
    title: 'Global Usage',
    description: 'Use your virtual cards anywhere online, anytime.'
  },
  {
    icon: <Shield className="w-10 h-10 text-blue-600" />,
    title: 'Secure Payments',
    description: 'Advanced security for all your transactions.'
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 scroll-mt-16">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features You'll Love</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-6 p-6 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="flex-shrink-0">{feature.icon}</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}