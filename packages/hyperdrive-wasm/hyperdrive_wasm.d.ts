/* tslint:disable */
/* eslint-disable */
/**
* Calculates the amount of shares the trader will receive after fees for
* closing a short
*
* @param poolInfo - The current state of the pool
*
* @param poolConfig - The pool's configuration
*
* @param bondAmount - The number of short bonds to close
*
* @param openVaultSharePrice - The vault share price at the checkpoint when
* the position was opened
*
* @param closeVaultSharePrice - The current vault share price, or if the
* position has matured, the vault share price from the closing checkpoint
*
* @param maturityTime - The maturity timestamp of the short (in seconds)
*
* @param currentTime - The current timestamp (in seconds)
*/
export function calcCloseShort(poolInfo: JsPoolInfo, poolConfig: JsPoolConfig, bondAmount: string, openVaultSharePrice: string, closeVaultSharePrice: string, maturityTime: string, currentTime: string): bigint;
/**
* Calculates the amount of base the trader will need to deposit for a short of
* a given size.
*
* @param poolInfo - The current state of the pool
*
* @param poolConfig - The pool's configuration
*
* @param bondAmount - The amount of bonds to short
*
* @param openVaultSharePrice - The vault share price at the start of the
* checkpoint
*/
export function calcOpenShort(poolInfo: JsPoolInfo, poolConfig: JsPoolConfig, bondAmount: string, openVaultSharePrice: string): bigint;
/**
* Calculates the spot price after opening the short on the YieldSpace curve
* and before calculating the fees.
*
* @param poolInfo - The current state of the pool
*
* @param poolConfig - The pool's configuration
*
* @param bondAmount - The number of bonds to short
*/
export function spotPriceAfterShort(poolInfo: JsPoolInfo, poolConfig: JsPoolConfig, bondAmount: string): bigint;
/**
* Calculate the implied rate of opening a short at a given size. This rate
* is calculated as an APY.
* @param poolInfo - The current state of the pool
*
* @param poolConfig - The pool's configuration
*
* @param bondAmount - The amount of bonds to short
*
* @param openVaultSharePrice - The vault share price at the start of the
* checkpoint
*
* @param variableApy - The variable apy
*/
export function calcImpliedRate(poolInfo: JsPoolInfo, poolConfig: JsPoolConfig, bondAmount: string, openVaultSharePrice: string, variableApy: string): bigint;
/**
*/
export function initialize(): void;
/**
* Calculates the pool's spot price, i.e. the price to open a long of 1.
*
* @param poolInfo - The current state of the pool
*
* @param poolConfig - The pool's configuration
*/
export function spotPrice(poolInfo: JsPoolInfo, poolConfig: JsPoolConfig): bigint;
/**
* Calculate the holding period return (HPR) given a non-compounding,
* annualized rate (APR).
*
* @param apr - The annualized rate
*
* @param positionDuration - The position duration in seconds
*/
export function calcHprGivenApr(apr: string, positionDuration: string): bigint;
/**
* Calculate the holding period return (HPR) given a compounding, annualized
* rate (APY).
*
* @param apy - The annualized rate
*
* @param positionDuration - The position duration in seconds
*/
export function calcHprGivenApy(apy: string, positionDuration: string): bigint;
/**
* Calculates the pool's idle liquidity in base
*
* @param poolInfo - The current state of the pool
*
* @param poolConfig - The pool's configuration
*/
export function idleShareReservesInBase(poolInfo: JsPoolInfo, poolConfig: JsPoolConfig): bigint;
/**
* Calculates the pool's present value in base
*
* @param poolInfo - The current state of the pool
*
* @param poolConfig - The pool's configuration
*
* @param currentTime - The time at which to grab the present value
*/
export function presentValue(poolInfo: JsPoolInfo, poolConfig: JsPoolConfig, currentTime: string): bigint;
/**
* Calculates the pool's fixed APR, i.e. the fixed rate a user locks in when
* they open a long.
*
* @param poolInfo - The current state of the pool
*
* @param poolConfig - The pool's configuration
*/
export function spotRate(poolInfo: JsPoolInfo, poolConfig: JsPoolConfig): bigint;
/**
* Calculates the curve fee paid in bonds by traders when they open a long.
*
* @param poolInfo - The current state of the pool
*
* @param poolConfig - The pool's configuration
*
* @param baseAmount - The amount of base tokens to spend
*/
export function openLongCurveFee(poolInfo: JsPoolInfo, poolConfig: JsPoolConfig, baseAmount: string): bigint;
/**
* Calculates the governance fee paid in bonds by traders when they open a
* long.
*
* @param poolInfo - The current state of the pool
*
* @param poolConfig - The pool's configuration
*
* @param baseAmount - The amount of base tokens to spend
*/
export function openLongGovernanceFee(poolInfo: JsPoolInfo, poolConfig: JsPoolConfig, baseAmount: string): bigint;
/**
* Calculates the curve fee paid in shares or base by traders when they close a
* long.
*
* @param poolInfo - The current state of the pool
*
* @param poolConfig - The pool's configuration
*
* @param bondAmount - The amount of bonds to close
*
* @param maturityTime - The maturity timestamp of the long (in seconds)
*
* @param currentTime - The current timestamp (in seconds)
*/
export function closeLongCurveFee(poolInfo: JsPoolInfo, poolConfig: JsPoolConfig, bondAmount: string, maturityTime: string, currentTime: string): bigint;
/**
* Calculates the flat fee paid in shares or base by traders when they close a
* long.
*
* @param poolInfo - The current state of the pool
*
* @param poolConfig - The pool's configuration
*
* @param bondAmount - The amount of bonds to close
*
* @param maturityTime - The maturity timestamp of the long (in seconds)
*
* @param currentTime - The current timestamp (in seconds)
*/
export function closeLongFlatFee(poolInfo: JsPoolInfo, poolConfig: JsPoolConfig, bondAmount: string, maturityTime: string, currentTime: string): bigint;
/**
* Calculates the max amount of base that can be used to open a long given a
* budget.
*
* @param poolInfo - The current state of the pool
*
* @param poolConfig - The pool's configuration
*
* @param budget - The maximum amount of base tokens that can be spent.
*
* @param checkpointExposure - The exposure of the pool's current checkpoint
*
* @param maybeMaxIterations - The maximum number of iterations to run the
* binary search for
*/
export function maxLong(poolInfo: JsPoolInfo, poolConfig: JsPoolConfig, budget: string, checkpointExposure: string, maybeMaxIterations?: number): bigint;
/**
* Calculates the long amount that will be opened for a given base amount.
*
* @param poolInfo - The current state of the pool
*
* @param poolConfig - The pool's configuration
*
* @param baseAmount - The amount of base tokens to open a long for
*/
export function calcOpenLong(poolInfo: JsPoolInfo, poolConfig: JsPoolConfig, baseAmount: string): bigint;
/**
* Calculates the spot price after opening a Hyperdrive long.
*
* @param poolInfo - The current state of the pool
*
* @param poolConfig - The pool's configuration
*
* @param baseAmount - The amount of base to spend
*/
export function spotPriceAfterLong(poolInfo: JsPoolInfo, poolConfig: JsPoolConfig, baseAmount: string): bigint;
/**
* Calculates the curve fee paid by the trader when they open a short.
*
* @param poolInfo - The current state of the pool
*
* @param poolConfig - The pool's configuration
*
* @param bondAmount - The number of bonds to short
*/
export function openShortCurveFee(poolInfo: JsPoolInfo, poolConfig: JsPoolConfig, bondAmount: string): bigint;
/**
* Calculates the governance fee paid by the trader when they open a short.
*
* @param poolInfo - The current state of the pool
*
* @param poolConfig - The pool's configuration
*
* @param bondAmount - The number of bonds to short
*/
export function openShortGovernanceFee(poolInfo: JsPoolInfo, poolConfig: JsPoolConfig, bondAmount: string): bigint;
/**
* Calculates the curve fee paid by the trader when they close a short.
*
* @param poolInfo - The current state of the pool
*
* @param poolConfig - The pool's configuration
*
* @param bondAmount - The number of shorted bonds to close
*
* @param maturityTime - The maturity timestamp of the short (in seconds)
*
* @param currentTime - The current timestamp (in seconds)
*/
export function closeShortCurveFee(poolInfo: JsPoolInfo, poolConfig: JsPoolConfig, bondAmount: string, maturityTime: string, currentTime: string): bigint;
/**
* Calculates the flat fee paid by the trader when they close a short.
*
* @param poolInfo - The current state of the pool
*
* @param poolConfig - The pool's configuration
*
* @param bondAmount - The number of shorted bonds to close
*
* @param maturityTime - The maturity timestamp of the short (in seconds)
*
* @param currentTime - The current timestamp (in seconds)
*/
export function closeShortFlatFee(poolInfo: JsPoolInfo, poolConfig: JsPoolConfig, bondAmount: string, maturityTime: string, currentTime: string): bigint;
/**
* Calculates the max amount of longs that can be shorted given the current
* state of the pool.
*
* @param poolInfo - The current state of the pool
*
* @param poolConfig - The pool's configuration
*
* @param openVaultSharePrice - The open share price of the pool's current
* checkpoint
*
* @param checkpointExposure - The exposure of the pool's current checkpoint
*
* @param maybeConservativePrice - A lower bound on the realized price that the
* short will pay. This is used to help the algorithm converge faster in real
* world situations. If this is `None`, then we'll use the theoretical worst
* case realized price.
*
* @param maybeMaxIterations - The maximum number of iterations to run the
* binary search for
*/
export function maxShort(poolInfo: JsPoolInfo, poolConfig: JsPoolConfig, budget: string, openVaultSharePrice: string, checkpointExposure: string, maybeConservativePrice?: string, maybeMaxIterations?: number): bigint;
/**
* Calculates the amount of shares the trader will receive after fees for
* closing a short
*
* @param poolInfo - The current state of the pool
*
* @param poolConfig - The pool's configuration
*
* @param bondAmount - The number of short bonds to close
*
* @param openVaultSharePrice - The vault share price at the checkpoint when
* the position was opened
*
* @param closeVaultSharePrice - The current vault share price, or if the
* position has matured, the vault share price from the closing checkpoint
*
* @param maturityTime - The maturity timestamp of the short (in seconds)
*
* @param currentTime - The current timestamp (in seconds)
*/
export function calcCloseLong(poolInfo: JsPoolInfo, poolConfig: JsPoolConfig, bondAmount: string, maturityTime: string, currentTime: string): bigint;
/**
* Calculates the amount of lp shares the trader will receive after adding
* liquidity.
*
* @param poolInfo - The current state of the pool
*
* @param poolConfig - The pool's configuration
*
* @param currentTime - The current timestamp (in seconds)
*
* @param contribution - The amount of base or shares to contribute
*
* @param asBase - True if the contribution is in base, false if it's in
* shares. Defaults to true
*
* @param minLpSharePrice - The minimum share price the trader will accept.
* Defaults to 0.
*
* @param minApr - The minimum APR the trader will accept. Defaults to 0.
*
* @param maxApr - The maximum APR the trader will accept. Defaults to the max
* uint256.
*/
export function calcAddLiquidity(poolInfo: JsPoolInfo, poolConfig: JsPoolConfig, currentTime: string, contribution: string, asBase?: boolean, minLpSharePrice?: string, minApr?: string, maxApr?: string): bigint;

