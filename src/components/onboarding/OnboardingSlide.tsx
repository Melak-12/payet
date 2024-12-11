import React from 'react';
import { OnboardingSlide as OnboardingSlideType } from '../../types/onboarding';

interface OnboardingSlideProps {
  slide: OnboardingSlideType;
  isActive: boolean;
}

const OnboardingSlide: React.FC<OnboardingSlideProps> = ({ slide, isActive }) => {
  if (!isActive) return null;

  const titleParts = slide.highlightedText
    ? slide.title.split(slide.highlightedText)
    : [slide.title];

  return (
    <div className="flex flex-col items-center justify-center px-6 h-full">
      <div className="mb-8 w-64 h-64">
        <img src="../../../public/assets/images/Illustration.png" alt={slide.title} className="w-full h-full object-contain" />
      </div>
      <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">
        {titleParts.map((part, index) => (
          <React.Fragment key={index}>
            {part}
            {index < titleParts.length - 1 && (
              <span className="text-emerald-500">{slide.highlightedText}</span>
            )}
          </React.Fragment>
        ))}
      </h1>
      <p className="text-gray-600 text-center mb-8">{slide.description}</p>
    </div>
  );
};

export default OnboardingSlide;