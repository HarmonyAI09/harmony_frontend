import { useState } from 'react';

import Tab from '@/components/forms/Tab';
import TabList from '@/components/forms/TabList';
import TabPanel from '@/components/forms/TabPanel';
import TabProvider from '@/components/forms/TabProvider';
import Settings from '@/components/pages/harmony/Settings';
import Profiles from '@/components/pages/harmony/Profiles';
import Instructions from '@/components/pages/harmony/Instructions';

import classes from './index.module.scss';

function Toolbar() {
  const [activePanel, setActivePanel] = useState('settings');

  return (
    <div className={classes.root}>
      <TabProvider value={activePanel} onChange={setActivePanel}>
        <TabList className={classes.tabList}>
          <Tab label="Settings" value="settings" />
          <Tab label="Profiles" value="profiles" />
          <Tab label="Requirements" value="instructions" />
        </TabList>
        <TabPanel value="settings" className={classes.tabPanel}>
          <Settings />
        </TabPanel>
        <TabPanel value="profiles" className={classes.tabPanel}>
          <Profiles />
        </TabPanel>
        <TabPanel value="instructions" className={classes.tabPanel}>
          <Instructions />
        </TabPanel>
      </TabProvider>
    </div>
  );
}

export default Toolbar;
