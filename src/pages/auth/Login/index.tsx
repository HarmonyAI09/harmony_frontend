import { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { enqueueSnackbar } from 'notistack';

import Input from '@/components/forms/Input';
import Button from '@/components/forms/Button';

import { AUTH_ROUTES, MAIN_ROUTES } from '@/constants/routes';
import { authorize, loadAccount } from '@/redux/reducers/auth';
import { useAppDispatch } from '@/redux/store';
import HttpService from '@/services/HttpService';
import { setupToken } from '@/utils/token';

import GoogleIcon from '@/assets/svgs/google.svg';
import classes from './index.module.scss';

interface IAccount {
  email: string;
  password: string;
}

const initialAccount: IAccount = {
  email: '',
  password: '',
};

function Login() {
  const dispatch = useAppDispatch();

  const [account, setAccount] = useState<IAccount>(initialAccount);

  const onAccountChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
  };

  const onSubmitWithEmail = () => {
    const reqJson = new FormData();
    reqJson.append('username', account.email);
    reqJson.append('password', account.password);
    HttpService.post('/auth/login', reqJson).then(response => {
      const { access_token, refresh_token } = response;
      setupToken(access_token, refresh_token);
      HttpService.post('/auth/', {}).then(response => {
        dispatch(authorize());
        dispatch(loadAccount(response));
        enqueueSnackbar('Login success.', { variant: 'success' });
      });
    });
  };

  return (
    <div className={classes.root}>
      <h1>Log In</h1>
      <div className={classes.form}>
        <Input
          name="email"
          type="email"
          label="Email"
          required={true}
          value={account.email}
          onChange={onAccountChange}
        />
        <Input
          name="password"
          type="password"
          label="Password"
          isForgot={true}
          forgotUrl=""
          required={true}
          value={account.password}
          onChange={onAccountChange}
        />
        <div className={classes.buttons}>
          <Button
            variant="contained"
            color="secondary"
            onClick={onSubmitWithEmail}
          >
            Log In
          </Button>
          {/* <Button variant="contained" color="white">
            <img alt="Google Button icon" src={GoogleIcon} />
            Log in with Google
          </Button> */}
        </div>
      </div>
      <p className={classes.signupLink}>
        Don't you have an account?
        <Link to={`/${AUTH_ROUTES.ROOT}/${AUTH_ROUTES.REGISTER}`}>Sign up</Link>
      </p>
    </div>
  );
}

export default Login;
