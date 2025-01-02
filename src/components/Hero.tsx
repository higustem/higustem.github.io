import React from 'react';
import { CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section className="relative py-16 text-white bg-gradient-to-b from-blue-600 to-blue-800">
      <div className="container max-w-6xl px-6 mx-auto">
        <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
          <div className="space-y-8">
            <h1 className="md:leading-[1.4] text-4xl md:text-5xl font-bold leading-tight">
            Simplify Your Digital Ad Spend Management
            </h1>
            <p className="text-xl text-blue-100 leading-[1.4]">
            Track and manage all your social media ads spending in one place with our virtual card solution.
            </p>
            <Link 
              to="/signup"
              className="inline-block px-8 py-3 text-lg font-semibold text-blue-600 transition-colors bg-white rounded-lg hover:bg-blue-50"
            >
              Get Started Today
            </Link>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full max-w-lg transition-transform transform rotate-6 hover:rotate-0">
              <CreditCard className="w-full h-auto text-white/90" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}