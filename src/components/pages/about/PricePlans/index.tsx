import { useLocation, useNavigate } from 'react-router-dom';
import { GrCheckmark } from 'react-icons/gr';
import { motion } from 'framer-motion';

import Button from '@/components/forms/Button';
import HttpService from '@/services/HttpService';
import { STRIPE_CHECKOUT_SUCCESS_URL, STRIPE_PRICE_ID } from '@/config';
import {
  FREE_FEATURES,
  PLATINUM_FEATURES,
  PRO_FEATURES,
} from '@/constants/price';
import { MAIN_ROUTES } from '@/constants/routes';
import { useAppSelector } from '@/redux/store';

import classes from './index.module.scss';

interface IPricePlansProps {
  isDialog?: boolean;
}

function PricePlans({ isDialog = false }: IPricePlansProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  const subscribeID = useAppSelector(state => state.auth.account?.subscribeID);

  const onUpgradeClick = () => {
    HttpService.post(
      '/user/create-checkout-session',
      {},
      {
        url: `${STRIPE_CHECKOUT_SUCCESS_URL}?redirect=${pathname}`,
        price_id: STRIPE_PRICE_ID,
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
          onClick={() => navigate(`/${MAIN_ROUTES.HARMONY}`)}
          disabled={isDialog && !subscribeID}
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
          onClick={onUpgradeClick}
          disabled={!!subscribeID}
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
          onClick={onUpgradeClick}
          disabled={!!subscribeID}
        >
          Upgrade plan
        </Button>
      </motion.div>
    </div>
  );
}

export default PricePlans;
