import React from 'react';
import { Link } from 'react-router-dom';
import { CreditCard } from 'lucide-react';

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
      <CreditCard className="w-8 h-8 text-blue-600" />
      <span className="font-bold text-xl">Gustem</span>
    </Link>
  );
}