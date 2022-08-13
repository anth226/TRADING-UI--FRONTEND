// @ts-ignore
/* eslint-disable */
import React, { FC } from 'react';
import { MainRouter } from '../MainRouter';
import { useOptionBlitz } from '../../../hooks/OptionBlitzProvider';

const App: FC = () => {
  const data = useOptionBlitz()
  return (
    <>
      <MainRouter />
    </>
  );
};

export { App };
