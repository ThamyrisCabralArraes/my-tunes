import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../context/UserContext';
import { User } from '../Header/User';

import './css/home.css';

export const Home = () => {
  const [nameLogin, setNameLogin] = useState<string>('');
  const [disable, setDisable] = useState<boolean>(true);

  const navigate = useNavigate();

  const handleChange = ({ target }: any): void => {
    if (target.value.length > 1) {
      setDisable(false);
    } else {
      setDisable(true);
    }
    setNameLogin(target.value);
  };

  const { setUser } = useContext(UserContext);

  const handleClick = (e: any): void => {
    e.preventDefault();
    saveUser(nameLogin);
    setUser(nameLogin);
    navigate('/search');
  };

  const saveUser = (user: string | null) => {
    localStorage.setItem('user', JSON.stringify(user));
  };

  const readUser = (): string | null => {
    const user = localStorage.getItem('user');
    if (user === null) {
      return null;
    }
    return JSON.parse(user);
  };

  const user = readUser();

  return (
    <div className='input-login'>
      <label htmlFor='nameLogin'>
        <input
          className='input-login'
          type='text'
          placeholder='digite seu nome'
          name='nameLogin'
          id='nameLogin'
          value={nameLogin}
          onChange={handleChange}
        />
      </label>
      <button
        className='button-login'
        disabled={disable}
        onClick={handleClick}
      >
        Entrar
      </button>
      <br />
    </div>
  );
};
