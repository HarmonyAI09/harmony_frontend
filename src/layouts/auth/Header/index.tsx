import Navbar from '@/layouts/auth/Navbar';
import Logo from '@/components/common/Logo';

import classes from './index.module.scss';

function Header() {
  return (
    <div className={classes.root}>
      <Logo />
      <Navbar />
    </div>
  );
}

export default Header;
