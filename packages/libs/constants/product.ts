export enum ProductType {
  Binary = 'Binary',
  Touch = 'Touch',
  NoTouch = 'NoTouch',
  Classic = 'Classic',
  Rush = 'Rush',
  Turbo = 'Turbo',
}

export const productTypeNames: Record<ProductType, string> = {
  [ProductType.Binary]: 'Binary',
  [ProductType.Touch]: 'Touch',
  [ProductType.NoTouch]: 'No Touch',
  [ProductType.Classic]: 'Classic',
  [ProductType.Rush]: 'Rush',
  [ProductType.Turbo]: 'Turbo',
};
