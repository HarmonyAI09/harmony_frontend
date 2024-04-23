import { useRef } from 'react';
import { MdClose } from 'react-icons/md';
import { AnimatePresence, motion } from 'framer-motion';
import { useOnClickOutside } from 'usehooks-ts';
import clsx from 'clsx';

import classes from './index.module.scss';
import { useAppSelector } from '@/redux/store';

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
  const isLoading = useAppSelector(state => state.loader.isLoading);
  const dialogRef = useRef<HTMLDivElement>(null);

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

  const onDialogCloseClick = (e: MouseEvent | FocusEvent | TouchEvent) => {
    if (!isLoading) onClose();
  };

  useOnClickOutside(dialogRef, onDialogCloseClick, 'mousedown');

  return animate ? (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          className={classes.screen}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            delayChildren: 0.3,
          }}
        >
          <motion.div
            className={clsx(classes.root, maxWidthClasses, fullHeightClasses)}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.3 }}
            transition={{
              type: 'spring',
              bounce: 0,
              duration: 0.5,
            }}
            ref={dialogRef}
          >
            <div className={classes.header}>
              <div>{header}</div>
              <span className={classes.close} onClick={onClose}>
                <MdClose />
              </span>
            </div>
            <div className={classes.body}>{body}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  ) : (
    open && (
      <div className={classes.screen}>
        <div
          className={clsx(classes.root, maxWidthClasses, fullHeightClasses)}
          ref={dialogRef}
        >
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
