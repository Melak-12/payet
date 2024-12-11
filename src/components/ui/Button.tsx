import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  onClick,
  className = '',
  type = 'button',
}) => {
  const baseStyles = 'w-full py-4 rounded-xl font-semibold text-center transition-colors';
  const variantStyles = {
    primary: 'bg-emerald-500 text-white hover:bg-emerald-600',
    secondary: 'border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-50',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;