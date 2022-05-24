/* eslint-disable */
import {TableCell as Cell} from "@option-blitz/libs/components/inputs/Table/types";
import styles from "./styles.module.scss";
import React from "react";
import {Forex} from "../../components/select/BinaryOptionsTab/Forex/types";
import Button from "@option-blitz/libs/components/inputs/Button";

export const columns = [
    { Header: 'Sl. No.', accessor: 'number' },
    { Header: 'Promo code', accessor: 'promocode' },
    { Header: '%Bonus', accessor:'bonus'},
    { Header: '$ Min deposit', accessor:'mindep'},
    { Header: 'Created on', accessor:'createon'},
    { Header: 'Valid until', accessor:'valid'},
    { Header: 'Number of activations', accessor:'numactiv'},
    { Header: 'Activations per gropup', accessor:'activpergroup'},
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