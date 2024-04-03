import Dialog from '@/components/forms/Dialog';

import classes from './index.module.scss';

interface IImageDialogProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  text?: string;
  imageUrl?: string;
}

function ImageDialog({
  open,
  onClose,
  title = '',
  text = '',
  imageUrl = '',
}: IImageDialogProps) {
  return (
    open && (
      <Dialog
        open={true}
        onClose={onClose}
        header={<p className={classes.header}>{title}</p>}
        body={
          <div className={classes.image}>
            <img src={imageUrl} alt="Image url" />
            <div>
              <p>{text}</p>
            </div>
          </div>
        }
        maxWidth="sm"
        fullHeight={false}
      />
    )
  );
}

export default ImageDialog;
