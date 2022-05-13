/* eslint-disable */
import React, { FC } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Routes } from '../../../constants/routes';
import { Trading } from '../../../pages/Trading';
import { Profile } from '../../../pages/Profile';
import { Balances } from '../../../pages/Balances';
import Selections from '../../../pages/Selections';

interface IProps {}

const MainRouter: FC<IProps> = () => (
  <Switch>
    <Route path={Routes.Trading} component={Trading} exact />
    <Route path={Routes.Profile} component={Profile} exact />
    <Route path={Routes.Balances} component={Balances} exact />
    <Route path={Routes.Selections} component={Selections} exact />
    <Redirect to={Routes.Trading} />
  </Switch>
);

export { MainRouter };
