import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from './App';
import { HomePage } from './pages/homePage/HomePage';
import { MemoPage } from './pages/memoPage/MemoPage';
import { RecordPage } from './pages/recordPage/RecordPage';

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
    ],
  },
]);
