/* tslint:disable */
/* eslint-disable */
/**
*/
export function initialize(): void;
/**
*/
export function getVersion(): string;
/**
* Calculates the pool's spot price, i.e. the price to open a long of 1.
*/
export function spotPrice(params: IStateParams): bigint;
/**
* Calculate the holding period return (HPR) given a non-compounding,
* annualized rate (APR).
*/
export function calcHprGivenApr(params: ICalcHprGivenAprParams): bigint;
/**
* Calculate the holding period return (HPR) given a compounding, annualized
* rate (APY).
*/
export function calcHprGivenApy(params: ICalcHprGivenApyParams): bigint;
/**
* Calculates the pool's idle liquidity in base.
*/
export function idleShareReservesInBase(params: IStateParams): bigint;
/**
* Calculates the present value in shares of LP's capital in the pool.
*/
export function presentValue(params: IPresentValueParams): bigint;
/**
* Calculates the pool's fixed APR, i.e. the fixed rate a user locks in when
* they open a long.
*/
export function spotRate(params: IStateParams): bigint;
/**
* Calculate an APR from a fixed price.
*/
export function calcAprGivenFixedPrice(params: ICalcAprGivenPriceParams): bigint;
/**
* Calculates the curve fee paid in bonds by traders when they open a long.
*/
export function openLongCurveFee(params: IOpenLongCurveFeeParams): bigint;
/**
* Calculates the governance fee paid in bonds by traders when they open a
* long.
*/
export function openLongGovernanceFee(params: IOpenLongGovernanceFeeParams): bigint;
/**
* Calculates the curve fee paid in shares or base by traders when they close a
* long.
*/
export function closeLongCurveFee(params: IClosePositionParams): bigint;
/**
* Calculates the flat fee paid in shares or base by traders when they close a
* long.
*/
export function closeLongFlatFee(params: IClosePositionParams): bigint;
/**
* Calculates the amount of base the trader will need to deposit for a short of
* a given size.
*/
export function calcOpenShort(params: IOpenShortParams): bigint;
/**
* Calculates the spot price after opening the short on the YieldSpace curve
* and before calculating the fees.
*/
export function spotPriceAfterShort(params: ISpotPriceAfterShortParams): bigint;
/**
* Calculate the implied rate of opening a short at a given size. This rate is
* calculated as an APY.
*/
export function calcImpliedRate(params: IImpliedRateParams): bigint;
/**
* Calculates the amount of bonds that will be shorted given a target base
* deposit amount.
*/
export function shortBondsGivenDeposit(params: IShortBondsGivenDepositParams): bigint;
/**
* Calculates the long amount that will be opened for a given base amount.
*/
export function calcOpenLong(params: IOpenLongParams): bigint;
/**
* Calculates the spot price after opening a Hyperdrive long.
*/
export function spotPriceAfterLong(params: ISpotPriceAfterLongParams): bigint;
/**
* Calculates the amount of lp shares the trader will receive after adding
* liquidity.
*/
export function calcAddLiquidity(params: ICalcAddLiquidityParams): bigint;
/**
* Calculates the amount of shares the trader will receive after fees for
* closing a short
*/
export function calcCloseShort(params: ICloseShortParams): bigint;
/**
* Calculates the market value of a short position using the equation:
* market_estimate = yield_accrued + trading_proceeds - curve_fees_paid +
* flat_fees_returned
*
* yield_accrued      = dy * (c-c0)/c0 trading_proceeds   = dy * (1 - p) * t
* curve_fees_paid    = trading_proceeds * curve_fee flat_fees_returned = dy *
* t * flat_fee
*
* dy = bond amount c  = closeVaultSharePrice (current if non-matured, or
* checkpoint's if matured) c0 = openVaultSharePrice p  = spotPrice t  =
* timeRemaining
*/
export function calcShortMarketValue(params: ICloseShortParams): bigint;
/**
*/
export function calcCloseLong(params: IClosePositionParams): bigint;
/**
* Calculates the curve fee paid by the trader when they open a short.
*/
export function openShortCurveFee(params: IOpenShortCurveFeeParams): bigint;
/**
* Calculates the governance fee paid by the trader when they open a short.
*/
export function openShortGovernanceFee(params: IOpenShortFlatFeeParams): bigint;
/**
* Calculates the curve fee paid by the trader when they close a short.
*/
export function closeShortCurveFee(params: IClosePositionParams): bigint;
/**
* Calculates the flat fee paid by the trader when they close a short.
*/
export function closeShortFlatFee(params: IClosePositionParams): bigint;
/**
* Calculates the max amount of base that can be used to open a long given a
* budget.
*/
export function maxLong(params: IMaxLongParams): bigint;
/**
* Calculates the max amount of bonds that can be shorted given a budget and
* the current state of the pool.
*/
export function maxShort(params: IMaxShortParams): bigint;
/**
* Calculates the max amount of bonds that can be shorted given the current
* state of the pool.
*/
export function absoluteMaxShort(params: IAbsoluteMaxShortParams): bigint;
interface ICalcHprGivenAprParams {
  /**
   * The annualized rate.
   */
  apr: bigint;
  /**
   * The position duration in seconds.
   */
  positionDuration: bigint;
}

