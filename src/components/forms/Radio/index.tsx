import { useContext } from 'react';
import clsx from 'clsx';

import { RadioContext } from '@/components/forms/RadioProvider';

import classes from './index.module.scss';

interface IRadioProps {
  label: string;
  value: string;
}

function Radio({ label, value }: IRadioProps) {
  const context = useContext(RadioContext);
  return (
    <div className={classes.root} onClick={() => context.onChange(value)}>
      <span
        className={clsx(classes.radial, {
          [classes.active]: value === context.value,
        })}
      />
      {label && <label>{label}</label>}
    </div>
  );
}

export default Radio;
