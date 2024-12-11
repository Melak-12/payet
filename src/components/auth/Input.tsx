import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input: React.FC<InputProps> = ({ label, ...props }) => {
  return (
    <div className='mb-4'>
      <label className='block text-[#2D3748] text-base font-medium mb-2'>
        {label}
      </label>
      <input
        {...props}
        className='w-full h-14 px-4 rounded-xl border border-[#E2E8F0] text-base placeholder-[#A0AEC0] focus:outline-none focus:ring-2 focus:ring-emerald-500'
      />
    </div>
  );
};

export default Input;
