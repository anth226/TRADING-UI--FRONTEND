/* eslint-disable*/
import React from 'react';
import type { TableCell as Cell } from '@option-blitz/libs/components/inputs/Table/types';
import { SignalsItem } from './types';
import styles from './styles.module.scss';
import rog from '../../../../../../libs/assets/images/staking/blx/rog.svg';


export const columns = [
  {
    Header: 'Platform',
    accessor: 'platform',
    Cell: ({ row }: Cell<SignalsItem>) => {
      const { platform } = row.original;
      return (
        <div className={styles.text}>
          <img src={rog} alt="icon" style={{ marginRight: 5 }} />
          {platform}
        </div>
      );
    },
  },


];
