/* eslint-disable */
import {TableCell as Cell} from "@option-blitz/libs/components/inputs/Table/types";
import React from "react";
import {Campaign} from "./typesCampaign";
import Button from "@option-blitz/libs/components/inputs/Button";
import {CopyText} from "@option-blitz/libs/components/inputs/CopyText";
import styles from "./../styles.module.scss";


export const columns = [
    { Header: 'Sl. No.', accessor: 'number',
        Cell: ({ row }: Cell<Campaign>) => {
            const { number } = row.original;
            return (
                <div className={styles.rowcam}>
                    {number}
                </div>
            );
        },
    },
    { Header: 'Campaing name', accessor: 'campaignname' ,
        Cell: ({ row }: Cell<Campaign>) => {
            const { campaignname } = row.original;
            return (
                <div className={styles.rowcam}>
                    {campaignname}
                </div>
            );
        },},
    { Header: 'Created ON', accessor:'createdon',
        Cell: ({ row }: Cell<Campaign>) => {
            const { createdon } = row.original;
            return (
                <div className={styles.rowcam}>
                    {createdon}
                </div>
            );
        },},
    { Header: 'Registration', accessor:'registrations',
        Cell: ({ row }: Cell<Campaign>) => {
            const { registrations } = row.original;
            return (
                <div className={styles.rowcam}>
                    {registrations}
                </div>
            );
        },},
    { Header: ' Link', accessor:'linked',
        Cell: ({ row }: Cell<Campaign>) => {
            const { linked} = row.original;
            return (
                    <div>
                        <CopyText
                            value={linked}
                        />
                    </div>
            );
        },
    },
    { Header: 'Actions', accessor: 'actions',
        Cell: ({ row }: Cell<Campaign>) => {
            const { } = row.original;
            return (
                <div>
                    <Button size={34}
                        color={"transparent_primary"}
                    className={styles.button_tab}>
                        EDIT
                    </Button>
                </div>

            );
        },
    },
];



