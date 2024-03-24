import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaYoutube,
} from 'react-icons/fa6';

import Logo from '@/components/common/Logo';

import classes from './index.module.scss';

function Footer() {
  return (
    <div className={classes.root}>
      <div className={classes.primary}>
        <Logo />
        <div className={classes.links}>
          <Link to="">
            <FaFacebookF />
          </Link>
          <Link to="">
            <FaInstagram />
          </Link>
          <Link to="">
            <FaXTwitter />
          </Link>
          <Link to="">
            <FaLinkedin />
          </Link>
          <Link to="">
            <FaYoutube />
          </Link>
        </div>
      </div>
      <div className={classes.divider} />
      <div className={classes.secondary}>
        <p className={classes.reversed}>
          &copy; 2024 Relume. All rights reserved.
        </p>
        <div className={classes.links}>
          <Link to="">Privacy Policy</Link>
          <Link to="">Terms of Service</Link>
          <Link to="">Cookies Settings</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
