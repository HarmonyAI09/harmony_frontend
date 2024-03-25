import { Outlet, useLocation } from 'react-router-dom';
import clsx from 'clsx';

import Header from '@/layout/Header';
import Footer from '@/layout/Footer';
import { AUTH_ROUTES } from '@/constants/routes';

import classes from './index.module.scss';

function PublicLayout() {
  const location = useLocation();
  const pathname = location.pathname;

  const isAuthPage = [
    `/${AUTH_ROUTES.ROOT}/${AUTH_ROUTES.LOGIN}`,
    `/${AUTH_ROUTES.ROOT}/${AUTH_ROUTES.REGISTER}`,
  ].includes(pathname);

  return (
    <div className={clsx(classes.root, { [classes.authLayout]: isAuthPage })}>
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

export default PublicLayout;
