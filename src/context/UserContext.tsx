import { createContext } from 'react';

export type UserContextType = {
  user: string;
  setUser: (user: string) => void;
};

const UserContext = createContext<UserContextType>({
  user: '',
  setUser: () => {},
});

export default UserContext;
