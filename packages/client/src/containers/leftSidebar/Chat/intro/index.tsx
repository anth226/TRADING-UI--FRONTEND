/* eslint-disable */
import React from 'react';
import styles from './styles.module.scss';
import Button from "@option-blitz/libs/components/inputs/Button";
import headphon from './../../../../../../libs/assets/images/headphoneswi.svg'
import usa from './../../../../../../libs/assets/images/countries/USA.svg'
import {DefaultSelect, OptionItem} from "@option-blitz/libs/components/inputs/DefaultSelect";

const sortOptions: OptionItem[] = [
    { value: <img src={usa} alt=''/> },
    { value: '2' },
    { value: '3' },
];


const Intro = () => {
    return (
        <div className={styles.container}>

            <div className={styles.wrap}>
                <div className={styles.image}>
                   <img src={headphon} alt=''/>
                </div>
                <div className={styles.text}>
                    Welcome to support. We are available 24/7, just select your language and open Live chat to start
                </div>

                    <div>
                        <DefaultSelect
                            className={styles.select}
                            type={'normal'}
                            // title="Sort by"
                            // onChange={sortChange}
                            options={sortOptions}
                            defaultValue={sortOptions[0]}
                        />
                </div>
                <Button className={styles.button}>
                    OPEN LIVE CHAT
                </Button>
            </div>
        </div>
    );
};

export default Intro;