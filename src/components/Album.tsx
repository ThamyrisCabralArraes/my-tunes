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
    <section className='flex flex-col justify-center items-center gap-2 mt-8'>
      {musics.map((music: any) => (
        <MusicCard
          key={music.trackId}
          trackName={music.trackName}
          previewUrl={music.previewUrl}
          trackId={music.trackId}
        />
      ))}
    </section>
  );
};
