import { useState } from 'react';
import { Mail, Building2, User } from 'lucide-react';
import { InputField } from './InputField';
import { getApiUrl } from '../../config/api';
import { useNavigate } from 'react-router-dom';

export function SignUpForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    try {
      setIsLoading(true);
      
      const response = await fetch(getApiUrl('contact'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Signup failed');
      }

      const data = await response.json();
      setIsSuccess(true);
      navigate('/request-success');
      onSignupSuccess?.(data);

    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-8 bg-white shadow-sm rounded-xl">
      <h1 className="mb-2 text-2xl font-bold">Request Beta Access</h1>
      <p className="mb-6 text-gray-600">Join our exclusive beta program and be among the first to experience Gustem.</p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <InputField
            icon={User}
            label="First name"
            name="firstName"
            type="text"
            placeholder="First name"
            required
            value={formData.firstName}
            onChange={handleChange}
          />
          <InputField
            icon={User}
            label="Last name"
            name="lastName"
            type="text"
            placeholder="Last name"
            required
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <InputField
          icon={Mail}
          label="Work email"
          name="email"
          type="email"
          placeholder="you@company.com"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <InputField
          icon={Building2}
          label="Company name (Optional)"
          name="company"
          type="text"
          placeholder="Your company name"
          value={formData.company}
          onChange={handleChange}
        />
        <button
          type="submit"
          disabled={isLoading}
          className="w-full px-4 py-2 text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Submitting...' : 'Request Access'}
        </button>
      </form>
      <p className="mt-4 text-sm text-center text-gray-600">
        By submitting, you agree to our{' '}
        <a href="#/terms" className="text-blue-600 hover:underline">
          Terms of Service
        </a>
      </p>
    </div>
  );
}