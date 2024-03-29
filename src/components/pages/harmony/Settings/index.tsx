import { useMemo, useState } from 'react';
import { LuUsers2 } from 'react-icons/lu';
import { ImSphere } from 'react-icons/im';
import { TbSettingsSearch } from 'react-icons/tb';

import Button from '@/components/forms/Button';
import Radio from '@/components/forms/Radio';
import RadioGroup from '@/components/forms/RadioGroup';
import ReportDialog from '@/components/pages/harmony/ReportDialog';

import { useAppDispatch, useAppSelector } from '@/redux/store';
import { updateRace, updateGender } from '@/redux/reducers/setting';

import classes from './index.module.scss';

function Settings() {
  const dispatch = useAppDispatch();
  const gender = useAppSelector(state => state.settting.gender);
  const race = useAppSelector(state => state.settting.race);
  const mappingPoints = useAppSelector(state => state.settting.mappingPoints);
  const [isReportDialog, openReportDialog] = useState(false);

  const isAbleToReport = useMemo(() => {
    return !!gender && !!race && mappingPoints.front.length > 0;
  }, [gender, race, mappingPoints]);

  const onViewReportClick = () => {
    openReportDialog(true);
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
          <Radio label="Male" value="male" />
          <Radio label="Female" value="female" />
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
          <Radio label="Caucasian" value="caucasian" />
          <Radio label="African" value="african" />
          <Radio label="East Asian" value="east-asian" />
          <Radio label="South Asian" value="south-asian" />
          <Radio label="Hispanic" value="hispanic" />
          <Radio label="Middle Eastern" value="middle-eastern" />
          <Radio label="Other" value="other" />
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
