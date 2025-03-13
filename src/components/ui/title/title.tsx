import React from 'react';
import './title.scss';

interface TitleProps {
  title: string;
  subtitle?: string;
}

export const Title = ({ title, subtitle }: TitleProps) => {
  return (
    <div className="heading-title">
      <h1 className="heading-title__title">{title}</h1>
      {subtitle && <p className="heading-title__subtitle">{subtitle}</p>}
    </div>
  );
};
