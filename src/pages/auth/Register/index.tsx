import { ChangeEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { enqueueSnackbar } from 'notistack';

import Input from '@/components/forms/Input';
import Button from '@/components/forms/Button';
import { AUTH_ROUTES } from '@/constants/routes';
import HttpService from '@/services/HttpService';

import GoogleIcon from '@/assets/svgs/google.svg';
import classes from './index.module.scss';

interface IAccount {
  name: string;
  email: string;
  password: string;
}

const initialAccount: IAccount = {
  name: '',
  email: '',
  password: '',
};

function Register() {
  const navigate = useNavigate();
  const [account, setAccount] = useState<IAccount>(initialAccount);

  const onAccountChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
  };

  const onSubmitWithEmail = () => {
    HttpService.post('/user/create', {
      username: account.name,
      email: account.email,
      password: account.password,
    }).then(response => {
      enqueueSnackbar('Account registered.', { variant: 'success' });
      navigate(`/${AUTH_ROUTES.ROOT}/${AUTH_ROUTES.LOGIN}`, { replace: true });
    });
  };

  return (
    <div className={classes.root}>
      <h1>Sign Up</h1>
      <div className={classes.form}>
        <Input
          name="name"
          label="Name"
          required={true}
          value={account.name}
          onChange={onAccountChange}
        />
        <Input
          name="email"
          label="Email"
          required={true}
          value={account.email}
          onChange={onAccountChange}
        />
        <Input
          name="password"
          type="password"
          label="Password"
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
            Sign Up
          </Button>
          {/* <Button variant="contained" color="white">
            <img alt="Google Button icon" src={GoogleIcon} />
            Sign Up with Google
          </Button> */}
        </div>
      </div>
      <p className={classes.signupLink}>
        Already have an account?
        <Link to={`/${AUTH_ROUTES.ROOT}/${AUTH_ROUTES.LOGIN}`}>Log In</Link>
      </p>
    </div>
  );
}

export default Register;
