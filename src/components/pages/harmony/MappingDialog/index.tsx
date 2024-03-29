import { DragEvent, useEffect, useMemo, useRef, useState } from 'react';
import { MdOutlineAutoFixHigh } from 'react-icons/md';

import Dialog from '@/components/forms/Dialog';
import { SAMPLE_LANDMARKS } from '@/constants/landmark';
import { ORIGIN_IMAGE_SIZE, CURRENT_IMAGE_SIZE, SERVER_URI } from '@/config';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { updateFrontPoints, updateSidePoints } from '@/redux/reducers/setting';

import FrontPointModelSrc from '@/assets/images/points/front.jpg';
import SidePointModelSrc from '@/assets/images/points/side.jpg';
import classes from './index.module.scss';
import HttpService from '@/services/HttpService';

interface IMappingDialogProps {
  open: Boolean;
  onClose: () => void;
  type: 'front' | 'side';
}

function MappingDialog({ open = false, onClose, type }: IMappingDialogProps) {
  const dispatch = useAppDispatch();
  const profileID = useAppSelector(state => state.settting.profileID);

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

  const modelImageSrc = useMemo(
    () => `${SERVER_URI}/img/${profileID}/${type.slice(0, 1)}`,
    [profileID]
  );

  const matchPoint = useMemo(() => {
    if (dragIndex.current === -1 || dragOrder.current === -1) return null;
    const point = SAMPLE_LANDMARKS[dragIndex.current + 1][dragOrder.current];
    return {
      x: (point.x * imgWidth) / ORIGIN_IMAGE_SIZE,
      y: (point.y * imgWidth) / ORIGIN_IMAGE_SIZE,
    };
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
    if (!open) {
      dispatch(updateFrontPoints(mappingPoints));
    } else {
      setImgWidth(imageRef.current.clientWidth);
      if (!profileID) return;
      HttpService.post(`/auto/${type.slice(0, 1)}/${profileID}`, {}).then(
        response => {
          // dispatch(type === 'front' ? updateFrontPoints(response))
        }
      );
    }
  }, [open]);

  useEffect(() => {
    if (!imgWidth) return;
    setMappingPoints(
      SAMPLE_LANDMARKS.slice(1, 30).map((landmarks: any[]) => {
        return landmarks.map((landmark: any) => ({
          x: Math.floor((landmark.x * imgWidth) / ORIGIN_IMAGE_SIZE),
          y: Math.floor((landmark.y * imgWidth) / ORIGIN_IMAGE_SIZE),
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
            <img
              src={pointModelSrc}
              style={{
                maxWidth: CURRENT_IMAGE_SIZE,
                maxHeight: CURRENT_IMAGE_SIZE,
              }}
            />
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
            <img src={modelImageSrc} alt="Default model image" />
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
            <span className={classes.autoMap}>
              <MdOutlineAutoFixHigh />
            </span>
            {isDragging && (
              <div
                className={classes.magnifier}
                style={{
                  backgroundImage: `url(${modelImageSrc})`,
                  backgroundPositionX:
                    -(cursor.x * CURRENT_IMAGE_SIZE * 2) / imgWidth + 32,
                  backgroundPositionY:
                    -(cursor.y * CURRENT_IMAGE_SIZE * 2) / imgWidth + 32,
                }}
              >
                <span />
              </div>
            )}
          </div>
        </div>
      }
    />
  );
}

export default MappingDialog;
