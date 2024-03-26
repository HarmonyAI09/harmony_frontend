import clsx from 'clsx';
import classes from './index.module.scss';

interface ITabListProps {
  children?: React.ReactNode;
  className?: string;
}

function TabList({ children, className = '' }: ITabListProps) {
  return <div className={clsx(classes.root, className)}>{children}</div>;
}

export default TabList;
