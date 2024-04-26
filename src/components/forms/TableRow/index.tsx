import clsx from 'clsx';

import { IColumn } from '@/components/forms/Table';

import classes from './index.module.scss';

interface ITableRowProps {
  columns: IColumn[];
  row: any;
  active?: boolean;
}

function TableRow({ columns, row, active = true }: ITableRowProps) {
  const justifyClasses = (column: IColumn) =>
    column.justify === 'left'
      ? classes.justifyLeft
      : column.justify === 'right'
      ? classes.justifyRight
      : classes.justifyCenter;

  const scrollClases = (column: IColumn) => ({
    [classes.scroll]: column.scroll,
  });

  const clampClasses = (column: IColumn) => ({
    [classes.clamp]: column.clamp,
  }); 

  return (
    <div className={classes.root}>
      {columns.map((column: IColumn, index: number) => (
        <div
          key={index}
          style={{
            width: column.basis || 150,
            userSelect: 'none',
          }}
          className={clsx(
            justifyClasses(column),
            scrollClases(column),
            clampClasses(column)
          )}
        >
          {(column.row && column.row(row)) || row[column.key] || ''}
        </div>
      ))}
      {!active && <div className={classes.blur}></div>}
    </div>
  );
}

export default TableRow;
