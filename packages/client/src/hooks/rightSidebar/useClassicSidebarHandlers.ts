import { useCallback, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BigNumber, ethers } from 'ethers';
import {
  HistoryVolatility, OptionAmerican, StakingContract, Treasury, USDC, 
} from 'contracts/typechain-types';
import { OptionContract } from 'contracts/contracts';
import { profitItemsMock } from '../../mock/rightSidebar/classicSidebar';
import { PositionItem } from './useTouchSidebarHandlers';
import { classicSetTargetPrice, classicToggleTakeProfit } from '../../store/classic/actionCreators';
import { useOptionBlitz, Backend } from '../OptionBlitzProvider';
import { OptionBlitz } from '../OptionBlitz';

const positionItems: PositionItem[] = [
  { label: 'Investment', value: '$10' },
  { label: 'Time to expiry', value: '00:04:23' },
  { label: 'Strike price', value: '$60' },
  { label: 'Break-even price', value: '$70' },
  { label: 'Current price', value: '$70' },
  { label: 'Status', value: 'ITM' },
  { label: 'Unrealized PNL', value: '+$10' },
];

type ActiveButton = 'call' | 'put';

export interface ProfitChartItem {
  profitOrLose: number,
  price: number;
  color: string;
  label: string
}
const derivativesBySymbol: Record<string, number> = {
  
};
const derivativesById: Record<number, string> = {
  
};
const getCurrentPrice = (symbol: string, endpoint: string) => {

};
const betToPositionItem = (bet: any, price: number) : PositionItem[] => {
  const investment = bet.investment.toString() / 1000000;
  const priceOpen = bet.priceOpen.toString() / 1000000;
  const currentPrice = price;
  const status = 'ITM';
  const pnl = investment;
  const { timeClose } = bet;
  const expireIn = Math.round(timeClose.toString() - Date.now() / 1000, 0);
  console.log(bet.timeClose.toString(), bet.priceOpen.toString());
  return [
    { label: 'Investment', value: investment.toString() },
    { label: 'Time to expiry', value: expireIn.toString() },
    { label: 'Strike price', value: priceOpen.toString() },
    { label: 'Break-even price', value: ((priceOpen + investment) - currentPrice).toString() },
    { label: 'Current price', value: currentPrice.toString() },
    { label: 'Status', value: status },
    { label: 'Unrealized PNL', value: pnl.toString() },    
  ];
};
const getDerivatives = async (hv?: HistoryVolatility) => hv?.queryFilter(hv.filters.AddNewDerivative(), 0)
  .then((events) => {
    events.forEach((e, i) => {
      const [market, symbol] = e.args;
      derivativesBySymbol[symbol] = i;
      derivativesById[i] = symbol;
      console.log(`market ${market} ${symbol} ${i}`);
    });
  })
  .catch((e) => {
    console.log(e);
  });
const getDerivativeId = (symbol:string) => 
  // return derivativesBySymbol[symbol.replace(/[\-_/]/ig,"").toLowerCase()];
  derivativesBySymbol[symbol];
const getBets = async (option?: OptionContract, account?: string, startBlock?: number) => {
  console.log('get all bets');
  return option?.queryFilter(option?.filters.Bet_new(account), startBlock)
    .then(async (events) => {
      const bets = events.map(async (e, i) => {
        const [trader, betId] = e.args;
        console.log(`bet ${trader} ${betId} ${i}`);
        const bet = await option.bets(betId);
        console.log(bet);
        return bet;
      });
      console.log(await Promise.all(bets));
      return Promise.all(bets);
    })
    .catch((e) => {
      console.log(e);
    });
};

