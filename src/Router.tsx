import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from './App';
import { HomePage } from './pages/homePage/HomePage';

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to='/home' replace />
      },
      {
        path: 'home',
        element: <HomePage />
      }
    ]
  }
]);
