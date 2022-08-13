import { Signer } from "@ethersproject/abstract-signer";
import { Provider } from "@ethersproject/providers";
import { Treasury } from "./typechain-types/contracts/Treasury";
import { Treasury__factory } from "./typechain-types";
import { USDC } from "./typechain-types/contracts/USDC";
import { USDC__factory } from "./typechain-types";
import { OptionAmerican } from "./typechain-types/contracts/option/American/OptionAmerican";
import { OptionAmerican__factory } from "./typechain-types";
import { Multicall2 } from "./typechain-types/contracts/util/Multicall2";
import { Multicall2__factory } from "./typechain-types";

// const multicallAddresses = {
//     1: "0xeefba1e63905ef1d7acba5a8513c70307c1ce441",
//     3: "0x53c43764255c17bd724f74c4ef150724ac50a3ed",
//     4: "0x42ad527de7d4e9d9d011ac45b31d8551f8fe9821",
//     5: "0x77dca2c955b15e9de4dbbcf1246b4b85b651e50e",
//     42: "0x2cc8688c5f75e365aaeeb4ea8d6a480405a48d2a",
//     9413: "0xf17968c6f83E800446d1e90703feDA7191745DEa",
// };

// const multicall2Addresses = {
//     1: "0x5ba1e12693dc8f9c48aad8770482f4739beed696",
//     3: "0x5ba1e12693dc8f9c48aad8770482f4739beed696",
//     4: "0x5ba1e12693dc8f9c48aad8770482f4739beed696",
//     5: "0x5ba1e12693dc8f9c48aad8770482f4739beed696",
//     42: "0x5ba1e12693dc8f9c48aad8770482f4739beed696",
//     9413: "0xDb96763408fDB533Ab02a615C508B15e326255fA",
// };

/** @internal */
export interface _OptionBlitzContracts {
    Treasury: Treasury;
    USDC: USDC;
    OptionAmerican: OptionAmerican;
    Multicall2: Multicall2;
}

/** @internal */
export const _OptionBlitzContractFactory = {
    Treasury: Treasury__factory,
    USDC: USDC__factory,
    OptionAmerican: OptionAmerican__factory,
    Multicall2: Multicall2__factory
}
const factorysName = Object.keys(_OptionBlitzContractFactory);

type OptionBlitzContractsKey = keyof _OptionBlitzContracts;

/** @internal */
export type _OptionBlitzContractAddresses = Record<OptionBlitzContractsKey, string>;

const mapOptionBlitzContracts = <T, U>(
    contracts: Record<OptionBlitzContractsKey, T>,
    f: (t: T, key: OptionBlitzContractsKey) => U
) =>
    Object.fromEntries(
        Object.entries(contracts)
            .filter(([key, t]) => factorysName.includes(key))
            .map(([key, t]) => [key, f(t, key as OptionBlitzContractsKey)])
    ) as Record<OptionBlitzContractsKey, U>;

/** @internal */
export interface _OptionBlitzDeploymentJSON {
    readonly chainId: number;
    readonly addresses: _OptionBlitzContractAddresses;
    readonly deploymentDate: number;
    readonly startBlock: number;
    readonly network: string;
}

/** @internal */
export const _connectToContracts = (
    signerOrProvider: Signer | Provider,
    { addresses }: _OptionBlitzDeploymentJSON
): _OptionBlitzContracts => {
    return mapOptionBlitzContracts(
        addresses,
        (address, key) =>
            _OptionBlitzContractFactory[key].connect(address, signerOrProvider)
    ) as _OptionBlitzContracts;
};
