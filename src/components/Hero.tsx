import React from 'react';
import { CreditCard } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-blue-600 to-blue-800 text-white py-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Empower Your Spending with Virtual Cards
            </h1>
            <p className="text-xl text-blue-100">
              Create unlimited virtual cards to shop, pay, and manage your finances seamlessly.
            </p>
            <a 
              href="https://api-sandbox.gustem.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
            >
              Get Started Today
            </a>
          </div>
          <div className="flex-1 relative">
            <div className="relative transform rotate-6 transition-transform hover:rotate-0">
              <CreditCard size={300} className="text-white/90" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}