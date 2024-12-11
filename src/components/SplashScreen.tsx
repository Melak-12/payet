import React from 'react';

const SplashScreen: React.FC = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-white">
      {/* <div className="w-32 h-32 mb-4">
        <svg viewBox="0 0 100 100" className="w-full h-full text-emerald-500">
          <path
            fill="currentColor"
            d="M50 0C22.4 0 0 22.4 0 50s22.4 50 50 50 50-22.4 50-50S77.6 0 50 0zm0 80c-16.6 0-30-13.4-30-30s13.4-30 30-30 30 13.4 30 30-13.4 30-30 30z"
          />
        </svg>
      </div> */}
      <img src='/assets/images/logo1.png' alt='PayET Logo' className='h-40' />
     
    </div>
  );
};

export default SplashScreen;