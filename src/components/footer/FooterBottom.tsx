import React from 'react';
import { Mail } from 'lucide-react';

export function FooterBottom() {
  return (
    <div className="border-t border-gray-800 pt-8 mt-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Gustem LLC. All rights reserved.
        </p>
        <a 
          href="mailto:hi@gustem.com" 
          className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors text-sm"
        >
          <Mail size={16} />
          hi@gustem.com
        </a>
      </div>
    </div>
  );
}