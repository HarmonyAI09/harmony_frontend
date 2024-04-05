import classes from './index.module.scss';

function LoadingSpinner() {
  return (
    <div className={classes.screen}>
      <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <circle
          className={classes.spin}
          cx="200"
          cy="200"
          fill="none"
          r="100"
          stroke-width="25"
          stroke="#E387FF"
          stroke-dasharray="700 1400"
          stroke-linecap="round"
        />
      </svg>
    </div>
  );
}

export default LoadingSpinner;
