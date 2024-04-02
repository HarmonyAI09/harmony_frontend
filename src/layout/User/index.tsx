import { useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import { STRIPE_PUBLISH_KEY } from '@/config';
import AccountDialog from '@/components/common/AccountDialog';
import BillingDialog from '@/components/common/BillingDialog';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { unauthorize } from '@/redux/reducers/auth';

import userImgSrc from '@/assets/images/navbar/user.png';
import classes from './index.module.scss';

const stripePromise = loadStripe(STRIPE_PUBLISH_KEY);

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
    <div className={classes.root}>
      <div
        className={classes.avatar}
        onClick={() => setIsDropdown(!isDropdown)}
      >
        <img src={userImgSrc} alt="User icon" />
        <p>{username}</p>
      </div>
      {isDropdown && (
        <ul className={classes.dropdown} onClick={() => setIsDropdown(false)}>
          <li onClick={() => openAccountDialog(true)}>Account</li>
          <li onClick={() => openBillingDialog(true)}>Billing</li>
          <li onClick={onLogoutClick}>Logout</li>
        </ul>
      )}
      {isAccountDialog && (
        <AccountDialog open={true} onClose={() => openAccountDialog(false)} />
      )}
      {isBillingDialog && (
        <Elements stripe={stripePromise}>
          <BillingDialog open={true} onClose={() => openBillingDialog(false)} />
        </Elements>
      )}
    </div>
  );
}

export default User;
