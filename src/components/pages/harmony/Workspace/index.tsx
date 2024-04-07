import ImageUploader from '@/components/pages/harmony/ImageUploader';
import { useAppSelector } from '@/redux/store';

import frontMaleImgSrc from '@/assets/images/templates/front_male.jpg';
import frontFemaleMaleImgSrc from '@/assets/images/templates/front_female.jpg';
import sideMaleImgSrc from '@/assets/images/templates/side_male.jpg';
import sideFemaleImgSrc from '@/assets/images/templates/side_female.jpg';

import classes from './index.module.scss';

function Workspace() {
  const gender = useAppSelector(state => state.setting.gender);

  return (
    <div className={classes.root}>
      <div className={classes.template}>
        <img
          src={gender === 'male' ? frontMaleImgSrc : frontFemaleMaleImgSrc}
          alt="Front image"
        />
      </div>
      <div className={classes.template}>
        <img
          src={gender === 'male' ? sideMaleImgSrc : sideFemaleImgSrc}
          alt="Side image"
        />
      </div>

      <ImageUploader type="front" />
      <ImageUploader type="side" />
    </div>
  );
}

export default Workspace;
