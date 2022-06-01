/* eslint-disable */
import styles from "./styles.module.scss";
import lockred from "../ModalIcons/lockred.svg";
import link from "../ModalIcons/plain.svg";
import wallet from "../ModalIcons/letter.svg";
import down from "../ModalIcons/download (1) 1.svg";
import React from "react";

const WalletIsNotConnected = () => {


    return (
        <div className={styles.background}>
            <div className={styles.modal}>
                <div className={styles.login}>
                    <div className={styles.lock}>
                        <div><img src={lockred} alt='' /></div>
                        <div className={styles.title}>WALLET IS NOT CONNECTED</div>
                    </div>
                </div>

                <div className={ styles.subtitle}>
                    Don’t have a dapp wallet?
                     <span className={styles.lin}>  What is this?  </span>
                </div>
                <div className={styles.variant}> WE RECOMMEND</div>

                <div className={styles.row}>
                    <div className={styles.col}>
                        <div>
                            <img src={link} alt=''/>
                        </div>
                        <div className={styles.icon_text}>Tron Link</div>
                        <button className={styles.button}><div className={styles.button_text}> <img src={down} alt=''/>  INSTALL</div></button>
                    </div>
                    <div className={styles.col}>
                        <div>
                            <img src={wallet} alt=''/>
                        </div>
                        <div className={styles.icon_text}>Tron Wallet</div>
                        <button className={styles.button}><div className={styles.button_text}> <img src={down} alt=''/>  INSTALL</div></button>
                    </div>
                </div>

                <div className={styles.context}>
                    Compatible DAPP WALLET or browser extension not detected.
                </div>

                <div className={styles.main}>
                    <div className={styles.close} >BACK</div>
                </div>
            </div>
        </div>

    );
};
export { WalletIsNotConnected };