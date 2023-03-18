import { useEffect, useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

export type MusicCardProps = {
  trackName: string;
  previewUrl: string;
  trackId: number;
  savedFavorite?: boolean;
};

export const MusicCard = ({
  trackName,
  previewUrl,
  trackId,
  savedFavorite,
}: MusicCardProps) => {
  const [favorite, setFavorite] = useState(savedFavorite || false);

  useEffect(() => {
    const favoriteSongs = JSON.parse(localStorage.getItem('user') || '[]');
    const newFavoriteSongs = favoriteSongs.filter(
      (item: MusicCardProps) => item.trackId === trackId,
    );
    if (newFavoriteSongs.length > 0) {
      setFavorite(true);
    }
  }, []);

  const saveFavoriteSongs = (music: MusicCardProps) => {
    const favoriteSongs = JSON.parse(localStorage.getItem('user') || '[]');
    favoriteSongs.push(music);
    localStorage.setItem('user', JSON.stringify(favoriteSongs));
    setFavorite(true);
  };

  const removeFavoriteSongs = (music: MusicCardProps) => {
    const favoriteSongs = JSON.parse(localStorage.getItem('user') || '[]');
    const newFavoriteSongs = favoriteSongs.filter(
      (item: MusicCardProps) => item.trackId !== music.trackId,
    );
    localStorage.setItem('user', JSON.stringify(newFavoriteSongs));
    setFavorite(false);
  };

  return (
    <div className='card w-96 bg-base-100 shadow-xl'>
      <div className='card-body'>
        <div className='flex justify-between'>
          <h3 className='font-bold text-neutral'>{trackName}</h3>
          <label htmlFor='favorite'>
            {favorite || savedFavorite ? (
              <AiFillHeart
                name='favorite'
                className='text-2xl text-red-600'
                onClick={() =>
                  removeFavoriteSongs({ trackName, previewUrl, trackId })
                }
              />
            ) : (
              <AiOutlineHeart
                name='favorite'
                className='text-2xl text-red-600'
                onClick={() =>
                  saveFavoriteSongs({ trackName, previewUrl, trackId })
                }
              />
            )}
          </label>
        </div>
        <audio
          className='w-full mt-4'
          src={previewUrl}
          controls
        >
          <track kind='captions' />O seu navegador não suporta o elemento
          <code>audio</code>
        </audio>
      </div>
    </div>
  );
};
