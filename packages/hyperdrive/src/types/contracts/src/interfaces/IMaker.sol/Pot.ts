/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../../common";

export interface PotInterface extends utils.Interface {
  functions: {
    "chi()": FunctionFragment;
    "dsr()": FunctionFragment;
    "rho()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "chi" | "chi()" | "dsr" | "dsr()" | "rho" | "rho()"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "chi", values?: undefined): string;
  encodeFunctionData(functionFragment: "chi()", values?: undefined): string;
  encodeFunctionData(functionFragment: "dsr", values?: undefined): string;
  encodeFunctionData(functionFragment: "dsr()", values?: undefined): string;
  encodeFunctionData(functionFragment: "rho", values?: undefined): string;
  encodeFunctionData(functionFragment: "rho()", values?: undefined): string;

  decodeFunctionResult(functionFragment: "chi", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "chi()", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "dsr", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "dsr()", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "rho", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "rho()", data: BytesLike): Result;

  events: {};
}

export interface Pot extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PotInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    chi(overrides?: CallOverrides): Promise<[BigNumber]>;

    "chi()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    dsr(overrides?: CallOverrides): Promise<[BigNumber]>;

    "dsr()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    rho(overrides?: CallOverrides): Promise<[BigNumber]>;

    "rho()"(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  chi(overrides?: CallOverrides): Promise<BigNumber>;

  "chi()"(overrides?: CallOverrides): Promise<BigNumber>;

  dsr(overrides?: CallOverrides): Promise<BigNumber>;

  "dsr()"(overrides?: CallOverrides): Promise<BigNumber>;

  rho(overrides?: CallOverrides): Promise<BigNumber>;

  "rho()"(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    chi(overrides?: CallOverrides): Promise<BigNumber>;

    "chi()"(overrides?: CallOverrides): Promise<BigNumber>;

    dsr(overrides?: CallOverrides): Promise<BigNumber>;

    "dsr()"(overrides?: CallOverrides): Promise<BigNumber>;

    rho(overrides?: CallOverrides): Promise<BigNumber>;

    "rho()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    chi(overrides?: CallOverrides): Promise<BigNumber>;

    "chi()"(overrides?: CallOverrides): Promise<BigNumber>;

    dsr(overrides?: CallOverrides): Promise<BigNumber>;

    "dsr()"(overrides?: CallOverrides): Promise<BigNumber>;

    rho(overrides?: CallOverrides): Promise<BigNumber>;

    "rho()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    chi(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "chi()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    dsr(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "dsr()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rho(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "rho()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
