import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from './App';
import { HomePage } from './pages/homePage/HomePage';
import { MemoPage } from './pages/memoPage/MemoPage';
import { RecordPage } from './pages/recordPage/RecordPage';
import { MyPage } from './pages/myPage/MyPage';
import { EditProfilePage } from './pages/editProfile/EditProfilePage';
import { OauthPage } from './pages/oauthPage/OauthPage';
import { SignUpPage } from './pages/registerPage/SignUpPage';
import { LoginSuccessPage } from './pages/loginSuccessPage/LoginSuccessPage';
import { SigningIn } from './pages/loginPage/SigningIn';
import { ListPage } from './pages/listPage/ListPage';
import { FolderPage } from './pages/folderPage/FolderPage';

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
        path: 'memo',
        element: <MemoPage />,
      },
      {
        path: 'record',
        element: <RecordPage />,
      },
      {
        path: 'my',
        element: <MyPage />,
      },
      {
        path: 'editProfile',
        element: <EditProfilePage />,
      },
      {
        path: 'oauth',
        element: <OauthPage />,
      },
      {
        path: 'login',
        element: <SigningIn />,
      },
      {
        path: 'register',
        element: <SignUpPage />,
      },
      {
        path: 'login-success',
        element: <LoginSuccessPage />,
      },
      {
        path: 'list',
        element: <ListPage />,
      },
      {
        path: 'folder',
        element: <FolderPage />,
      },
    ],
  },
]);
