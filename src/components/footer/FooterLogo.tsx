import React from 'react';
import { Logo } from '../Logo';

export function FooterLogo() {
  return (
    <div className="flex flex-col items-center mb-12">
      <Logo />
      <p className="mt-3 text-gray-400 text-center max-w-md">
        Empowering businesses with secure virtual cards for seamless financial management
      </p>
    </div>
  );
}