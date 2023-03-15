import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Album } from './components/Album';
import { Favorites } from './components/Favorites';
import { Home } from './components/Home';
import { Profile } from './components/Profile';
import { ProfileEdit } from './components/ProfileEdit';
import { Search } from './components/Search';

function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={<Home />}
      />

      <Route
        path='/search'
        element={<Search />}
      />

      <Route
        path='/album/:id'
        element={<Album />}
      />

      <Route
        path='/favorites'
        element={<Favorites />}
      />

      <Route
        path='/profile'
        element={<Profile />}
      />

      <Route
        path='/profile/edit'
        element={<ProfileEdit />}
      />

      <Route
        path='*'
        element={<h1>404 Not Found</h1>}
      />
    </Routes>
  );
}

export default App;
