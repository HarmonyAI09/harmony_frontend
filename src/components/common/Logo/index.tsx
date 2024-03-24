import logoImage from '@/assets/images/logos/white-01.jpg';
import classes from './index.module.scss';

function Logo() {
  return <img alt="Logo" src={logoImage} className={classes.root} />;
}

export default Logo;
