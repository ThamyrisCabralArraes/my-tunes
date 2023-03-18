import { FormEventHandler, useContext, useEffect, useState } from 'react';
import UserContext from '../context/UserContext';

export const ProfileEdit = () => {
  const [nameEdit, setNameEdit] = useState('');
  const [emailEdit, setEmailEdit] = useState('');
  const [pictureEdit, setPictureEdit] = useState('');

  const { setUser } = useContext(UserContext);

  useEffect(() => {
    recoverProfile();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === 'nameEdit') {
      setNameEdit(value);
    } else if (name === 'emailEdit') {
      setEmailEdit(value);
    } else if (name === 'pictureEdit') {
      setPictureEdit(value);
    }
  };

  const handleprofileSave: FormEventHandler = (e) => {
    e.preventDefault();
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
    <section className='flex justify-center gap-2'>
      <form
        onSubmit={handleprofileSave}
        className='flex flex-col justify-center mt-8 gap-2'
      >
        <label htmlFor='nameEdit'>
          Nome
          <input
            className='input input-bordered input-primary w-full max-w-xs'
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
            className='input input-bordered input-primary w-full max-w-xs'
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
            className='input input-bordered input-primary w-full max-w-xs'
            type='text'
            placeholder='url da sua foto'
            name='pictureEdit'
            id='pictureEdit'
            value={pictureEdit}
            onChange={handleChange}
          />
        </label>

        <button
          className='btn btn-primary max-w-xs'
          type='submit'
        >
          Salvar
        </button>
      </form>

      <div className='m-3'>
        <img
          className='rounded-full shadow-2xl max-w-xs'
          src={pictureEdit}
          alt='image'
        />
        <h2 className='shadow-lg p-2'>Nome: {nameEdit}</h2>
        <h2 className='shadow-lg p-2'>Email: {emailEdit} </h2>
      </div>
    </section>
  );
};
