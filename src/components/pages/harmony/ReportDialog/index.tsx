import { ASSESSMENTS } from '@/constants/analysis';
import Dialog from '@/components/forms/Dialog';
import Table, { IColumn } from '@/components/forms/Table';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { createProfile } from '@/redux/reducers/profile';
import HttpService from '@/services/HttpService';

import classes from './index.module.scss';
import ImageDialog from '@/components/common/ImageDialog';
import { useMemo, useState } from 'react';

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
  const subscribeID = useAppSelector(state => state.auth.account?.subscribeID);
  const isPremiumUser = useMemo(() => !!subscribeID, [subscribeID]);

  const [isImageDialog, openImageDialog] = useState(false);
  const [imageID, setImageID] = useState('');
  const imageData = useMemo(() => {
    const activeRow = analysis.analyses.find(item => item.alias === imageID);
    return activeRow
      ? {
          text: activeRow.label,
          title: activeRow.name,
          imageUrl: activeRow.image,
        }
      : {};
  }, [imageID]);

  const columns: IColumn[] = [
    {
      title: 'Image',
      key: 'image',
      basis: '80px',
      row: (row: any) => (
        <img
          alt="Analysis image"
          src={row.image}
          className={classes.imageCell}
          onClick={() => {
            setImageID(row.alias);
            openImageDialog(true);
          }}
        />
      ),
    },
    {
      title: 'Measurement Name',
      key: 'name',
      justify: 'left',
      basis: '10%',
    },
    {
      title: 'Value',
      key: 'value',
      basis: '7%',
    },
    {
      title: 'Score',
      key: 'score',
      basis: '5%',
      row: (row: any) => (
        <div className={classes.scoreCell}>
          <div className={classes.colorbar}>
            <span style={getCursorStyle(row.alias, row.score)} />
          </div>
        </div>
      ),
    },
    {
      title: 'Ideal',
      key: 'ideal',
      basis: '8%',
    },
    {
      title: 'Meaning',
      key: 'meaning',
      basis: '30%',
      scroll: true,
      justify: 'left',
      row: (row: any) => <p className={classes.meaningCell}>{row.meaning}</p>,
    },
    {
      title: 'Advice',
      key: 'advice',
      scroll: true,
      basis: 'calc(35% - 80px)',
      row: (row: any) => <p className={classes.adviceCell}>{row.advice}</p>,
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
          ...setting.mappingPoints.side,
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
          <div className={classes.toppanel}>
            <p>{analysis.score.total}% Facial Harmony</p>
            <div className={classes.badges}>
              <span>{analysis.score.front}% Front Score</span>
              <span>{analysis.score.side}% Side Score</span>
            </div>
            {/* <span className={classes.downloadBtn} onClick={onDownloadClick}>
              <FaDownload />
            </span> */}
          </div>
          <p>
            The advice provided by Harmony is for informational purposes only,
            offering options and suggestions, and should not be considered
            medical advice; please consult a maxillofacial surgeon,
            board-certified plastic surgeon, dermatologist, or orthodontist for
            personalized treatment recommendations.
          </p>
        </div>
      }
      body={
        <>
          <Table
            columns={columns}
            rows={analysis.analyses}
            active={isPremiumUser}
          />
          <ImageDialog
            open={isImageDialog}
            onClose={() => openImageDialog(false)}
            {...imageData}
          />
        </>
      }
      maxWidth="screen"
    />
  );
}

export default ReportDialog;
