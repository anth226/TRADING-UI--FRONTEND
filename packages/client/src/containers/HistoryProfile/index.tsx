import React, { FC } from 'react';
// import cx from 'classnames';
import Button from '@option-blitz/libs/components/inputs/Button';
import Table from '@option-blitz/libs/components/inputs/Table';
// import type { TableCell as Cell } from '@option-blitz/libs/components/inputs/Table/types';
// import { FontIcon, FontIconName } from '@option-blitz/libs/components/inputs/FontIcon';
import { data } from './data';
import { columns } from './columns';
import styles from './styles.module.scss';

type Props = {
};

const HistoryProfile: FC<Props> = () => (
  <div className={styles.wrap}>
    <p className={styles.title}>History</p>

    <div className={styles.containerButtons}>    
      <Button color="primary" className={styles.button} size={27}>
        Binary
      </Button>
      <Button color="transparent_primary" className={styles.button} size={27}>
        Turbo Rush
      </Button>
      <Button color="transparent_primary" className={styles.button} size={27}>
        Rush
      </Button>
      <Button color="transparent_primary" className={styles.button} size={27}>
        Touch
      </Button>
      <Button color="transparent_primary" className={styles.button} size={27}>
        No-Touch
      </Button>
    </div>

    <Table
      data={data}
      columns={columns}
    />
  </div>
);

export { HistoryProfile };
