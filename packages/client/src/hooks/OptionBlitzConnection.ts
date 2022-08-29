import { Provider } from '@ethersproject/abstract-provider';
import { Signer } from '@ethersproject/abstract-signer';
import { _connectToContracts, _OptionBlitzContracts, _OptionBlitzDeploymentJSON } from '../contracts/contracts';
import devOrNull from '../contracts/deployments/default/private.json';

const dev = devOrNull as _OptionBlitzDeploymentJSON | null;

const deployments: {
  [chainId: number]: _OptionBlitzDeploymentJSON | undefined;
} = {
  // need to add new contracts to below json files or comment out
  // [mainnet.chainId]: mainnet,
  // [ropsten.chainId]: ropsten,
  // [rinkeby.chainId]: rinkeby,
  // [goerli.chainId]: goerli,
  // [kovan.chainId]: kovan,

  ...(dev !== null ? { [dev.chainId]: dev } : {}),
  // 3: ropsten,
};

export interface OptionBlitzConnection {
  /** Ethers `Provider` used for connecting to the network. */
  readonly provider: Provider;

  /** Ethers `Signer` used for sending transactions. */
  readonly signer?: Signer;

  /** Chain ID of the connected network. */
  readonly chainId: number;

  /** Number of block in which the first contract was deployed. */
  readonly startBlock?: number;

  /** option blitz related contracts */
  readonly contracts?: _OptionBlitzContracts;

  /* account to use for the store value */
  readonly account?: string;

  /* store refesh interval in sec */
  readonly storeRefreshInterval?: number;
}

export interface OptionBlitzConnectionOptionalParams {
  /**
     * account for the balance/state to be retrieved
     */
  readonly account?: string;
  
  /* seconds before forced refresh from blockchain for OptionBlitz store status(not just per block to reduce hit frequency) */
  readonly storeRefreshInterval?: number;
}
  
/** @internal */
export function _connectionByChainId(
  provider: Provider,
  signer: Signer | undefined,
  chainId: number,
  optionalParams: OptionBlitzConnectionOptionalParams, 
): OptionBlitzConnection {
  const deploymentJSON = deployments[chainId];
  const optionBlitzContracts = (chainId && provider && deploymentJSON && _connectToContracts(signer as Signer || provider as Provider, deploymentJSON as _OptionBlitzDeploymentJSON)) || undefined;
  return {
    provider,
    signer,
    chainId,
    startBlock: deploymentJSON?.startBlock,
    contracts: optionBlitzContracts,
    ...optionalParams,
  };
}
