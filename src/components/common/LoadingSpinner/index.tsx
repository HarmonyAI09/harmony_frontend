import clsx from 'clsx';

import classes from './index.module.scss';

interface ILoadingSpinerProps {
  isPageLoading?: boolean;
}

function LoadingSpinner({ isPageLoading = false }: ILoadingSpinerProps) {
  return (
    <div className={clsx(classes.screen, { [classes.page]: isPageLoading })}>
      <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <circle
          className={classes.spin}
          cx="200"
          cy="200"
          fill="none"
          r="100"
          strokeWidth="25"
          stroke="#E387FF"
          strokeDasharray="700 1400"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export default LoadingSpinner;
