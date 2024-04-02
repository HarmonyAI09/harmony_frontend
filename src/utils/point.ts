import { NORMAL_IMAGE_SIZE } from '@/config';

export type MappingPtType = {
  x: number;
  y: number;
}[];

export const denormalizePts = (points: MappingPtType[], size: number) => {
  return points.map((pts: MappingPtType) =>
    pts.map((item: { x: number; y: number }) => ({
      x: Math.floor((item.x * size) / NORMAL_IMAGE_SIZE),
      y: Math.floor((item.y * size) / NORMAL_IMAGE_SIZE),
    }))
  );
};

export const normalizePts = (points: MappingPtType[], size: number) => {
  return points.map((pts: MappingPtType) =>
    pts.map((item: { x: number; y: number }) => ({
      x: Math.floor((item.x * NORMAL_IMAGE_SIZE) / size),
      y: Math.floor((item.y * NORMAL_IMAGE_SIZE) / size),
    }))
  );
};
