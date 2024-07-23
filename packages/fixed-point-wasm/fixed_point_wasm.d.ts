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
* Create a new `Fixed` instance from an 18-decimal scaled raw value.
*
* @example
* ```js
* const fromBigint = fixed(1500000000000000000n);
* const fromNumber = fixed(1.5e18);
* const fromString = fixed('1.5e18');
*
* console.log(fromBigint.toString());
* // => 1.500000000000000000
*
* console.log(fromNumber.toString());
* // => 1.500000000000000000
*
* console.log(fromString.toString());
* // => 1.500000000000000000
* ```
*
* @param value - An 18-decimal scaled raw value.
*/
export function fixed(value: Numberish): Fixed;
/**
* Create a random `Fixed` instance within a given range.
*
* @param min - The minimum value of the range as an 18-decimal scaled raw
* value.
*
* @param max - The maximum value of the range as an 18-decimal scaled raw
* value.
*/
export function randInRange(min: Numberish, max: Numberish): Fixed;
/**
* Get the natural logarithm of a fixed-point number.
*
* @param x - The number to calculate the natural logarithm of as an 18-decimal
* scaled raw value.
*/
export function ln(x: Numberish): Fixed;

/**
 * An 18-decimal fixed-point number.
 */
export type Numberish = Fixed | bigint | number | string;


/**
* An 18-decimal fixed-point number.
*/
export class Fixed {
  free(): void;
/**
* Create a new `Fixed` instance from an 18-decimal scaled raw value.
* @param {Numberish | undefined} [value]
*/
  constructor(value?: Numberish);
/**
* @returns {bigint}
*/
  valueOf(): bigint;
/**
* Get the float representation of this fixed-point number.
*
* __Caution__: This method may lose precision.
*/
  toNumber(): number;
/**
* Get the formatted string representation of this fixed-point number.
*/
  toString(): string;
/**
* Add a fixed-point number to this one.
*/
  add(other: Numberish): Fixed;
/**
* Subtract a fixed-point number from this one.
*/
  sub(other: Numberish): Fixed;
/**
* Multiply this fixed-point number by another.
*/
  mul(other: Numberish): Fixed;
/**
* Divide this fixed-point number by another.
*/
  div(other: Numberish): Fixed;
/**
* Multiply this fixed-point number by another, then divide by a divisor,
* rounding down.
*/
  mulDivDown(other: Numberish, divisor: Numberish): Fixed;
/**
* Multiply this fixed-point number by another, then divide by a divisor,
* rounding up.
*/
  mulDivUp(other: Numberish, divisor: Numberish): Fixed;
/**
* Multiply this fixed-point number by another, rounding down.
*/
  mulDown(other: Numberish): Fixed;
/**
* Multiply this fixed-point number by another, rounding up.
*/
  mulUp(other: Numberish): Fixed;
/**
* Divide this fixed-point number by another, rounding down.
*/
  divDown(other: Numberish): Fixed;
/**
* Divide this fixed-point number by another, rounding up.
*/
  divUp(other: Numberish): Fixed;
/**
* Raise this fixed-point number to the power of another.
*/
  pow(other: Numberish): Fixed;
/**
* Get the 18-decimal scaled bigint representation of this fixed-point
* number.
*/
  readonly bigint: bigint;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly getVersion: (a: number) => void;
  readonly __wbg_fixed_free: (a: number) => void;
  readonly fixed_new: (a: number, b: number) => void;
  readonly fixed_valueOf: (a: number, b: number) => void;
  readonly fixed_bigint: (a: number, b: number) => void;
  readonly fixed_toNumber: (a: number) => number;
  readonly fixed_toString: (a: number, b: number) => void;
  readonly fixed_add: (a: number, b: number, c: number) => void;
  readonly fixed_sub: (a: number, b: number, c: number) => void;
  readonly fixed_mul: (a: number, b: number, c: number) => void;
  readonly fixed_div: (a: number, b: number, c: number) => void;
  readonly fixed_mulDivDown: (a: number, b: number, c: number, d: number) => void;
  readonly fixed_mulDivUp: (a: number, b: number, c: number, d: number) => void;
  readonly fixed_mulDown: (a: number, b: number, c: number) => void;
  readonly fixed_mulUp: (a: number, b: number, c: number) => void;
  readonly fixed_divDown: (a: number, b: number, c: number) => void;
  readonly fixed_divUp: (a: number, b: number, c: number) => void;
  readonly fixed_pow: (a: number, b: number, c: number) => void;
  readonly fixed: (a: number, b: number) => void;
  readonly randInRange: (a: number, b: number, c: number) => void;
  readonly ln: (a: number, b: number) => void;
  readonly initialize: () => void;
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