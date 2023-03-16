import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MusicCard } from './MusicCard';

export const Album = () => {
  const [musics, setMusics] = useState<any>([]);
  let { id } = useParams();

  const getMusics = async (id: any) => {
    const request = await fetch(
      `https://itunes.apple.com/lookup?id=${id}&entity=song`,
    );
    const requestJson = await request.json();
    return requestJson.results;
  };

  useEffect(() => {
    const fetchMusics = async () => {
      const response = await getMusics(id);
      const filterMusic = response.slice(1);
      console.log(filterMusic);
      setMusics(filterMusic);
    };
    fetchMusics();
  }, []);

  return (
    <div>
      {musics.map((music: any) => (
        <div key={music.trackId}>
          <MusicCard
            key={music.trackId}
            trackName={music.trackName}
            previewUrl={music.previewUrl}
            trackId={music.trackId}
            artworkUrl100={music.artworkUrl100}
          />
        </div>
      ))}
    </div>
  );
};
