import { useState } from 'react';
import { Link } from 'react-router-dom';

type SearchProps = {
  artistId: number;
  artistName: string;
  collectionId: number;
  collectionName: string;
  collectionPrice: number;
  artworkUrl100: string;
  releaseDate: string;
  trackCount: number;
};

export const Search = () => {
  const [search, setSearch] = useState<string>('');
  const [albums, setAlbums] = useState<SearchProps[]>([]);
  const [albumName, setAlbumName] = useState<string>('');

  const searchAlbumsAPI = async (artist: any) => {
    const artistNameURL = encodeURI(artist).replaceAll('%20', '+');

    const getAlbumsAPI = `https://itunes.apple.com/search?entity=album&term=${artistNameURL}&attribute=allArtistTerm`;

    const APIResponse = await fetch(getAlbumsAPI);

    const { results } = await APIResponse.json();
    console.log(results);
    return results;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleClick = async () => {
    setAlbumName('Albuns encontrados:');
    const response = await searchAlbumsAPI(search);
    setAlbums(response);
  };

  console.log(albums);
  return (
    <>
      <section className='flex justify-center mt-8 gap-2'>
        <label htmlFor='search'>
          <input
            className='input input-bordered input-primary w-full max-w-xs'
            type='text'
            data-testid='input-pesquisa'
            placeholder='Pesquise seu album/artista'
            name='search'
            id='search'
            value={search}
            onChange={handleChange}
          />
        </label>
        <button
          className='btn btn-primary'
          type='button'
          onClick={handleClick}
        >
          Buscar
        </button>
      </section>
      <br />
      <div className='flex flex-wrap gap-2 justify-center'>
        {albums.map((album) => (
          <div
            className='card w-96 bg-base-100 shadow-xl image-full'
            key={album.collectionId}
          >
            <figure>
              <img
                className='w-full'
                src={album.artworkUrl100}
                alt='album'
              />
            </figure>
            <div className='card-body'>
              <h3 className='card-title'>{album.collectionName}</h3>
              <p>{album.artistName}</p>
              <Link
                className='btn btn-primary'
                to={`/album/${album.collectionId}`}
                data-testid={`link-to-album-${album.collectionId}`}
              >
                {' '}
                Go to album
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
