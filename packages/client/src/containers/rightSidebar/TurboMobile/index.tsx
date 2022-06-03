/* eslint-disable */
import {RightSidebarNavigation} from "@option-blitz/libs/components/rightSidebar/RightSidebarNavigation";
import styles from "../TouchMobile/styles.module.scss";
import {Collapse} from "@option-blitz/libs/components/common/Collapse";
import {RightSidebarTime} from "@option-blitz/libs/components/rightSidebar/RightSidebarTime";
import {RightSidebarReturns} from "@option-blitz/libs/components/rightSidebar/RightSidebarReturns";

import React, {FC} from "react";


interface Props {
    mainChart?: React.ReactNode
}

const TurboMobile: FC<Props> = ({ mainChart }) => {


return (
    <RightSidebarNavigation isMobile>
        <div className={styles.chart_wrap}>
            {mainChart}
        </div>

        <div className={styles.trade}>

            <div className={styles.trades_wrap}>
                <Collapse
                    className={styles.collapse}
                    title="Option builder"
                    titleClassName={styles.collapse_title}

                >
                    <div className={styles.checkbox_wrap}>
                    </div>
                    <div className={styles.checkbox_wrap}>

                    </div>
                </Collapse>

                <div className={styles.input_wrap}>

                    <RightSidebarTime type="small" className={styles.time} />
                </div>
                <RightSidebarReturns className={styles.returns} type="small" percents="200" balance="0.00" />

            </div>
        </div>

        <div className={styles.positions_wrap}>

        </div>

        <div className={styles.open_orders}>

        </div>
    </RightSidebarNavigation>
);
};

export { TurboMobile };