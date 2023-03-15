import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

  const handleClick = (e: any): void => {
    e.preventDefault();
    saveUser(nameLogin);
    navigate('/search');
  };

  const saveUser = (user: string | null) => {
    localStorage.setItem('user', JSON.stringify(user));
  };

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
    </div>
  );
};
