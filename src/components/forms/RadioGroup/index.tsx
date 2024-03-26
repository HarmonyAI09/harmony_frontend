import { createContext, useState } from 'react';
import clsx from 'clsx';

import RadioProvider from '@/components/forms/RadioProvider';

import classes from './index.module.scss';

interface IRadioGroupProps {
  children: React.ReactNode;
  className?: string;
  value: string;
  onChange: (_: string) => void;
}

function RadioGroup({
  children,
  value,
  onChange,
  className = '',
}: IRadioGroupProps) {
  return (
    <RadioProvider value={value} onChange={onChange}>
      <div className={clsx(classes.root, className)}>{children}</div>
    </RadioProvider>
  );
}

export default RadioGroup;
