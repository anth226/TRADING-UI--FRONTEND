/* eslint-disable */
import {TableCell as Cell} from "@option-blitz/libs/components/inputs/Table/types";
import styles from "./styles.module.scss";
import React from "react";
import {Forex} from "../../components/select/BinaryOptionsTab/Forex/types";
import Button from "@option-blitz/libs/components/inputs/Button";
import {Promo} from "./typespromo";

export const columns = [
    { Header: 'Sl. No.', accessor: 'number' ,
        Cell: ({ row }: Cell<Promo>) => {
            const { number } = row.original;
            return (
                <div className={styles.rowcam}>
                    {number}
                </div>
            );
        },
    },
    { Header: 'Promo code', accessor: 'promocode',
        Cell: ({ row }: Cell<Promo>) => {
            const { promocode } = row.original;
            return (
                <div className={styles.rowcam}>
                    {promocode}
                </div>
            );
        },
    },
    {
        Header: '%Bonus', accessor: 'bonus',
        Cell: ({row}: Cell<Promo>) => {
            const {bonus} = row.original;
            return (
                <div className={styles.rowcam}>
                    {bonus}
                </div>
            );
        },
    },
    { Header: '$ Min deposit', accessor:'mindep',
        Cell: ({ row }: Cell<Promo>) => {
            const { mindep } = row.original;
            return (
                <div className={styles.rowcam}>
                    {mindep}
                </div>
            );
        },
    },
    { Header: 'Created on', accessor:'createon',
        Cell: ({ row }: Cell<Promo>) => {
            const { createon } = row.original;
            return (
                <div className={styles.rowcam}>
                    {createon}
                </div>
            );
        },
    },
    { Header: 'Valid until', accessor:'valid',
        Cell: ({ row }: Cell<Promo>) => {
            const { valid } = row.original;
            return (
                <div className={styles.rowcam}>
                    {valid}
                </div>
            );
        },
    },
    { Header: 'Number of activations', accessor:'numactiv',
        Cell: ({ row }: Cell<Promo>) => {
            const { numactiv } = row.original;
            return (
                <div className={styles.rowcam}>
                    {numactiv}
                </div>
            );
        },
    },
    { Header: 'Activations per gropup', accessor:'activpergroup',
        Cell: ({ row }: Cell<Promo>) => {
            const { activpergroup } = row.original;
            return (
                <div className={styles.rowcam}>
                    {activpergroup}
                </div>
            );
        },
    },
    { Header: 'Actions', accessor: 'actions',
        Cell: ({ row }: Cell<Forex>) => {
            const { } = row.original;
            return (
                <div>
                    <Button  color="transparent_primary"
                    className={styles.butdel}>
                        DELETE
                    </Button>
                </div>
            );
        },
    },
];