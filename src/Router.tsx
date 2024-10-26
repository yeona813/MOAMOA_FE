import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from './App';
import { HomePage } from './pages/homePage/HomePage';
import { MyPage } from './pages/myPage/MyPage';
import { EditProfilePage } from './pages/editProfile/EditProfilePage';

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />,
      },
      {
        path: 'home',
        element: <HomePage />,
      },
      {
        path: 'my',
        element: <MyPage />,
      },
      {
        path: 'editProfile',
        element: <EditProfilePage />,
      },
    ],
  },
]);
