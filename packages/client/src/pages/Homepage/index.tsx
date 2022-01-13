import React, { FC } from 'react';
import { MainLayout } from '../../layouts/MainLayout';
import { HomeDemo } from '../../containers/home/HomeDemo';

interface IProps {}

const Homepage: FC<IProps> = () => (
  <MainLayout>
    <HomeDemo />
  </MainLayout>
);

export { Homepage };
