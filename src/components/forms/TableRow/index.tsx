import { IColumn } from '@/components/forms/Table';

import classes from './index.module.scss';
import clsx from 'clsx';

interface ITableRowProps {
  columns: IColumn[];
  row: any;
}

function TableRow({ columns, row }: ITableRowProps) {
  return (
    <div className={classes.root}>
      {columns.map((column: IColumn, index: number) => (
        <div
          key={index}
          style={{
            flexBasis: column.basis || 150,
            alignItems: !!column.scroll ? 'flex-start' : 'center',
          }}
          // className={clsx({ [classes.clamp]: column.clamp })}
        >
          {(column.row && column.row(row)) || row[column.key] || ''}
        </div>
      ))}
    </div>
  );
}

export default TableRow;
