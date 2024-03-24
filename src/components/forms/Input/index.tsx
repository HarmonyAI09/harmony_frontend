import { useState } from 'react';
import { Link } from 'react-router-dom';

import classes from './index.module.scss';

interface IInputProps {
  type?: string;
  label?: string;
  name: string;
  isForgot?: boolean;
  forgotUrl?: string;
  required?: boolean;
}

function Input({
  type = 'text',
  name,
  label = '',
  isForgot = false,
  forgotUrl = '',
  required = false,
}: IInputProps) {
  const [isDirty, setIsDirty] = useState(false);

  return (
    <div className={classes.root}>
      <div className={classes.label}>
        {label && (
          <label>
            {label}
            {required && '*'}
          </label>
        )}
        {isForgot && <Link to={forgotUrl}>Forgot your password?</Link>}
      </div>
      <input type={type} name={name} />
    </div>
  );
}

export default Input;
