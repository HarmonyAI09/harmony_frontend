import { ChangeEvent, KeyboardEvent, useMemo, useState } from 'react';
import { HiOutlinePencil } from 'react-icons/hi';
import { GiCheckMark } from 'react-icons/gi';
import { FaDownload } from 'react-icons/fa6';
import { enqueueSnackbar } from 'notistack';
import InputMask from 'react-input-mask';
import clsx from 'clsx';

import { SERVER_URI } from '@/config';
import { GENDERS } from '@/constants/gender';
import { ETHNICITIES } from '@/constants/ethnicity';
import { saveProfile, updateDate, updateName } from '@/redux/reducers/profile';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import HttpService from '@/services/HttpService';

import classes from './index.module.scss';

interface IProfile {
  ID: string;
  name: string;
  gender: string;
  race: string;
  date: string;
  mappingPts: any[];
  active?: boolean;
  isSaved?: boolean;
  onClick?: () => void;
}

function Profile({
  ID = '',
  name = '',
  gender = '',
  race = '',
  date = '',
  mappingPts = [],
  active = false,
  isSaved = false,
  onClick = () => {},
}: IProfile) {
  const dispatch = useAppDispatch();
  const userID = useAppSelector(state => state.auth.account?.userID);
  const premiumPlan = useAppSelector(state => state.auth.account?.auth) || 0;
  const analyses = useAppSelector(state => state.analysis.analyses);

  const [nameInput, setNameInput] = useState(name);
  const [isNameEditing, setIsNameEditing] = useState(false);
  const [isDateEditing, setIsDateEditing] = useState(false);
  const [dateInput, setDateInput] = useState(date || '__-__-__');

  const genderName = useMemo(() => {
    const genderItem = GENDERS.find(item => item.value === gender);
    return genderItem?.title || '';
  }, [gender]);

  const raceName = useMemo(() => {
    const raceItem = ETHNICITIES.find(item => item.value === race);
    return raceItem?.title || '';
  }, [race]);

  const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNameInput(e.target.value);
  };

  const onEditingClose = () => {
    dispatch(updateName({ ID, name: nameInput }));
    setIsNameEditing(false);
  };

  const onDateInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const dateStr = e.target.value;
    const sections = dateStr.split('-');
    if (Number(sections[0]) > 12 || Number(sections[1]) > 31) return;
    setDateInput(dateStr);
  };

  const onSaveClick = () => {
    const genderIndex = GENDERS.findIndex(item => item.value === gender);
    const raceIndex = ETHNICITIES.findIndex(item => item.value === race);
    HttpService.post('/profile', {
      id: ID,
      user_id: userID,
      name,
      gender: genderIndex,
      race: raceIndex,
      date,
      points: mappingPts,
    }).then(response => {
      enqueueSnackbar('Profile saved.', { variant: 'success' });
      dispatch(saveProfile({ ID }));
    });
  };

  const onDownClick = (e: any) => {
    e.stopPropagation();
    (async () => {
      const response = await fetch(`${SERVER_URI}/profile/download`, {
        method: 'POST',
        body: JSON.stringify({
          id: userID,
          name,
          gender: genderName,
          race: raceName,
          features: analyses,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const blob = await response.blob();

        let filename = `${name}_${genderName}_${raceName}.xlsx`;

        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();

        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      } else {
        enqueueSnackbar('Download failed.', { variant: 'error' });
      }
    })();
  };

  const onDateChange = () => {
    dispatch(updateDate({ ID, date: dateInput }));
    setIsDateEditing(false);
  };

  return (
    <>
      <div
        className={clsx(classes.root, { [classes.active]: active })}
        onClick={onClick}
      >
        <div className={classes.slide}>
          <img alt="Front image" src={`${SERVER_URI}/img/${ID}/f`} />
        </div>
        <div className={classes.profile}>
          {!isNameEditing ? (
            <p>
              {name}
              <span onClick={() => setIsNameEditing(true)}>
                <HiOutlinePencil />
              </span>
            </p>
          ) : (
            <input
              value={nameInput}
              onBlur={onEditingClose}
              onChange={onNameChange}
              className={classes.nameInput}
              onKeyDown={(e: any) => e.keyCode === 13 && onEditingClose()}
            />
          )}
          <span className={classes.gender}>{genderName}</span>
          <p>{raceName}</p>
          {isDateEditing ? (
            <InputMask
              type="text"
              mask={'99-99-99'}
              placeholder="MM-DD-YY"
              value={dateInput}
              onBlur={onDateChange}
              onChange={onDateInputChange}
              onKeyDown={(e: KeyboardEvent) =>
                e.keyCode === 13 && onDateChange()
              }
            />
          ) : (
            <p>
              {dateInput}
              <span onClick={() => setIsDateEditing(true)}>
                <HiOutlinePencil />
              </span>
            </p>
          )}
          {isSaved ? (
            <span className={classes.badge}>
              <GiCheckMark />
              Saved
            </span>
          ) : (
            <button
              className={classes.saveBtn}
              onClick={onSaveClick}
              disabled={!premiumPlan}
            >
              Save
            </button>
          )}
          {premiumPlan > 0 && (
            <span className={classes.downBtn} onClick={onDownClick}>
              <FaDownload />
            </span>
          )}
        </div>
      </div>
    </>
  );
}

export default Profile;
export type { IProfile };
