import { Link, useNavigate } from 'react-router-dom';

import Input from '@/components/forms/Input';
import Button from '@/components/forms/Button';

import { login } from '@/redux/reducers/auth';
import { useAppDispatch } from '@/redux/store';
import { AUTH_ROUTES, MAIN_ROUTES } from '@/constants/routes';

import GoogleIcon from '@/assets/svgs/google.svg';
import classes from './index.module.scss';

function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onLoginWithEmailClick = () => {
    dispatch(login());
    navigate(`/${MAIN_ROUTES.HARMONY}`);
  };

  return (
    <div className={classes.root}>
      <h1>Log In</h1>
      <p>Lorem ipsum dolor sit amet adipiscing elit.</p>
      <div className={classes.form}>
        <Input name="name" label="Name" required />
        <Input
          name="password"
          type="password"
          label="Password"
          isForgot={true}
          forgotUrl=""
          required
        />
        <div className={classes.buttons}>
          <Button
            variant="contained"
            color="secondary"
            onClick={onLoginWithEmailClick}
          >
            Log In
          </Button>
          <Button variant="outlined">
            <img alt="Google Button icon" src={GoogleIcon} />
            Log in with Google
          </Button>
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
