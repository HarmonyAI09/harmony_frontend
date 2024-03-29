import TableRow from '@/components/forms/TableRow';
import classes from './index.module.scss';

export interface IColumn {
  title: string;
  key: string;
  basis?: number | string;
  scroll?: boolean;
  clamp?: boolean;
  row?: (row: any) => React.ReactNode;
}

interface ITableProps {
  columns: IColumn[];
  rows: any[];
}

function Table({ columns, rows }: ITableProps) {
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        {columns.map((column: IColumn, index: number) => (
          <div key={index} style={{ flexBasis: column.basis || 150 }}>
            {column.title}
          </div>
        ))}
      </div>
      <div className={classes.body}>
        {rows.map((row: any, index: number) => (
          <TableRow key={index} columns={columns} row={row} />
        ))}
      </div>
    </div>
  );
}

export default Table;
