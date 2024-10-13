import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from './pages/homePage/HomePage';

export const Router = createBrowserRouter([{ path: '/', element: <HomePage /> }]);
