import { useState } from 'react';
import { Mail, Building2, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { InputField } from './InputField';

export function SignUpForm() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
    navigate('/request-success');
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-sm">
      <h1 className="text-2xl font-bold mb-2">Request Beta Access</h1>
      <p className="text-gray-600 mb-6">Join our exclusive beta program and be among the first to experience Gustem.</p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <InputField
            icon={User}
            label="First name"
            name="firstName"
            type="text"
            placeholder="First name"
            required
          />
          <InputField
            icon={User}
            label="Last name"
            name="lastName"
            type="text"
            placeholder="Last name"
            required
          />
        </div>
        <InputField
          icon={Mail}
          label="Work email"
          name="email"
          type="email"
          placeholder="you@company.com"
          required
        />
        <InputField
          icon={Building2}
          label="Company name (Optional)"
          name="company"
          type="text"
          placeholder="Your company name"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Submitting...' : 'Request Access'}
        </button>
      </form>
      <p className="mt-4 text-sm text-gray-600 text-center">
        By submitting, you agree to our{' '}
        <a href="#/terms" className="text-blue-600 hover:underline">
          Terms of Service
        </a>
      </p>
    </div>
  );
}