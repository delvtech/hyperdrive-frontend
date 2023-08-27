import { Address } from "abitype";
import { HyperdriveContract } from "src/contract/HyperdriveContract";

export function getPoolConfig(
  contract: HyperdriveContract,
): Promise<PoolConfig> {
  return contract.read("getPoolConfig", []);
}

interface Fees {
  /**
   * The LP fee applied to the curve portion of a trade.
   */
  curve: bigint;
  /**
   * The LP fee applied to the flat portion of a trade.
   */
  flat: bigint;
  /**
   * The portion of the LP fee that goes to governance.
   */
  governance: bigint;
}

interface PoolConfig {
  /**
   * The address of the base token.
   */
  baseToken: Address;
  /**
   * The initial share price.
   */
  initialSharePrice: bigint;
  /**
   * The minimum share reserves.
   */
  minimumShareReserves: bigint;
  /**
   * The duration of a position prior to maturity.
   */
  positionDuration: bigint;
  /**
   * The duration of a checkpoint.
   */
  checkpointDuration: bigint;
  /**
   * A parameter which decreases slippage around a target rate.
   */
  timeStretch: bigint;
  /**
   * The address of the governance contract.
   */
  governance: Address;
  /**
   * The address which collects governance fees
   */
  feeCollector: Address;
  /**
   * The fees applied to trades.
   */
  fees: Fees;
  /**
   * The amount of TWAP entries to store.
   */
  oracleSize: bigint;
  /**
   * The amount of time between TWAP updates.
   */
  updateGap: bigint;
}

// type GetPoolConfigOptions = {
//   hyperdriveAddress: Address;
//   publicClient: PublicClient;
//   options?: ReadCallOptions;
// };

// export function getPoolConfig({
//   publicClient,
//   hyperdriveAddress,
//   options,
// }: GetPoolConfigOptions): Promise<
//   ContractFunctionResult<typeof HyperdriveABI, "getPoolConfig">
// > {
//   return publicClient.readContract({
//     address: hyperdriveAddress,
//     abi: HyperdriveABI,
//     functionName: "getPoolConfig",
//     ...options,
//   });
// }
