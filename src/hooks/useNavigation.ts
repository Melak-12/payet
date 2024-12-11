import { useState, useCallback } from 'react';
import { ScreenType } from '../types';

export const useNavigation = (initialScreen: ScreenType = 'login') => {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>(initialScreen);

  const handleNavigate = useCallback((screen: ScreenType) => {
    setCurrentScreen(screen);
  }, []);

  return {
    currentScreen,
    handleNavigate,
  };
};