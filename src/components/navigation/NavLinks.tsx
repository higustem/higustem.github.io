import { useNavigate } from 'react-router-dom';

interface NavLink {
  label: string;
  scrollTo?: string;
  path?: string;
}

const navLinks: NavLink[] = [
  { label: 'Benefits', scrollTo: 'benefits' },
  { label: 'Features', scrollTo: 'features' },
  { label: 'How It Works', scrollTo: 'how-it-works' },
];

interface NavLinksProps {
  onLinkClick?: () => void;
  className?: string;
}

export function NavLinks({ onLinkClick, className = '' }: NavLinksProps) {
  const navigate = useNavigate();

  const handleClick = (link: NavLink) => {
    if (link.path) {
      navigate(link.path);
    } else if (link.scrollTo) {
      navigate('/', { state: { scrollTo: link.scrollTo } });
    }
    onLinkClick?.();
  };

  return (
    <>
      {navLinks.map((link) => (
        <button
          key={link.label}
          onClick={() => handleClick(link)}
          className={`text-gray-700 hover:text-blue-600 transition-colors ${className}`}
        >
          {link.label}
        </button>
      ))}
    </>
  );
}