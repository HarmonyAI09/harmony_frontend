import { useNavigate } from 'react-router-dom';
import { GrCheckmark } from 'react-icons/gr';

import Button from '@/components/forms/Button';
import { FREE_FEATURES, PRO_FEATURES } from '@/constants/price';
import { MAIN_ROUTES } from '@/constants/routes';

import classes from './index.module.scss';

interface IPricePlansProps {
  isDialog?: boolean;
}

function PricePlans({ isDialog = false }: IPricePlansProps) {
  const navigate = useNavigate();

  return (
    <div className={classes.plans}>
      <div className={classes.free}>
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
        >
          Get started for free
        </Button>
      </div>
      <div className={classes.premium}>
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
        <Button variant="contained" color="success" className={classes.proBtn}>
          Upgrade plan
        </Button>
      </div>
    </div>
  );
}

export default PricePlans;
