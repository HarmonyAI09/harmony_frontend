import { useContext } from 'react';
import clsx from 'clsx';

import { TabContext } from '@/components/forms/TabProvider';

import classes from './index.module.scss';

interface ITabProps {
  label: string;
  value: string;
}

function Tab({ label, value }: ITabProps) {
  const context = useContext(TabContext);

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: value === context.value,
      })}
      onClick={() => context.onChange(value)}
    >
      {label}
    </div>
  );
}

export default Tab;
