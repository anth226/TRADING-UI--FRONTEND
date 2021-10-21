import React, { FC, useMemo } from 'react';
import { values } from 'ramda';
import { Placement } from '@popperjs/core';
import { Dropdown } from '../../inputs/Dropdown';
import { LocaleKey, localeNames, localeShortNames } from '../../../utils/i18n';
import Button from '../../inputs/Button';
import styles from './styles.module.scss';

interface Props {
  value: LocaleKey;
  onChange: (val: LocaleKey) => void;
  isShort?: boolean;
  placement?: Placement;
}

const Label: FC<Props> = ({ value, isShort }) => (
  <Button>{isShort ? localeShortNames[value] : localeNames[value]}</Button>
);

const LanguageSwitch: FC<Props> = ({
  value, isShort, onChange, placement, 
}) => {
  const deps = useMemo(() => [placement], [placement]);

  return (
    <Dropdown
      label={<Label value={value} isShort={isShort} onChange={onChange} />}
      popupClassName={styles.popup}
      offset={10}
      placement={placement}
      deps={deps}
    >
      <div className={styles.list}>
        {values(LocaleKey).map((locale) => (
          <button onMouseDown={() => onChange(locale)} className={styles.row}>
            {localeNames[locale]}
          </button>
        ))}
      </div>
    </Dropdown>
  );
};

export { LanguageSwitch };
