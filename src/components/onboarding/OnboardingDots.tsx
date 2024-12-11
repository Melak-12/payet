import React from 'react';

interface OnboardingDotsProps {
  total: number;
  current: number;
}

const OnboardingDots: React.FC<OnboardingDotsProps> = ({ total, current }) => {
  return (
    <div className="flex gap-2 justify-center">
      {Array.from({ length: total }).map((_, index) => (
        <div
          key={index}
          className={`w-2 h-2 rounded-full transition-colors ${
            index === current ? 'bg-emerald-500' : 'bg-gray-300'
          }`}
        />
      ))}
    </div>
  );
};

export default OnboardingDots;