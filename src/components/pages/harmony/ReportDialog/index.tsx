import { useEffect } from 'react';

import { ASSESSMENTS } from '@/constants/analysis';
import { GENDERS } from '@/constants/gender';
import { ETHNICITIES } from '@/constants/ethnicity';
import Dialog from '@/components/forms/Dialog';
import Table, { IColumn } from '@/components/forms/Table';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { createProfile } from '@/redux/reducers/profile';
import { loadFeatures } from '@/redux/reducers/analysis';
import HttpService from '@/services/HttpService';

import classes from './index.module.scss';

const getCursorStyle = (alias: string, score: number): object => {
  const analysis = (ASSESSMENTS as any)[alias];
  const scores = (analysis.scores as number[]) || [];
  let percent = 0;
  if (!analysis || scores.length < 2) percent = 0.0;
  percent = Math.floor(
    ((score - scores.slice(-1)[0]) / (scores[0] - scores.slice(-1)[0])) * 100
  );
  return percent < 50
    ? { left: `${percent}%` }
    : { right: `${100 - percent}%` };
};

interface IReportDialogProps {
  open: boolean;
  onClose: () => void;
}

function ReportDialog({ open, onClose }: IReportDialogProps) {
  const dispatch = useAppDispatch();
  const analysis = useAppSelector(state => state.analysis);
  const setting = useAppSelector(state => state.setting);

  const columns: IColumn[] = [
    {
      title: 'Image',
      key: 'image',
      basis: 100,
      row: (row: any) => (
        <img
          alt="Analysis image"
          src={row.image}
          className={classes.imageCell}
        />
      ),
    },
    {
      title: 'Measurement Name',
      key: 'name',
      justify: 'left',
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
          <div className={classes.colorbar}>
            <span style={getCursorStyle(row.alias, row.score)} />
          </div>
        </div>
      ),
    },
    {
      title: 'Meaning',
      key: 'meaning',
      basis: 300,
      scroll: true,
      row: (row: any) => <p className={classes.meaningCell}>{row.meaning}</p>,
    },
    {
      title: 'Advice',
      key: 'advice',
      justify: 'left',
      scroll: true,
      basis: 500,
    },
  ];

  const onReportClose = () => {
    dispatch(
      createProfile({
        ID: setting.profileID,
        gender: setting.gender,
        race: setting.race,
        mappingPts: [
          ...setting.mappingPoints.front,
          ...(setting.mappingPoints.side || []),
        ],
      })
    );
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onReportClose}
      header={
        <div className={classes.header}>
          <p>{analysis.score.total}% Facial Harmony</p>
          <div className={classes.badges}>
            <span>{analysis.score.front}% front score</span>
            <span>{analysis.score.side}% Side Score</span>
          </div>
        </div>
      }
      body={<Table columns={columns} rows={analysis.analyses} />}
    />
  );
}

export default ReportDialog;
