/* eslint-disable */
/* ts-ignore */
import React, { useState } from 'react';
import Button from '@option-blitz/libs/components/inputs/Button';
import styles from './styles.module.scss';
import { FontIcon, FontIconName } from '@option-blitz/libs/components/inputs/FontIcon';
import pointer from '../ModalIcons/pointer.svg'
import fox from '../ModalIcons/fox.svg'
import lock from '../ModalIcons/lock.svg'
import googl from '../ModalIcons/googl.svg'
import facebook from '../ModalIcons/facebook.svg'
import twit from '../ModalIcons/twit.svg'
import { ethers } from 'ethers';

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


const LoginModal = ({active, setActive, setKey, setCreateaccount , isMobile, }:Props) => {


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


  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  const [connButtonText, setConnButtonText] = useState('Connect Wallet');

  const connectWalletHandler = () => {
    if (window.ethereum && window.ethereum.isMetaMask) {
      window.ethereum.request({ method: 'eth_requestAccounts'})
        .then((result: any) => {
          accountChangedHandler(result[0]);
          setConnButtonText('Wallet Connected');
          getAccountBalance(result[0]);
        })
        .catch((error: any) => {
          setErrorMessage(error.message);
        });

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

  window.ethereum.on('accountsChanged', accountChangedHandler);

  window.ethereum.on('chainChanged', chainChangedHandler);

  // async function execute() {
  //   if (typeof window.ethereum !== "undefined") {
  //     const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  //     const abi = [
  //       {
  //         inputs: [
  //           {
  //             internalType: "string",
  //             name: "_name",
  //             type: "string",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "_favoriteNumber",
  //             type: "uint256",
  //           },
  //         ],
  //         name: "addPerson",
  //         outputs: [],
  //         stateMutability: "nonpayable",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "string",
  //             name: "",
  //             type: "string",
  //           },
  //         ],
  //         name: "nameToFavoriteNumber",
  //         outputs: [
  //           {
  //             internalType: "uint256",
  //             name: "",
  //             type: "uint256",
  //           },
  //         ],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "uint256",
  //             name: "",
  //             type: "uint256",
  //           },
  //         ],
  //         name: "people",
  //         outputs: [
  //           {
  //             internalType: "uint256",
  //             name: "favoriteNumber",
  //             type: "uint256",
  //           },
  //           {
  //             internalType: "string",
  //             name: "name",
  //             type: "string",
  //           },
  //         ],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [],
  //         name: "retrieve",
  //         outputs: [
  //           {
  //             internalType: "uint256",
  //             name: "",
  //             type: "uint256",
  //           },
  //         ],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "uint256",
  //             name: "_favoriteNumber",
  //             type: "uint256",
  //           },
  //         ],
  //         name: "store",
  //         outputs: [],
  //         stateMutability: "nonpayable",
  //         type: "function",
  //       },
  //     ];
  //     const provider = new ethers.providers.Web3Provider(window.ethereum);
  //     const signer = provider.getSigner();
  //     console.log(signer, 'signer');
  //     const contract = new ethers.Contract(contractAddress, abi, signer);
  //     try {
  //       await contract.store(42);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   } else {
  //     "Please install MetaMask";
  //   }
  // }



  return (

    <div className={active ? styles.background : styles.modalInviseble}>

          <div className={ styles.modal}>

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
      <div>
        <div>
          <button onClick={connectWalletHandler}>{connButtonText}</button>
          <div>
            <h3>Address: {defaultAccount}</h3>
          </div>
          <div>
            <h3>Balance: {userBalance}</h3>
          </div>
          {errorMessage}
        </div>
      </div>
    </div>

  );
};
export { LoginModal };
