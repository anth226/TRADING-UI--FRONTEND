import { storiesOf } from '@storybook/react';
import React from 'react';
import { action } from '@storybook/addon-actions';
import { keys } from 'ramda';
import { select } from '@storybook/addon-knobs/dist';
import { MobileViewMode, ViewMode } from './index';

const modeKeys = keys(ViewMode).reduce((acc, key) => ({ ...acc, [key]: ViewMode[key] }), {});

storiesOf('Common', module).add('MobileViewMode', () => {
  const onChange = action('onChange');
  const mode = select('Mode', modeKeys, keys(modeKeys)[0]);
  
  return (
    <MobileViewMode modeSelect={onChange} mode={mode} />
  );
});
