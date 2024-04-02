import { MdClose } from 'react-icons/md';
import clsx from 'clsx';

import classes from './index.module.scss';

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
