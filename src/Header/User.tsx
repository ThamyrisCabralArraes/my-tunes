import { useEffect, useState } from 'react';

interface UserProps {
  user: string | null;
  setUser: (user: string | null) => void;
}

export const User = ({ user, setUser }: UserProps) => {
  return <div>{user}</div>;
};
