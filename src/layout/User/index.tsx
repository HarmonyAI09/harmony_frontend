import { useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { motion, Variants } from 'framer-motion';

import AccountDialog from '@/components/common/AccountDialog';
import BillingDialog from '@/components/common/BillingDialog';
import { STRIPE_PUBLISH_KEY } from '@/config';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { unauthorize } from '@/redux/reducers/auth';

import userImgSrc from '@/assets/images/navbar/user.png';
import classes from './index.module.scss';

const stripePromise = loadStripe(STRIPE_PUBLISH_KEY);

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

function User() {
  const dispatch = useAppDispatch();
  const username = useAppSelector(state => state.auth.account?.username);
  const [isDropdown, setIsDropdown] = useState(false);
  const [isAccountDialog, openAccountDialog] = useState(false);
  const [isBillingDialog, openBillingDialog] = useState(false);

  const onLogoutClick = () => {
    dispatch(unauthorize());
  };

  return (
    <motion.div
      className={classes.root}
      initial={false}
      animate={isDropdown ? 'open' : 'closed'}
    >
      <div
        className={classes.avatar}
        onClick={() => setIsDropdown(!isDropdown)}
      >
        <img src={userImgSrc} alt="User icon" />
        <p>{username}</p>
      </div>
      <motion.ul
        className={classes.dropdown}
        onClick={() => setIsDropdown(false)}
        variants={{
          open: {
            clipPath: 'inset(0% 0% 0% 0% round 0px)',
            transition: {
              type: 'spring',
              duration: 0.3,
              bounce: 0,
              delayChildren: 0.1,
              staggerChildren: 0.05,
            },
          },
          closed: {
            clipPath: 'inset(10% 50% 90% 10% round 0px)',
            transition: {
              type: 'spring',
              bounce: 0,
              duration: 0.3,
            },
          },
        }}
        style={{ pointerEvents: isDropdown ? 'auto' : 'none' }}
      >
        <motion.li
          variants={itemVariants}
          onClick={() => openAccountDialog(true)}
        >
          Account
        </motion.li>
        <motion.li
          variants={itemVariants}
          onClick={() => openBillingDialog(true)}
        >
          Billing
        </motion.li>
        <motion.li variants={itemVariants} onClick={onLogoutClick}>
          Logout
        </motion.li>
      </motion.ul>
      {isAccountDialog && (
        <AccountDialog open={true} onClose={() => openAccountDialog(false)} />
      )}
      {isBillingDialog && (
        <Elements stripe={stripePromise}>
          <BillingDialog open={true} onClose={() => openBillingDialog(false)} />
        </Elements>
      )}
    </motion.div>
  );
}

export default User;
