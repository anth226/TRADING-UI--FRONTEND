/* eslint-disable */
/* ts-ignore */
// @ts-ignore

import React, { useEffect, useState } from 'react';
import Button from '@option-blitz/libs/components/inputs/Button';
import styles from './styles.module.scss';
import { FontIcon, FontIconName } from '@option-blitz/libs/components/inputs/FontIcon';
import pointer from '../ModalIcons/pointer.svg'
import fox from '../ModalIcons/fox.svg'
import lock from '../ModalIcons/lock.svg'
import googl from '../ModalIcons/googl.svg'
import facebook from '../ModalIcons/facebook.svg'
import twit from '../ModalIcons/twit.svg'
import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';
import { NetworkConnector } from '@web3-react/network-connector';
import { ethers } from 'ethers';
import { useOptionBlitz, injectedConnector } from '../../../hooks/OptionBlitzProvider'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { authRefresh, getPreSigned } from '../../../store/auth/actionCreators';
import { Web3Provider } from '@ethersproject/providers';

declare global {
  interface Window{
    ethereum?:any
  }
}

interface Props {
  active?: boolean
  setActive?: any
  setKey?:any
  setCreateaccount?:any
  isMobile?: boolean
}

//let injectedConnector = new InjectedConnector({});

const LoginModal = ({active, setActive, setKey, setCreateaccount , isMobile, }:Props) => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  const [connButtonText, setConnButtonText] = useState('Connect Wallet');
  const {activate , account, library, active:connected} = useWeb3React<unknown>();
  const {jwt} = useOptionBlitz();

  const connectMetaMask = () => {
    activate(injectedConnector)
    .then(()=>{

    })
    .catch(err=>{
      console.log(err);
    })
  }
  const handleChange = () => {
    setActive(false);
  };
  const newModal = () => {
    setActive(false);
    setCreateaccount(true);
  };
  const privatKeyModal = () => {
    setActive(false);
    setKey(true);
  };

  useEffect(()=>{
    if (account) {
      setDefaultAccount(account as any);
      getAccountBalance(account);
    }
  },[account])

  const connectWalletHandler = () => {
    if (window.ethereum && window.ethereum.isMetaMask) {
      console.log(`connect wallet`);
      activate(injectedConnector)
        .then(() => {
          setConnButtonText('Wallet Connected');
        })
        .catch((error: any) => {
          setErrorMessage(error.message);
        })
      // window.ethereum.request({ method: 'eth_requestAccounts'})
      //   .then((result: any) => {
      //     accountChangedHandler(result[0]);
      //     setConnButtonText('Wallet Connected');
      //     getAccountBalance(result[0]);
      //   })
      //   .catch((error: any) => {
      //     setErrorMessage(error.message);
      //   });

    } else {
      console.log('Need to install MetaMask');
      // @ts-ignore
      setErrorMessage('Please install MetaMask browser extension to interact');
    }
  }

  const accountChangedHandler = (newAccount: React.SetStateAction<null>) => {
    setDefaultAccount(newAccount);
    // @ts-ignore
    getAccountBalance(newAccount.toString());
  }

  const getAccountBalance = (account: any) => {
    window.ethereum.request({method: 'eth_getBalance', params: [account, 'latest']})
      .then((balance: any) => {
        // @ts-ignore
        return setUserBalance(ethers.utils.formatEther(balance));
      })
      .catch((error: any) => {
        setErrorMessage(error.message);
      });
  };

  const chainChangedHandler = () => {
    // reload the page to avoid any errors with chain change mid use of application
    window.location.reload();
  }

  // window.ethereum.on('accountsChanged', accountChangedHandler);
  //
  // window.ethereum.on('chainChanged', chainChangedHandler);
  //

  const dispatch = useDispatch()

  return (

    <div className={active ? styles.background : styles.modalInviseble}>

      <div className={styles.modal}>

            <div className={styles.login}>
              <div className={styles.pointer}>
                <div><img src={pointer} alt='' /></div>
                <div>LOGIN</div>
              </div>
              <button type='button' onClick={handleChange}>
                <FontIcon name={FontIconName.Close} size={15} />
              </button>
            </div>
            <div className={styles.main}>
              <div className={styles.method}>SELECT METHOD</div>
              <button onClick={() => dispatch(authRefresh())}>testing</button>
              <div className={styles.fonts}>
                <Button color={'transparent_primary'} className={styles.button} size={27}
                        onClick={privatKeyModal}>
                  <img src={lock} alt='img' className={styles.imgLock} />
                  <p>PRIVATE KEY</p>
                </Button>
                <Button color={'transparent_primary'} className={styles.button} size={27} onClick={connectWalletHandler}>
                  <img src={fox} alt='img' className={styles.imgFox} />
                  <p>METAMASK</p>
                </Button>

            <div className={styles.metamask_message}>
              <button onClick={connectWalletHandler}>{connButtonText}</button>

              <h3 style={{ color: '#00CD86' }}>Address:</h3>
              <h3>{defaultAccount}</h3>

              <div>
                <h3 style={{ color: '#00CD86' }}>Balance: {userBalance}</h3>
              </div>
              {errorMessage}
            </div>
          </div>
          {isMobile && (
            <div className={styles.method_mod}>OR</div>
          )}

          {isMobile && (
            <div className={styles.mob}>

              <Button color={'transparent_primary'} className={styles.button_small} size={27}
                      onClick={privatKeyModal}>
                <img src={googl} alt='img' />
              </Button>

              <Button color={'transparent_primary'} className={styles.button_small} size={27}
                      onClick={privatKeyModal}>
                <img src={facebook} alt='img' />
              </Button>

              <Button color={'transparent_primary'} className={styles.button_small} size={27}
                      onClick={privatKeyModal}>
                <img src={twit} alt='img' />
              </Button>
            </div>
          )}
          <div className={styles.pointer}>REGISTER</div>
          <hr className={styles.hr} />
          <div className={styles.account}>DON'T HAVE AN ACCOUNT?</div>
          <Button className={styles.button} onClick={newModal}> CREATE NEW WALLET</Button>
        </div>
      </div>
    </div>

  );
};
export { LoginModal };
