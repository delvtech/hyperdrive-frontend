import { IHyperdrive } from "@delvtech/hyperdrive-artifacts/IHyperdrive";
import { UniV3Zap } from "@delvtech/hyperdrive-artifacts/UniV3Zap";
export const hyperdriveAbi = IHyperdrive.abi;
export type HyperdriveAbi = typeof IHyperdrive.abi;

export const zapAbi = UniV3Zap.abi;
export type ZapAbi = typeof UniV3Zap.abi;
