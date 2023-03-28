import { screen, render, fireEvent } from '@testing-library/react';
import App from '../App';
import { Home } from '../components/Home';
import UserProvider from '../context/UserProvider';
import { Header } from '../Header/Header';
import userEvent from '@testing-library/user-event';

import renderWithRouter from './renderWithRouter';

describe('testes do Header', () => {
  it('verificar se a frase aparece do header', () => {
    renderWithRouter(
      <UserProvider>
        <Header />
      </UserProvider>,
      { route: '/' },
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
      { route: '/' },
    );

    const menu = screen.getByRole('navigation');
    expect(menu).toBeInTheDocument();

    const menuHome = screen.getByRole('link', { name: /home/i });
    expect(menu).toBeInTheDocument();
  });

  it('verificar digitar um nome, ele estará no header', () => {
    renderWithRouter(
      <UserProvider>
        <App />
      </UserProvider>,
      { route: '/' },
    );

    const inputDigiteSeuNome = screen.getByTestId('input-login');
    expect(inputDigiteSeuNome).toBeInTheDocument();

    const botaoEntrar = screen.getByRole('button', { name: /entrar/i });
    expect(botaoEntrar).toBeInTheDocument();

    userEvent.click(botaoEntrar);
  });
});
