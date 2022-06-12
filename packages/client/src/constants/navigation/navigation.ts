export enum Navigation {
  HotAssets = 'HotAssets',
  WatchList = 'WatchList',
  Notifications = 'Notifications',
  News = 'News',
  OpenPositions = 'OpenPos',
  Signals = 'Signals',
  Chat = 'Chat',
  VideoTutorials = 'VideoTutorials',
  
  Stake = 'Stake',
  UnStake = 'UnStake',
  Analytics = 'Analytics',
  BLX = 'BLX',
  
  MyAffiliateProg = 'MyAffiliateProg',
  PromotionalTools = 'PromotionalTools',
  Statistics = 'Statistics',
  Payments = 'Payments',
  AffiliateNews = 'AffiliateNews',

  Info = 'Info',
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
  
  [Navigation.Stake]: 'Stake',
  [Navigation.UnStake]: 'UnStake',
  [Navigation.Analytics]: 'Analytics',
  [Navigation.BLX]: 'BLX',
  
  [Navigation.MyAffiliateProg]: 'My Affiliate Prog.',
  [Navigation.PromotionalTools]: 'Promotional Tools',
  [Navigation.Statistics]: 'Statistics',
  [Navigation.Payments]: 'Payments',
  [Navigation.AffiliateNews]: 'Affiliate News',

  [Navigation.Info]: 'Info',

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
