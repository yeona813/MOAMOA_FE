import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import { theme } from './styles/theme';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <div>
          <h1>Styled Components with Global Theme</h1>
        </div>
      </>
    </ThemeProvider>
  );
};