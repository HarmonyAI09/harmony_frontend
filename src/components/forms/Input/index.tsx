import { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';

import classes from './index.module.scss';

interface IInputProps {
  type?: string;
  label?: string;
  name: string;
  isForgot?: boolean;
  forgotUrl?: string;
  required?: boolean;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

function Input({
  type = 'text',
  name,
  label = '',
  isForgot = false,
  forgotUrl = '',
  required = false,
  value = '',
  onChange = () => {},
  className = '',
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
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={className}
      />
    </div>
  );
}

export default Input;
