/* eslint-disable */
import React, {FC, useState} from "react";
import {Binary} from "./data";
import styles from "../../../pages/Selections/styles.module.scss";




const BinaryOptionsTab:FC = () => {

    const [activeSubItemtab, setActiveSubItemtab] = useState(-1)


    const handlerChange = (index: number) => {
        if (activeSubItemtab === index) {
            setActiveSubItemtab(-1)
            // console.log(Object.keys(dara))
            // for (let key in dara) {
            //     if (key !== title) {
            //        return
            //     }else {
            //         let name = title
            //         console.log(name)
            //     }
            // }
        } else {
            setActiveSubItemtab(index)

        }
    }


    return (



        <div className={styles.balancesSubInner}>
            {Binary.map((item, index) =>(
                <div key={item.title} onClick={()=> handlerChange( index)}>
                    <div className={styles.titleBlockItem}>
                            <img src={item.icon} />
                            <div className={styles.titleBlockSub} >
                                <span className={styles.title}> {item.title}</span>
                                <p className={styles.title_text}>{item.text}</p>
                            </div>
                        <div className={styles.badge}>{item.badge}</div>
                    </div>

                    </div>

            ))}
        </div>
    );
};

export default BinaryOptionsTab;