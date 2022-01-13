import React from 'react';
import { storiesOf } from '@storybook/react';
import { number } from '@storybook/addon-knobs/dist';
import Loader from './index';

storiesOf('Basic', module).add('Loader', () => {
  const size = number('size', 32);

  return <Loader size={size} />;
});
