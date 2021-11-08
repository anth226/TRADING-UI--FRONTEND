import React, { FC } from 'react';
import classNames from 'classnames';

interface IProps {
  name: FontIconName;
  size?: number;
  className?: string;
}

export enum FontIconName {
  Light = 'icon-light',
  Dark = 'icon-dark',
  Close = 'icon-close',
  SolidArrow = 'icon-arrow-bottom',
  ChevronDown = 'icon-arrow-bottom-1',
  View = 'icon-view',
  Lock = 'icon-lock',
  ArrowRight = 'icon-arrow-right',
  ArrowLeftBold = 'icon-arrow-left-bold',
  ArrowRightBold = 'icon-arrow-right-bold',
  Email = 'icon-email',
  Checked = 'icon-checked',
  Copy = 'icon-copy',
  User = 'icon-user',
  Menu = 'icon-menu',
  Plus = 'icon-plus',
  Minus = 'icon-minus',
  ArrowBigRight = 'icon-right-big',
  CheckedBold = 'icon-ok',
  Info = 'icon-info',
  Settings = 'icon-settings',
  Logout = 'icon-logout',
  Grid = 'icon-grid-mode',

  AffiliateProg = 'icon-affiliate-prog',
  Analytics = 'icon-analytics',
  Binocular = 'icon-binoculars',
  Blx = 'icon-blx',
  Chat = 'icon-chat',
  Fire = 'icon-fire',
  Lightning = 'icon-lightning',
  News = 'icon-news',
  Notify = 'icon-notify',
  OpenPos = 'icon-open-pos',
  Payments = 'icon-payments',
  Player = 'icon-play-circle2',
  Doc = 'icon-doc',
  Stake = 'icon-stake',
  Statistics = 'icon-statistics',
  UnStake = 'icon-unstake',
  Affiliates = 'icon-affiliates-1',
  ZoomIn = 'icon-zoom-in',
  ZoomOut = 'icon-zoom-out',
  AddUser = 'icon-user-add',
  ChartLine = 'icon-chart-line',
  ChartBar = 'icon-chart-bar',
}

const FontIcon: FC<IProps> = ({ name, size = 24, className }) => (
  <i className={classNames(name, className)} style={{ fontSize: size }} />
);

export { FontIcon };
