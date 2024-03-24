import clsx from 'clsx';

import classes from './index.module.scss';

type VariantType = 'contained' | 'outlined' | 'text';

interface IButtonProps {
  children?: React.ReactNode;
  variant?: VariantType;
  className?: string;
}

function Button({
  children,
  variant = 'contained',
  className = '',
}: IButtonProps) {
  const variantClassName =
    variant === 'contained'
      ? classes.contained
      : variant === 'outlined'
      ? classes.outlined
      : classes.text;

  return (
    <button className={clsx(classes.root, variantClassName, className)}>
      {children}
    </button>
  );
}

export default Button;
