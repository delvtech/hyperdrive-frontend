import { HyperdriveABI } from "@hyperdrive/core";
import {
  Abi,
  AbiEvent,
  AbiParameter,
  ExtractAbiEvent,
  ExtractAbiEventNames,
  AbiEventParameter,
  AbiParametersToPrimitiveTypes,
  Address,
} from "abitype";
import { BlockTag } from "src/contract/Contract";

type Hex = `0x${string}`;

export type DecodeEventLogReturnType<
  TAbi extends Abi | readonly unknown[] = Abi,
  TEventName extends string | undefined = string,
  TTopics extends Hex[] = Hex[],
  TData extends Hex | undefined = undefined,
  TStrict extends boolean = true,
  _EventNames extends string = TAbi extends Abi
    ? Abi extends TAbi
      ? string
      : ExtractAbiEventNames<TAbi>
    : string,
> = TEventName extends _EventNames[number]
  ? {
      eventName: TEventName;
    } & GetEventArgsFromTopics<TAbi, TEventName, TTopics, TData, TStrict>
  : {
      [TName in _EventNames]: {
        eventName: TName;
      } & GetEventArgsFromTopics<TAbi, TName, TTopics, TData, TStrict>;
    }[_EventNames];

export type LogTopic = Hex | Hex[] | null;

export type GetEventArgsFromTopics<
  TAbi extends Abi | readonly unknown[],
  TEventName extends string,
  TTopics extends LogTopic[],
  TData extends Hex | undefined,
  TStrict extends boolean = true,
  TAbiEvent extends AbiEvent & { type: "event" } = TAbi extends Abi
    ? ExtractAbiEvent<TAbi, TEventName>
    : AbiEvent & { type: "event" },
  TArgs = AbiParametersToPrimitiveTypes<
    TAbiEvent["inputs"]
    //TODO: Find if this is needed
    // { EnableUnion: false; IndexedOnly: false; Required: TStrict }
  >,
> = TTopics extends readonly []
  ? TData extends undefined
    ? { args?: never }
    : { args?: TArgs }
  : { args: TArgs };

export type GetFilterLogsReturnType<
  TAbi extends Abi | readonly unknown[] | undefined = undefined,
  TEventName extends string | undefined = undefined,
  TStrict extends boolean | undefined = undefined,
  TFromBlock extends bigint | BlockTag | undefined = undefined,
  TToBlock extends bigint | BlockTag | undefined = undefined,
  _AbiEvent extends AbiEvent | undefined = TAbi extends Abi
    ? TEventName extends string
      ? ExtractAbiEvent<TAbi, TEventName>
      : undefined
    : undefined,
  _Pending extends boolean =
    | (TFromBlock extends "pending" ? true : false)
    | (TToBlock extends "pending" ? true : false),
> = Log<bigint, number, _Pending, _AbiEvent, TStrict, TAbi, TEventName>[];

type Log<
  TQuantity = bigint,
  TIndex = number,
  TPending extends boolean = boolean,
  TAbiEvent extends AbiEvent | undefined = undefined,
  TStrict extends boolean | undefined = undefined,
  TAbi extends Abi | readonly unknown[] | undefined = TAbiEvent extends AbiEvent
    ? [TAbiEvent]
    : undefined,
  TEventName extends string | undefined = TAbiEvent extends AbiEvent
    ? TAbiEvent["name"]
    : undefined,
> = {
  /** The address from which this log originated */
  address: Address;
  /** Hash of block containing this log or `null` if pending */
  blockHash: TPending extends true ? null : string;
  /** Number of block containing this log or `null` if pending */
  blockNumber: TPending extends true ? null : TQuantity;
  /** Contains the non-indexed arguments of the log */
  data: Hex;
  /** Index of this log within its block or `null` if pending */
  logIndex: TPending extends true ? null : TIndex;
  /** Hash of the transaction that created this log or `null` if pending */
  transactionHash: TPending extends true ? null : string;
  /** Index of the transaction that created this log or `null` if pending */
  transactionIndex: TPending extends true ? null : TIndex;
  /** `true` if this filter has been destroyed and is invalid */
  removed: boolean;
};
// TODO Find a way to add this back in:
// & GetInferredLogValues<TAbiEvent, TAbi, TEventName, TStrict>;

export interface TransferSingleEvent {
  eventData: DecodeEventLogReturnType<
    typeof HyperdriveABI,
    "TransferSingle"
  >["args"];
  eventLog: GetFilterLogsReturnType<
    typeof HyperdriveABI,
    "TransferSingle"
  >[number];
}
