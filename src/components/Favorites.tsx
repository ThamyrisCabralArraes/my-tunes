import { useEffect, useState } from 'react';
import { MusicCard, MusicCardProps } from './MusicCard';

export const Favorites = () => {
  const [favoriteSongs, setFavoriteSongs] = useState<MusicCardProps[]>([]);

  useEffect(() => {
    const favoriteSongs = JSON.parse(localStorage.getItem('user') || '[]');
    setFavoriteSongs(favoriteSongs);
  }, []);

  return (
    <section className='flex flex-col justify-center items-center gap-2 mt-8'>
      {favoriteSongs.map((music: any) => (
        <MusicCard
          key={music.trackId}
          trackName={music.trackName}
          previewUrl={music.previewUrl}
          trackId={music.trackId}
          savedFavorite={music.savedFavorite}
        />
      ))}
    </section>
  );
};
