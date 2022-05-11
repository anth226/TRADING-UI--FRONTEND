import React, { FC } from 'react';

interface Props {
  color: string
}
const DepositIcon: FC<Props> = () => (
  <svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.0001 15L-1.28269e-05 9L10.0001 9L5.0001 15Z" fill="#59648A" />
    <line x1="5.00012" y1="4.37114e-08" x2="5.00012" y2="10" stroke="#59648A" strokeWidth="2" />
  </svg>

);

export { DepositIcon };
