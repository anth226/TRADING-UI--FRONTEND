/* eslint-disable */
import {FontIcon, FontIconName} from "@option-blitz/libs/components/inputs/FontIcon";
import styles from "../styles.module.scss";
import Button from "@option-blitz/libs/components/inputs/Button";
import React from "react";
import {TextInput} from "@option-blitz/libs/components/inputs/TextInput";

const AddCampaign = () => {

    return (
        <div className={styles.backfon}>
            <div className={styles.modal_camp}>

                <div className={styles.border}>
                    <div className={styles.row}>
                        <div className={styles.title} >
                            ADD CAMPAIGN
                        </div>
                        <div >
                            <FontIcon name={FontIconName.Close} size={12}/>
                        </div>
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
                        <Button className={styles.button}> SUBMIT </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export { AddCampaign };