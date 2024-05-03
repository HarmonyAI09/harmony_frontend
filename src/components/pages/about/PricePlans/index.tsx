import { useLocation, useNavigate } from 'react-router-dom';
import { GrCheckmark } from 'react-icons/gr';
import { motion } from 'framer-motion';

import Button from '@/components/forms/Button';
import HttpService from '@/services/HttpService';
import {
  STRIPE_CHECKOUT_SUCCESS_URL,
  STRIPE_PRO_PRICE_ID,
  STRIPE_PLATINUM_PRICE_ID,
} from '@/config';
import {
  FREE_FEATURES,
  PLATINUM_FEATURES,
  PRO_FEATURES,
} from '@/constants/price';
import { AUTH_ROUTES, MAIN_ROUTES } from '@/constants/routes';
import { useAppSelector } from '@/redux/store';

import classes from './index.module.scss';

interface IPricePlansProps {
  isDialog?: boolean;
}

function PricePlans({ isDialog = false }: IPricePlansProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  const isLogin = useAppSelector(state => state.auth.isLogin);
  const premiumPlan = useAppSelector(state => state.auth.account?.auth) || 0;

  const onStartClick = () => {
    if (!isLogin) {
      navigate(`/${AUTH_ROUTES.ROOT}`);
      return;
    }
    navigate(`/${MAIN_ROUTES.HARMONY}`)
  }

  const onUpgradeClick = (plan: string) => () => {
    if (!isLogin) {
      navigate(`/${AUTH_ROUTES.ROOT}`)
      return;
    }
    HttpService.post(
      '/user/create-checkout-session',
      {},
      {
        url: `${STRIPE_CHECKOUT_SUCCESS_URL}?redirect=${pathname}`,
        price_id:
          plan === 'pro' ? STRIPE_PRO_PRICE_ID : STRIPE_PLATINUM_PRICE_ID,
      }
    ).then(response => {
      const stripeURL = response;
      const link = document.createElement('a');
      link.href = stripeURL;
      link.target = '_blank';

      link.click();
      link.remove();
    });
  };

  return (
    <div className={classes.plans}>
      <motion.div className={classes.free} whileHover={{ scale: 1.02 }}>
        <p className={classes.name}>Free</p>
        <div className={classes.divider} />
        <p className={classes.price}>
          $0<span>/month</span>
        </p>
        <ul>
          {FREE_FEATURES.map((feature: string, index: number) => (
            <li key={index}>
              <GrCheckmark />
              <p>{feature}</p>
            </li>
          ))}
        </ul>
        <Button
          variant="outlined"
          color="secondary"
          className={classes.freeBtn}
          onClick={onStartClick}
          disabled={premiumPlan >= 1}
        >
          Get started for free
        </Button>
      </motion.div>
      <motion.div className={classes.premium} whileHover={{ scale: 1.02 }}>
        <p className={classes.name}>Pro</p>
        <div className={classes.divider} />
        <p className={classes.price}>
          $19
          <span>/month</span>
        </p>
        <ul>
          {PRO_FEATURES.map((feature: string, index: number) => (
            <li key={index}>
              <GrCheckmark />
              <p>{feature}</p>
            </li>
          ))}
        </ul>
        <Button
          variant="contained"
          color="success"
          className={classes.proBtn}
          onClick={onUpgradeClick('pro')}
          disabled={premiumPlan >= 1}
        >
          Upgrade plan
        </Button>
      </motion.div>
      <motion.div className={classes.platinum} whileHover={{ scale: 1.02 }}>
        <p className={classes.name}>Platinum</p>
        <div className={classes.divider} />
        <p className={classes.price}>
          $37
          <span>/month</span>
        </p>
        <ul>
          {PLATINUM_FEATURES.map((feature: string, index: number) => (
            <li key={index}>
              <GrCheckmark />
              <p>{feature}</p>
            </li>
          ))}
        </ul>
        <Button
          variant="contained"
          color="success"
          className={classes.proBtn}
          onClick={onUpgradeClick('platinum')}
          disabled={premiumPlan === 2}
        >
          Upgrade plan
        </Button>
      </motion.div>
    </div>
  );
}

export default PricePlans;
