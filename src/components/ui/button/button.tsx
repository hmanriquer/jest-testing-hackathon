import React from 'react';
import './styles.scss';

interface ButtonProps {
  text: string;
  onClick: () => void;
  type?: 'button' | 'submit';
}

export const Button = ({ text, onClick, type = 'button' }: ButtonProps) => {
  return (
    <button className="button-4" role="button" onClick={onClick} type={type}>
      {text}
    </button>
  );
};
