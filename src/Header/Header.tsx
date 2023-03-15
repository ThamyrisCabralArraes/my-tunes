import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

export const Header = () => {
  const [user, setUser] = useState<string | null>('');

  useEffect(() => {
    setUser(readUser());
  }, []);

  const readUser = (): string | null => {
    const user = localStorage.getItem('user');
    if (user === null) {
      return null;
    }
    return JSON.parse(user);
  };

  return (
    <>
      <div className='header'>
        <h1>My Tunes</h1>
        <h2>{user}</h2>
      </div>
      <div className='links'>
        <Link
          className='classe-link'
          style={{ textDecoration: 'none', color: 'white' }}
          to='/'
        >
          Home
        </Link>
        <Link
          className='classe-link'
          style={{ textDecoration: 'none', color: 'white' }}
          to='/search'
        >
          Search
        </Link>
        <Link
          className='classe-link'
          style={{ textDecoration: 'none', color: 'white' }}
          to='/profile'
        >
          Profile
        </Link>
        <Link
          className='classe-link'
          style={{ textDecoration: 'none', color: 'white' }}
          to='/profile/edit'
        >
          Edit Profile
        </Link>
        <Link
          className='classe-link'
          style={{ textDecoration: 'none', color: 'white' }}
          to='/favorites'
        >
          Favorites
        </Link>
      </div>
    </>
  );
};
