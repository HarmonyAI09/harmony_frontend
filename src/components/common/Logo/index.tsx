import logoImage from '@/assets/images/logos/Logo-01.png';
import classes from './index.module.scss';

function Logo() {
  return <img alt="Logo" src={logoImage} className={classes.root} />;
}

export default Logo;
