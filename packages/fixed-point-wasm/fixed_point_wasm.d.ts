/* tslint:disable */
/* eslint-disable */
/**
*/
export function initialize(): void;
/**
* Get the version of this package.
*/
export function getVersion(): string;
/**
* Create a new fixed-point number by parsing a scaled value.
*
* @param value - A scaled value.
*
* @param decimals - The number of decimal places to use. Max is `18`.
* Defaults to `18`.
*
* @example
* ```js
* const fromBigint = fixed(1500000000000000000n);
* const fromNumber = fixed(1.5e18);
* const fromString = fixed('1.5e18');
* const withDecimals = fixed(1.5e6, 6);
*
* console.log(fromBigint.toString());
* // => 1.500000000000000000
*
* console.log(fromNumber.toString());
* // => 1.500000000000000000
*
* console.log(fromString.toString());
* // => 1.500000000000000000
*
* console.log(withDecimals.toString());
* // => 1.500000
* ```
*/
export function fixed(value: Numberish, decimals?: number): FixedPoint;
/**
* Create a fixed-point number by parsing a decimal value and scaling it by a
* given number of decimal places.
*
* @param value - A value to parse and scale.
*
* @param decimals - The number of decimal places to use. Max is `18`. Defaults
* to `18`.
*
* @example
* ```js
* const fromNumber = parseFixed(1.5);
* const fromString = parseFixed('1.5');
* const withDecimals = parseFixed('1.5', 6);
*
* console.log(fromNumber.toString());
* // => 1.500000000000000000
*
* console.log(fromString.toString());
* // => 1.500000000000000000
*
* console.log(withDecimals.toString());
* // => 1.500000
* ```
*/
export function parseFixed(value: Numberish, decimals?: number): FixedPoint;
/**
* Create a random fixed-point number with an optional min and max.
*
* @example
*
* ```ts
* const random = randomFixed();
*
* console.log(random.toString());
* // => 0.472987274007185487
* ```
*/
export function randomFixed(params?: IGenerateRandomParams): FixedPoint;
/**
* Get the natural logarithm of a fixed-point number.
*
* @param x - The value to calculate the natural logarithm of.
* scaled raw value.
*/
export function ln(x: Numberish): FixedPoint;

export type Numberish = FixedPoint | bigint | number | string;


interface IGenerateRandomParams {
  /**
   * The minimum value to generate.
   *
   * @default 0
   */
  min?: Numberish | undefined;
  /**
   * The maximum value to generate.
   *
   * @default min + parseFixed(1.0, decimals)
   */
  max?: Numberish | undefined;
  /**
   * The number of decimal places to use. Max is `18`.
   *
   * @default 18
   */
  decimals?: number | undefined;
}

interface IBaseFormatOptions {
  /**
   * The number of decimal places to display.
   *
   * @default compactDisplay ? 0 : this.decimals
   */
  decimals?: number | undefined;
  /**
   * Whether to include trailing zeros.
   *
   * @default `false`
   */
  trailingZeros?: boolean | undefined;
  /**
   * The rounding mode to use.
   *
   * `"ceil"`:
   *
   * Round toward +∞. Positive values round up. Negative values round "more
   * positive".
   *
   * `"floor"`:
   *
   * Round toward -∞. Positive values round down. Negative values round "more
   * negative".
   *
   * `"expand"`:
   *
   * round away from 0. The magnitude of the value is always increased by
   * rounding. Positive values round up. Negative values round "more
   * negative".
   *
   * `"trunc"`:
   *
   * Round toward 0. This magnitude of the value is always reduced by
   * rounding. Positive values round down. Negative values round "less
   * negative".
   *
   * `"halfCeil"`:
   *
   * ties toward +∞. Values above the half-increment round like `ceil`
   * (towards +∞), and below like `floor` (towards -∞). On the
   * half-increment, values round like `ceil`.
   *
   * `"halfFloor"`:
   *
   * Ties toward -∞. Values above the half-increment round like `ceil`
   * (towards +∞), and below like `floor` (towards -∞). On the
   * half-increment, values round like `floor`.
   *
   * `"halfExpand"`:
   *
   * Ties away from 0. Values above the half-increment round like `expand`
   * (away from zero), and below like `trunc` (towards 0). On the
   * half-increment, values round like `expand`.
   *
   * `"halfTrunc"`:
   *
   * Ties toward 0. Values above the half-increment round like `expand` (away
   * from zero), and below like `trunc` (towards 0). On the half-increment,
   * values round like `trunc`.
   *
   * `"halfEven"`:
   *
   * Ties towards the nearest even integer. Values above the half-increment
   * round like `expand` (away from zero), and below like `trunc` (towards
   * 0). On the half-increment values round towards the nearest even digit.
   *
   * @default "halfExpand"
   *
   * @see [MDN - NumberFormat - roundingMode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#roundingmode)
   */
  rounding?: 'ceil' | 'floor' | 'expand' | 'trunc' | 'halfCeil' | 'halfFloor' | 'halfExpand' | 'halfTrunc' | 'halfEven';
  /**
   * The locale to use for formatting.
   *
   * @default "en-US"
   *
   * @see [Unicode BCP 47 Locale Identifier](https://unicode.org/reports/tr35/#Unicode_locale_identifier)
   */
  locale?: Intl.UnicodeBCP47LocaleIdentifier;
  /**
   * Whether to use grouping separators, i.e. commas.
   *
   * @default true
   *
   * @see [MDN - NumberFormat - useGrouping](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#usegrouping)
   */
  group?: boolean | undefined;
}

