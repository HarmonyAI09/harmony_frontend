import { MdClose } from 'react-icons/md';
import { AnimatePresence, motion } from 'framer-motion';
import clsx from 'clsx';

import classes from './index.module.scss';

type MaxWidth = 'self' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'screen';

interface IDialogProps {
  open?: Boolean;
  onClose?: () => void;
  header: React.ReactNode;
  body: React.ReactNode;
  maxWidth?: MaxWidth;
  fullHeight?: boolean;
  animate?: boolean;
}

function Dialog({
  open = false,
  onClose = () => {},
  header,
  body,
  maxWidth = 'self',
  fullHeight = true,
  animate = true,
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
      : maxWidth === 'sm'
      ? classes.smWidth
      : classes.selfWidth;

  const fullHeightClasses = {
    [classes.fullHeight]: fullHeight,
  };

  return animate ? (
    <AnimatePresence mode="wait">
      {open && (
        <div className={classes.screen}>
          <motion.div
            className={clsx(classes.root, maxWidthClasses, fullHeightClasses)}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{
              duration: 0.3,
              type: 'spring',
              stiffness: 300,
              damping: 24,
            }}
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
  ) : (
    open && (
      <div className={classes.screen}>
        <div className={clsx(classes.root, maxWidthClasses, fullHeightClasses)}>
          <div className={classes.header}>
            <div>{header}</div>
            <span className={classes.close} onClick={onClose}>
              <MdClose />
            </span>
          </div>
          <div className={classes.body}>{body}</div>
        </div>
      </div>
    )
  );
}

export default Dialog;
