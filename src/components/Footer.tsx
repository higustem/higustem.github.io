import React from 'react';
import { FooterLogo } from './footer/FooterLogo';
import { FooterLinks } from './footer/FooterLinks';
import { FooterBottom } from './footer/FooterBottom';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6 max-w-6xl">
        <FooterLogo />
        <FooterLinks />
        <FooterBottom />
      </div>
    </footer>
  );
}