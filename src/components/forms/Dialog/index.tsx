import { MdClose } from 'react-icons/md';
import { motion } from 'framer-motion';
import clsx from 'clsx';

import classes from './index.module.scss';
import { AnimatePresence } from 'framer-motion';

type MaxWidth = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'screen';

interface IDialogProps {
  open?: Boolean;
  onClose?: () => void;
  header: React.ReactNode;
  body: React.ReactNode;
  maxWidth?: MaxWidth;
  fullHeight?: boolean;
}

function Dialog({
  open = false,
  onClose = () => {},
  header,
  body,
  maxWidth = 'screen',
  fullHeight = true,
}: IDialogProps) {
  const maxWidthClasses =
    maxWidth === 'screen'
      ? classes.screenWidth
      : maxWidth === '3xl'
      ? classes.triXLWidth
      : maxWidth === '2xl'
      ? classes.duoXLWidth
      : maxWidth === 'xl'
      ? classes.xlWidth
      : maxWidth === 'lg'
      ? classes.lgWidth
      : maxWidth === 'md'
      ? classes.mdWidth
      : classes.smWidth;

  const fullHeightClasses = {
    [classes.fullHeight]: fullHeight,
  };

  return (
    <AnimatePresence mode="wait">
      {open && (
        <div className={classes.screen}>
          <motion.div
            className={clsx(classes.root, maxWidthClasses, fullHeightClasses)}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          >
            <div className={classes.header}>
              <div>{header}</div>
              <span className={classes.close} onClick={onClose}>
                <MdClose />
              </span>
            </div>
            <div className={classes.body}>{body}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default Dialog;
