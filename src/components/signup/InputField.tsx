import { LucideIcon } from 'lucide-react';

interface InputFieldProps {
  icon: LucideIcon;
  label: string;
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
}

export function InputField({
  icon: Icon,
  label,
  name,
  type,
  placeholder,
  required
}: InputFieldProps) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Icon className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type={type}
          name={name}
          id={name}
          required={required}
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}