import { useNavigate } from 'react-router-dom';
import { CreditCard } from 'lucide-react';
import { BetaLabel } from '../common/BetaLabel';

export function Logo() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={handleLogoClick}
      className="flex items-center gap-3 hover:opacity-80 transition-opacity"
    >
      <CreditCard className="w-8 h-8 text-blue-600" />
      <div className="flex items-center gap-2">
        <span className="font-bold text-2xl tracking-tight">Gustem</span>
        <BetaLabel />
      </div>
    </button>
  );
}