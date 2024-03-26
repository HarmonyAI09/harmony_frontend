import Toolbar from '@/components/pages/harmony/Toolbar';
import Workspace from '@/components/pages/harmony/Workspace';

import classes from './index.module.scss';

function Harmony() {
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
