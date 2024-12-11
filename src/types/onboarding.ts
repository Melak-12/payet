export interface OnboardingSlide {
  id: number;
  title: string;
  highlightedText?: string;
  description: string;
  image: string;
}

export interface OnboardingProps {
  onComplete: () => void;
  onSkip: () => void;
}