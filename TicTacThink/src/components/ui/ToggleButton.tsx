import React from 'react';

interface ToggleButtonProps {
  isOn: boolean;
  onToggle: () => void;
  label?: string;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ isOn, onToggle, label }) => {
  return (
    <div className="flex items-center justify-between w-full gap-2">
      {label && <span className="text-white font-medium">{label}</span>}
      <button
        onClick={onToggle}
        className={`w-12 h-6 flex items-center  cursor-pointer rounded-full p-1 transition-colors duration-300 ${
          isOn ? 'bg-blue-800' : 'bg-gray-500'
        }`}
      >
        <div
          className={`bg-white w-4 h-4 rounded-full cursor-pointer shadow-md transform transition-transform duration-300 ${
            isOn ? 'translate-x-6' : 'translate-x-0'
          }`}
        />
      </button>
    </div>
  );
};

export default ToggleButton;
