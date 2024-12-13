import { Link } from 'react-router-dom';

interface GetStartedButtonProps {
  className?: string;
}

export function GetStartedButton({ className = '' }: GetStartedButtonProps) {
  return (
    <Link
      to="/signup"
      className={`bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors ${className}`}
    >
      Get Started
    </Link>
  );
}