import React from 'react';
import AddUser from '../AddUser';
import './App.scss';
import { UserCard } from '@components/ui/user-card/user-card';
import { UserProvider } from '../../context/user.context';
import { useUser } from '../../context/user.context';

export const App = (): JSX.Element => {
  return (
    <UserProvider>
      <AppContent />
    </UserProvider>
  );
};

const AppContent = (): JSX.Element => {
  const { users } = useUser();
  return (
    <div className="componentWrapper">
      <h1>Lexis Nexis&reg; | Testing Hackathon</h1>
      <AddUser />
      <section className="wrapper-container">
        {users.map((user) => (
          <UserCard key={user.id} name={user.name} email={user.email} />
        ))}
      </section>
    </div>
  );
};
