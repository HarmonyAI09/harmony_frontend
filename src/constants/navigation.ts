import { AUTH_ROUTES, MAIN_ROUTES } from '@/constants/routes';
import { INavItem } from '@/interfaces/navigation';

export const AUTH_NAV_ITEMS: INavItem[] = [
  {
    title: 'Log In',
    path: `/${AUTH_ROUTES.ROOT}/${AUTH_ROUTES.LOGIN}`,
  },
  {
    title: 'Sign Up',
    path: `/${AUTH_ROUTES.ROOT}/${AUTH_ROUTES.REGISTER}`,
  },
];

export const MAIN_NAV_ITEMS: INavItem[] = [
  {
    title: 'About',
    path: `/${MAIN_ROUTES.ABOUT}`,
  },
  {
    title: 'FAQs',
    path: `/${MAIN_ROUTES.FAQS}`,
  },
  {
    title: 'Harmony',
    path: `/${MAIN_ROUTES.HARMONY}`,
  },
];
