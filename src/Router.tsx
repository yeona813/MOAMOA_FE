import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from './App';
import { HomePage } from './pages/homePage/HomePage';
import { MemoPage } from './pages/memoPage/MemoPage';
import { RecordPage } from './pages/recordPage/RecordPage';
import { MyPage } from './pages/myPage/MyPage';
import { EditProfilePage } from './pages/editProfile/EditProfilePage';
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
