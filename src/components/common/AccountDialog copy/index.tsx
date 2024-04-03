import Dialog from '@/components/forms/Dialog';

import userImgSrc from '@/assets/images/navbar/user.png';
import classes from './index.module.scss';

interface IAccountDialogProps {
  open: boolean;
  onClose: () => void;
}

function AccountDialog({
  open = false,
  onClose = () => {},
}: IAccountDialogProps) {
  const onAccountClose = () => {};

  return (
    open && (
      <Dialog
        open={true}
        onClose={onAccountClose}
        header={<p className={classes.header}>Account</p>}
        body={
          <div className={classes.account}>
            <div className={classes.avatar}>
              <img src={userImgSrc} alt="User avatar" />
            </div>
            <div></div>
          </div>
        }
      />
    )
  );
}

export default AccountDialog;
