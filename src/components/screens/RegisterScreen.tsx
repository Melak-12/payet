import React, { useState } from "react";
import Input from "../auth/Input";
import Button from "../auth/Button";

interface RegisterScreenProps {
  onVerify: (screen: string) => void;
  onLogin:(screen:string)=>void;
}

const RegisterScreen: React.FC<RegisterScreenProps> = ({ onVerify,onLogin }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className='flex flex-col min-h-screen bg-white px-6 pt-16 mb-10'>
      <div className='flex justify-center mb-16'>
        <img src='/assets/images/logo.png' alt='PayET Logo' className='h-12' />
      </div>

      <div className='space-y-6'>
        <div className='space-y-2'>
          <h1 className='text-[#1A365D] text-[32px] font-bold'>
            Create an account
          </h1>
          <p className='text-[#718096] text-[16px]'>
            Welcome friend, enter your details so lets get started in financing.
          </p>
        </div>

        <div className='space-y-6'>
          <Input
            label='Email Address'
            name='email'
            type='email'
            value={formData.email}
            onChange={handleInputChange}
            placeholder='example@email.com'
          />

          <Input
            label='Password'
            name='password'
            type='password'
            value={formData.password}
            onChange={handleInputChange}
            placeholder='********'
          />

          <Input
            label='Confirm password'
            name='confirmPassword'
            type='password'
            value={formData.confirmPassword}
            onChange={handleInputChange}
            placeholder='********'
          />

          <div className='flex justify-center'>
            <button
              type='button'
              // onClick={() => onVerify("login")}
              className='text-[16px] font-medium'
            >
              Already has an account?{" "}
              <span className='text-emerald-500'
              onClick={()=>onLogin("login")}
              >Login Instead</span>
            </button>
          </div>

          <Button onClick={() => onVerify("onboarding")}>
            Create an account
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RegisterScreen;
