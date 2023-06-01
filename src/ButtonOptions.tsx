import React from 'react';

type Option = {
  label: string;
  onClick: () => void;
};

type ButtonOptionsProps = {
  options: Option[];
};

const ButtonOptions: React.FC<ButtonOptionsProps> = ({ options }) => {
  return (
    <div>
      {options.map((option, index) => (
        <button key={index} onClick={option.onClick}>
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default ButtonOptions;
