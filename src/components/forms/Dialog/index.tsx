import { MdClose } from 'react-icons/md';

import clsx from 'clsx';

import classes from './index.module.scss';

interface IDialogProps {
  open?: Boolean;
  onClose?: () => void;
  header: React.ReactNode;
  body: React.ReactNode;
}

function Dialog({
  open = false,
  onClose = () => {},
  header,
  body,
}: IDialogProps) {
  return (
    <div className={clsx(classes.screen, { [classes.visible]: open })}>
      <div className={classes.root}>
        <div className={classes.header}>
          <div>{header}</div>
          <span className={classes.close} onClick={onClose}>
            <MdClose />
          </span>
        </div>
        <div className={classes.body}>{body}</div>
      </div>
    </div>
  );
}

export default Dialog;
