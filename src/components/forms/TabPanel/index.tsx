import { useContext } from 'react';
import clsx from 'clsx';

import { TabContext } from '../TabProvider';

import classes from './index.module.scss';

interface ITabPanelProps {
  children?: React.ReactNode;
  value: string;
  className?: string;
}

function TabPanel({ value, children, className = '' }: ITabPanelProps) {
  const context = useContext(TabContext);
  return (
    <div
      className={clsx(
        classes.root,
        {
          [classes.visible]: value === context.value,
        },
        className
      )}
    >
      {children}
    </div>
  );
}

export default TabPanel;
