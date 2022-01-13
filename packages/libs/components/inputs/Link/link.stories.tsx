import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import Link from './index';

storiesOf('Basic', module).add('Link', () => {
  const children = text('Children', 'Link');
  const to = text('to', 'to');

  return (
    <Link
      to={to}
    >
      {children}
    </Link>
  );
});
