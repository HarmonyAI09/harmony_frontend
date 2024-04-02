import { useEffect } from 'react';
import { FaPlus } from 'react-icons/fa6';

import Profile, { IProfile } from '@/components/pages/harmony/Profile';
import { useAppSelector } from '@/redux/store';
import { useAppDispatch } from '@/redux/store';
import { loadSetting, resetSetting } from '@/redux/reducers/setting';
import { loadProfiles } from '@/redux/reducers/profile';
import HttpService from '@/services/HttpService';

import classes from './index.module.scss';

function Profiles() {
  const dispatch = useAppDispatch();
  const userID = useAppSelector(state => state.auth.account?.userID);
  const profileID = useAppSelector(state => state.setting.profileID);
  const profiles = useAppSelector(state => state.profile.profiles);

  useEffect(() => {
    if (!profiles.length) {
      HttpService.get(`/profile/${userID}`).then(response => {
        dispatch(loadProfiles(response));
      });
    }
  }, []);

  return (
    <div className={classes.root}>
      {profiles.map((profile: IProfile, index: number) => (
        <Profile
          key={index}
          {...profile}
          active={profileID === profile.ID}
          onClick={() =>
            dispatch(
              loadSetting({
                ID: profile.ID,
                name: profile.name,
                gender: profile.gender,
                race: profile.race,
                points: profile.mappingPts,
              })
            )
          }
        />
      ))}
      <span
        className={classes.addButton}
        onClick={() => dispatch(resetSetting())}
      >
        <FaPlus />
      </span>
    </div>
  );
}

export default Profiles;
