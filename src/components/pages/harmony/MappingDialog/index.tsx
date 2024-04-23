import {
  DragEventHandler,
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
  const imagesRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef<boolean>(false);

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

      setIsDragging(true);
      isDraggingRef.current = true;

      const onLandmarkMove = (ev: any) => {
        if (!isDraggingRef.current) return;
        setWorkingPts(
          workingPts.map((pts: MappingPtType, id: number) =>
            id === index
              ? pts.map((point: { x: number; y: number }, pos: number) =>
                  order === pos
                    ? {
                        x: ev.pageX - mapperOffset.x,
                        y: ev.pageY - mapperOffset.y,
                      }
                    : point
                )
              : pts
          )
        );
        setMapperCursor({
          x: ev.pageX - mapperOffset.x,
          y: ev.pageY - mapperOffset.y,
        });
      };
      document.addEventListener('mousemove', onLandmarkMove);
    };

const onLandmarkUp = () => {
    if (!isDraggingRef.current) return;
    setIsDragging(false);
    isDraggingRef.current = false;
    document.onmousemove = null;
  };

  const layoutCallback = () => {
    if (imagesRef.current) {
      const rect = imagesRef.current.getBoundingClientRect();
      const imagesWidth = rect.width;
      const imagesHeight = rect.height * 0.95;
      setMapperSize(
        imagesWidth > imagesHeight * 2 ? imagesHeight : imagesWidth / 2
      );
    }
  };

  useEffect(layoutCallback, [windowSize]);

  useEffect(() => {
    if (mapperRef.current) {
      const { left, top } = mapperRef.current.getBoundingClientRect();
      setMapperOffset({
        x: left,
        y: top,
      });
    }
  }, [mapperSize]);

  useEffect(() => {
    HttpService.post(`/auto/${type.slice(0, 1)}/${profileID}`, {}).then(
      response => {
        const { points } = response;
        setAutoDetecPts(points);
      }
    );
    document.addEventListener('mouseup', onLandmarkUp);

    return () => {
      document.removeEventListener('mouseup', onLandmarkUp);
    };
  }, []);

  useEffect(() => {
    if (savingPts.length > 0) {
      setWorkingPts(denormalizePts(savingPts, mapperSize));
    } else {
      setWorkingPts(denormalizePts(autoDetecPts, mapperSize));
    }
  }, [autoDetecPts, mapperSize]);

  return (
    <Dialog
      animate={false}
      open={true}
      onClose={onMappingCloseBtnClick}
      header={<p className={classes.header}>Image Mapping</p>}
      body={
        <div className={classes.wrapper} ref={imagesRef}>
          {type === 'side' && (
            <p className={classes.tip}>
              Side profile AI mapping is coming soon. For now, you may manually
              adjust the points.
            </p>
          )}
          <div className={classes.images}>
            <div
              className={clsx(classes.image, classes.template)}
              style={{ width: mapperSize }}
            >
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
            <div
              className={clsx(classes.image, classes.mapper)}
              style={{ width: mapperSize }}
              ref={mapperRef}
            >
              <img
                src={`${SERVER_URI}/img/${profileID}/${type.slice(0, 1)}`}
                alt="Mapping image"
                onDragStart={e => e.preventDefault()}
              />
              {workingPts.map((landmarks: any[], index: number) => (
                <>
                  {landmarks[0] && (
                    <span
                      style={{ left: landmarks[0].x, top: landmarks[0].y }}
                      className={classes.landmark}
                      onMouseDown={onLandmarkDown(index, 0)}
                      onDragStart={(e: any) => {
                        e.preventDefault();
                        e.stopPropagation();
                        return false;
                      }}
                      draggable="false"
                      hidden={
                        (type === 'front' && index === 0) ||
                        (type === 'side' && SIDE_BLACK_PT_LIST.includes(index))
                      }
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
                        onDragStart={(e: any) => {
                          e.preventDefault();
                          e.stopPropagation();
                          return false;
                        }}
                        draggable="false"
                      />
                    )}
                </>
              ))}
              {isDragging && mapperSize && (
                <div
                  className={classes.magnifier}
                  style={{
                    backgroundImage: `url(${SERVER_URI}/img/${profileID}/${type.slice(
                      0,
                      1
                    )})`,
                    backgroundPositionX:
                      -(mapperCursor.x * NORMAL_IMAGE_SIZE * 2) / mapperSize +
                      96,
                    backgroundPositionY:
                      -(mapperCursor.y * NORMAL_IMAGE_SIZE * 2) / mapperSize +
                      96,
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
        </div>
      }
      maxWidth="screen"
      fullHeight={true}
    />
  );
}

export default MappingDialog;
