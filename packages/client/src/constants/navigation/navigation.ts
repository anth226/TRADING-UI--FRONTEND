export enum Navigation {
  HotAssets = 'HotAssets',
  WatchList = 'WatchList',
  Notifications = 'Notifications',
  News = 'News',
  OpenPositions = 'OpenPos',
  Signals = 'Signals',
  Chat = 'Chat',
  VideoTutorials = 'VideoTutorials',
}

export const navigationNames: Record<Navigation, string> = {
  [Navigation.HotAssets]: 'Hot Assets',
  [Navigation.WatchList]: 'Watchlist',
  [Navigation.Notifications]: 'Notifications',
  [Navigation.News]: 'News',
  [Navigation.OpenPositions]: 'Open Positions',
  [Navigation.Signals]: 'Signals',
  [Navigation.Chat]: 'Chat',
  [Navigation.VideoTutorials]: 'Video Tutorials',
};

export enum RootPart {
  Trading = 'Trading',
  Staking = 'Staking',
  Affiliates = 'Affiliates',
}

export const rootPartNames: Record<RootPart, string> = {
  [RootPart.Trading]: 'Trading',
  [RootPart.Staking]: 'Staking',
  [RootPart.Affiliates]: 'Affiliates',
};
