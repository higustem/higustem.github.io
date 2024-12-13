import { RouteObject } from 'react-router-dom';
import { HomePage } from '../pages/Home';
import { Terms } from '../pages/Terms';
import { SignUpPage } from '../pages/SignUp';
import { RequestSuccessPage } from '../pages/RequestSuccess';

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
    path: '/signup',
    element: <SignUpPage />,
  },
  {
    path: '/request-success',
    element: <RequestSuccessPage />,
  },
  {
    path: '*',
    element: <HomePage />,
  },
];