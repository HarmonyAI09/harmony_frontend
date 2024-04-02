import Logo from '@/components/common/Logo';
import Navbar from '@/layout/Navbar';
import User from '@/layout/User';
import { useAppSelector } from '@/redux/store';

import classes from './index.module.scss';

function Header() {
  const isLogin = useAppSelector(state => state.auth.isLogin);

  return (
    <div className={classes.root}>
      <Logo />
      <div className={classes.function}>
        <Navbar />
        {isLogin && <User />}
      </div>
    </div>
  );
}

export default Header;
