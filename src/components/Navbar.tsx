import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './navigation/Logo';
import { NavLinks } from './navigation/NavLinks';
import { GetStartedButton } from './navigation/GetStartedButton';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex items-center justify-between h-16">
          <Logo />
          
          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <GetStartedButton />
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <NavLinks
                onLinkClick={() => setIsMenuOpen(false)}
                className="text-left"
              />
              <GetStartedButton className="text-center" />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}