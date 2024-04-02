import { useEffect } from 'react';

import Toolbar from '@/components/pages/harmony/Toolbar';
import Workspace from '@/components/pages/harmony/Workspace';
import { useAppDispatch } from '@/redux/store';
import { initializeSetting } from '@/redux/reducers/setting';

import classes from './index.module.scss';

function Harmony() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initializeSetting());
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Toolbar />
        <div className={classes.workspace}>
          <Workspace />
        </div>
      </div>
    </div>
  );
}

export default Harmony;
