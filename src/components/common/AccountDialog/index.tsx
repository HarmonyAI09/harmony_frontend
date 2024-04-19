import { ChangeEvent, useEffect, useState } from 'react';
import { enqueueSnackbar } from 'notistack';

import Dialog from '@/components/forms/Dialog';
import Input from '@/components/forms/Input';
import Button from '@/components/forms/Button';
import { IAccount } from '@/redux/reducers/auth';
import { useAppSelector } from '@/redux/store';
import HttpService from '@/services/HttpService';

import userImgSrc from '@/assets/images/navbar/user.png';
import classes from './index.module.scss';

interface IAccountDialogProps {
  open: boolean;
  onClose: () => void;
}

const initialAccount: IAccount = {
  email: '',
  auth: 0,
  username: '',
  firstname: '',
  lastname: '',
};

function AccountDialog({
  open = false,
  onClose = () => {},
}: IAccountDialogProps) {
  const account = useAppSelector(state => state.auth.account);

  const [userAccount, setUserAccount] = useState<IAccount>(initialAccount);
  const [userPass, setUserPass] = useState<{
    password: string;
    confirm: string;
  }>({ password: '', confirm: '' });

  const onAccountChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserAccount({ ...userAccount, [e.target.name]: e.target.value });
  };

  const onPassChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserPass({ ...userPass, [e.target.name]: e.target.value });
  };

  const onAccountClose = () => {
    onClose();
  };

  const onUpdateClick = () => {
    HttpService.post('/user/update', {
      user_id: account?.userID,
      customer_id: account?.customerID,
      username: userAccount.username,
      email: userAccount.email,
      first_name: userAccount.firstname,
      last_name: userAccount.lastname,
      subscription_id: account?.subscribeID,
      credits: account?.credits,
    }).then(response => {
      enqueueSnackbar('Account information updated.', { variant: 'success' });
    });
  };

  const onPassChangeClick = () => {};

  useEffect(() => {
    if (!account) return;
    setUserAccount(account);
  }, [account]);

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
            <div className={classes.controls}>
              <div className={classes.generals}>
                <p>User Information</p>
                <Input
                  type="email"
                  name="email"
                  label="Email"
                  value={userAccount.email}
                  onChange={onAccountChange}
                  className={classes.input}
                />
                <Input
                  type="text"
                  name="username"
                  label="Username"
                  value={userAccount.username}
                  onChange={onAccountChange}
                  className={classes.input}
                />
                <div className={classes.horizon}>
                  <Input
                    type="text"
                    name="firstname"
                    label="Firstname"
                    value={userAccount.firstname}
                    onChange={onAccountChange}
                    className={classes.input}
                  />
                  <Input
                    type="text"
                    name="lastname"
                    label="Lastname"
                    value={userAccount.lastname}
                    onChange={onAccountChange}
                    className={classes.input}
                  />
                </div>
                <Button
                  variant="contained"
                  color="success"
                  className={classes.updateBtn}
                  onClick={onUpdateClick}
                >
                  Update
                </Button>
              </div>
              <div className={classes.security}>
                <p>Security</p>
                <div className={classes.horizon}>
                  <Input
                    type="password"
                    name="password"
                    label="Password"
                    value={userPass.password}
                    onChange={onPassChange}
                    className={classes.input}
                  />
                  <Input
                    type="password"
                    name="confirm"
                    label="Confirm Password"
                    value={userPass.confirm}
                    onChange={onPassChange}
                    className={classes.input}
                  />
                </div>
                <Button
                  variant="contained"
                  color="success"
                  className={classes.changeBtn}
                  onClick={onPassChangeClick}
                >
                  Change
                </Button>
              </div>
            </div>
          </div>
        }
        maxWidth="md"
        fullHeight={false}
      />
    )
  );
}

export default AccountDialog;
