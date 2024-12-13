import React from 'react';
import { CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-blue-600 to-blue-800 text-white py-16">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="md:leading-[1.4] text-4xl md:text-5xl font-bold leading-tight">
              Empower Your Spending with Virtual Cards
            </h1>
            <p className="text-xl text-blue-100 leading-[1.4]">
              Create unlimited virtual cards to shop, pay, and manage your finances seamlessly.
            </p>
            <Link 
              to="/signup"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
            >
              Get Started Today
            </Link>
          </div>
          <div className="flex justify-center">
            <div className="relative transform rotate-6 transition-transform hover:rotate-0 w-full max-w-lg">
              <CreditCard className="w-full h-auto text-white/90" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}