interface IFormatOptions extends IBaseFormatOptions {
  /**
   * The compact display mode to use, if any.
   *
   * @default undefined
   *
   * @see [MDN - NumberFormat - compactDisplay](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#compactdisplay)
   */
  compactDisplay?: Intl.NumberFormatOptions['compactDisplay'];
  /**
   * Whether to format the number as a percentage.
   *
   * @example
   * ```ts
   * const rate = parseFixed(0.1325);
   * console.log(`Rate: ${rate.format({ percent: true, decimals: 2 })}`);
   * // => Rate: 13.25%
   * ```
   */
  percent?: boolean | undefined;
}

interface ICurrencyFormatOptions extends IBaseFormatOptions {
  /**
   * The currency to use for formatting.
   *
   * @default "USD"
   *
   * @see [ISO 4217 Currency Codes](https://en.wikipedia.org//wiki/ISO_4217#List_of_ISO_4217_currency_codes)
   */
  currency?: string | undefined;
  /**
   * How to display the currency in currency formatting.
   *
   * @see [MDN - NumberFormat - currencydisplay](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#currencydisplay)
   */
  display?: 'symbol' | 'narrowSymbol' | 'code' | 'name';
  /**
   * Whether to use compact notation for currency formatting.
   */
  compact?: boolean | undefined;
}

