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
   *  The minimum value to generate. Defaults to `0`.
   */
  min?: Numberish | undefined;
  /**
   *  The maximum value to generate. Defaults to 1.0 (scaled) more than `min`.
   */
  max?: Numberish | undefined;
  /**
   *  The number of decimal places to use. Max is `18`. Defaults to `18`.
   */
  decimals?: number | undefined;
}

/**
* A number with a fixed number of decimal places.
*/
export class FixedPoint {
  free(): void;
/**
* Create a new fixed-point number from a scaled value.
*
* @param value - A scaled value.
*
* @param decimals - The number of decimal places to use. Max is `18`.
* Defaults to `18`.
*/
  constructor(value?: Numberish, decimals?: number);
/**
* Create a random fixed-point number with and optional min and max.
*
* @example
*
* ```ts
* const random = Fixed.random();
* console.log(random.toString());
* // => 0.472987274007185487
* ```
*/
  static random(params?: IGenerateRandomParams): FixedPoint;
/**
* Get the scaled bigint representation of this fixed-point number.
*/
  valueOf(): bigint;
/**
* Get the float representation of this fixed-point number.
*
* __Caution__: This method may lose precision.
*
* @example
*
* ```ts
* const fixed = new FixedPoint(1_123456789012345678n);
* console.log(fixed.toNumber());
* // 1.1234567890123457
* ```
*/
  toNumber(): number;
/**
* Get the formatted string representation of this fixed-point number.
*/
  toString(): string;
/**
* Add a fixed-point number to this one.
*/
  add(other: Numberish): FixedPoint;
/**
* Subtract a fixed-point number from this one.
*/
  sub(other: Numberish): FixedPoint;
/**
* Multiply this fixed-point number by another.
*/
  mul(other: Numberish): FixedPoint;
/**
* Divide this fixed-point number by another.
*/
  div(other: Numberish): FixedPoint;
/**
* Multiply this fixed-point number by another, then divide by a divisor,
* rounding down.
*/
  mulDivDown(other: Numberish, divisor: Numberish): FixedPoint;
/**
* Multiply this fixed-point number by another, then divide by a divisor,
* rounding up.
*/
  mulDivUp(other: Numberish, divisor: Numberish): FixedPoint;
/**
* Multiply this fixed-point number by another, rounding down.
*/
  mulDown(other: Numberish): FixedPoint;
/**
* Multiply this fixed-point number by another, rounding up.
*/
  mulUp(other: Numberish): FixedPoint;
/**
* Divide this fixed-point number by another, rounding down.
*/
  divDown(other: Numberish): FixedPoint;
/**
* Divide this fixed-point number by another, rounding up.
*/
  divUp(other: Numberish): FixedPoint;
/**
* Raise this fixed-point number to the power of another.
*/
  pow(other: Numberish): FixedPoint;
/**
* Get the scaled bigint representation of this fixed-point number.
*/
  readonly bigint: bigint;
/**
* The number of decimal places in the fixed-point number.
*/
  decimals: number;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly getVersion: (a: number) => void;
  readonly __wbg_fixedpoint_free: (a: number) => void;
  readonly __wbg_get_fixedpoint_decimals: (a: number) => number;
  readonly __wbg_set_fixedpoint_decimals: (a: number, b: number) => void;
  readonly fixedpoint_new: (a: number, b: number, c: number) => void;
  readonly fixedpoint_random: (a: number, b: number) => void;
  readonly fixedpoint_bigint: (a: number, b: number) => void;
  readonly fixedpoint_toNumber: (a: number) => number;
  readonly fixedpoint_toString: (a: number, b: number) => void;
  readonly fixedpoint_add: (a: number, b: number, c: number) => void;
  readonly fixedpoint_sub: (a: number, b: number, c: number) => void;
  readonly fixedpoint_mul: (a: number, b: number, c: number) => void;
  readonly fixedpoint_div: (a: number, b: number, c: number) => void;
  readonly fixedpoint_mulDivDown: (a: number, b: number, c: number, d: number) => void;
  readonly fixedpoint_mulDivUp: (a: number, b: number, c: number, d: number) => void;
  readonly fixedpoint_mulDown: (a: number, b: number, c: number) => void;
  readonly fixedpoint_mulUp: (a: number, b: number, c: number) => void;
  readonly fixedpoint_divDown: (a: number, b: number, c: number) => void;
  readonly fixedpoint_divUp: (a: number, b: number, c: number) => void;
  readonly fixedpoint_pow: (a: number, b: number, c: number) => void;
  readonly fixedpoint_is_fixed_point: (a: number) => number;
  readonly initialize: () => void;
  readonly fixedpoint_valueOf: (a: number, b: number) => void;
  readonly fixed: (a: number, b: number, c: number) => void;
  readonly parseFixed: (a: number, b: number, c: number) => void;
  readonly randomFixed: (a: number, b: number) => void;
  readonly ln: (a: number, b: number) => void;
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