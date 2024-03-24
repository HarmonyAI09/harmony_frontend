import { RouteObject, useRoutes } from 'react-router-dom';

import AuthLayout from '@/layouts/auth/Layout';
import Login from '@/pages/auth/Login';
import Register from '@/pages/auth/Register';
import FAQs from '@/pages/auth//FAQs';

import { AUTH_ROUTES, HOME_ROUTES, MAIN_ROUTES } from '@/constants/routes';

const routes: RouteObject[] = [
  {
    path: AUTH_ROUTES.ROOT,
    element: <AuthLayout />,
    children: [
      { path: AUTH_ROUTES.LOGIN, element: <Login /> },
      { path: AUTH_ROUTES.REGISTER, element: <Register /> },
      { path: AUTH_ROUTES.FAQS, element: <FAQs /> },
    ],
  },
  {
    path: HOME_ROUTES.ROOT,
    element: <></>,
    children: [],
  },
  {
    path: MAIN_ROUTES.ROOT,
    element: <></>,
    children: [],
  },
];

export default function Routes() {
  return useRoutes(routes);
}
