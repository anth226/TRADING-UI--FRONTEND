import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs/dist';
import { action } from '@storybook/addon-actions';
import { keys } from 'ramda';
import { HeaderTab } from './index';
import { Countries } from '../../../constants/countries';
import { ProductType } from '../../../constants/product';

const countries = keys(Countries).reduce((acc, key) => ({ ...acc, [key]: Countries[key] }), {});
const productType =
  keys(ProductType).reduce((acc, key) => ({ ...acc, [key]: ProductType[key] }), {});

storiesOf('Common', module).add('HeaderTab', () => {
  const interest = text('interest', '4');
  
  const isActive = boolean('isActive', false);

  const countriesSelect = select('Countries', countries, keys(countries)[0]);
  const productTypeSelect = select('ProductType', productType, keys(productType)[0]);
  
  const onClose = action('onClose');
  const onClick = action('onClick');
  return (
    <HeaderTab
      data={{
        value: 'tab',
        isActive,
        id: 1,
        interest,
        productType: productTypeSelect,
        countries: countriesSelect,
      }}
      onClick={onClick}
      onClose={onClose}
    />
  );
});