interface ICalcHprGivenApyParams {
  /**
   * The annualized rate.
   */
  apy: bigint;
  /**
   * The position duration in seconds.
   */
  positionDuration: bigint;
}

interface IPresentValueParams extends IStateParams {
  /**
   * The time at which to grab the present value.
   */
  currentTime: bigint;
}

interface ICalcAprGivenPriceParams {
  /**
   * The fixed price.
   */
  price: bigint;
  /**
   * The position duration in seconds.
   */
  positionDuration: bigint;
}

interface IOpenLongCurveFeeParams extends IStateParams {
  /**
   * The amount of base tokens to spend.
   */
  baseAmount: bigint;
}

interface IOpenLongGovernanceFeeParams extends IStateParams {
  /**
   * The amount of base tokens to spend.
   */
  baseAmount: bigint;
}

interface IOpenShortParams extends IStateParams {
  /**
   * The amount of bonds to short.
   */
  bondAmount: bigint;
  /**
   * The vault share price at the start of the checkpoint.
   */
  openVaultSharePrice: bigint;
}

interface ISpotPriceAfterShortParams extends IStateParams {
  /**
   * The amount of bonds to short.
   */
  bondAmount: bigint;
}

interface IImpliedRateParams extends IStateParams {
  /**
   * The amount of bonds to short.
   */
  bondAmount: bigint;
  /**
   * The vault share price at the start of the checkpoint.
   */
  openVaultSharePrice: bigint;
  /**
   * The variable apy.
   */
  variableApy: bigint;
}

interface IShortBondsGivenDepositParams extends IStateParams {
  /**
   * The target base deposit amount.
   */
  targetBaseAmount: bigint;
  /**
   * The vault share price at the start of the checkpoint.
   */
  openVaultSharePrice: bigint;
  /**
   * The pool's absolute maximum bond amount at the time of opening.
   */
  absoluteMaxBondAmount: bigint;
  /**
   * The maximum difference between the target and actual base amount.
   *
   * @default 1e9
   */
  maybeTolerance?: bigint | undefined;
  /**
   * The maximum number of iterations to run the Newton's method for.
   *
   * @default 500
   */
  maybeMaxIterations?: number | undefined;
}

interface IOpenLongParams extends IStateParams {
  /**
   * The amount of base tokens to open a long for.
   */
  baseAmount: bigint;
}

interface ISpotPriceAfterLongParams extends IStateParams {
  /**
   * The amount of base tokens to open a long for.
   */
  baseAmount: bigint;
}

interface ICalcAddLiquidityParams extends IStateParams {
  /**
   * The current timestamp (in seconds).
   */
  currentTime: bigint;
  /**
   * The amount of base or shares to contribute.
   */
  contribution: bigint;
  /**
   * True if the contribution is in base, false if it's in shares.
   *
   * Default: `true`
   */
  asBase?: boolean | undefined;
  /**
   * The minimum share price the trader will accept.
   *
   * Default: `0`
   */
  minLpSharePrice?: bigint | undefined;
  /**
   * The minimum APR the trader will accept.
   *
   * Default: `0`
   */
  minApr?: bigint | undefined;
  /**
   * The maximum APR the trader will accept.
   *
   * Default: max uint256
   */
  maxApr?: bigint | undefined;
}

