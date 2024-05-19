import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import { AUTH_NAV_ITEMS, MAIN_NAV_ITEMS } from '@/constants/navigation';
import { useAppSelector } from '@/redux/store';
import { INavItem } from '@/interfaces/navigation';

import classes from './index.module.scss';

function Navbar() {
  const location = useLocation();
  const pathname = location.pathname;

  const isLogin = useAppSelector(state => state.auth.isLogin);

  const navItems = useMemo(
    () => (isLogin ? MAIN_NAV_ITEMS : AUTH_NAV_ITEMS),
    [isLogin]
  );

  return (
    <ul className={classes.root}>
      {navItems.map((item: INavItem, index: number) => (
        <li
          key={index}
          className={clsx({
            [classes.activeItem]: pathname === item.path,
          })}
        >
          <Link to={item.path}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export default Navbar;
