import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../context/UserContext';

export const Header = () => {
  const { user } = useContext(UserContext);
  return (
    <header className='flex flex-col justify-center items-center bg-neutral shadow-lg'>
      <section className='flex w-full justify-between text-base-100'>
        <h1 className='text-5xl m-3 drop-shadow-lg'>My Tunes</h1>
        <h3 className='text-lg self-center m-3 drop-shadow-lg'>
          Bem Vindo(a) {user}
        </h3>
      </section>
      <nav className='flex flex-col justify-center w-full gap-2 items-center bg-base-100 sm:flex-row sm:gap-24 m-2'>
        <Link
          className='text-neutral cursor-pointer hover:bg-primary  duration-200 p-2'
          to='/'
        >
          Home
        </Link>
        <Link
          className='text-neutral cursor-pointer hover:bg-primary duration-200 p-2'
          to='/search'
        >
          Search
        </Link>
        <Link
          className='text-neutral cursor-pointer hover:bg-primary duration-200 p-2'
          to='/profile'
        >
          Edit Profile
        </Link>
        <Link
          className='text-neutral cursor-pointer hover:bg-primary duration-200 p-2'
          to='/favorites'
        >
          Favorites
        </Link>
      </nav>
    </header>
  );
};
