import TableRow from '@/components/forms/TableRow';
import classes from './index.module.scss';

export interface IColumn {
  title: string;
  key: string;
  basis?: number | string;
  justify?: 'left' | 'center' | 'right';
  scroll?: boolean;
  clamp?: boolean;
  row?: (row: any) => React.ReactNode;
}

interface ITableProps {
  columns: IColumn[];
  rows: any[];
  active?: boolean;
}

function Table({ columns, rows, active = false }: ITableProps) {
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        {columns.map((column: IColumn, index: number) => (
          <div key={index} style={{ width: column.basis || 150 }}>
            {column.title}
          </div>
        ))}
      </div>
      <div className={classes.body}>
        {rows.map((row: any, index: number) => (
          <TableRow
            key={index}
            columns={columns}
            row={row}
            active={active || index < 7}
          />
        ))}
      </div>
    </div>
  );
}

export default Table;
