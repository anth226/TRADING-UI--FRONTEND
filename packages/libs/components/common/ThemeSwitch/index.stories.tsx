import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, number } from '@storybook/addon-knobs';
import { ThemeSwitch } from './index';

storiesOf('Common', module).add('ThemeSwitch', () => {
  const value = boolean('value', true);
  const toggleTheme = action('toggleTheme');
  const size = number('Size', 24);

  return <ThemeSwitch value={value} onChange={toggleTheme} size={size} />;
});
