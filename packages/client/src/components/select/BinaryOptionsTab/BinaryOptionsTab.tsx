/* eslint-disable */
import React, {FC,useState} from "react";
import {Binary} from "./data";
import styles from "../../../pages/Selections/styles.module.scss";
import useResize from "@option-blitz/libs/hooks/useResize";
import {Forex} from "./Forex/Forex";



const BinaryOptionsTab:FC = () => {

const [activeSubItemtab, setActiveSubItemtab] = useState(0)
    const { isMobile } = useResize();
    const handlerChange = (index: number) => {
        if (activeSubItemtab === index) {
            setActiveSubItemtab(-1)
        } else {
            setActiveSubItemtab(index)
        }
    }

    return (


        <div className={styles.balancesSubInner}>
            {Binary.map((item, index) =>(
                <div key={item.title}
                     className={activeSubItemtab===index ? styles.chouse: styles.nochouse}
                     onClick={()=> handlerChange(index)}>
                     <div >

                    <div className={styles.row}>
                            <img src={item.icon}  alt=''/>
                        <div className={styles.flex}>
                            <div className={styles.titleBlockSub} >
                                <span className={styles.title}> {item.title}</span>
                                <p className={styles.title_text}>{item.text}</p>
                            </div>
                            <div className={styles.badge}>{item.badge}</div>
                        </div>
                        {isMobile && (
                            <div className={activeSubItemtab === index ? styles.check: styles.none}><Forex isMobile /></div>
                        )}

                    </div>
                     </div>
                    <hr className={styles.hr} />

                    </div>
            ))}
        </div>

    );
};

export default BinaryOptionsTab;
