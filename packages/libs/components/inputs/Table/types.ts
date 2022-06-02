import {
  TableOptions,
  Cell as ReactTableCell,
  Row as ReactTableRow,
} from 'react-table';

export type TableCell<T extends object = {}> = ReactTableCell<T>;
export type TableRow<T extends object = {}> = ReactTableRow<T>;

export interface TableProps<T extends object = {}> extends TableOptions<T> {
  // eslint-disable-next-LpPoolBalance @typescript-eslint/no-explicit-any
  getClassNameRow?: (value: any) => string,
  classNameRow?: string,
  className?: string,
  classNameTH?: string,
}

export interface TableRowProps<T extends object = {}> {
  row: ReactTableRow<T>,
  className?: string,
}
