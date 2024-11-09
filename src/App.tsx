// import { useEffect } from 'react';
// import { useLocation, useNavigate };
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import { theme } from './styles/theme';

export const App = () => {
  // const navigate = useNavigate();
  // const location = useLocation();

  // useEffect(() => {
  //   const accessToken = localStorage.getItem('accessToken');
  //   const unprotectedPaths = ['/oauth', '/login', '/register', '/login-success'];

  //   if (!accessToken && !unprotectedPaths.includes(location.pathname)) {
  //     navigate('/oauth');
  //   }
  // }, [location, navigate]);

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Outlet />
      </>
    </ThemeProvider>
  );
};

export default App;
