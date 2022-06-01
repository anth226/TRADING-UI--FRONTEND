/* eslint-disable */
import styles from "./styles.module.scss";
import warning from "../ModalIcons/warning.svg";
import Button from "@option-blitz/libs/components/inputs/Button";
import React from "react";

const Warning = () => {

    // const handleChange = () => {
    //     setActive(false);
    // };

    return (
        <div className={styles.background}
            // className={active ? styles.background : styles.modalInviseble}
        >
            <div className={styles.modal}>
                <div className={styles.login}>
                    <div className={styles.lock}>
                        <div><img src={warning} alt='' /></div>
                        <div>WARNING</div>
                    </div>
                </div>
                    <div className={ styles.title}>
                        IF you close this session you will not be able to recover your balance.
                        Use a <span className={styles.lin}>  DAPP WALLET  </span> or create a <span className={styles.lin}>  LOGIN </span> to secure your funds

                     </div>
                <div className={styles.main}>
                    <div className={styles.fonts}>
                        <Button className={styles.button}>CONTINUE</Button>
                    </div>
                    <div className={styles.close} >BACK</div>

                </div>
            </div>
        </div>

    );
};
export { Warning };