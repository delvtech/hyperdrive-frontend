import { Hex } from "viem";

export const statusById = {
  "1": "active",
  "2": "sunset",
} as const;

/**
 * An ID used to represent status in the registry.
 */
export type StatusId = keyof typeof statusById;

/**
 * The status of an instance or factory in the registry.
 */
export type Status = (typeof statusById)[StatusId];

/**
 * The decoded data of an instance in the registry.
 */
export interface InstanceData {
  status: Status;
}

/**
 * Decodes the `data` field of an instance in the registry according to the
 * ElementDAO registry schema.
 */
export function decodeInstanceData(data: Hex): InstanceData {
  const statusId = BigInt(data).toString() as StatusId;
  return {
    status: statusById[statusId],
  };
}

/**
 * The decoded data of a factory in the registry.
 */
export interface FactoryData {
  status: Status;
}

/**
 * Decodes the `data` field of a factory in the registry according to the
 * ElementDAO registry schema.
 */
export function decodeFactoryData(data: Hex): FactoryData {
  const statusId = BigInt(data).toString() as StatusId;
  return {
    status: statusById[statusId],
  };
}
