import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import { AUTH_ROUTES } from '@/constants/routes';

import classes from './index.module.scss';

interface INavItem {
  title: string;
  path: string;
}

const navItems: INavItem[] = [
  {
    title: 'FAQs',
    path: AUTH_ROUTES.FAQS,
  },
  {
    title: 'Log In',
    path: AUTH_ROUTES.LOGIN,
  },
  {
    title: 'Sign Up',
    path: AUTH_ROUTES.REGISTER,
  },
];

function Navbar() {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <ul className={classes.root}>
      {navItems.map((item: INavItem, index: number) => (
        <li
          key={index}
          className={clsx({
            [classes.activeItem]:
              pathname === `/${AUTH_ROUTES.ROOT}/${item.path}`,
          })}
        >
          <Link to={`/${AUTH_ROUTES.ROOT}/${item.path}`}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export default Navbar;