interface JsFees {
    curve: string;
    flat: string;
    governanceLP: string;
    governanceZombie: string;
}


interface JsPoolConfig {
    baseToken: string,
    initialVaultSharePrice: string,
    minimumShareReserves: string,
    minimumTransactionAmount: string,
    positionDuration: string,
    checkpointDuration: string,
    checkpointRewarder: String,
    timeStretch: string,
    governance: string,
    feeCollector: string,
    sweepCollector: string,
    fees: Fees,
    linkerFactory: string,
    linkerCodeHash: string,
    vaultSharesToken: string,
}


interface JsPoolInfo {
    shareReserves: string,
    shareAdjustment: string,
    bondReserves: string,
    lpTotalSupply: string,
    vaultSharePrice: string,
    longsOutstanding: string,
    longAverageMaturityTime: string,
    shortsOutstanding: string,
    shortAverageMaturityTime: string,
    withdrawalSharesReadyToWithdraw: string,
    withdrawalSharesProceeds: string,
    lpSharePrice: string,
    longExposure: string,
    zombieBaseProceeds: string,
    zombieShareReserves: string,
}



export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly calcCloseShort: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number, l: number, m: number) => void;
  readonly calcOpenShort: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => void;
  readonly spotPriceAfterShort: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly calcImpliedRate: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number) => void;
  readonly spotPrice: (a: number, b: number, c: number) => void;
  readonly calcHprGivenApr: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly calcHprGivenApy: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly idleShareReservesInBase: (a: number, b: number, c: number) => void;
  readonly presentValue: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly spotRate: (a: number, b: number, c: number) => void;
  readonly initialize: () => void;
  readonly openLongCurveFee: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly openLongGovernanceFee: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly closeLongCurveFee: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number) => void;
  readonly closeLongFlatFee: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number) => void;
  readonly maxLong: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number) => void;
  readonly calcOpenLong: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly spotPriceAfterLong: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly openShortCurveFee: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly openShortGovernanceFee: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly closeShortCurveFee: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number) => void;
  readonly closeShortFlatFee: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number) => void;
  readonly maxShort: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number, l: number) => void;
  readonly calcCloseLong: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number) => void;
  readonly calcAddLiquidity: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number, l: number, m: number, n: number) => void;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
  readonly __wbindgen_exn_store: (a: number) => void;
  readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
export const wasmBase64: string;
export const wasmBuffer: ArrayBuffer;