import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../context/UserContext';
import './header.css';

export const Header = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <div className='header'>
        <h1 className='title-header'>My Tunes</h1>
        <h3 className='bem-vindo'>Bem Vindo(a) {user}</h3>
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
