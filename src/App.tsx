import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';
import { CustomRoutes } from './routes';
import { BrowserRouter } from 'react-router-dom';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <CustomRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
};
