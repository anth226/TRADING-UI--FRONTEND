/* eslint-disable */
import styles from "../styles.module.scss";
import {FontIcon, FontIconName} from "@option-blitz/libs/components/inputs/FontIcon";
import {TextInput} from "@option-blitz/libs/components/inputs/TextInput";
import Button from "@option-blitz/libs/components/inputs/Button";
import React from "react";
interface Props {
    active?: boolean
    setActive?: any
    setSuccess?:boolean
}

const EditCampaign = ({active, setActive}:Props) => {

    const close = () => {
        setActive(false)
    }
    return (
        <div className={active ? styles.backfon: styles.none}>
        <div className={styles.modal_camp}>

        <div className={styles.border}>
        <div className={styles.row}>
        <div className={styles.title} >
            EDIT CAMPAIGN
    </div>
    <button type='button' onClick={close}>
    <FontIcon name={FontIconName.Close} size={12}/>
    </button>
    </div>

    <hr className={styles.hr} />

    <div className={styles.row}>
    <div  className={styles.input_mod_camp}>
    <TextInput
        className={styles.input_mod_camp_text }
    type={'text'}
    placeholder={'CAMPAIGN NAME'}
    />
    </div>
    </div>
    <div className={styles.butt}>
    <Button className={styles.button}> SAVE </Button>
        </div>
        </div>
        </div>
        </div>
);
};
export { EditCampaign };