const STORAGE_KEYS = {
  HAS_SEEN_ONBOARDING: 'hasSeenOnboarding',
} as const;

export const storage = {
  getHasSeenOnboarding: (): boolean => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.HAS_SEEN_ONBOARDING) || 'false');
    } catch {
      return false;
    }
  },

  setHasSeenOnboarding: (value: boolean): void => {
    localStorage.setItem(STORAGE_KEYS.HAS_SEEN_ONBOARDING, JSON.stringify(value));
  },
};