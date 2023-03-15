import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import UserProvider from './context/UserProvider';
import { Header } from './Header/Header';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <UserProvider>
    <BrowserRouter>
      <Header />
      <App />
    </BrowserRouter>
  </UserProvider>,
);
