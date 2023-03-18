import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../context/UserContext';

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
    setUser(nameLogin);
    navigate('/search');
  };

  return (
    <section className='flex justify-center mt-8 gap-2'>
      <label htmlFor='nameLogin'>
        <input
          className='input input-bordered input-primary w-full max-w-xs'
          type='text'
          placeholder='Digite seu nome'
          name='nameLogin'
          id='nameLogin'
          value={nameLogin}
          onChange={handleChange}
        />
      </label>
      <button
        className='btn btn-primary'
        disabled={disable}
        onClick={handleClick}
      >
        Entrar
      </button>
      <br />
    </section>
  );
};
