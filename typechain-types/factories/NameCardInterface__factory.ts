/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  NameCardInterface,
  NameCardInterfaceInterface,
} from "../NameCardInterface";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "walletAddr",
        type: "address",
      },
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "phoneNum",
            type: "string",
          },
          {
            internalType: "enum NameCardInterface.Team",
            name: "team",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "year",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct NameCardInterface.NameCardInfo",
        name: "nameCardInfo",
        type: "tuple",
      },
    ],
    name: "NameCardUpserted",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "walletAddr",
        type: "address",
      },
    ],
    name: "getNameCard",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "phoneNum",
            type: "string",
          },
          {
            internalType: "enum NameCardInterface.Team",
            name: "team",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "year",
            type: "uint256",
          },
        ],
        internalType: "struct NameCardInterface.NameCardInfo",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "walletAddr",
        type: "address",
      },
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "phoneNum",
            type: "string",
          },
          {
            internalType: "enum NameCardInterface.Team",
            name: "team",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "year",
            type: "uint256",
          },
        ],
        internalType: "struct NameCardInterface.NameCardInfo",
        name: "nameCardInput",
        type: "tuple",
      },
    ],
    name: "upsertNameCard",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class NameCardInterface__factory {
  static readonly abi = _abi;
  static createInterface(): NameCardInterfaceInterface {
    return new utils.Interface(_abi) as NameCardInterfaceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NameCardInterface {
    return new Contract(address, _abi, signerOrProvider) as NameCardInterface;
  }
}
