import React from 'react';

interface OnboardingNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onNext: () => void;
  onSkip: () => void;
}

const OnboardingNavigation: React.FC<OnboardingNavigationProps> = ({
  currentSlide,
  totalSlides,
  onNext,
  onSkip,
}) => {
  const isLastSlide = currentSlide === totalSlides - 1;

  return (
    <div className="flex justify-between items-center px-6 py-4">
      <button
        onClick={onSkip}
        className="text-gray-500 font-medium hover:text-gray-700 transition-colors"
      >
        Skip
      </button>
      <button
        onClick={onNext}
        className="text-emerald-500 font-medium hover:text-emerald-600 transition-colors"
      >
        {isLastSlide ? 'Finish' : 'Next'}
      </button>
    </div>
  );
};

export default OnboardingNavigation;