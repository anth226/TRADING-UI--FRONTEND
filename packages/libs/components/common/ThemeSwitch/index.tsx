import React from 'react';
import { Toggle, ToggleProps } from '../../inputs/Toggle';
import { FontIconName } from '../../inputs/FontIcon';

type Prop = ToggleProps & {
};

export const ThemeSwitch: React.FC<Prop> = ({ ...props }) => (
  <Toggle
    {...props}
    icon={props.value ? FontIconName.Dark : FontIconName.Light}
  />
);
