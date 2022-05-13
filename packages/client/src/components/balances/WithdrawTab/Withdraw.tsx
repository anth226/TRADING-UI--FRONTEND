import React, { FC } from 'react';
import { DefaultSelect } from '@option-blitz/libs/components/inputs/DefaultSelect';
import { TextInput } from '@option-blitz/libs/components/inputs/TextInput';
import Button from '@option-blitz/libs/components/inputs/Button';
import styles from './styles.module.scss';

const Withdraw: FC = () => {
  const options = [
    { value: 'USDC' },
    { value: 'EUR' },
    { value: 'CAD' },
  ];
  return (
    <div className={styles.amount}>
      <p className={styles.title}>Fill up the required fields to withdraw your funds</p>
      <DefaultSelect
        className={styles.select}
        title="currency"
                // onChange={filterChange}
        options={options}
        defaultValue={options[0]}
      />
      <div className={styles.balance}>
        <TextInput
          type="text"
          label="send"
        />
      </div>
      <div className={styles.balance}>
        <TextInput
          type="text"
          label="send"
        />
      </div>
      <div className={styles.labelBlock}>
        <span className={styles.amountLabel}>amount</span>
        <span className={styles.withdrawLabel}>withdraw max</span>
      </div>
      <div className={styles.withdraw}>
        <div>
          <TextInput
            type="text"
            label="send"
          />
        </div>
        <div>
          <TextInput
            type="text"
            label="send"
          />
        </div>
      </div>
      <Button color="primary" className={styles.button}>
        Submit
      </Button>
    </div>
  );
};

export default Withdraw;
