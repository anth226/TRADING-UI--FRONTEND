/* eslint-disable */
import React, {FC, useState} from "react";
import {MainLayout} from "../../../layouts/MainLayout";
import styles from "../styles.module.scss";
import {DefaultSelect} from "@option-blitz/libs/components/inputs/DefaultSelect";
import {TextInput} from "@option-blitz/libs/components/inputs/TextInput";
import {FontIcon, FontIconName} from "@option-blitz/libs/components/inputs/FontIcon";
import Table from "@option-blitz/libs/components/inputs/Table";
import {columns} from "../BLX_Token/columns";
import {firm} from "../BLX_Token/campaigns_data";
import alerto from './Alert.svg'
import {AddCampaign} from "../Modal/AddCampaign";
import {EditCampaign} from "../Modal/EditCampaign";

interface Props {
    onBack?: () => void
    isMobile?: boolean
}

const AffiliateCampaigns:FC<Props> = ({isMobile}) => {
    const [activealert, setActivealert] = useState(true)
    const [activesaccess, setActivesaccess] = useState(true)
    const [addcampaign, setAddcampaign] = useState(false)
    const [editcampaign, setEditcampaign] = useState(false)

    const closealert = () => {
        setActivealert(false)
    }

    const closesuccess = () => {
        setActivesaccess(false)
    }
    const addCampaign = () => {
        setAddcampaign(true)
    }
     const openedit = () => {
        setEditcampaign(true)
    }

    return (

            <div className={styles.promo}>
                <h3 className={styles.title}>Campaigns</h3>

                <div className= {activesaccess === true ? styles.success: styles.none}>
                    <div className={styles.row}>
                        <div className={styles.icon_check} >
                            <FontIcon name={FontIconName.CheckedBold} size={15}/>
                        </div>
                        <div className={styles.success_text}>
                            <p className={styles.info_text}>
                                Campaign have been successfully added
                            </p>
                        </div>
                    </div>
                    <div className={styles.icon}
                         onClick={() => closesuccess()}
                    >
                        <FontIcon name={FontIconName.Close} size={12}/>
                    </div>
                </div>


                <div className= {activealert === true ? styles.warning: styles.none}>
                    <div className={styles.row}>
                        <div className={styles.icon_check} >
                            <img src={alerto} />
                        </div>
                        <div className={styles.success_text}>
                            <p className={styles.info_text}>
                                Campaign have been successfully added
                            </p>
                        </div>
                    </div>
                    <div className={styles.icon}
                         onClick={() => closealert()}
                    >
                        <FontIcon name={FontIconName.Close} size={12}/>
                    </div>
                </div>

                {!isMobile && (
                    <div className={styles.row}>
                        <div>
                            <div className={styles.inputs}>
                                <div className={styles.sorttit}>
                                    <p className={styles.sort}>
                                        SORT BY
                                    </p>
                                </div>
                                <DefaultSelect
                                    title="Created date"
                                    className={styles.select}
                                />
                                <div className={styles.search}>
                                    <TextInput
                                        left={<FontIcon size={14} className={styles.iconSearch} name={FontIconName.Search}/>}
                                        type={'text'}
                                        placeholder={'Search'}
                                        className={styles.input}
                                    />
                                </div>

                            </div>
                        </div>
                        <div className={styles.but}>
                            <button className={styles.button}
                                    onClick={() => addCampaign()}>
                                <p className={styles.button_text}>
                                    ADD CAMPAIGN
                                </p>
                            </button>
                        </div>
                    </div>
                )}
                {isMobile && (
                    <div className={styles.col}>
                        <div className={styles.mob_inputs}>
                            <DefaultSelect
                                title="Created date"
                                className={styles.select}
                            />
                        </div>
                        <div className={styles.search}>
                            <TextInput
                                left={<FontIcon size={14} className={styles.iconSearch} name={FontIconName.Search}/>}
                                type={'text'}
                                placeholder={'Search'}
                                className={styles.input}
                            />
                        </div>
                        <div className={styles.mob_but}>
                            <button className={styles.button}
                                    onClick={() => addCampaign()}>
                                <p className={styles.button_text}>
                                    ADD CAMPAIGN
                                </p>
                            </button>
                        </div>
                    </div>
                )}

                <div className={styles.tabCamp}>
                    <Table  columns={ columns } data={firm}  />
                </div>
                    <AddCampaign isMobile active={addcampaign} setActive={setAddcampaign}/>
                <EditCampaign active={editcampaign} setActive={setEditcampaign} />
            </div>
    );
};

export default AffiliateCampaigns;

export class openedit {
}