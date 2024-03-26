import { useState } from 'react';
import { LuUsers2 } from 'react-icons/lu';
import { ImSphere } from 'react-icons/im';
import { TbSettingsSearch } from 'react-icons/tb';

import Button from '@/components/forms/Button';
import Radio from '@/components/forms/Radio';
import RadioGroup from '@/components/forms/RadioGroup';

import classes from './index.module.scss';

function Settings() {
  const [gender, setGender] = useState('');
  const [race, setRace] = useState('');

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
          onChange={setGender}
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
          onChange={setRace}
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
        >
          View Report
        </Button>
      </div>
    </div>
  );
}

export default Settings;
