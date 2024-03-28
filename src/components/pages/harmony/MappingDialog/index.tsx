import {
  DragEvent,
  DragEventHandler,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { SERVER_URI } from '@/config';
import { SAMPLE_LANDMARKS } from '@/constants/landmark';
import Dialog from '@/components/forms/Dialog';

import FrontPointModelSrc from '@/assets/images/points/front.jpg';
import SidePointModelSrc from '@/assets/images/points/side.jpg';
import classes from './index.module.scss';

interface IMappingDialogProps {
  open: Boolean;
  onClose: () => void;
  type: 'front' | 'side';
}

function MappingDialog({ open = false, onClose, type }: IMappingDialogProps) {
  const rawImageUri = `${SERVER_URI}/img/sample/f`;

  const [imgWidth, setImgWidth] = useState(0);
  // const [dragIndex, setDragIndex] = useState(-1);
  // const [dragOrder, setDragOrder] = useState(-1);
  const [mappingPoints, setMappingPoints] = useState<any[]>([]);

  const pointModelSrc = useMemo(
    () => (type === 'front' ? FrontPointModelSrc : SidePointModelSrc),
    [type]
  );
  const imageRef = useRef<HTMLDivElement>(null);
  const dragIndex = useRef<number>(-1);
  const dragOrder = useRef<number>(-1);

  const isSamePt = (first: any, second: any) => {
    console.log('Pts', first, second);
    if (!first || !second) return false;
    return first.x === second.x && first.y === second.y;
  };

  const onMarkDragStart = (ptIndex: number, order: number) => () => {
    console.log('Mark index-------------', ptIndex, order);
    dragIndex.current = ptIndex;
    dragOrder.current = order;
  };

  const onMarkDragEnd = (ptIndex: number) => () => {
    if (dragIndex.current === ptIndex) return;
    dragIndex.current = -1;
    dragOrder.current = -1;
  };

  const onMarkDraging = (e: DragEvent<HTMLSpanElement>) => {
    if (dragIndex.current === -1) return;
    if (!e.clientX && !e.clientY) return;
    const offsetX = imageRef.current?.offsetLeft || 0,
      offsetY = imageRef.current?.offsetTop || 0;
    const pageX = e.clientX - offsetX,
      pageY = e.clientY - offsetY;
    setMappingPoints(
      mappingPoints.map((landmarks: any[], index: number) =>
        index === dragIndex.current
          ? isSamePt(landmarks[0], landmarks[1])
            ? [
                { x: pageX, y: pageY },
                { x: pageX, y: pageY },
              ]
            : landmarks.map((landmark: any, markId: number) =>
                markId === dragOrder.current
                  ? { x: e.clientX - offsetX, y: e.clientY - offsetY }
                  : landmark
              )
          : landmarks
      )
    );
  };

  useEffect(() => {
    if (!imageRef.current) return;
    setImgWidth(imageRef.current.clientWidth);
  }, [open]);

  useEffect(() => {
    if (!imgWidth) return;
    console.log('array loading effect');
    setMappingPoints(
      SAMPLE_LANDMARKS.slice(1, 29).map((landmarks: any[]) => {
        return landmarks.map((landmark: any) => ({
          x: Math.floor((landmark.x * imgWidth) / 800),
          y: Math.floor((landmark.y * imgWidth) / 800),
        }));
      })
    );
  }, [SAMPLE_LANDMARKS, imgWidth]);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      header={<p className={classes.dlgTitle}>Image mapping</p>}
      body={
        <div className={classes.images}>
          <div className={classes.model}>
            <img src={pointModelSrc} />
          </div>
          <div className={classes.real} ref={imageRef}>
            <img src={rawImageUri} alt="Default model image" />
            {mappingPoints.map((landmarks: any[], index: number) => (
              <>
                {landmarks[0] && (
                  <span
                    style={{ left: landmarks[0].x, top: landmarks[0].y }}
                    className={classes.landmark}
                    onDragStart={onMarkDragStart(index, 0)}
                    onDrag={onMarkDraging}
                    onDragEnd={onMarkDragEnd(index)}
                    draggable={true}
                  />
                )}
                {landmarks[1] && !isSamePt(landmarks[0], landmarks[1]) && (
                  <span
                    style={{ left: landmarks[1].x, top: landmarks[1].y }}
                    className={classes.landmark}
                    onDragStart={onMarkDragStart(index, 1)}
                    onDrag={onMarkDraging}
                    onDragEnd={onMarkDragEnd(index)}
                    draggable={true}
                  />
                )}
              </>
            ))}
          </div>
        </div>
      }
    />
  );
}

export default MappingDialog;
