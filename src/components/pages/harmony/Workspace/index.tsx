import ImageUploader from '@/components/pages/harmony/ImageUploader';

import frontFemaleMaleImgSrc from '@/assets/images/templates/front_female.jpg';
import sideFemaleImgSrc from '@/assets/images/templates/side_female.jpg';

import classes from './index.module.scss';

function Workspace() {
  return (
    <div className={classes.root}>
      <div className={classes.template}>
        <img src={frontFemaleMaleImgSrc} alt="Front image" />
      </div>
      <div className={classes.template}>
        <img src={sideFemaleImgSrc} alt="Side image" />
      </div>

      <ImageUploader type="front" />
      <ImageUploader type="side" />
    </div>
  );
}

export default Workspace;
