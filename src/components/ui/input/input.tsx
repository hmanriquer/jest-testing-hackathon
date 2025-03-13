import React from 'react';
import './styles.scss';

interface InputProps {
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ placeholder, value, onChange }: InputProps) => {
  return <input className="input" placeholder={placeholder} value={value} onChange={onChange} />;
};

export default Input;
