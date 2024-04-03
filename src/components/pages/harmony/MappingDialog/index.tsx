import {
  MouseEvent,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { TbRefresh } from 'react-icons/tb';
import { useWindowSize } from '@react-hook/window-size';
import clsx from 'clsx';

import Dialog from '@/components/forms/Dialog';
import HttpService from '@/services/HttpService';
import { SAMPLE_LANDMARKS, SIDE_BLACK_PT_LIST } from '@/constants/landmark';
import { NORMAL_IMAGE_SIZE, ORIGIN_IMAGE_SIZE, SERVER_URI } from '@/config';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { updateFrontPts, updateSidePts } from '@/redux/reducers/setting';
import { MappingPtType, normalizePts, denormalizePts } from '@/utils/point';

import frontModelSrc from '@/assets/images/points/front.jpg';
import sideModelSrc from '@/assets/images/points/side.jpg';
import classes from './index.module.scss';

interface IMappingDialogProps {
  open?: Boolean;
  onClose: () => void;
  type: 'front' | 'side';
}

function MappingDialog({
  open = true,
  onClose = () => {},
  type = 'front',
}: IMappingDialogProps) {
  const dispatch = useAppDispatch();
  const profileID = useAppSelector(store => store.setting.profileID);
  const savingPts = useAppSelector(store => store.setting.mappingPoints[type]);

  const windowSize = useWindowSize();

  const [mapperSize, setMapperSize] = useState(0);
  const [mapperOffset, setMapperOffset] = useState<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });
  const [mapperCursor, setMapperCursor] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [matchingPt, setMatchingPt] = useState({
    x: 0,
    y: 0,
  });
  const [autoDetecPts, setAutoDetecPts] = useState<MappingPtType[]>([]);
  const [workingPts, setWorkingPts] = useState<MappingPtType[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  const mapperRef = useRef<HTMLDivElement>(null);

  const isSamePt = (
    first: { x: number; y: number },
    second: { x: number; y: number }
  ) => {
    return first.x === second.x && first.y === second.y;
  };

  const onMappingCloseBtnClick = () => {
    dispatch(
      type === 'front'
        ? updateFrontPts(normalizePts(workingPts, mapperSize))
        : updateSidePts(normalizePts(workingPts, mapperSize))
    );
    onClose();
  };

  const onMappingResetBtnClick = () => {
    setWorkingPts(denormalizePts(autoDetecPts, mapperSize));
  };

  const onLandmarkDown =
    (index: number, order: number) => (e: MouseEvent<HTMLSpanElement>) => {
      e.stopPropagation();
      const { width, height, left, top } =
        e.currentTarget.getBoundingClientRect();
      const shiftX = e.clientX - left - width / 2;
      const shiftY = e.clientY - top - height / 2;

      setMatchingPt({
        x: Math.floor(
          (SAMPLE_LANDMARKS[index + (type === 'front' ? 0 : 30)][order].x *
            mapperSize) /
            ORIGIN_IMAGE_SIZE
        ),
        y: Math.floor(
          (SAMPLE_LANDMARKS[index + (type === 'front' ? 0 : 30)][order].y *
            mapperSize) /
            ORIGIN_IMAGE_SIZE
        ),
      });

      const onLandmarkMove = (ev: MouseEvent) => {
        setWorkingPts(
          workingPts.map((pts: MappingPtType, id: number) =>
            id === index
              ? pts.map((point: { x: number; y: number }, pos: number) =>
                  order === pos
                    ? {
                        x: ev.pageX - mapperOffset.x - shiftX,
                        y: ev.pageY - mapperOffset.y - shiftY,
                      }
                    : point
                )
              : pts
          )
        );
        setMapperCursor({
          x: ev.pageX - mapperOffset.x - shiftX,
          y: ev.pageY - mapperOffset.y - shiftY,
        });
        setIsDragging(true);
      };
      document.addEventListener('mousemove', onLandmarkMove);
      e.currentTarget.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', onLandmarkMove);
        document.onmousemove = null;
        setIsDragging(false);
      });
    };

  const layoutCallback = () => {
    if (!mapperRef.current) return;
    const { height, left, top } = mapperRef.current.getBoundingClientRect();
    setMapperSize(height);
    setMapperOffset({
      x: left,
      y: top,
    });
  };

  useLayoutEffect(layoutCallback, []);
  useEffect(layoutCallback, [windowSize]);

  useEffect(() => {
    HttpService.post(`/auto/${type.slice(0, 1)}/${profileID}`, {}).then(
      response => {
        const { points } = response;
        setAutoDetecPts(points);
      }
    );
  }, []);

  useEffect(() => {
    if (savingPts.length > 0)
      setWorkingPts(denormalizePts(savingPts, mapperSize));
    else setWorkingPts(denormalizePts(autoDetecPts, mapperSize));
  }, [autoDetecPts, mapperSize]);

  return (
    <Dialog
      open={true}
      onClose={onMappingCloseBtnClick}
      header={<p className={classes.header}>Image Mapping</p>}
      body={
        <div className={classes.images}>
          <div className={clsx(classes.image, classes.template)}>
            <img
              src={type === 'front' ? frontModelSrc : sideModelSrc}
              alt="Template image"
            />
            {isDragging && (
              <span
                className={classes.matchPt}
                style={{
                  left: matchingPt.x,
                  top: matchingPt.y,
                }}
              />
            )}
          </div>
          <div className={clsx(classes.image, classes.mapper)} ref={mapperRef}>
            <img
              src={`${SERVER_URI}/img/${profileID}/${type.slice(0, 1)}`}
              alt="Mapping image"
              onDragStart={e => e.preventDefault()}
            />
            {workingPts.map((landmarks: any[], index: number) =>
              type === 'side' && SIDE_BLACK_PT_LIST.includes(index) ? (
                <></>
              ) : (
                <>
                  {landmarks[0] && (
                    <span
                      style={{ left: landmarks[0].x, top: landmarks[0].y }}
                      className={classes.landmark}
                      onMouseDown={onLandmarkDown(index, 0)}
                      onDragStart={() => false}
                      draggable="false"
                      hidden={index === 0}
                    />
                  )}
                  {type === 'front' &&
                    landmarks[1] &&
                    !isSamePt(
                      SAMPLE_LANDMARKS[index][0],
                      SAMPLE_LANDMARKS[index][1]
                    ) && (
                      <span
                        style={{ left: landmarks[1].x, top: landmarks[1].y }}
                        className={classes.landmark}
                        onMouseDown={onLandmarkDown(index, 1)}
                        onDragStart={() => false}
                        draggable="false"
                      />
                    )}
                </>
              )
            )}
            {isDragging && mapperSize && (
              <div
                className={classes.magnifier}
                style={{
                  backgroundImage: `url(${SERVER_URI}/img/${profileID}/${type.slice(
                    0,
                    1
                  )})`,
                  backgroundPositionX:
                    -(mapperCursor.x * NORMAL_IMAGE_SIZE * 2) / mapperSize + 48,
                  backgroundPositionY:
                    -(mapperCursor.y * NORMAL_IMAGE_SIZE * 2) / mapperSize + 48,
                  backgroundSize: `${NORMAL_IMAGE_SIZE * 2}px ${
                    NORMAL_IMAGE_SIZE * 2
                  }px`,
                }}
              >
                <span />
              </div>
            )}
            <span
              className={classes.autoDetectBtn}
              onClick={onMappingResetBtnClick}
            >
              <TbRefresh />
            </span>
          </div>
        </div>
      }
    />
  );
}

export default MappingDialog;
