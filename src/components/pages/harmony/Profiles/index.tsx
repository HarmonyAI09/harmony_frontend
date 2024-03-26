import { FaPlus } from 'react-icons/fa6';

import Profile, { IProfile } from '@/components/pages/harmony/Profile';

import ChristinaAvatar from '@/assets/images/avatars/christina.jpg';
import classes from './index.module.scss';

const dummyProfiles: IProfile[] = [
  {
    name: 'Christina',
    gender: 'Male',
    race: 'Hispanic',
    images: [ChristinaAvatar],
    createdAt: '',
  },
];

function Profiles() {
  return (
    <div className={classes.root}>
      {dummyProfiles.map((profile: IProfile, index: number) => (
        <Profile key={index} {...profile} />
      ))}
      <span className={classes.addButton}>
        <FaPlus />
      </span>
    </div>
  );
}

export default Profiles;
