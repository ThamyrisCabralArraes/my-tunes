import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../context/UserContext';
import './header.css';
import { User } from './User';

export const Header = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <div className='header'>
        <h1>My Tunes</h1>
        <p>{user}</p>
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
