import { useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    value === context.value && (
      <AnimatePresence mode="wait">
        <motion.div
          className={clsx(classes.root, className)}
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    )
  );
}

export default TabPanel;
