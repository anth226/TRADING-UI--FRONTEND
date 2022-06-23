/* eslint-disable */
import React, {FC} from "react";
import styles from "../../styles.module.scss";
import hotAssetsDiagram from "@option-blitz/libs/assets/images/hot_assets_diagram.svg";
import Referals from '../../../../components/staking/graf/Referals/Referals';
import { TradingVolume } from '../../../../components/staking/graf/TradingVolume/TradingVolume';
import DoughnutS from '../../../../components/staking/graf/DoughnutSmall/DoughnutS';
import DoughnutB from "../../../../components/staking/graf/DoughnutBig/DoughnutB";
import {FontIcon, FontIconName} from "@option-blitz/libs/components/inputs/FontIcon";


interface Props {
    onBack?: () => void
    isMobile?: boolean
}

const AffiliateDashboard:FC<Props> = ({
    isMobile
                                      }) => {


    return (
        <div className={styles.promo}>
            {!isMobile && (
                <h3 className={styles.title}>Dashboard</h3>
            )}
            {isMobile && (
                <button className={styles.row_bottom_mob} >
                    <FontIcon name={FontIconName.ArrowLeftBold} size={17} />
                    <div style={{marginLeft: '10px'}}>
                        Dashboard
                    </div>
                </button>
            )}

                <div className={isMobile ? styles.mob_row : styles.row}>
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

            {!isMobile && (
                <div className={styles.row_second}>
                    <div className={styles.stat}>
                        <div className={styles.st}>STATISTIC</div>
                        <div className={styles.box}>
                            <div className={styles.boxing}>
                                <DoughnutS/>
                                <DoughnutS/>
                            </div>
                            <div className={styles.boxing}>
                                <DoughnutS/>
                                <DoughnutS/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={styles.st}>Total Trading Volume</div>
                        <div className={styles.boxBig}
                        >
                            <DoughnutB/>
                        </div>
                    </div>
                </div>
            )}
            {isMobile && (
                <div style={{ marginTop: '10px'}}>
                <div className={styles.st}>STATISTIC</div>
                    <div className={styles.mob_row} >
                        <div className={styles.success_text}>
                            <DoughnutS/>
                        </div>
                        <div className={styles.success_text}>
                            <DoughnutS/>
                        </div>
                        <div className={styles.success_text}>
                            <DoughnutS/>
                        </div>
                        <div className={styles.success_text}>
                            <DoughnutS/>
                        </div>
                    </div>
                </div>
            )}

            {!isMobile && (
                <div className={styles.row_second}>
                    <div>
                        <TradingVolume/>
                    </div>
                    <div>
                        <Referals/>
                    </div>
                </div>
            )}
            {isMobile && (
                <div>
                    <div className={styles.mob_row}>
                        <TradingVolume/>
                    </div>
                    <div className={styles.mob_row}>
                        <Referals/>
                    </div>
                </div>
            )}

            </div>
    );
};

export default AffiliateDashboard;
