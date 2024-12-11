import React, { useState } from "react";
import Input from "../auth/Input";
import Button from "../auth/Button";

interface LoginScreenProps {
  onRegister: (screen: string) => void;
  onVerify: (screen: string) => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onRegister, onVerify }) => {
  const [formData, setFormData] = useState({
    phone: "",
    password: "",
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
            Login to your account
          </h1>
          <p className='text-[#718096] text-[16px]'>
            Good to see you again, enter your details below and start financing.
          </p>
        </div>

        <div className='space-y-6'>
          <Input
            label='Phone Number'
            name='phone'
            value={formData.phone}
            onChange={handleInputChange}
            placeholder='+2519 00 00 0000'
          />

          <Input
            label='Password'
            name='password'
            type='password'
            value={formData.password}
            onChange={handleInputChange}
            placeholder='********'
          />

          <div className='flex justify-end'>
            <button
              type='button'
              // onClick={() => onRegister("forgot-password")}
              className='text-[16px] font-medium'
            >
              Forgot Password?{" "}
              <span className='text-emerald-500'>Click Here</span>
            </button>
          </div>

          <div className='space-y-4'>
            <Button onClick={() => onVerify("verify")}>Login</Button>

            <Button variant='secondary' onClick={() => onRegister("register")}>
              Create an Account
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
