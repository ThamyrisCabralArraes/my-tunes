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
    return results;
  };

  const handleChange = ({ target }: any): void => {
    setSearch(target.value);
  };

  const handleClick = async (e: any) => {
    e.preventDefault();
    setAlbumName('Albuns encontrados:');
    const response = await searchAlbumsAPI(search);
    setAlbums(response);
  };

  return (
    <>
      <section className='flex justify-center mt-8 gap-2'>
        <label htmlFor='search'>
          <input
            className='input input-bordered input-primary w-full max-w-xs'
            type='text'
            placeholder='Pesquise seu album/artista'
            name='search'
            id='search'
            value={search}
            onChange={handleChange}
          />
        </label>
        <button
          className='btn btn-primary'
          onClick={handleClick}
        >
          Buscar
        </button>
      </section>
      <br />
      <h1 className='title-album'>{albumName}</h1>
      <div className='albums'>
        {albums.map((album) => (
          <div
            className='album'
            key={album.collectionId}
          >
            <h3 className='album-collection'>{album.collectionName} -</h3>
            <p>{album.artistName}</p>
            <Link
              className='link-to-album'
              to={`/album/${album.collectionId}`}
              data-testid={`link-to-album-${album.collectionId}`}
            >
              {' '}
              click to album
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};
