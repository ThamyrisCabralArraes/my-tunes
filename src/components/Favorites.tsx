import { useEffect, useState } from 'react';
import { MusicCard, MusicCardProps } from './MusicCard';

export const Favorites = () => {
  const [favoriteSongs, setFavoriteSongs] = useState<MusicCardProps[]>([]);

  useEffect(() => {
    const favoriteSongs = JSON.parse(localStorage.getItem('user') || '[]');
    setFavoriteSongs(favoriteSongs);
  }, []);

  return (
    <div>
      {favoriteSongs.map((music: any) => (
        <div key={music.trackId}>
          <MusicCard
            key={music.trackId}
            trackName={music.trackName}
            previewUrl={music.previewUrl}
            trackId={music.trackId}
            savedFavorite={music.savedFavorite}
          />
        </div>
      ))}
    </div>
  );
};
