import { Outlet, useLocation } from 'react-router-dom';
import clsx from 'clsx';

import { AUTH_ROUTES, MAIN_ROUTES } from '@/constants/routes';
import Header from '@/layout/Header';
import Footer from '@/layout/Footer';

import classes from './index.module.scss';

function Layout() {
  const location = useLocation();
  const pathname = location.pathname;

  const isAuthPage = [
    `/${AUTH_ROUTES.ROOT}/${AUTH_ROUTES.LOGIN}`,
    `/${AUTH_ROUTES.ROOT}/${AUTH_ROUTES.REGISTER}`,
  ].includes(pathname);

  const isMainPage = pathname === `/${MAIN_ROUTES.HARMONY}`;

  return (
    <div
      className={clsx(
        classes.root,
        { [classes.authLayout]: isAuthPage },
        { [classes.mainLayout]: isMainPage }
      )}
    >
      <Header />
      <div className={classes.content}>
        <div className={classes.outlet}>
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
