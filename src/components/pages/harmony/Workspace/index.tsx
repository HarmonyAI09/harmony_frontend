import ImageUploader from '@/components/pages/harmony/ImageUploader';
import { useAppSelector } from '@/redux/store';

import frontImgSrc from '@/assets/images/templates/front_male.jpg';
import sideImgSrc from '@/assets/images/templates/side.jpg';

import classes from './index.module.scss';

function Workspace() {
  const gender = useAppSelector(state => state.setting.gender);

  return (
    <div className={classes.root}>
      <div className={classes.template}>
        <img src={frontImgSrc} alt="Front image" />
      </div>
      <div className={classes.template}>
        <img src={sideImgSrc} alt="Side image" />
      </div>

      <ImageUploader type="front" />
      <ImageUploader type="side" />
    </div>
  );
}

export default Workspace;
