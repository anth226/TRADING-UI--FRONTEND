/* eslint-disable */
import React, { FC, useState } from 'react';
import styles from './styles.module.scss';
import arrow from '../../../../../libs/assets/images/arrow-back.svg';
import chat from '../../../../../libs/assets/images/chat.svg';
import Button from "@option-blitz/libs/components/inputs/Button";
import Intro from "./intro";
import English from "./english";
import telegram from "@option-blitz/libs/assets/images/tellegram.svg";

interface Props {
    onBack?: () => void;
    isMobile?: boolean;
}
const buttons = [
    {
        name: <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.0455 0H6.95455C3.1196 0 0 3.1196 0 6.95455C0 7.11326 0 14.0678 0 13.9091H4.63636V7.72727H1.54545V6.95455C1.54545 3.97228 3.97228 1.54545 6.95455 1.54545H10.0455C13.0277 1.54545 15.4545 3.97228 15.4545 6.95455V7.72727H12.3636V13.9091H15.4545C15.4545 14.761 14.761 15.4545 13.9091 15.4545H10.8182V17H13.9091C15.6138 17 17 15.6138 17 13.9091C17 13.4118 17 6.76373 17 6.95455C17 3.11955 13.8804 0 10.0455 0Z" fill="#00CD86"/>
        </svg>,
    },
    {
        name: 'English',
    },
    {
        name: 'Russian',
    },
    {
        name: 'Chinese',
    },
]
const Chat: FC<Props> = ({
                             onBack,
                             isMobile,
                         }) => {
    const [activeButton, setActiveButton] = useState(1)
    const whichTab = () => {
        switch (activeButton) {
            case 1:
                return <Intro/>
            case 2:
                return <English/>
            case 3:
                return 'Russian'
            case 4:
                return 'Chinese'
            default:
                return <English/>
        }
    }

    return (

        <div className={isMobile ? styles.wrap_mob : styles.wrap}>
            <div className={styles.chat}>
                {!isMobile && (

                    <div className={styles.title_wrap}>
                        <p className={styles.title}>CHAT</p>
                        <button onClick={onBack} className={styles.arrow_wrap}>
                            <img src={arrow} alt='back' />
                        </button>
                    </div>
                )}
                {isMobile && (
                    <div className={styles.chat_title}>
                        <img src={chat} alt='back' />
                        <p className={styles.title_mob}>CHAT</p>
                    </div>
                )}
                { isMobile && (
                    <div style={{display:'flex',
                        // columnGap: '12px'
                        marginBottom: '30px',
                    }}>
                        {buttons.map((item,i )=>(
                            <Button
                                color={'transparent_primary'}
                                className={activeButton === i + 1 ? styles.buttonActive : styles.button}
                                size={5}
                                onClick={() => setActiveButton(i + 1)}
                            >
                                <p>{item.name}</p>
                            </Button>
                        ))}
                    </div>
                )}
                {isMobile && (
                    <div>
                        {whichTab()}
                    </div>
                )}


                {/*{isMobile && (*/}
                {/*    <Intro />*/}
                {/*)}*/}
                {!isMobile && (
                    <div className={styles.message_inside}>
                        <div className={styles.container}>
                            <div className={styles.circle_left}>J</div>
                            <div className={styles.left}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua.
                            </div>
                        </div>

                        <div className={styles.container}>

                            <div className={styles.right}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </div>
                            {/* <div className={styles.circle_right}>J</div> */}
                        </div>

                        <div className={styles.container}>
                            <div className={styles.circle_left}>J</div>
                            <div className={styles.left}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua.
                            </div>
                        </div>
                    </div>
                )}
                <div className={isMobile ? styles.message_mob : styles.message }>
                    Message
                    <img src={telegram} alt='icon' />
                </div>
            </div>
        </div>
    );
};
export { Chat };
