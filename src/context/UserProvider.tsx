import { useState } from 'react';
import UserContext, { UserContextType } from './UserContext';

interface UserProvidedProps {
  children: React.ReactNode;
}

const UserProvider = ({ children }: UserProvidedProps) => {
  const [user, setUser] = useState<string>('');

  const contextValue: UserContextType = {
    user,
    setUser,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
