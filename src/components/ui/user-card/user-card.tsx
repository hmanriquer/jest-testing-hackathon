import React from 'react';
import './user-card.scss';

interface UserCardProps {
  name: string;
  email: string;
}

export const UserCard = ({ name, email }: UserCardProps) => {
  return (
    <div className="card">
      <div className="card-details">
        <p className="text-title">{name}</p>
        <p className="text-body">{email}</p>
      </div>
      <button className="card-button">Hello!</button>
    </div>
  );
};
