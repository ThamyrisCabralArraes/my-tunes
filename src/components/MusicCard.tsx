import { useState } from 'react';
import './css/musicCard.css';

type MusicCardProps = {
  key: number;
  trackName: string;
  previewUrl: string;
  trackId: number;
  artworkUrl100: string;
};

export const MusicCard = ({
  key,
  trackName,
  previewUrl,
  trackId,
  artworkUrl100,
}: MusicCardProps) => {
  const [favorite, setFavorite] = useState(false);

  const handleChange = () => {
    setFavorite(!favorite);
  };

  return (
    <div className='musics-list'>
      <label
        className='label-favorita'
        htmlFor='favorite'
      >
        Favorita
        <input
          type='checkbox'
          name='favorite'
          checked={favorite}
          onChange={handleChange}
          data-testid={`checkbox-music-${trackId}`}
        />
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
