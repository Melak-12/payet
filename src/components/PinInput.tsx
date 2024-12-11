import React from "react";

interface PinInputProps {
  length?: number;
  onChange?: (value: string) => void;
}

const PinInput: React.FC<PinInputProps> = ({ length = 6, onChange }) => {
  const [pins, setPins] = React.useState<string[]>(Array(length).fill(""));

  const handleChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newPins = [...pins];
      newPins[index] = value;
      setPins(newPins);
      onChange?.(newPins.join(""));
    }
  };

  return (
    <div className='flex justify-center gap-2 mb-8'>
      {pins.map((pin, index) => (
        <div
          key={index}
          className='w-12 h-14 border-2 border-emerald-500 rounded-xl flex items-center justify-center text-xl'
        >
          <input
            type='text'
            value={pin}
            onChange={(e) => handleChange(index, e.target.value)}
            className='w-full h-full text-center bg-transparent outline-none'
            maxLength={1}
          />
        </div>
      ))}
    </div>
  );
};

export default PinInput;
