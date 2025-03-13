import { sampleList } from '@components/data';
import React, { createContext, useContext, useState } from 'react';

type User = {
  id: number;
  name: string;
  email: string;
};

interface UserContextType {
  users: User[];
  addUser: (user: User) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [users, setUsers] = useState<User[]>(sampleList);

  const addUser = (user: User) => {
    setUsers([...users, user]);
  };

  return <UserContext.Provider value={{ users, addUser }}>{children}</UserContext.Provider>;
};

export { UserProvider, useUser, type User };
