import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { HeaderBalance } from './index';
import { headerOptionsMock } from '../../../mock/header/HeaderSelectItem';

storiesOf('Common', module).add('HeaderBalance', () => {
  const onChange = action('onChange');
  const onClick = action('onClick');
  
  return (
    <div style={{ height: 45 }}>
      <HeaderBalance
        onClick={onClick}
        onChange={onChange}
        options={headerOptionsMock}
        defaultValue={headerOptionsMock[0]}
      />
    </div>
  );
});
