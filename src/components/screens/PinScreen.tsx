import React from "react";
import PinInput from "../PinInput";
import Button from "../Button";
interface PinScreenProps {
  onDashboard: (screen: string) => void;
}

const PinScreen: React.FC<PinScreenProps> = ({ onDashboard }) => {
  const handlePinChange = (pin: string) => {
    console.log("PIN changed:", pin);
    if (pin.length === 6) {
      console.log("PIN complete:", pin);
    }
  };

  return (
    <div className='min-h-screen bg-white px-4 py-8 flex flex-col  items-center'>
      <div className='flex justify-center mb-16'>
        <img src='/assets/images/logo.png' alt='PayET Logo' className='h-12' />
      </div>
      <h1 className='text-[32px] font-bold text-[#1C274C] mb-2'>
        Enter Pin Code
      </h1>

      <p className='text-gray-500 mb-8 text-center'>
        Enter your Pincode to use for an additional security
      </p>

      <PinInput onChange={handlePinChange} />
      <div className='w-full mt-10'>
        <Button
        onClick={() => onDashboard("dashboard")}
        >Continue</Button>
      </div>
    </div>
  );
};

export default PinScreen;
