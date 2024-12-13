import React from 'react';
import { Link } from 'react-router-dom';
import { CreditCard } from 'lucide-react';
import { BetaLabel } from './common/BetaLabel';

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
      <CreditCard className="w-8 h-8 text-blue-600" />
      <div className="flex items-center gap-2">
        <span className="font-bold text-2xl tracking-tight">Gustem</span>
        <BetaLabel />
      </div>
    </Link>
  );
}