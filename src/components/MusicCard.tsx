import { useEffect, useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import './css/musicCard.css';

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
    <div className='musics-list'>
      <label
        className='label-favorita'
        htmlFor='favorite'
      >
        {favorite || savedFavorite ? (
          <AiFillHeart
            name='favorite'
            className='icon-favorite'
            onClick={() =>
              removeFavoriteSongs({ trackName, previewUrl, trackId })
            }
          />
        ) : (
          <AiOutlineHeart
            name='favorite'
            className='icon-favorite'
            onClick={() =>
              saveFavoriteSongs({ trackName, previewUrl, trackId })
            }
          />
        )}
      </label>
      <h3 className='music-item'>{trackName}</h3>
      <audio
        data-testid='audio-component'
        src={previewUrl}
        controls
      >
        <track kind='captions' />O seu navegador não suporta o elemento
        <code>audio</code>
      </audio>
    </div>
  );
};
