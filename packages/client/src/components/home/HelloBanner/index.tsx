import React, { FC } from 'react';
import { useTranslation } from '../../../i18n';

interface Props {
}

const HelloBanner: FC<Props> = () => {
  const { t } = useTranslation('main');

  return (
    <h1>
      {t('Hello (This is i18 message)')}
    </h1>
  );
}; 

export { HelloBanner };
