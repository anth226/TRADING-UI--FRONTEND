/* eslint-disable */
import React, {FC, useState} from 'react';
import styles from './styles.module.scss';
import arrow from '../../../../../libs/assets/images/arrow-back.svg'
import { FontIcon, FontIconName } from '@option-blitz/libs/components/inputs/FontIcon';
interface Props {
  onBack?: () => void
  isMobile?: boolean
}



const Notifications: FC<Props> = ({
                                    onBack,
                                    isMobile,
                                  }) => {



  const view = <svg width="29" height="10" viewBox="0 0 29 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="29" height="10" rx="2" fill="#F08F1C"/>
    <rect width="29" height="10" rx="2" fill="#F08F1C"/>
    <rect width="29" height="10" rx="2" fill="#F08F1C"/>
    <path d="M4.942 2.8C4.982 2.8 5.01 2.806 5.026 2.818C5.046 2.83 5.064 2.85 5.08 2.878L6.838 6.106C6.85 6.134 6.874 6.148 6.91 6.148H6.94C6.968 6.148 6.99 6.134 7.006 6.106L8.74 2.878C8.764 2.826 8.81 2.8 8.878 2.8H9.664C9.712 2.8 9.74 2.814 9.748 2.842C9.76 2.866 9.756 2.898 9.736 2.938L7.768 6.544C7.668 6.728 7.57 6.85 7.474 6.91C7.378 6.97 7.266 7 7.138 7H6.79C6.634 7 6.504 6.97 6.4 6.91C6.3 6.85 6.2 6.728 6.1 6.544L4.108 2.938C4.088 2.898 4.082 2.866 4.09 2.842C4.102 2.814 4.134 2.8 4.186 2.8H4.942ZM11.2697 2.8C11.3577 2.8 11.4017 2.844 11.4017 2.932V6.868C11.4017 6.956 11.3577 7 11.2697 7H10.6217C10.5297 7 10.4837 6.956 10.4837 6.868V2.932C10.4837 2.844 10.5297 2.8 10.6217 2.8L11.2697 2.8ZM16.7125 2.8C16.8045 2.8 16.8505 2.844 16.8505 2.932V3.502C16.8505 3.59 16.8045 3.634 16.7125 3.634H14.0905C13.9345 3.634 13.8045 3.648 13.7005 3.676C13.6005 3.7 13.5185 3.744 13.4545 3.808C13.3945 3.868 13.3525 3.952 13.3285 4.06C13.3045 4.164 13.2925 4.294 13.2925 4.45V4.51H16.6825C16.7705 4.51 16.8145 4.554 16.8145 4.642V5.116C16.8145 5.204 16.7705 5.248 16.6825 5.248H13.2925V5.35C13.2925 5.506 13.3045 5.638 13.3285 5.746C13.3525 5.85 13.3945 5.934 13.4545 5.998C13.5185 6.058 13.6005 6.102 13.7005 6.13C13.8045 6.154 13.9345 6.166 14.0905 6.166H16.7125C16.8045 6.166 16.8505 6.21 16.8505 6.298V6.868C16.8505 6.956 16.8045 7 16.7125 7H14.0725C13.7685 7 13.5105 6.972 13.2985 6.916C13.0865 6.86 12.9125 6.77 12.7765 6.646C12.6445 6.518 12.5465 6.354 12.4825 6.154C12.4225 5.95 12.3925 5.704 12.3925 5.416V4.384C12.3925 4.096 12.4225 3.852 12.4825 3.652C12.5465 3.452 12.6445 3.29 12.7765 3.166C12.9125 3.038 13.0865 2.946 13.2985 2.89C13.5105 2.83 13.7685 2.8 14.0725 2.8H16.7125ZM18.3661 2.8C18.4061 2.8 18.4341 2.826 18.4501 2.878L19.4221 6.106C19.4261 6.134 19.4421 6.148 19.4701 6.148H19.5001C19.5241 6.148 19.5401 6.134 19.5481 6.106L20.5201 3.148C20.5641 3.012 20.6221 2.92 20.6941 2.872C20.7661 2.824 20.8561 2.8 20.9641 2.8H21.5581C21.6901 2.8 21.7901 2.826 21.8581 2.878C21.9301 2.93 21.9881 3.02 22.0321 3.148L23.0281 6.106C23.0361 6.134 23.0521 6.148 23.0761 6.148H23.1121C23.1361 6.148 23.1521 6.134 23.1601 6.106L24.1081 2.878C24.1161 2.846 24.1281 2.826 24.1441 2.818C24.1641 2.806 24.1841 2.8 24.2041 2.8L25.0141 2.8C25.0461 2.8 25.0641 2.814 25.0681 2.842C25.0761 2.87 25.0741 2.902 25.0621 2.938L23.9101 6.544C23.8541 6.724 23.7921 6.846 23.7241 6.91C23.6561 6.97 23.5641 7 23.4481 7L22.7461 7C22.6301 7 22.5381 6.968 22.4701 6.904C22.4061 6.84 22.3441 6.72 22.2841 6.544L21.3421 3.694C21.3381 3.666 21.3221 3.652 21.2941 3.652H21.2701C21.2421 3.652 21.2261 3.666 21.2221 3.694L20.2681 6.544C20.2081 6.72 20.1441 6.84 20.0761 6.904C20.0121 6.968 19.9221 7 19.8061 7H19.1221C19.0541 7 18.9941 6.994 18.9421 6.982C18.8941 6.97 18.8501 6.948 18.8101 6.916C18.7701 6.88 18.7341 6.832 18.7021 6.772C18.6741 6.712 18.6461 6.636 18.6181 6.544L17.5141 2.938C17.5021 2.898 17.4981 2.866 17.5021 2.842C17.5101 2.814 17.5301 2.8 17.5621 2.8H18.3661Z" fill="white"/>
  </svg>

  const [close,setClose] = useState(false)
  const closeHandler = () => setClose(true)

  // @ts-ignore
  return (
      <div className={isMobile ? styles.wrapMobile: styles.wrap}>
        <div className={styles.title_wrap}>
          <div style={{display:'flex', alignItems: 'center'}}>
            { isMobile ? <FontIcon  size={17} name={FontIconName.Fire} className={styles.fire} /> : ''}
            <p className={styles.title}>NOTIFICATIONS</p>
          </div>

          <button onClick={onBack} className={ isMobile ? styles.none  : styles.arrow_wrap}>
            <img src={arrow} alt='back' />
          </button>
        </div>
        <div className={close ? styles.rowClosed : styles.row}>
          <div className={styles.modal}>
            <div><FontIcon name={FontIconName.Info} size={10}/></div>
            <div className={styles.col}>
              <div>Connect your Telegram account now to receive notifications.</div>
              <div>Visit:</div>
              <a href='https://t.me/optionblitz_bot' className={styles.href}>https://t.me/optionblitz_bot</a>
              <div>and follow the instructions</div>
            </div>
            <div onClick={closeHandler}><FontIcon name={FontIconName.Close} size={10}/></div>
          </div>
        </div>
        <div className={styles.scroll}>
          <div className={styles.days}>TODAY</div>

          <div className={styles.card}>
            <div className={styles.background}><FontIcon name={FontIconName.Checked} size={11} className={styles.checked} /></div>
            <div className={isMobile ? styles.secondMobile : styles.second}>
              <div className={styles.time}>20 minutes ago</div>
              <div className={styles.fl}>
                <div className={styles.bet}>NEW BET BOW</div>
                <div>{view}</div>
              </div>

              <div className={styles.spase}>
                <div className={ isMobile ? styles.spMobile : styles.sp}>
                  <div className={styles.text}>Trade Amount:</div>
                  <div className={ isMobile ? styles.lineFirstMobile : styles.lineFirst}></div>
                </div>
                <div className={styles.priceWhite}>$75</div>
              </div>

              <div className={styles.spase}>
                <div className={ isMobile ? styles.spMobile : styles.sp}>
                  <div className={styles.text}>Payout:</div>
                  <div className={ isMobile ? styles.lineSecondMobile : styles.lineSecond}></div>
                </div>
                <div className={styles.priceGreen}>$27.5</div>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.background}>
              <FontIcon name={FontIconName.Close} size={11} className={styles.close} />
            </div>
            <div className={isMobile ? styles.secondMobile : styles.second}>
              <div className={styles.time}>20 minutes ago</div>
              <div className={styles.fl}>
                <div className={styles.bet}>NEW BET LOST</div>
                <div>{view}</div>
              </div>

              <div className={styles.spase}>
                <div className={ isMobile ? styles.spMobile : styles.sp}>
                  <div className={styles.text}>Trade Amount:</div>
                  <div className={ isMobile ? styles.lineFirstMobile : styles.lineFirst}></div>
                </div>
                <div className={styles.priceWhite}>$75</div>
              </div>

              <div className={styles.spase}>
                <div className={ isMobile ? styles.spMobile : styles.sp}>
                  <div className={styles.text}>Payout:</div>
                  <div className={ isMobile ? styles.lineSecondMobile : styles.lineSecond}></div>
                </div>
                <div className={styles.priceRed}>$27.5</div>
              </div>
            </div>
          </div>



          <div className={styles.card}>
            <div className={styles.background}>
              <FontIcon name={FontIconName.Notify} size={11} />
            </div>
            <div className={isMobile ? styles.secondMobile : styles.second}>
              <div className={styles.time}>1 hour ago</div>
              <div className={styles.bet}>PRICE ALERT</div>
              <div className={styles.text}>EUR/USD is up +10.06% to 1.3456 in the last 2 hours</div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.background}>
              <FontIcon name={FontIconName.Info} size={11} />
            </div>
            <div className={isMobile ? styles.secondMobile : styles.second}>
              <div className={styles.time}>1 hour ago</div>
              <div className={styles.col}>HAVE YOU TRIED TURBO RUSH?</div>
              <div className={styles.text}>Option Bliz most popular trading product</div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.background}>
              <FontIcon name={FontIconName.Info} size={11} />
            </div>
            <div className={isMobile ? styles.secondMobile : styles.second}>
              <div className={styles.time}>1 hour ago</div>
              <div className={styles.col}>HAVE YOU TRIED TURBO RUSH?</div>
              <div className={styles.text}>Option Bliz most popular trading product</div>
            </div>
          </div>

          <div className={styles.days}>YESTERDAY</div>

          <div className={styles.card}>
            <div className={styles.background}><FontIcon name={FontIconName.Checked} size={11} className={styles.checked} /></div>
            <div className={isMobile ? styles.secondMobile : styles.second}>
              <div className={styles.time}>20 minutes ago</div>
              <div className={styles.fl}>
                <div className={styles.bet}>NEW BET BOW</div>
                <div>{view}</div>
              </div>

              <div className={styles.spase}>
                <div className={ isMobile ? styles.spMobile : styles.sp}>
                  <div className={styles.text}>Trade Amount:</div>
                  <div className={ isMobile ? styles.lineFirstMobile : styles.lineFirst}></div>
                </div>
                <div className={styles.priceWhite}>$75</div>
              </div>

              <div className={styles.spase}>
                <div className={ isMobile ? styles.spMobile : styles.sp}>
                  <div className={styles.text}>Payout:</div>
                  <div className={ isMobile ? styles.lineSecondMobile : styles.lineSecond}></div>
                </div>
                <div className={styles.priceGreen}>$27.5</div>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.background}>
              <FontIcon name={FontIconName.Close} size={11} className={styles.close} />
            </div>
            <div className={isMobile ? styles.secondMobile : styles.second}>
              <div className={styles.time}>20 minutes ago</div>
              <div className={styles.fl}>
                <div className={styles.bet}>NEW BET LOST</div>
                <div>{view}</div>
              </div>

              <div className={styles.spase}>
                <div className={ isMobile ? styles.spMobile : styles.sp}>
                  <div className={styles.text}>Trade Amount:</div>
                  <div className={ isMobile ? styles.lineFirstMobile : styles.lineFirst}></div>
                </div>
                <div className={styles.priceWhite}>$75</div>
              </div>

              <div className={styles.spase}>
                <div className={ isMobile ? styles.spMobile : styles.sp}>
                  <div className={styles.text}>Payout:</div>
                  <div className={ isMobile ? styles.lineSecondMobile : styles.lineSecond}></div>
                </div>
                <div className={styles.priceRed}>$27.5</div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};
export { Notifications };
