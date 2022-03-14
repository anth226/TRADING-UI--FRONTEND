/* eslint-disable react/jsx-props-no-spreading */
import React,
{
  ReactElement,
  FC,
} from 'react';
import cx from 'classnames';
import {
  useTable,
  usePagination,
  useExpanded,
  useSortBy,
  Row,
} from 'react-table';
import type { TableProps as Props } from './table';
import TableRow from './TableRow';
import styles from './styles.module.scss';

const hooks = [
  useSortBy,
  useExpanded,
  usePagination,
];

const Table: FC<Props> = ({
  columns,
  data,
  sticky = false,
  fixed = false,
  className = '',
  classNameTH = '',
  classNameRow = '',
  getClassNameRow = () => '',
}): ReactElement => {
  const {
    getTableProps,
    headerGroups,
    getTableBodyProps,
    prepareRow,
    rows: page,
  } = useTable(
    {
      columns,
      data,
    },
    ...hooks,
  );

  return (
    <div className={cx(styles.wrap, className)}>
      <table
        {...getTableProps()}
        className={cx(styles.table, {
          [styles.sticky]: sticky,
          [styles.fixed]: fixed,
        })}
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps({
                  className: cx(styles.th, classNameTH),
                })}
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row: Row) => {
            prepareRow(row);
            return (
              <TableRow
                key={row.id}
                row={row}
                className={cx(classNameRow, getClassNameRow(row.original))}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
