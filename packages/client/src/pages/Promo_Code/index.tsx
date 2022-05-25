/* eslint-disable */
import React, {FC, useState} from "react";
import {MainLayout} from "../../layouts/MainLayout";
// import styles from "../Selections/styles.module.scss";
import styles from './styles.module.scss'
import BinaryOptionsTab from "../../components/select/BinaryOptionsTab/BinaryOptionsTab";
import {FontIcon, FontIconName} from "@option-blitz/libs/components/inputs/FontIcon";
import {DefaultSelect} from "@option-blitz/libs/components/inputs/DefaultSelect";
import {TextInput} from "@option-blitz/libs/components/inputs/TextInput";
import Table from "@option-blitz/libs/components/inputs/Table";
import {columns} from './columns'
import {tiket} from "./promcod_data";


const Promocode:FC = () => {
    const [activeInfo, setActiveInfo] = useState(true)
    const [activesaccess, setActivesaccess] = useState(true)

    const closeinfo = () => {
        setActiveInfo(false)
    }

    const closesuccess = () => {
        setActivesaccess(false)
    }


    return (
        <MainLayout>
  <div
      className={styles.promo}
  >
        <h3 className={styles.title}>My Promo Codes</h3>

      <div className= {activeInfo === true ? styles.info: styles.none}>
          <div className={styles.icon}>
              <FontIcon name={FontIconName.Info} size={15}/>
          </div>
          <div className={styles.info_text}>
              <p>
                  Create custom promo codes for your referrals' deposits!
                  You'll be able to use these codes in your new advertising campaigns.
                  When a new member signs up using your partner link, they will be offered
                  a bonus for their Live account. Give out your personal promo codes to your
                  referrals any way you like it!
              </p>
              <p>Attention! We have a very cool and important feature to announce! If your promo
                  code is used by a client who is not registered under any partner, they will be
                  registered under you as their referrer as soon as the code is activated. You can
                  create no more than 3 promo codes in 30 days.
              </p>
          </div>
          <div className={styles.icon}
               onClick={() => closeinfo()}>
              <FontIcon name={FontIconName.Close} size={12}/>
          </div>
      </div>


      <div className= {activesaccess === true ? styles.success: styles.none}>
          <div className={styles.row}>
              <div className={styles.icon_check} >
                  <FontIcon name={FontIconName.CheckedBold} size={15}/>
              </div>
              <div className={styles.success_text}>
                  <p className={styles.info_text}>
                      Promo code have been created
                  </p>
              </div>
          </div>
          <div className={styles.icon}
               onClick={() => closesuccess()}
              >
              <FontIcon name={FontIconName.Close} size={12}/>
          </div>
      </div>



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
              <button className={styles.button}
              onClick={() => close()}>
                  <p className={styles.button_text}>
                      ADD PROMO CODES
                  </p>
              </button>
          </div>
      </div>

      <div className={styles.tabule}>
          <Table  columns={ columns } data={tiket} />
      </div>
     {/*< NewPromoCode/>*/}

  </div>
        </MainLayout>
    );
};

export default Promocode;