import { TbPhotoUp } from 'react-icons/tb';
import { MdLibraryBooks } from 'react-icons/md';
import { GiCheckMark } from 'react-icons/gi';

import { REQ_INSTRUCTIONS, NOTE_INSTRUCTIONS } from '@/constants/instruction';

import classes from './index.module.scss';

function Instructions() {
  return (
    <div className={classes.root}>
      <div className={classes.requirements}>
        <div className={classes.header}>
          <span>
            <TbPhotoUp />
          </span>
          <p>Photo Requirements</p>
        </div>
        <div className={classes.content}>
          <p className={classes.itemNoTick}>
            Follow the photo instructions carefully.
          </p>
          {REQ_INSTRUCTIONS.map((instruction: string, index: number) => (
            <p key={index}>
              <GiCheckMark />
              {instruction}
            </p>
          ))}
        </div>
      </div>
      <div className={classes.notes}>
        <div className={classes.header}>
          <span>
            <MdLibraryBooks />
          </span>
          <p>Note</p>
        </div>
        <div className={classes.content}>
          {NOTE_INSTRUCTIONS.map((instruction: string, index: number) => (
            <p key={index}>
              <GiCheckMark />
              {instruction}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Instructions;
