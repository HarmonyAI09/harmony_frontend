import { useState } from 'react';

import { ASSESSMENTS } from '@/constants/analysis';
import Dialog from '@/components/forms/Dialog';
import Table, { IColumn } from '@/components/forms/Table';
import TabPanel from '@/components/forms/TabPanel';
import TabProvider from '@/components/forms/TabProvider';
import { useAppSelector } from '@/redux/store';

import classes from './index.module.scss';

const calcScorePos = (alias: string, score: number): number => {
  const analysis = (ASSESSMENTS as any)[alias];
  const scores = (analysis.scores as number[]) || [];
  if (!analysis || scores.length < 2) return 0;
  return Math.floor(
    ((score - scores.slice(-1)[0]) / (scores[0] - scores.slice(-1)[0])) * 100
  );
};

interface IReportDialogProps {
  open: boolean;
  onClose: () => void;
}

function ReportDialog({ open, onClose }: IReportDialogProps) {
  const [activePanel, setActivePanel] = useState('front');
  const analysis = useAppSelector(state => state.analysis);
  const columns: IColumn[] = [
    {
      title: 'Image',
      key: 'image',
      row: (row: any) => <img alt="Analysis image" src={row.image} />,
    },
    {
      title: 'Measurement Name',
      key: 'name',
      clamp: true,
    },
    {
      title: 'Value',
      key: 'value',
    },
    {
      title: 'Score',
      key: 'score',
      row: (row: any) => (
        <div className={classes.scoreCell}>
          <span style={{ left: `${calcScorePos(row.alias, row.score)}%` }}>
            {row.score}
          </span>
          <div className={classes.colorbar}>
            <span style={{ left: `${calcScorePos(row.alias, row.score)}%` }} />
          </div>
          <div className={classes.minmax}>
            <span>{(ASSESSMENTS as any)[row.alias].scores.slice(-1)[0]}</span>
            <span>{(ASSESSMENTS as any)[row.alias].scores[0]}</span>
          </div>
        </div>
      ),
    },
    {
      title: 'Ideal Range',
      key: 'range',
    },
    { title: 'Meaning', key: 'meaning', basis: 300 },
    {
      title: 'Advice',
      key: 'advice',
      scroll: true,
      basis: 500,
    },
  ];

  return (
    <Dialog
      open={open}
      onClose={onClose}
      header={
        <div className={classes.header}>
          <p>{analysis.totalScore}% Facial Harmony</p>
          <div className={classes.badges}>
            <span>{analysis.frontData.subScore}% front score</span>
            {analysis.sideData && (
              <span>{analysis.sideData.subScore}% Side Score</span>
            )}
          </div>
        </div>
      }
      body={
        <div className={classes.content}>
          <TabProvider value={activePanel} onChange={setActivePanel}>
            <TabPanel value="front">
              <Table columns={columns} rows={analysis.frontData.analyses} />
            </TabPanel>
            {analysis.sideData && <TabPanel value="side"></TabPanel>}
          </TabProvider>
        </div>
      }
    />
  );
}

export default ReportDialog;
