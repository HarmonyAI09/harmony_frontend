import { DragEvent, useEffect, useMemo, useRef, useState } from 'react';
import { TbRefresh } from 'react-icons/tb';

import Dialog from '@/components/forms/Dialog';
import { SAMPLE_LANDMARKS } from '@/constants/landmark';
import { ORIGIN_IMAGE_SIZE, CURRENT_IMAGE_SIZE, SERVER_URI } from '@/config';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { updateFrontPts, updateSidePts } from '@/redux/reducers/setting';

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

  const profileID = useAppSelector(state => state.setting.profileID);
  const mappingPts = useAppSelector(state => state.setting.mappingPoints);

  const [cursor, setCursor] = useState<{ x: number; y: number }>({
    x: -100,
    y: -100,
  });
  const [autoPts, setAutoPts] = useState<any[]>([]);
  const [scaledPts, setScaledPts] = useState<any[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  const imageRef = useRef<HTMLDivElement>(null);
  const dragIndex = useRef<number>(-1);
  const dragOrder = useRef<number>(-1);

  const ptModelSrc = useMemo(
    () => (type === 'front' ? FrontPointModelSrc : SidePointModelSrc),
    [type]
  );

  const rawModelSrc = useMemo(
    () =>
      profileID ? `${SERVER_URI}/img/${profileID}/${type.slice(0, 1)}` : '',
    [profileID]
  );

  const dragPt = useMemo(() => {
    if (dragIndex.current === -1 || dragOrder.current === -1) return null;
    const imgSize = imageRef.current?.clientWidth || 0;
    const point = SAMPLE_LANDMARKS.slice(type === 'front' ? 0 : 30)[
      dragIndex.current
    ][dragOrder.current];
    return {
      x: (point.x * imgSize) / ORIGIN_IMAGE_SIZE,
      y: (point.y * imgSize) / ORIGIN_IMAGE_SIZE,
    };
  }, [dragIndex.current, dragOrder.current, scaledPts]);

  const isSamePt = (first: any, second: any) => {
    if (!first || !second) return false;
    return first.x === second.x && first.y === second.y;
  };

  const getScaledPts = (originPts: any[], originSize: number) => {
    const imgSize = imageRef.current?.clientWidth || 0;
    return originPts.map((landmarks: any[]) => {
      return landmarks.map((landmark: any) => ({
        x: Math.floor((landmark.x * imgSize) / originSize),
        y: Math.floor((landmark.y * imgSize) / originSize),
      }));
    });
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
    setScaledPts(
      scaledPts.map((landmarks: any[], index: number) =>
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

  const onResetMappingClick = () => {
    setScaledPts(getScaledPts(autoPts, CURRENT_IMAGE_SIZE));
  };

  const onMappingClose = () => {
    dispatch(
      type === 'front' ? updateFrontPts(scaledPts) : updateSidePts(scaledPts)
    );
    onClose();
  };

  useEffect(() => {
    if (!open) return;
    if (profileID) {
      HttpService.post(`/auto/${type.slice(0, 1)}/${profileID}`, {}).then(
        response => {
          const { points } = response;
          setAutoPts(points);
          if (!mappingPts[type].length) {
            setScaledPts(getScaledPts(points as any[], CURRENT_IMAGE_SIZE));
          } else {
            setScaledPts(
              getScaledPts(mappingPts[type] as any[], CURRENT_IMAGE_SIZE)
            );
          }
        }
      );
    }
  }, [open, profileID]);

  return (
    <Dialog
      open={open}
      onClose={onMappingClose}
      header={<p className={classes.dlgTitle}>Image mapping</p>}
      body={
        <div className={classes.images}>
          <div className={classes.model}>
            <img
              src={ptModelSrc}
              style={{
                maxWidth: CURRENT_IMAGE_SIZE,
                maxHeight: CURRENT_IMAGE_SIZE,
              }}
            />
            {dragPt && (
              <span
                className={classes.landmark}
                style={{
                  left: dragPt.x,
                  top: dragPt.y,
                }}
              />
            )}
          </div>
          <div className={classes.real} ref={imageRef}>
            {profileID ? (
              <img src={rawModelSrc} alt="Default model image" />
            ) : (
              <></>
            )}
            {scaledPts.map((landmarks: any[], index: number) => (
              <>
                {landmarks[0] && (
                  <span
                    style={{ left: landmarks[0].x, top: landmarks[0].y }}
                    className={classes.landmark}
                    onDragStart={onMarkDragStart(index, 0)}
                    onDrag={onMarkDraging}
                    onDragEnd={onMarkDragEnd(index)}
                    draggable={true}
                    hidden={index === 0}
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
            <span className={classes.autoMap} onClick={onResetMappingClick}>
              <TbRefresh />
            </span>
            {isDragging && imageRef.current?.clientWidth && (
              <div
                className={classes.magnifier}
                style={{
                  backgroundImage: `url(${rawModelSrc})`,
                  backgroundPositionX:
                    -(cursor.x * CURRENT_IMAGE_SIZE * 2) /
                      imageRef.current.clientWidth +
                    48,
                  backgroundPositionY:
                    -(cursor.y * CURRENT_IMAGE_SIZE * 2) /
                      imageRef.current.clientWidth +
                    48,
                  backgroundSize: `${CURRENT_IMAGE_SIZE * 2}px ${
                    CURRENT_IMAGE_SIZE * 2
                  }px`,
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
