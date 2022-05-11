/* eslint-disable */
import React, {FC} from 'react';

interface Card {
    id: number,
    img: string
}
interface Props {
    data: Card[]
}
const CardList: FC<Props> = ({data}) => {
    return (
        <div>
            {data.map(card => (
                <img src={card.img}/>
            ))}
        </div>
    );
};

export default CardList;
