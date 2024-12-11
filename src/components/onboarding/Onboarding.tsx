import React, { useState } from 'react';
import OnboardingSlide from './OnboardingSlide';
import OnboardingDots from './OnboardingDots';
import OnboardingNavigation from './OnboardingNavigation';
import { OnboardingProps } from '../../types/onboarding';
import { onboardingSlides } from '../../data/onboardingSlides';

const Onboarding: React.FC<OnboardingProps> = ({ onComplete, onSkip }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    if (currentSlide === onboardingSlides.length - 1) {
      onComplete();
    } else {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 relative">
        {onboardingSlides.map((slide, index) => (
          <OnboardingSlide
            key={slide.id}
            slide={slide}
            isActive={currentSlide === index}
          />
        ))}
      </div>
      <div className="pb-8">
        <OnboardingDots
          total={onboardingSlides.length}
          current={currentSlide}
        />
      </div>
      <OnboardingNavigation
        currentSlide={currentSlide}
        totalSlides={onboardingSlides.length}
        onNext={handleNext}
        onSkip={onSkip}
      />
    </div>
  );
};

export default Onboarding;