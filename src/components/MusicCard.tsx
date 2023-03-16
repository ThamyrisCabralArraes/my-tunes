import { useEffect, useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import './css/musicCard.css';

type MusicCardProps = {
  trackName: string;
  previewUrl: string;
  trackId: number;
};

export const MusicCard = ({
  trackName,
  previewUrl,
  trackId,
}: MusicCardProps) => {
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    const music = { trackName, previewUrl, trackId };
    if (favorite) {
      saveFavoriteSongs(music);
    } else {
      removeFavoriteSongs(music);
    }
  }, [favorite]);

  const handleChange = () => {
    setFavorite(!favorite);
  };

  const saveFavoriteSongs = (music: MusicCardProps) => {
    const favoriteSongs = JSON.parse(localStorage.getItem('user') || '[]');
    favoriteSongs.push(music);
    localStorage.setItem('user', JSON.stringify(favoriteSongs));
  };

  const removeFavoriteSongs = (music: MusicCardProps) => {
    const favoriteSongs = JSON.parse(localStorage.getItem('user') || '[]');
    const newFavoriteSongs = favoriteSongs.filter(
      (item: MusicCardProps) => item.trackId !== music.trackId,
    );
    localStorage.setItem('user', JSON.stringify(newFavoriteSongs));
  };

  return (
    <div className='musics-list'>
      <label
        className='label-favorita'
        htmlFor='favorite'
      >
        {favorite ? (
          <AiFillHeart
            name='favorite'
            className='icon-favorite'
            onClick={handleChange}
          />
        ) : (
          <AiOutlineHeart
            name='favorite'
            className='icon-favorite'
            onClick={handleChange}
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
