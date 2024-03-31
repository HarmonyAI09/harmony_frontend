import { useMemo, useState } from 'react';
import { LuUsers2 } from 'react-icons/lu';
import { ImSphere } from 'react-icons/im';
import { TbSettingsSearch } from 'react-icons/tb';

import { GENDERS } from '@/constants/gender';
import { ETHNICITIES } from '@/constants/ethnicity';
import Button from '@/components/forms/Button';
import Radio from '@/components/forms/Radio';
import RadioGroup from '@/components/forms/RadioGroup';
import ReportDialog from '@/components/pages/harmony/ReportDialog';

import { useAppDispatch, useAppSelector } from '@/redux/store';
import { updateRace, updateGender } from '@/redux/reducers/setting';
import { loadFeatures } from '@/redux/reducers/analysis';
import HttpService from '@/services/HttpService';

import classes from './index.module.scss';

function Settings() {
  const dispatch = useAppDispatch();
  const profileID = useAppSelector(state => state.setting.profileID);
  const gender = useAppSelector(state => state.setting.gender);
  const race = useAppSelector(state => state.setting.race);
  const mappingPoints = useAppSelector(state => state.setting.mappingPoints);
  const [isReportDialog, openReportDialog] = useState(false);

  const isAbleToReport = useMemo(() => {
    return (
      !!gender &&
      !!race &&
      mappingPoints.front.length > 0 &&
      mappingPoints.side.length > 0
    );
  }, [gender, race, mappingPoints]);

  const onViewReportClick = () => {
    const genderIndex = GENDERS.findIndex(item => item.value === gender);
    const raceIndex = ETHNICITIES.findIndex(item => item.value === race);
    const points = [...mappingPoints.front, ...mappingPoints.side];
    HttpService.post('/feat', {
      gender: genderIndex,
      race: raceIndex,
      points,
    }).then(response => {
      const { values, lines } = response;
      dispatch(loadFeatures({ ID: profileID, features: values }));
      HttpService.post('/img/generate', {
        id: profileID,
        lines,
        points,
      }).then(response => {
        openReportDialog(true);
      });
    });
  };

  return (
    <div className={classes.root}>
      <div className={classes.gender}>
        <div className={classes.header}>
          <span>
            <LuUsers2 />
          </span>
          <p>Gender</p>
        </div>
        <RadioGroup
          value={gender}
          onChange={(value: string) => dispatch(updateGender(value))}
          className={classes.radioGroup}
        >
          {GENDERS.map((gender: any, index: number) => (
            <Radio key={index} label={gender.title} value={gender.value} />
          ))}
        </RadioGroup>
      </div>
      <div className={classes.divider} />
      <div className={classes.ethnicity}>
        <div className={classes.header}>
          <span>
            <ImSphere className={classes.sphere} />
          </span>
          <p>
            Ethnicity<span>/</span>Race
          </p>
        </div>
        <RadioGroup
          value={race}
          onChange={(value: string) => dispatch(updateRace(value))}
          className={classes.radioGroup}
        >
          {ETHNICITIES.map((ethnicity: any, index: number) => (
            <Radio
              key={index}
              label={ethnicity.title}
              value={ethnicity.value}
            />
          ))}
        </RadioGroup>
      </div>
      <div className={classes.divider} />
      <div className={classes.analyze}>
        <div className={classes.header}>
          <span>
            <TbSettingsSearch />
          </span>
          <p>Analyze</p>
        </div>
        <Button
          variant="contained"
          color="success"
          className={classes.radioGroup}
          disabled={!isAbleToReport}
          onClick={onViewReportClick}
        >
          View Report
        </Button>
      </div>
      <ReportDialog
        open={isReportDialog}
        onClose={() => openReportDialog(false)}
      />
    </div>
  );
}

export default Settings;
