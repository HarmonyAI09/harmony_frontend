import { useEffect, useMemo, useState } from 'react';
import { enqueueSnackbar } from 'notistack';
import { FaPlus } from 'react-icons/fa6';

import Button from '@/components/forms/Button';
import Dialog from '@/components/forms/Dialog';
import Profile, { IProfile } from '@/components/pages/harmony/Profile';
import { useAppSelector } from '@/redux/store';
import { useAppDispatch } from '@/redux/store';
import { loadSetting, resetSetting } from '@/redux/reducers/setting';
import { createProfile, loadProfiles } from '@/redux/reducers/profile';
import HttpService from '@/services/HttpService';

import classes from './index.module.scss';

function Profiles() {
  const dispatch = useAppDispatch();
  const userID = useAppSelector(state => state.auth.account?.userID);
  const premiumPlan = useAppSelector(state => state.auth.account?.auth) || 0;
  const profileID = useAppSelector(state => state.setting.profileID);
  const setting = useAppSelector(state => state.setting);
  const profiles = useAppSelector(state => state.profile.profiles);

  const [isConfirmDialog, openConfirmDialog] = useState(false);
  const [switchingID, setSwitchingID] = useState('');

  const isCurrentNotSaved = useMemo(() => {
    const item = profiles.find(item => item.ID === profileID);
    return !item || !item.isSaved;
  }, [profileID, profiles]);

  const isCurrentSettingEmpty = () => {
    return (
      !setting.race &&
      !setting.gender &&
      !setting.mappingPoints.front.length &&
      !setting.mappingPoints.side.length
    );
  };

  const switchProfile = (id: string) => {
    const profile = profiles.find(item => item.ID === id);
    if (profile) {
      dispatch(
        loadSetting({
          ID: profile.ID,
          name: profile.name,
          gender: profile.gender,
          race: profile.race,
          points: profile.mappingPts,
        })
      );
      enqueueSnackbar('Profile switched.', { variant: 'success' });
    } else {
      dispatch(resetSetting());
    }
  };

  const onProfileSwitch = (profile: IProfile) => () => {
    if (profile.ID === profileID) return;

    if (!isCurrentSettingEmpty()) {
      openConfirmDialog(true);
      setSwitchingID(profile.ID);
    } else {
      switchProfile(profile.ID);
    }
  };

  const onProfileCreate = () => {
    if (!isCurrentSettingEmpty()) {
      openConfirmDialog(true);
      setSwitchingID('');
    } else {
      switchProfile('');
    }
  };

  const onDiscardClick = () => {
    switchProfile(switchingID);
    openConfirmDialog(false);
  };

  const onSaveClick = () => {
    if (isCurrentNotSaved) {
      dispatch(
        createProfile({
          ID: profileID,
          race: setting.race,
          gender: setting.gender,
          mappingPts: [
            ...setting.mappingPoints.front,
            ...setting.mappingPoints.side,
          ],
        })
      );
      switchProfile(switchingID);
    } else {
      // Put Request
      switchProfile(switchingID);
    }
    openConfirmDialog(false);
  };

  useEffect(() => {
    if (!profiles.length) {
      HttpService.get(`/profile/${userID}`).then(response => {
        dispatch(loadProfiles(response));
      });
    }
  }, []);

  return (
    <>
      <div className={classes.root}>
        {!premiumPlan && (
          <p className={classes.tip}>To save a profile, upgrade to Pro.</p>
        )}
        {profiles.map((profile: IProfile, index: number) => (
          <Profile
            key={index}
            {...profile}
            active={profileID === profile.ID}
            onClick={onProfileSwitch(profile)}
          />
        ))}
        <span className={classes.addButton} onClick={onProfileCreate}>
          <FaPlus />
        </span>
      </div>
      <Dialog
        open={isConfirmDialog}
        onClose={() => openConfirmDialog(false)}
        header={<p className={classes.header}>Profile Switch</p>}
        body={
          <div className={classes.confirm}>
            <p>
              {isCurrentNotSaved
                ? 'Do you want to save changes to Untitled?'
                : 'Do you want to apply changes of current profile?'}
            </p>
            <div className={classes.buttons}>
              <Button
                variant="outlined"
                color="primary"
                className={classes.discard}
                onClick={onDiscardClick}
              >
                Discard
              </Button>
              <Button
                variant="contained"
                color="success"
                className={classes.save}
                onClick={onSaveClick}
              >
                Save
              </Button>
            </div>
          </div>
        }
        maxWidth="sm"
        fullHeight={false}
      />
    </>
  );
}

export default Profiles;
