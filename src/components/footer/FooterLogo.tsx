import React from 'react';
import { Logo } from '../Logo';

export function FooterLogo() {
  return (
    <div className="flex flex-col items-center mb-12">
      <Logo />
      <p className="max-w-md mt-3 text-center text-gray-400">
      Simplifying digital ad spend management with virtual cards and unified analytics
      </p>
    </div>
  );
}