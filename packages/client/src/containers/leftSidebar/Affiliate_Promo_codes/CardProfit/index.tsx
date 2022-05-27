/* eslint-disable */
import React, {FC} from "react";
import styles from "styles.module.scss";
import hotAssetsDiagram from "@option-blitz/libs/assets/images/hot_assets_diagram.svg";



interface Props {
    title?: string
    firstValue?: string
    secondValue?: string
    className?: string
}

const ProfitCard: FC<Props> = ({
                                      title,
                                      firstValue,
                                      secondValue,
                                      className,
                                  }) => {
    return (
        <>
                <a className={className}>
                    <div className={styles.title_wrap}>
                        <div className={styles.coin_wrap}>
                            <p className={styles.title}>{title}</p>
                        </div>

                        <div className={styles.info_wrap}>
                            <p className={styles.first_value}>{firstValue}</p>
                            <span className={styles.second_value}>{secondValue}</span>
                        </div>
                    </div>
                    <img className={styles.diagram} src={hotAssetsDiagram} alt="diagram" />
                </a>
        </>
    );
};

export { ProfitCard };