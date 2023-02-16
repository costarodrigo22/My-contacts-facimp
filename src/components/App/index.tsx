import { GlobalStyles } from '../../styles/GlobalStyles';
import { BrowserRouter } from 'react-router-dom';
import { Container } from './styles';

import { Header } from '../Header';
import Routes from '../../routes';

export function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Container>
        <Header />
        <Routes />
      </Container>
    </BrowserRouter>
  );
}
