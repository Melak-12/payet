import { useState } from 'react';
import { FormData } from '../types';

const initialFormData: FormData = {
  phone: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export const useFormData = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const updateFormData = (newData: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  const resetForm = () => {
    setFormData(initialFormData);
  };

  return {
    formData,
    updateFormData,
    resetForm,
  };
};