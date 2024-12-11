import React from 'react';

interface InputProps {
  label: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
}) => (
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-medium mb-2">
      {label}
    </label>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-emerald-500 focus:ring focus:ring-emerald-200 transition-colors"
    />
  </div>
);

export default Input;