interface ICloseShortParams extends IClosePositionParams {
  /**
   * The vault share price at the checkpoint when the position was opened.
   */
  openVaultSharePrice: bigint;
  /**
   * The current vault share price, or if the position has matured, the vault
   * share price from the closing checkpoint.
   */
  closeVaultSharePrice: bigint;
}

interface IFees {
  curve: bigint;
  flat: bigint;
  governanceLP: bigint;
  governanceZombie: bigint;
}

interface IPoolConfig {
  initialVaultSharePrice: bigint;
  minimumShareReserves: bigint;
  minimumTransactionAmount: bigint;
  circuitBreakerDelta: bigint;
  positionDuration: bigint;
  checkpointDuration: bigint;
  timeStretch: bigint;
  fees: IFees;
  checkpointRewarder: `0x${string}`;
  feeCollector: `0x${string}`;
  sweepCollector: `0x${string}`;
  governance: `0x${string}`;
  baseToken: `0x${string}`;
  vaultSharesToken: `0x${string}`;
  linkerFactory: `0x${string}`;
  linkerCodeHash: `0x${string}`;
}

interface IPoolInfo {
  lpTotalSupply: bigint;
  lpSharePrice: bigint;
  bondReserves: bigint;
  shareReserves: bigint;
  shareAdjustment: bigint;
  vaultSharePrice: bigint;
  longExposure: bigint;
  longsOutstanding: bigint;
  longAverageMaturityTime: bigint;
  shortsOutstanding: bigint;
  shortAverageMaturityTime: bigint;
  withdrawalSharesReadyToWithdraw: bigint;
  withdrawalSharesProceeds: bigint;
  zombieBaseProceeds: bigint;
  zombieShareReserves: bigint;
}

interface IStateParams {
  /**
   * The current state of the pool.
   */
  poolInfo: IPoolInfo;
  /**
   * The pool's configuration.
   */
  poolConfig: IPoolConfig;
}

interface IClosePositionParams extends IStateParams {
  /**
   * The amount of bonds to close.
   */
  bondAmount: bigint;
  /**
   * The maturity timestamp of the position (in seconds).
   */
  maturityTime: bigint;
  /**
   * The current timestamp (in seconds).
   */
  currentTime: bigint;
}

interface IOpenShortCurveFeeParams extends IStateParams {
  /**
   * The number of bonds to short.
   */
  bondAmount: bigint;
}

interface IOpenShortFlatFeeParams extends IStateParams {
  /**
   * The number of bonds to short.
   */
  bondAmount: bigint;
}

interface IMaxLongParams extends IStateParams {
  /**
   * The maximum amount of base tokens that can be spent.
   */
  budget: bigint;
  /**
   * The exposure of the pool's current checkpoint.
   */
  checkpointExposure: bigint;
  /**
   * The maximum number of iterations to run the Netwon's method for.
   */
  maxIterations?: number | undefined;
}

interface IMaxShortParams extends IStateParams {
  /**
   * The maximum budget for the short.
   */
  budget: bigint;
  /**
   * The open share price of the pool's current checkpoint.
   */
  openVaultSharePrice: bigint;
  /**
   * The exposure of the pool's current checkpoint.
   */
  checkpointExposure: bigint;
  /**
   * A lower bound on the realized price that the short will pay. This is
   * used to help the algorithm converge faster in real world situations. If
   * this is `None`, then we'll use the theoretical worst case realized
   * price.
   */
  conservativePrice?: bigint | undefined;
  /**
   * The maximum number of iterations to run the Newton's method for.
   */
  maxIterations?: number | undefined;
}

interface IAbsoluteMaxShortParams extends IStateParams {
  /**
   * The exposure of the pool's current checkpoint.
   */
  checkpointExposure: bigint;
  /**
   * The maximum number of iterations to run the Newton's method for.
   */
  maxIterations?: usize | undefined;
}

