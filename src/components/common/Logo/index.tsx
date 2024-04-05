import logoImage from '@/assets/svgs/Logo-01.svg';
import classes from './index.module.scss';

function Logo() {
  return <img alt="Logo" src={logoImage} className={classes.root} />;
}

export default Logo;
