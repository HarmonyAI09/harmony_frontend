import { DragEvent, useEffect, useMemo, useRef, useState } from 'react';
import clsx from 'clsx';

import { MODEL_IMAGE_WIDTH, SERVER_URI } from '@/config';
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
  const [cursor, setCursor] = useState<{ x: number; y: number }>({
    x: -100,
    y: -100,
  });
  const [mappingPoints, setMappingPoints] = useState<any[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  const imageRef = useRef<HTMLDivElement>(null);
  const dragIndex = useRef<number>(-1);
  const dragOrder = useRef<number>(-1);

  const pointModelSrc = useMemo(
    () => (type === 'front' ? FrontPointModelSrc : SidePointModelSrc),
    [type]
  );

  const matchPoint = useMemo(() => {
    if (dragIndex.current === -1 || dragOrder.current === -1) return null;
    const point = SAMPLE_LANDMARKS[dragIndex.current + 1][dragOrder.current];
    return { x: (point.x * imgWidth) / 800, y: (point.y * imgWidth) / 800 };
  }, [dragIndex.current, dragOrder.current, mappingPoints]);

  const isSamePt = (first: any, second: any) => {
    if (!first || !second) return false;
    return first.x === second.x && first.y === second.y;
  };

  const onMarkDragStart =
    (ptIndex: number, order: number) => (e: DragEvent<HTMLSpanElement>) => {
      dragIndex.current = ptIndex;
      dragOrder.current = order;
      setIsDragging(true);
    };

  const onMarkDragEnd = (ptIndex: number) => () => {
    if (ptIndex !== dragIndex.current) return;
    dragIndex.current = -1;
    dragOrder.current = -1;
    setIsDragging(false);
  };

  const onMarkDraging = (e: any) => {
    if (dragIndex.current === -1) return;
    if (!e.clientX && !e.clientY) return;

    const offsetX = imageRef.current?.offsetLeft || 0,
      offsetY = imageRef.current?.offsetTop || 0;
    const pageX = e.clientX - offsetX,
      pageY = e.clientY - offsetY;

    setCursor({ x: pageX, y: pageY });
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
    setMappingPoints(
      SAMPLE_LANDMARKS.slice(1, 30).map((landmarks: any[]) => {
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
            {matchPoint && (
              <span
                className={classes.landmark}
                style={{
                  left: matchPoint.x,
                  top: matchPoint.y,
                }}
              />
            )}
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
            <div
              className={clsx(classes.magnifier, {
                [classes.invisible]: !isDragging,
              })}
              style={{
                backgroundImage: `url(${rawImageUri})`,
                backgroundPositionX:
                  -(cursor.x * MODEL_IMAGE_WIDTH) / imgWidth + 32,
                backgroundPositionY:
                  -(cursor.y * MODEL_IMAGE_WIDTH) / imgWidth + 32,
                left: cursor.x,
                top: cursor.y,
              }}
            >
              <span />
            </div>
          </div>
        </div>
      }
    />
  );
}

export default MappingDialog;
