interface GetStartedButtonProps {
  className?: string;
}

export function GetStartedButton({ className = '' }: GetStartedButtonProps) {
  return (
    <a
      href="https://api-sandbox.gustem.com/"
      target="_blank"
      rel="noopener noreferrer"
      className={`bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors ${className}`}
    >
      Get Started
    </a>
  );
}