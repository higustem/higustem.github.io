import React from 'react';
import { Mail, CreditCard, Shield, Users } from 'lucide-react';

export function FooterLinks() {
  const links = {
    product: [
      { label: 'Virtual Cards', href: '#features' },
    ],
    company: [
      { label: 'Terms of Service', href: '/terms' },
    ],
    features: [
      { label: 'Virtual Cards', icon: CreditCard },
      { label: 'Secure Payments', icon: Shield }
    ],
  };

  return (
    <div className="grid md:grid-cols-3 gap-12 mb-12">
      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-100">Product</h3>
        <ul className="space-y-3">
          {links.product.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="text-gray-400 hover:text-blue-400 transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-100">Company</h3>
        <ul className="space-y-3">
          {links.company.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="text-gray-400 hover:text-blue-400 transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-100">Features</h3>
        <ul className="space-y-3">
          {links.features.map((feature) => (
            <li key={feature.label} className="flex items-center gap-2 text-gray-400">
              <feature.icon size={16} className="text-blue-400" />
              <span>{feature.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}