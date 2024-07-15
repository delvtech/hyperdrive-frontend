/* tslint:disable */
/* eslint-disable */
/**
*/
export function initialize(): void;
/**
*/
export function getVersion(): string;
/**
* Create a new `Fixed` instance from a bigint.
*
* @example
* ```js
* const x = fixed(BigInt(15e17));
* console.log(x.toString());
* // => 1.500000000000000000
* ```
* @param {bigint | undefined} [raw]
* @returns {Fixed}
*/
export function fixed(raw?: bigint): Fixed;
/**
* Parses a scaled string into a `Fixed` instance.
*
* @example
*
* ```js
* const x = parseFixed('1.5e18');
* console.log(x.toString());
* // => 1.500000000000000000
* ```
* @param {string} string
* @returns {Fixed}
*/
export function parseFixed(string: string): Fixed;
/**
* @param {bigint} x
* @returns {Fixed}
*/
export function ln(x: bigint): Fixed;
/**
* @param {bigint} min
* @param {bigint} max
* @returns {Fixed}
*/
export function randInRange(min: bigint, max: bigint): Fixed;
/**
* An 18-decimal fixed-point number.
*/
export class Fixed {
  free(): void;
/**
* Create a new `Fixed` instance from an 18-decimal scaled bigint.
* @param {bigint | undefined} [raw]
*/
  constructor(raw?: bigint);
/**
* Get the formatted string representation of this fixed-point number.
* @returns {string}
*/
  toString(): string;
/**
* Add a fixed-point number to this one.
* @param {Fixed} other
* @returns {Fixed}
*/
  add(other: Fixed): Fixed;
/**
* Subtract a fixed-point number from this one.
* @param {Fixed} other
* @returns {Fixed}
*/
  sub(other: Fixed): Fixed;
/**
* Multiply this fixed-point number by another.
* @param {Fixed} other
* @returns {Fixed}
*/
  mul(other: Fixed): Fixed;
/**
* Divide this fixed-point number by another.
* @param {Fixed} other
* @returns {Fixed}
*/
  div(other: Fixed): Fixed;
/**
* Multiply this fixed-point number by another, then divide by a divisor,
* rounding down.
* @param {Fixed} other
* @param {Fixed} divisor
* @returns {Fixed}
*/
  mulDivDown(other: Fixed, divisor: Fixed): Fixed;
/**
* Multiply this fixed-point number by another, then divide by a divisor,
* rounding up.
* @param {Fixed} other
* @param {Fixed} divisor
* @returns {Fixed}
*/
  mulDivUp(other: Fixed, divisor: Fixed): Fixed;
/**
* Multiply this fixed-point number by another, rounding down.
* @param {Fixed} other
* @returns {Fixed}
*/
  mulDown(other: Fixed): Fixed;
/**
* Multiply this fixed-point number by another, rounding up.
* @param {Fixed} other
* @returns {Fixed}
*/
  mulUp(other: Fixed): Fixed;
/**
* Divide this fixed-point number by another, rounding down.
* @param {Fixed} other
* @returns {Fixed}
*/
  divDown(other: Fixed): Fixed;
/**
* Divide this fixed-point number by another, rounding up.
* @param {Fixed} other
* @returns {Fixed}
*/
  divUp(other: Fixed): Fixed;
/**
* Raise this fixed-point number to the power of another.
* @param {Fixed} other
* @returns {Fixed}
*/
  pow(other: Fixed): Fixed;
/**
* Get the scaled bigint representation of this fixed-point number.
*/
  readonly raw: bigint;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly getVersion: (a: number) => void;
  readonly __wbg_fixed_free: (a: number) => void;
  readonly fixed_new: (a: number, b: number) => void;
  readonly fixed_raw: (a: number, b: number) => void;
  readonly fixed_toString: (a: number, b: number) => void;
  readonly fixed_add: (a: number, b: number) => number;
  readonly fixed_sub: (a: number, b: number) => number;
  readonly fixed_mul: (a: number, b: number) => number;
  readonly fixed_div: (a: number, b: number) => number;
  readonly fixed_mulDivDown: (a: number, b: number, c: number) => number;
  readonly fixed_mulDivUp: (a: number, b: number, c: number) => number;
  readonly fixed_mulDown: (a: number, b: number) => number;
  readonly fixed_mulUp: (a: number, b: number) => number;
  readonly fixed_divDown: (a: number, b: number) => number;
  readonly fixed_divUp: (a: number, b: number) => number;
  readonly fixed_pow: (a: number, b: number, c: number) => void;
  readonly fixed: (a: number, b: number) => void;
  readonly parseFixed: (a: number, b: number, c: number) => void;
  readonly ln: (a: number, b: number) => void;
  readonly randInRange: (a: number, b: number, c: number) => void;
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