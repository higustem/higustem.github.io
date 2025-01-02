import { LucideIcon } from 'lucide-react';

interface InputFieldProps {
  icon: LucideIcon;
  label: string;
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function InputField({
  icon: Icon,
  label,
  name,
  type,
  placeholder,
  required,
  value,
  onChange
}: InputFieldProps) {
  return (
    <div>
      <label htmlFor={name} className="block mb-1 text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Icon className="w-5 h-5 text-gray-400" />
        </div>
        <input
          type={type}
          name={name}
          id={name}
          required={required}
          value={value}
          onChange={onChange}
          className="block w-full py-2 pl-10 pr-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}