const joinOptionBlitz = async (usdc:USDC, treasury: Treasury, stakingContract: StakingContract) => {
  const approve = await usdc.approve(treasury?.address as string, ethers.constants.MaxUint256);
  const approved = await approve.wait();
  // const staking = await stakingContract.deposit(ethers.constants.One, 0);
  // const staked = await staking.wait();
  console.log(approved);
};
const placeOrder = async (symbol:string, optionBlitz?: OptionBlitz, backend?: Backend) => {
  const USDC_DECIMALS = 6;
  const n_lot = ethers.utils.parseUnits('1', USDC_DECIMALS);
  const startBlock = optionBlitz?.connection.startBlock;
  const american = optionBlitz?.connection.contracts?.OptionAmerican;
  const hv = optionBlitz?.connection.contracts?.HistoryVolatility;
  await getDerivatives(hv);
  const derivativeId = getDerivativeId(symbol);
  const blockTimestamp = (await optionBlitz?.connection.contracts?.Multicall2.getCurrentBlockTimestamp())?.toNumber();
  const account = optionBlitz?.connection.account;
  const treasury = optionBlitz?.connection.contracts?.Treasury;
  const usdc = optionBlitz?.connection.contracts?.USDC;
  const stakingContract = optionBlitz?.connection.contracts?.StakingContract;
  const usdcAllowance = (await usdc?.allowance(account as string, treasury?.address as string));
  const usdcBalance = (await usdc?.balanceOf(optionBlitz?.connection.account as string));
  const timeClose = (blockTimestamp || 0) + 6000; // now + 600s
  const payFeeInBLX = false;
  const isCallOption = false;
  const quote = await backend?.getPrice(symbol);
  const price = ((quote.ask + quote.bid) * 1000000) / 2;
  console.log('usdc allowance %s', usdcAllowance);
  console.log(await american?.jobId('betAdd'));
  console.log(await american?.oracle());
  if (usdcAllowance?.eq(0)) {
    await joinOptionBlitz(optionBlitz?.connection.contracts?.USDC as USDC, treasury as Treasury, stakingContract as StakingContract);
  }
  const {
    iOptionPrice, userPays, fee, feeInBlx, 
  } = { ...await american?.calcPayable(n_lot, derivativeId, timeClose, price, isCallOption, payFeeInBLX) };
  console.log(iOptionPrice?.toString(), userPays?.toString(), fee?.toString(), feeInBlx?.toString());
  if (usdcBalance?.gt(userPays?.add((!payFeeInBLX ? fee : 0) || 0) || 0) 
    && 
    ((!payFeeInBLX && fee?.gt(0)) || true)
  ) {
    return american?.bet_add(n_lot, derivativeId, timeClose, isCallOption, payFeeInBLX, {})
      .then((tx) => {
        console.log(tx);
        return tx;
      })
      .catch((e) => {
        console.log(e);
      });
  }
  
  console.log('not enough USDC balance or lot size too small');
};
export const useClassicSidebarHandlers = () => {
  const dispatch = useDispatch();
  const [activeButton, setActiveButton] = useState<ActiveButton>('call');
  const {
    optionBlitz, account, provider, backend, signInAt, 
  } = useOptionBlitz();
  const { connection } = { ...optionBlitz };
  const startBlock = optionBlitz?.connection.startBlock;
  const [positions, setPositions] = useState<PositionItem[][]>();
  const symbol = 'GBP_USD';
  console.log(account, connection);
  useEffect(() => {
    if (account) {
      console.log('get bets for %s', account);
      getBets(connection?.contracts?.OptionAmerican, account, startBlock).then(async (bets) => {
        console.log(`bets for ${account}`, bets);
        const price = await backend.getPrice(symbol);
        console.log('latest price', price);
        const betPositions = bets?.map((bet) => betToPositionItem(bet, (price.ask + price.bid) / 2));
        setPositions(betPositions);
      }).catch((e) => {
  
      });  
    }
  }, [account, startBlock, connection, signInAt]);

  const callClick = useCallback(() => {
    setActiveButton('call');
  }, []);

  const putClick = useCallback(() => {
    setActiveButton('put');
  }, []);

  const placeOrderClick = useCallback(() => {
    const american = optionBlitz?.connection.contracts?.OptionAmerican;
    console.log('place order');
    // getBets(american)
    // .then(()=>{

    // })
    // .catch(e=>{

    // });

    placeOrder(symbol, optionBlitz, backend)
      .then((tx) => {

      })
      .catch((e) => {

      });
  }, [optionBlitz]);

  const targetPriceClick = useCallback(() => {

  }, []);

  const sellClick = useCallback(() => {

  }, []);

  const settleClick = useCallback(() => {

  }, []);

  const toggleTakeProfit = useCallback(() => {
    dispatch(classicToggleTakeProfit());
  }, [dispatch]);

  const setTargetPrice = useCallback((price: string) => {
    dispatch(classicSetTargetPrice(parseFloat(price || '0')));
  }, [dispatch]);
  console.log('latest position ', positions);
  return {
    trade: {
      activeButton,
      callClick,
      putClick,
      placeOrderClick,
      profitItems: profitItemsMock,
      toggleTakeProfit,
      setTargetPrice,
    },
    positions: {
      targetPriceClick,
      sellClick,
      settleClick,
      positionItems: positions ? positions[0] : positionItems,
      date: new Date().toString(),
    },
  };
};
