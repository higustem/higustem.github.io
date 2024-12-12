import { useNavigate } from 'react-router-dom';
import { CreditCard } from 'lucide-react';

export function Logo() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={handleLogoClick}
      className="flex items-center gap-2 hover:opacity-80 transition-opacity"
    >
      <CreditCard className="w-8 h-8 text-blue-600" />
      <span className="font-bold text-xl">Gustem</span>
    </button>
  );
}