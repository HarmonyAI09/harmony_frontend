import React, { ComponentProps } from 'react';
import clsx from 'clsx';

import classes from './index.module.scss';

type VariantType = 'contained' | 'outlined' | 'text';
type ColorType = 'primary' | 'secondary' | 'success';

type ButtonProps = ComponentProps<'button'> & {
  children?: React.ReactNode;
  variant?: VariantType;
  color?: ColorType;
  className?: string;
};

function Button({
  children,
  variant = 'contained',
  color = 'primary',
  className = '',
  onClick = () => {},
}: ButtonProps) {
  const variantClassName =
    variant === 'contained'
      ? classes.contained
      : variant === 'outlined'
      ? classes.outlined
      : classes.text;

  const colorClassName =
    color === 'primary'
      ? classes.primary
      : color === 'secondary'
      ? classes.secondary
      : color === 'success'
      ? classes.success
      : '';

  return (
    <button
      onClick={onClick}
      className={clsx(
        classes.root,
        variantClassName,
        colorClassName,
        className
      )}
    >
      {children}
    </button>
  );
}

export default Button;
