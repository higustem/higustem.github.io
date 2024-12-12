import { RouteObject } from 'react-router-dom';
import { HomePage } from '../pages/Home';
import { Terms } from '../pages/Terms';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/terms',
    element: <Terms />,
  },
  {
    path: '*',
    element: <HomePage />,
  },
];