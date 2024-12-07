import React from 'react';
import { CreditCard } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <CreditCard className="w-8 h-8 text-blue-600" />
      <span className="font-bold text-xl">Gustem</span>
    </div>
  );
}