import FrontImageSrc from '@/assets/images/templates/front.jpg';
import SideImageSrc from '@/assets/images/templates/side.jpg';
import FrontPlaceholderSrc from '@/assets/images/templates/front_placeholder.jpg';
import SidePlaceholderSrc from '@/assets/images/templates/side_placeholder.jpg';

import classes from './index.module.scss';

function Workspace() {
  return (
    <div className={classes.root}>
      <div className={classes.template}>
        <img src={FrontImageSrc} alt="Front image" />
      </div>
      <div className={classes.template}>
        <img src={SideImageSrc} alt="Side image" />
      </div>
      <div className={classes.template}>
        <img src={FrontPlaceholderSrc} alt="Front placeholder" />
        <div className={classes.buttons}>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={classes.template}>
        <img src={SidePlaceholderSrc} alt="Side placeholder" />
        <div className={classes.buttons}>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default Workspace;
