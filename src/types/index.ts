export type ScreenType = 'login' | 'register' | 'pin' | 'verify' | 'check';

export interface FormData {
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface NavigationProps {
  onNavigate: (screen: ScreenType) => void;
}

export interface FormProps extends NavigationProps {
  formData: FormData;
  onFormChange: (data: Partial<FormData>) => void;
}