import React from 'react';
import { ButtonProps } from '@/interfaces';

const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  return (
    <button className={`font-semibold hover:bg-blue-600 ${styles}`}>
      {title}
    </button>
  );
};

export default Button;