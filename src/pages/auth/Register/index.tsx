import { Link } from 'react-router-dom';

import Input from '@/components/forms/Input';
import Button from '@/components/forms/Button';

import { AUTH_ROUTES } from '@/constants/routes';

import GoogleIcon from '@/assets/svgs/google.svg';
import classes from './index.module.scss';

function Register() {
  return (
    <div className={classes.root}>
      <h1>Sign Up</h1>
      <p>Lorem ipsum dolor sit amet adipiscing elit.</p>
      <div className={classes.form}>
        <Input name="name" label="Name" required />
        <Input name="email" label="Email" required />
        <Input name="password" type="password" label="Password" required />
        <div className={classes.buttons}>
          <Button variant="contained" color="secondary">
            Sign Up
          </Button>
          <Button variant="contained" color="white">
            <img alt="Google Button icon" src={GoogleIcon} />
            Sign Up with Google
          </Button>
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
