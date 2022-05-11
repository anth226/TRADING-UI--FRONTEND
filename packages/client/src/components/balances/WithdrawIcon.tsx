/* eslint-disable */
import React, {FC} from 'react';

interface Props {
    color: string
}
const WithdrawIcon: FC<Props> = ({color}) => {
    return (
        <svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.0001 4.37113e-07L-1.28269e-05 6L10.0001 6L5.0001 4.37113e-07Z" fill="#59648A"/>
            <line y1="-1" x2="10" y2="-1" transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 4.00012 15)" stroke="#59648A" stroke-width="2"/>
        </svg>
    );
};

export {WithdrawIcon};
