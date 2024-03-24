import { Link } from 'react-router-dom';

import Input from '@/components/forms/Input';
import Button from '@/components/forms/Button';

import { AUTH_ROUTES } from '@/constants/routes';

import GoogleIcon from '@/assets/svgs/google.svg';
import classes from './index.module.scss';

function Login() {
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
        <Button variant="contained">Log In</Button>
        <Button variant="outlined">
          <img alt="Google Button icon" src={GoogleIcon} />
          Log in with Google
        </Button>
      </div>
      <p className={classes.signupLink}>
        Don't you have an account?
        <Link to={`/${AUTH_ROUTES.ROOT}/${AUTH_ROUTES.REGISTER}`}>Sign up</Link>
      </p>
    </div>
  );
}

export default Login;
