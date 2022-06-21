/* eslint-disable */
import React, {FC, useState} from "react";
import {MainLayout} from "../../../layouts/MainLayout";
import styles from "../styles.module.scss";
import {FontIcon, FontIconName} from "@option-blitz/libs/components/inputs/FontIcon";
import {DefaultSelect} from "@option-blitz/libs/components/inputs/DefaultSelect";
import {TextInput} from "@option-blitz/libs/components/inputs/TextInput";
import Table from "@option-blitz/libs/components/inputs/Table";
import {columns} from "./columns";
import {firm} from "./campaigns_data";

interface Props {
    isMobile?: boolean
}

const AffiliateBLX:FC<Props> = ({isMobile}) => {


    return (
            <div className={styles.promo}>
                <h3 className={styles.title}>THX Token Campaing</h3>
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
                            <button className={styles.button}>
                                <p className={styles.button_text}>
                                    ADD CAMPAIGN
                                </p>
                            </button>
                        </div>
                    </div>
                )}
                {isMobile && (
                    <div className={styles.row}>
                        <div>
                            <div className={styles.col}>
                                <div>
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
                                <div className={styles.but}>
                                    <button className={styles.button}>
                                        <p className={styles.button_text}>
                                            ADD CAMPAIGN
                                        </p>
                                    </button>
                                </div>

                            </div>
                        </div>

                    </div>
                )}

                <div className={styles.tabblx}>
                    <Table  columns={ columns } data={firm} />
                </div>

            </div>
    );
};

export default AffiliateBLX;