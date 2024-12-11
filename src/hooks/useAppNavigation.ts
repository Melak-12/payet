import { useState, useEffect } from "react";
import { storage } from "../utils/storage";

export type AppScreen = "splash" | "onboarding" | "login" | "register"|"verify"| "dashboard";

export const useAppNavigation = () => {
  const [currentScreen, setCurrentScreen] = useState<AppScreen>("splash");
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const hasSeenOnboarding = storage.getHasSeenOnboarding();

    const timer = setTimeout(() => {
      setCurrentScreen(hasSeenOnboarding ? "login" : "onboarding");
      setIsInitialized(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const navigateToLogin = () => {
    storage.setHasSeenOnboarding(true);
    setCurrentScreen("login");
  };

  const navigateToRegister = () => {
    storage.setHasSeenOnboarding(true);
    setCurrentScreen("register");
  };
  const navToVerify = () => {
    storage.setHasSeenOnboarding(true);
    setCurrentScreen("verify");
  };
  const navToDashboard = () => {
    storage.setHasSeenOnboarding(true);
    setCurrentScreen("dashboard");
  }

  const navigateTo = (screen: AppScreen) => {
    setCurrentScreen(screen);
  };

  return {
    currentScreen,
    isInitialized,
    navToDashboard,
    navigateToLogin,
    navigateToRegister,
    navToVerify,
    navigateTo,
  };
};
