/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Test, TestInterface } from "../Test";

const _abi = [
  {
    inputs: [],
    name: "test",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561000f575f80fd5b5060df8061001c5f395ff3fe6080604052348015600e575f80fd5b50600436106026575f3560e01c8063f8a8fd6d14602a575b5f80fd5b604080518082018252600d81526c48656c6c6f2c20576f726c642160981b60208201529051605791906060565b60405180910390f35b5f6020808352835180828501525f5b81811015608957858101830151858201604001528201606f565b505f604082860101526040601f19601f830116850101925050509291505056fea2646970667358221220f62903f474349871b8c700b40961cec2e135cfb608b6ed6cfd03d5d9f95527f064736f6c63430008140033";

export class Test__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Test> {
    return super.deploy(overrides || {}) as Promise<Test>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Test {
    return super.attach(address) as Test;
  }
  connect(signer: Signer): Test__factory {
    return super.connect(signer) as Test__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestInterface {
    return new utils.Interface(_abi) as TestInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Test {
    return new Contract(address, _abi, signerOrProvider) as Test;
  }
}
