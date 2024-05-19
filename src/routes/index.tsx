import { useEffect, useMemo, useState, lazy } from 'react';
import { Navigate, Outlet, RouteObject, useRoutes } from 'react-router-dom';

import LoadingSpinner from '@/components/common/LoadingSpinner';
import { ALL_ROUTES, AUTH_ROUTES, MAIN_ROUTES, PUBLIC_ROUTES } from '@/constants/routes';

import { authorize, loadAccount } from '@/redux/reducers/auth';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import HttpService from '@/services/HttpService';

const Layout = lazy(() => import('@/layout/Layout'));
const About = lazy(() => import('@/pages/main/About'));
const FAQs = lazy(() => import('@/pages/main/FAQs'));
const Login = lazy(() => import('@/pages/auth/Login'));
const Register = lazy(() => import('@/pages/auth/Register'));
const Harmony = lazy(() => import('@/pages/main/Harmony'));
const Idealize = lazy(() => import('@/pages/main/Idealize'));
const Checkout = lazy(() => import('@/pages/main/Checkout'));

const authRoutes: RouteObject[] = [
  {
    path: AUTH_ROUTES.ROOT,
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <Navigate to={AUTH_ROUTES.LOGIN} />
      },
      {
        path: AUTH_ROUTES.LOGIN,
        element: <Login />,
      },
      {
        path: AUTH_ROUTES.REGISTER,
        element: <Register />,
      },
    ],
  },
];

const mainRoutes: RouteObject[] = [
  {
    path: MAIN_ROUTES.FAQS,
    element: <FAQs />,
  },
  {
    path: MAIN_ROUTES.HARMONY,
    element: <Harmony />,
  },
  {
    path: MAIN_ROUTES.IDEALIZE,
    element: <Idealize />
  },
  {
    path: MAIN_ROUTES.CHECKOUT,
    element: <Checkout />,
  },
];

export default function Routes() {
  const dispatch = useAppDispatch();
  const isLogin = useAppSelector(state => state.auth.isLogin);
  const isLoading = useAppSelector(state => state.loader.isLoading);

  const [isInAuth, setIsInAuth] = useState(true);

  const routes: RouteObject[] = useMemo(
    () => [
      {
        path: ALL_ROUTES.ROOT,
        element: <Layout />,
        children: [
          ...(isLogin ? mainRoutes : authRoutes),
          {
            path: PUBLIC_ROUTES.ABOUT,
            element: <About />
          },
          {
            path: ALL_ROUTES.ROOT,
            element: (
              <Navigate to={PUBLIC_ROUTES.ABOUT} />
            ),
          },
        ],
      },
    ],
    [isLogin]
  );
  const appRoutes = useRoutes(routes);

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) {
      HttpService.post('/auth/', {})
        .then(response => {
          dispatch(authorize());
          dispatch(loadAccount(response));
        })
        .finally(() => {
          setIsInAuth(false);
        });
    } else {
      setIsInAuth(false);
    }
  }, []);

  return (
    <>
      {!isInAuth && appRoutes}
      {isLoading && <LoadingSpinner />}
    </>
  );
}
