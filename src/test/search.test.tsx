import {
  screen,
  render,
  fireEvent,
  waitFor,
  getByText,
} from '@testing-library/react';
import App from '../App';
import { Home } from '../components/Home';
import UserProvider from '../context/UserProvider';
import { Header } from '../Header/Header';
import userEvent from '@testing-library/user-event';

import renderWithRouter from './renderWithRouter';
import { Search } from '../components/Search';
import { vi } from 'vitest';

describe('testes do Header', () => {
  it('verificar se a frase aparece do header', () => {
    renderWithRouter(
      <UserProvider>
        <Header />
      </UserProvider>,
      { route: '/', path: '/' },
    );

    const fraseMyTunes = screen.getByRole('heading', { name: /my tunes/i });
    expect(fraseMyTunes).toBeInTheDocument();

    const fraseBemvindo = screen.getByRole('heading', {
      name: /bem vindo\(a\)/i,
    });
    expect(fraseBemvindo).toBeInTheDocument();
  });

  it('verificar se o menu', () => {
    renderWithRouter(
      <UserProvider>
        <Header />
      </UserProvider>,
      { route: '/', path: '/' },
    );

    const menu = screen.getByRole('navigation');
    expect(menu).toBeInTheDocument();

    const menuHome = screen.getByRole('link', { name: /home/i });
    expect(menuHome).toBeInTheDocument();
  });

  it('verificar digitar um nome e apertar no botao vai para pagina search', async () => {
    renderWithRouter(
      <UserProvider>
        <App />
      </UserProvider>,
      { route: '/', path: '/' },
    );

    const inputDigiteSeuNome = screen.getByTestId('input-login');
    expect(inputDigiteSeuNome).toBeInTheDocument();

    const botaoEntrar = screen.getByRole('button', { name: /entrar/i });
    expect(botaoEntrar).toBeInTheDocument();

    userEvent.type(inputDigiteSeuNome, 'teste');
    userEvent.click(botaoEntrar);

    const btnBuscar = await screen.findByRole('button', { name: /buscar/i });
    expect(btnBuscar).toBeInTheDocument();
  });

  it('verificar digitar um nome e apertar no botao vai para pagina search', async () => {
    renderWithRouter(
      <UserProvider>
        <Search />
      </UserProvider>,
      { route: '/search', path: '/search' },
    );

    const inputPesquisa = screen.getByTestId('input-pesquisa');
    expect(inputPesquisa).toBeInTheDocument();
    const btnBuscar = screen.getByRole('button', { name: /buscar/i });
    expect(btnBuscar).toBeInTheDocument();

    userEvent.type(inputPesquisa, 'coldplay');

    userEvent.click(btnBuscar);

    global.fetch = vi.fn().mockResolvedValue({
      json: vi.fn().mockResolvedValue({
        results: [
          {
            collectionId: '7h3oGtrOfxc' as string,
            collectionName: 200 as number,
            artworkUrl100:
              'https://is1-ssl.mzstatic.com/image/thumb/Features125/v4/60/90/ad/6090adc3-8863-861d-afcc-23c55c6fe5da/dj.vmtulfyu.jpg' as string,
          },
        ],
      }),
    });

    const containarDasMusicas = await screen.findAllByText(/Go to album/i);
    expect(containarDasMusicas[0]).toBeInTheDocument();
  });
});
