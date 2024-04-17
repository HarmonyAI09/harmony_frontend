import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  // FaFacebookF,
  FaInstagram,
  FaLinkedin,
  // FaXTwitter,
  FaReddit,
  FaYoutube,
  FaTiktok,
} from 'react-icons/fa6';

import Logo from '@/components/common/Logo';

import classes from './index.module.scss';
import PrivatePolicyDialog from '@/components/common/PrivatePolicyDialog';
import TermsOfServiceDialog from '@/components/common/TermsOfServiceDialog';

function Footer() {
  const [isPrivatePolicyOpen, openPrivatePolicyDialog] = useState(false);
  const [isTermsOfServiceOpen, openTermsOfServiceDialog] = useState(false);

  return (
    <div className={classes.root}>
      <div className={classes.primary}>
        <Logo />
        <div className={classes.links}>
          <Link to="https://www.linkedin.com/company/harmonyapp-ai/about/?viewAsMember=true">
            <FaLinkedin />
          </Link>
          <Link to="https://www.instagram.com/creatingattractive">
            <FaInstagram />
          </Link>
          <Link to="https://www.tiktok.com/@creatingattractive">
            <FaTiktok />
          </Link>
          <Link to="https://www.reddit.com/user/creatingattractive">
            <FaReddit />
          </Link>
          <Link to="https://www.youtube.com/@creatingattractive">
            <FaYoutube />
          </Link>
        </div>
      </div>
      <div className={classes.divider} />
      <div className={classes.secondary}>
        <p className={classes.reserved}>&copy; 2024 All rights reserved.</p>
        <div className={classes.links}>
          <Link to="#" onClick={() => openPrivatePolicyDialog(true)}>
            Privacy Policy
          </Link>
          <Link to="#" onClick={() => openTermsOfServiceDialog(true)}>
            Terms of Service
          </Link>
          <Link to="#">Cookies Settings</Link>
        </div>
      </div>
      <PrivatePolicyDialog
        open={isPrivatePolicyOpen}
        onClose={() => openPrivatePolicyDialog(false)}
      />
      <TermsOfServiceDialog
        open={isTermsOfServiceOpen}
        onClose={() => openTermsOfServiceDialog(false)}
      />
    </div>
  );
}

export default Footer;
