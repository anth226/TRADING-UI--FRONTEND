import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Routes } from '../../../constants/routes';
import { Homepage } from '../../../pages/Homepage';

interface IProps {}

const MainRouter: FC<IProps> = () => (
  <Switch>
    <Route path={Routes.Homepage} component={Homepage} exact />
  </Switch>
);

export { MainRouter };
