import { useNavigate } from 'react-router-dom';
import { Mail, CreditCard, Shield } from 'lucide-react';

export function FooterLinks() {
  const navigate = useNavigate();

  const links = {
    product: [
      { label: 'Spend Management', href: '#features' },
      { label: 'Virtual Cards', href: '#features' },
    ],
    company: [
      { label: 'Terms of Service', path: '/terms' },
    ],
    features: [
      { label: 'Virtual Cards', icon: CreditCard },
      { label: 'Unified Analytics', icon: Shield }
    ],
  };

  const handleClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="grid gap-12 mb-12 md:grid-cols-3">
      <div>
        <h3 className="mb-4 text-lg font-semibold text-gray-100">Product</h3>
        <ul className="space-y-3">
          {links.product.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="text-gray-400 transition-colors hover:text-blue-400">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      
      <div>
        <h3 className="mb-4 text-lg font-semibold text-gray-100">Company</h3>
        <ul className="space-y-3">
          {links.company.map((link) => (
            <li key={link.label}>
              <button
                onClick={() => handleClick(link.path)}
                className="text-gray-400 transition-colors hover:text-blue-400"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold text-gray-100">Features</h3>
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