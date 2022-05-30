/* eslint-disable */
import React, {FC} from "react";
import styles from "../../styles.module.scss";
import hotAssetsDiagram from "@option-blitz/libs/assets/images/hot_assets_diagram.svg";
import smalcir from "@option-blitz/libs/assets/images/Group 1140.svg"
import bigcir from "@option-blitz/libs/assets/images/Group 1136.svg"
import volumtraid from "@option-blitz/libs/assets/images/Group 990.svg"
import product from "@option-blitz/libs/assets/images/Frame 989.png"

const AffiliateDashboard:FC = () => {


    return (
        <div className={styles.promo}>
            <h3 className={styles.title}>Dashboard</h3>

            <div className={styles.row}>
                <div className={styles.profitcard}>
                        <div className={styles.row_text}>
                            <div>
                                <p className={styles.title}>TODAY</p>
                            </div>
                            <div className={styles.col}>
                                <p className={styles.val}>$110.00</p>
                                <span className={styles.pin}>+8.86%</span>
                            </div>
                        </div>
                        <div className={styles.img}>
                            <img className={styles.diagram} src={hotAssetsDiagram} alt="diagram" />
                        </div>
                </div>
                <div className={styles.profitcard}>
                    <div className={styles.row_text}>
                        <div>
                            <p className={styles.title}>YESTERDAY</p>
                        </div>
                        <div className={styles.col}>
                            <p className={styles.val}>$122.00</p>
                            <span className={styles.pin}>+9.21%</span>
                        </div>
                    </div>
                    <div className={styles.img}>
                        <img className={styles.diagram} src={hotAssetsDiagram} alt="diagram" />
                    </div>
                </div>
                <div className={styles.profitcard}>
                    <div className={styles.row_text}>
                        <div>
                            <p className={styles.title}>LAST MONTH</p>
                        </div>
                        <div className={styles.col}>
                            <p className={styles.val}>$190.00</p>
                            <span className={styles.pin}>+9.06%</span>
                        </div>
                    </div>
                    <div className={styles.img}>
                        <img className={styles.diagram} src={hotAssetsDiagram} alt="diagram" />
                    </div>
                </div>
                <div className={styles.profitcard}>
                    <div className={styles.row_text}>
                        <div>
                            <p className={styles.title}>THIS MONTH</p>
                        </div>
                        <div className={styles.col}>
                            <p className={styles.val}>133.00</p>
                            <span className={styles.pin}>+5.30%</span>
                        </div>
                    </div>
                    <div className={styles.img}>
                        <img className={styles.diagram} src={hotAssetsDiagram} alt="diagram" />
                    </div>
                </div>
                <div className={styles.profitcard}>
                    <div className={styles.row_text}>
                        <div>
                            <p className={styles.title}>AVERAGE COMMISSION</p>
                        </div>
                        <div className={styles.col}>
                            <p className={styles.val}>163.00</p>
                            <span className={styles.pin}>+6.04%</span>
                        </div>
                    </div>
                    <div className={styles.img}>
                        <img className={styles.diagram} src={hotAssetsDiagram} alt="diagram" />
                    </div>
                </div>
                <div className={styles.profitcard}>
                    <div className={styles.row_text}>
                        <div>
                            <p className={styles.title}>HIGHEST COMMISSION</p>
                        </div>
                        <div className={styles.col}>
                            <p className={styles.val}>$140.00</p>
                            <span className={styles.pin}>+3.02%</span>
                        </div>
                    </div>
                    <div className={styles.img}>
                        <img className={styles.diagram} src={hotAssetsDiagram} alt="diagram" />
                    </div>
                </div>
            </div>

            <div className={styles.row_second}>
                <div>
                    <img src={smalcir} alt='diagram'/>

                </div>

                <div>
                    <div className={styles.traiding}>
                        <img src={bigcir} alt='diagram'/>
                    </div>
                </div>
            </div>

            <div className={styles.row_second}>
                <div>
                    <img src={volumtraid} alt='diagram' />
                </div>
                <div>
                    <img  src={product} alt='diagram'/>
                </div>
            </div>

        </div>
    );
};

export default AffiliateDashboard;
