import React, { FC } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Routes } from '../../../constants/routes';
import { Trading } from '../../../pages/Trading';
import { Profile } from '../../../pages/Profile';

interface IProps {}

const MainRouter: FC<IProps> = () => (
  <Switch>
    <Route path={Routes.Trading} component={Trading} exact />
    <Route path={Routes.Profile} component={Profile} exact />
    <Redirect to={Routes.Trading} />
  </Switch>
);

export { MainRouter };
