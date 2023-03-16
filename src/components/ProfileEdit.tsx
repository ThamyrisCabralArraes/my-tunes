import { useContext, useEffect, useState } from 'react';
import UserContext from '../context/UserContext';
import './css/profileEdit.css';

export const ProfileEdit = () => {
  const [nameEdit, setNameEdit] = useState('');
  const [emailEdit, setEmailEdit] = useState('');
  const [pictureEdit, setPictureEdit] = useState('');

  const { setUser } = useContext(UserContext);

  useEffect(() => {
    recoverProfile();
  }, []);

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    if (name === 'nameEdit') {
      setNameEdit(value);
    } else if (name === 'emailEdit') {
      setEmailEdit(value);
    } else if (name === 'pictureEdit') {
      setPictureEdit(value);
    }
  };

  const handleprofileSave = () => {
    const profile = {
      name: nameEdit,
      email: emailEdit,
      picture: pictureEdit,
    };
    localStorage.setItem('profile', JSON.stringify(profile));
    setUser(nameEdit);
  };

  const recoverProfile = () => {
    const profile = JSON.parse(localStorage.getItem('profile') || '{}');
    setNameEdit(profile.name);
    setEmailEdit(profile.email);
    setPictureEdit(profile.picture);
  };

  return (
    <>
      <div className='div-edite-profile'>
        <label htmlFor='nameEdit'>
          Nome
          <input
            className='input-profile'
            type='text'
            placeholder='digite seu nome'
            name='nameEdit'
            id='nameEdit'
            value={nameEdit}
            onChange={handleChange}
          />
        </label>

        <label htmlFor='emailEdit'>
          Email
          <input
            className='input-profile'
            type='text'
            placeholder='digite seu email'
            name='emailEdit'
            id='emailEdit'
            value={emailEdit}
            onChange={handleChange}
          />
        </label>

        <label htmlFor='pictureEdit'>
          Foto
          <input
            className='input-profile'
            type='text'
            placeholder='url da sua foto'
            name='pictureEdit'
            id='pictureEdit'
            value={pictureEdit}
            onChange={handleChange}
          />
        </label>

        <button
          className='button-profile'
          onClick={handleprofileSave}
        >
          Salvar
        </button>
      </div>

      <div className='div-profile'>
        <img
          src={pictureEdit}
          alt='image'
        />
        <h2>Nome: {nameEdit}</h2>
        <h2>Email: {emailEdit} </h2>
      </div>
    </>
  );
};
