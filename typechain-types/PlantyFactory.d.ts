/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface PlantyFactoryInterface extends ethers.utils.Interface {
  functions: {
    "admin()": FunctionFragment;
    "createPool(tuple)": FunctionFragment;
    "getAllPools()": FunctionFragment;
    "getAllPoolsInfo()": FunctionFragment;
    "getPoolInfo(address)": FunctionFragment;
    "pools(uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "admin", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "createPool",
    values: [
      {
        assetToken: string;
        assetInitialSupply: BigNumberish;
        usdcToken: string;
        usdcInitialSupply: BigNumberish;
        initialSpotPrice: BigNumberish;
        delta: BigNumberish;
        protocolFeeMultiplier: BigNumberish;
        tradeFeeMultiplier: BigNumberish;
        publicSaleDuration: BigNumberish;
        publicSalePrice: BigNumberish;
      }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllPools",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAllPoolsInfo",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getPoolInfo", values: [string]): string;
  encodeFunctionData(functionFragment: "pools", values: [BigNumberish]): string;

  decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "createPool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAllPools",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllPoolsInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPoolInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pools", data: BytesLike): Result;

  events: {
    "PoolCreated(address,address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "PoolCreated"): EventFragment;
}

export class PlantyFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: PlantyFactoryInterface;

  functions: {
    admin(overrides?: CallOverrides): Promise<[string]>;

    createPool(
      params: {
        assetToken: string;
        assetInitialSupply: BigNumberish;
        usdcToken: string;
        usdcInitialSupply: BigNumberish;
        initialSpotPrice: BigNumberish;
        delta: BigNumberish;
        protocolFeeMultiplier: BigNumberish;
        tradeFeeMultiplier: BigNumberish;
        publicSaleDuration: BigNumberish;
        publicSalePrice: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getAllPools(overrides?: CallOverrides): Promise<[string[]]>;

    getAllPoolsInfo(
      overrides?: CallOverrides
    ): Promise<
      [
        string[],
        BigNumber[],
        BigNumber[],
        BigNumber[],
        BigNumber[],
        BigNumber[],
        BigNumber[]
      ] & {
        poolAddresses: string[];
        spotPrices: BigNumber[];
        deltas: BigNumber[];
        protocolFeeMultipliers: BigNumber[];
        tradeFeeMultipliers: BigNumber[];
        reserveAssets: BigNumber[];
        reserveUSDCs: BigNumber[];
      }
    >;

    getPoolInfo(
      poolAddress: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        spotPrice: BigNumber;
        delta: BigNumber;
        protocolFeeMultiplier: BigNumber;
        tradeFeeMultiplier: BigNumber;
        reserveAsset: BigNumber;
        reserveUSDC: BigNumber;
      }
    >;

    pools(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
  };

  admin(overrides?: CallOverrides): Promise<string>;

  createPool(
    params: {
      assetToken: string;
      assetInitialSupply: BigNumberish;
      usdcToken: string;
      usdcInitialSupply: BigNumberish;
      initialSpotPrice: BigNumberish;
      delta: BigNumberish;
      protocolFeeMultiplier: BigNumberish;
      tradeFeeMultiplier: BigNumberish;
      publicSaleDuration: BigNumberish;
      publicSalePrice: BigNumberish;
    },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getAllPools(overrides?: CallOverrides): Promise<string[]>;

  getAllPoolsInfo(
    overrides?: CallOverrides
  ): Promise<
    [
      string[],
      BigNumber[],
      BigNumber[],
      BigNumber[],
      BigNumber[],
      BigNumber[],
      BigNumber[]
    ] & {
      poolAddresses: string[];
      spotPrices: BigNumber[];
      deltas: BigNumber[];
      protocolFeeMultipliers: BigNumber[];
      tradeFeeMultipliers: BigNumber[];
      reserveAssets: BigNumber[];
      reserveUSDCs: BigNumber[];
    }
  >;

  getPoolInfo(
    poolAddress: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
      spotPrice: BigNumber;
      delta: BigNumber;
      protocolFeeMultiplier: BigNumber;
      tradeFeeMultiplier: BigNumber;
      reserveAsset: BigNumber;
      reserveUSDC: BigNumber;
    }
  >;

  pools(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  callStatic: {
    admin(overrides?: CallOverrides): Promise<string>;

    createPool(
      params: {
        assetToken: string;
        assetInitialSupply: BigNumberish;
        usdcToken: string;
        usdcInitialSupply: BigNumberish;
        initialSpotPrice: BigNumberish;
        delta: BigNumberish;
        protocolFeeMultiplier: BigNumberish;
        tradeFeeMultiplier: BigNumberish;
        publicSaleDuration: BigNumberish;
        publicSalePrice: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<string>;

    getAllPools(overrides?: CallOverrides): Promise<string[]>;

    getAllPoolsInfo(
      overrides?: CallOverrides
    ): Promise<
      [
        string[],
        BigNumber[],
        BigNumber[],
        BigNumber[],
        BigNumber[],
        BigNumber[],
        BigNumber[]
      ] & {
        poolAddresses: string[];
        spotPrices: BigNumber[];
        deltas: BigNumber[];
        protocolFeeMultipliers: BigNumber[];
        tradeFeeMultipliers: BigNumber[];
        reserveAssets: BigNumber[];
        reserveUSDCs: BigNumber[];
      }
    >;

    getPoolInfo(
      poolAddress: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        spotPrice: BigNumber;
        delta: BigNumber;
        protocolFeeMultiplier: BigNumber;
        tradeFeeMultiplier: BigNumber;
        reserveAsset: BigNumber;
        reserveUSDC: BigNumber;
      }
    >;

    pools(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    PoolCreated(
      poolAddress?: string | null,
      creator?: string | null,
      initialSpotPrice?: null,
      delta?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber],
      {
        poolAddress: string;
        creator: string;
        initialSpotPrice: BigNumber;
        delta: BigNumber;
      }
    >;
  };

  estimateGas: {
    admin(overrides?: CallOverrides): Promise<BigNumber>;

    createPool(
      params: {
        assetToken: string;
        assetInitialSupply: BigNumberish;
        usdcToken: string;
        usdcInitialSupply: BigNumberish;
        initialSpotPrice: BigNumberish;
        delta: BigNumberish;
        protocolFeeMultiplier: BigNumberish;
        tradeFeeMultiplier: BigNumberish;
        publicSaleDuration: BigNumberish;
        publicSalePrice: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getAllPools(overrides?: CallOverrides): Promise<BigNumber>;

    getAllPoolsInfo(overrides?: CallOverrides): Promise<BigNumber>;

    getPoolInfo(
      poolAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pools(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    createPool(
      params: {
        assetToken: string;
        assetInitialSupply: BigNumberish;
        usdcToken: string;
        usdcInitialSupply: BigNumberish;
        initialSpotPrice: BigNumberish;
        delta: BigNumberish;
        protocolFeeMultiplier: BigNumberish;
        tradeFeeMultiplier: BigNumberish;
        publicSaleDuration: BigNumberish;
        publicSalePrice: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getAllPools(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAllPoolsInfo(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPoolInfo(
      poolAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pools(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
