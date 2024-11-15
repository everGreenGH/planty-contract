/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IPlantyPool, IPlantyPoolInterface } from "../IPlantyPool";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "assetAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "usdcAmount",
        type: "uint256",
      },
    ],
    name: "addLiquidity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "numItems",
        type: "uint256",
      },
    ],
    name: "buyAsset",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "numItems",
        type: "uint256",
      },
    ],
    name: "buyAssetDuringPublicSale",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "configurePublicSale",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "plantyTokenAmount",
        type: "uint256",
      },
    ],
    name: "getBuyInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "inputValue",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "newSpotPrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tradeFee",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "protocolFee",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "plantyTokenAmount",
        type: "uint256",
      },
    ],
    name: "getSellInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "outputValue",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "newSpotPrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tradeFee",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "protocolFee",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "numItems",
        type: "uint256",
      },
    ],
    name: "sellAsset",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "numItems",
        type: "uint256",
      },
    ],
    name: "sellAssetDuringPublicSale",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IPlantyPool__factory {
  static readonly abi = _abi;
  static createInterface(): IPlantyPoolInterface {
    return new utils.Interface(_abi) as IPlantyPoolInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IPlantyPool {
    return new Contract(address, _abi, signerOrProvider) as IPlantyPool;
  }
}
