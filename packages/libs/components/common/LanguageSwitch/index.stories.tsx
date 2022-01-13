import { storiesOf } from '@storybook/react';
import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, select } from '@storybook/addon-knobs/dist';
import { Placement } from '@popperjs/core';
import { LanguageSwitch } from './index';
import { LocaleKey } from '../../../utils/i18n';

storiesOf('Common', module).add('LanguageSwitch', () => {
  const isShort = boolean('isShort', true);
  const placement = select<Placement>(
    'Placement',
    {
      bottom: 'bottom',
      top: 'top',
      left: 'left',
      right: 'right',
    },
    'bottom',
  );

  const onChange = action('onChange');

  return (
    <LanguageSwitch
      value={LocaleKey.en}
      onChange={onChange}
      isShort={isShort}
      placement={placement}
    />
  );
});
