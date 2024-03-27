import ImageUploader from '@/components/pages/harmony/ImageUploader';

import FrontImageSrc from '@/assets/images/templates/front.jpg';
import SideImageSrc from '@/assets/images/templates/side.jpg';

import classes from './index.module.scss';

function Workspace() {
  // const [isUploadDialog, openUploadDialog] = useState(false);
  return (
    <div className={classes.root}>
      <div className={classes.template}>
        <img src={FrontImageSrc} alt="Front image" />
      </div>
      <div className={classes.template}>
        <img src={SideImageSrc} alt="Side image" />
      </div>

      <ImageUploader type="front" />
      <ImageUploader type="side" />
      {/* <Dialog
        open={isUploadDialog}
        onClose={() => openUploadDialog(false)}
        header={<></>}
        body={}
      /> */}
    </div>
  );
}

export default Workspace;