/**
* A number with a fixed number of decimal places.
*/
export class FixedPoint {
  free(): void;
/**
* Create a new fixed-point number from a scaled value or another
* fixed-point number. If the value is already a fixed-point number, the
* number of decimal places will be adjusted to match the new value.
*
* @param value - A scaled value between `-2^255` and `2^255 - 1` (signed
* 256-bit integer).
*
* @param decimals - The number of decimal places to use. Max is `18`.
* Defaults to `18`.
*/
  constructor(value: Numberish, decimals?: number);
/**
* Create a fixed-point number representing one unit.
*
* @param decimals - The number of decimal places to use. Max is `18`.
* Defaults to `18`.
*/
  static one(decimals?: number): FixedPoint;
/**
* Create a random fixed-point number with and optional min and max.
*
* **Note**:
*
* @example
*
* ```ts
* const random = FixedPoint.random();
* console.log(random.toString());
* // => 0.472987274007185487
* ```
*/
  static random(params?: IGenerateRandomParams): FixedPoint;
/**
* Add a fixed-point number to this one.
*/
  add(other: Numberish, decimals?: number): FixedPoint;
/**
* Subtract a fixed-point number from this one.
*/
  sub(other: Numberish, decimals?: number): FixedPoint;
/**
* Multiply this fixed-point number by another, then divide by a divisor,
* rounding down.
*/
  mulDivDown(other: Numberish, divisor: Numberish, decimals?: number): FixedPoint;
/**
* Multiply this fixed-point number by another, then divide by a divisor,
* rounding up.
*/
  mulDivUp(other: Numberish, divisor: Numberish, decimals?: number): FixedPoint;
/**
* Multiply this fixed-point number by another, truncating the result.
*/
  mulDown(other: Numberish, decimals?: number): FixedPoint;
/**
* Multiply this fixed-point number by another, rounding up.
*/
  mulUp(other: Numberish, decimals?: number): FixedPoint;
/**
* Multiply this fixed-point number by another. Rounding to the nearest integer.
*/
  mul(other: Numberish, decimals?: number): FixedPoint;
/**
* Divide this fixed-point number by another, truncating the result.
*/
  divDown(other: Numberish, decimals?: number): FixedPoint;
/**
* Divide this fixed-point number by another, rounding up.
*/
  divUp(other: Numberish, decimals?: number): FixedPoint;
/**
* Divide this fixed-point number by another.
*/
  div(other: Numberish, decimals?: number): FixedPoint;
/**
* Raise this fixed-point number to the power of another.
*/
  pow(other: Numberish, decimals?: number): FixedPoint;
/**
* Find out if this number is equal to another.
*/
  eq(other: Numberish, decimals?: number): boolean;
/**
* Find out if this number is not equal to another.
*/
  ne(other: Numberish, decimals?: number): boolean;
/**
* Find out if this number is greater than another.
*/
  gt(other: Numberish, decimals?: number): boolean;
/**
* Find out if this number is greater than or equal to another.
*/
  gte(other: Numberish, decimals?: number): boolean;
/**
* Find out if this number is less than another.
*/
  lt(other: Numberish, decimals?: number): boolean;
/**
* Find out if this number is less than or equal to another.
*/
  lte(other: Numberish, decimals?: number): boolean;
/**
* Get the minimum of this number and another.
*
* If the numbers are equal, the number with the fewest decimal places will be returned.
*/
  min(other: Numberish, decimals?: number): FixedPoint;
/**
* Get the maximum of this number and another.
*
* If the numbers are equal, the number with the most decimal places will be returned.
*/
  max(other: Numberish, decimals?: number): FixedPoint;
/**
* Clamp this number to a range.
*/
  clamp(min: Numberish, max: Numberish, decimals?: number): FixedPoint;
/**
* Get the decimal string representation of this fixed-point number.
*/
  toString(): string;
/**
* Get the float representation of this fixed-point number.
*
* __Caution__: This method may lose precision.
*
* @example
*
* ```ts
* const fixed = fixed(1_123456789012345678n);
* console.log(fixed.toNumber());
* // 1.1234567890123457
* ```
*/
  toNumber(): number;
/**
*/
  valueOf(): string;
/**
* Create a new fixed-point number from this one, with a given number of
* decimal places.
*
* @example
* ```ts
* const a = fixed(1e18);
* console.log(a.toString());
* // => 1.000000000000000000
*
* const b = a.toFixed(6);
* console.log(b.toString());
* // => 1.000000
* ```
*/
  toFixed(decimals: number): FixedPoint;
/**
* Format this fixed-point number for display.
*/
  format(options?: IFormatOptions): string;
/**
* Format this fixed-point number as a currency.
*/
  formatCurrency(options?: ICurrencyFormatOptions): string;
/**
* Get the scaled bigint representation of this fixed-point number.
*/
  readonly bigint: bigint;
/**
* The number of decimal places in the fixed-point number.
*/
  readonly decimals: number;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_fixedpoint_free: (a: number) => void;
  readonly __wbg_get_fixedpoint_decimals: (a: number) => number;
  readonly fixedpoint_new: (a: number, b: number, c: number) => void;
  readonly fixedpoint_one: (a: number, b: number) => void;
  readonly fixedpoint_random: (a: number, b: number) => void;
  readonly fixedpoint_bigint: (a: number, b: number) => void;
  readonly fixedpoint_add: (a: number, b: number, c: number, d: number) => void;
  readonly fixedpoint_sub: (a: number, b: number, c: number, d: number) => void;
  readonly fixedpoint_mulDivDown: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly fixedpoint_mulDivUp: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly fixedpoint_mulDown: (a: number, b: number, c: number, d: number) => void;
  readonly fixedpoint_mulUp: (a: number, b: number, c: number, d: number) => void;
  readonly fixedpoint_mul: (a: number, b: number, c: number, d: number) => void;
  readonly fixedpoint_divDown: (a: number, b: number, c: number, d: number) => void;
  readonly fixedpoint_divUp: (a: number, b: number, c: number, d: number) => void;
  readonly fixedpoint_div: (a: number, b: number, c: number, d: number) => void;
  readonly fixedpoint_pow: (a: number, b: number, c: number, d: number) => void;
  readonly fixedpoint_eq: (a: number, b: number, c: number, d: number) => void;
  readonly fixedpoint_ne: (a: number, b: number, c: number, d: number) => void;
  readonly fixedpoint_gt: (a: number, b: number, c: number, d: number) => void;
  readonly fixedpoint_gte: (a: number, b: number, c: number, d: number) => void;
  readonly fixedpoint_lt: (a: number, b: number, c: number, d: number) => void;
  readonly fixedpoint_lte: (a: number, b: number, c: number, d: number) => void;
  readonly fixedpoint_min: (a: number, b: number, c: number, d: number) => void;
  readonly fixedpoint_max: (a: number, b: number, c: number, d: number) => void;
  readonly fixedpoint_clamp: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly fixedpoint_toString: (a: number, b: number) => void;
  readonly fixedpoint_toNumber: (a: number) => number;
  readonly fixedpoint_is_fixed_point: (a: number) => number;
  readonly fixedpoint_toFixed: (a: number, b: number) => number;
  readonly initialize: () => void;
  readonly fixedpoint_valueOf: (a: number, b: number) => void;
  readonly getVersion: (a: number) => void;
  readonly fixed: (a: number, b: number, c: number) => void;
  readonly parseFixed: (a: number, b: number, c: number) => void;
  readonly randomFixed: (a: number, b: number) => void;
  readonly ln: (a: number, b: number) => void;
  readonly fixedpoint_format: (a: number, b: number, c: number) => void;
  readonly fixedpoint_formatCurrency: (a: number, b: number, c: number) => void;
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
declare const wasmBase64: string;
declare const wasmBuffer: ArrayBuffer;