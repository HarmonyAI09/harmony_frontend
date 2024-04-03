import clsx from 'clsx';
import { motion } from 'framer-motion';

import classes from './index.module.scss';

interface ISwitchProps {
  label?: string;
  checked?: boolean;
  onChange?: (value: boolean) => void;
}

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
};

function Switch({
  checked = false,
  onChange = () => {},
  label = '',
}: ISwitchProps) {
  return (
    <div className={classes.root}>
      <div
        className={clsx(classes.switch, checked ? classes.right : classes.left)}
        onClick={() => onChange(!checked)}
      >
        <motion.div layout className={classes.handle} transition={spring} />
      </div>
      <p>{label}</p>
    </div>
  );
}

export default Switch;
