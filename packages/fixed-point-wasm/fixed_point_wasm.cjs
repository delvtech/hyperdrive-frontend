let imports = {};
imports['./fixed_point_wasm_bg.js'] = module.exports;
let wasm;
const { TextDecoder, TextEncoder } = require(`util`);
let cachedTextDecoder = new TextDecoder('utf-8', {
  ignoreBOM: true,
  fatal: true
});
cachedTextDecoder.decode();
let cachedUint8Memory0 = null;
function getUint8Memory0() {
  if (cachedUint8Memory0 === null || cachedUint8Memory0.byteLength === 0) {
    cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
  }
  return cachedUint8Memory0;
}
function getStringFromWasm0(ptr, len) {
  ptr = ptr >>> 0;
  return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}
const heap = new Array(128).fill(undefined);
heap.push(undefined, null, true, false);
let heap_next = heap.length;
function addHeapObject(obj) {
  if (heap_next === heap.length) heap.push(heap.length + 1);
  const idx = heap_next;
  heap_next = heap[idx];
  heap[idx] = obj;
  return idx;
}
function getObject(idx) {
  return heap[idx];
}
function dropObject(idx) {
  if (idx < 132) return;
  heap[idx] = heap_next;
  heap_next = idx;
}
function takeObject(idx) {
  const ret = getObject(idx);
  dropObject(idx);
  return ret;
}
let WASM_VECTOR_LEN = 0;
let cachedTextEncoder = new TextEncoder('utf-8');
const encodeString = typeof cachedTextEncoder.encodeInto === 'function' ? function (arg, view) {
  return cachedTextEncoder.encodeInto(arg, view);
} : function (arg, view) {
  const buf = cachedTextEncoder.encode(arg);
  view.set(buf);
  return {
    read: arg.length,
    written: buf.length
  };
};
function passStringToWasm0(arg, malloc, realloc) {
  if (realloc === undefined) {
    const buf = cachedTextEncoder.encode(arg);
    const ptr = malloc(buf.length, 1) >>> 0;
    getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);
    WASM_VECTOR_LEN = buf.length;
    return ptr;
  }
  let len = arg.length;
  let ptr = malloc(len, 1) >>> 0;
  const mem = getUint8Memory0();
  let offset = 0;
  for (; offset < len; offset++) {
    const code = arg.charCodeAt(offset);
    if (code > 0x7F) break;
    mem[ptr + offset] = code;
  }
  if (offset !== len) {
    if (offset !== 0) {
      arg = arg.slice(offset);
    }
    ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
    const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
    const ret = encodeString(arg, view);
    offset += ret.written;
    ptr = realloc(ptr, len, offset, 1) >>> 0;
  }
  WASM_VECTOR_LEN = offset;
  return ptr;
}
function isLikeNone(x) {
  return x === undefined || x === null;
}
let cachedInt32Memory0 = null;
function getInt32Memory0() {
  if (cachedInt32Memory0 === null || cachedInt32Memory0.byteLength === 0) {
    cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);
  }
  return cachedInt32Memory0;
}
function debugString(val) {
  // primitive types
  const type = typeof val;
  if (type == 'number' || type == 'boolean' || val == null) {
    return `${val}`;
  }
  if (type == 'string') {
    return `"${val}"`;
  }
  if (type == 'symbol') {
    const description = val.description;
    if (description == null) {
      return 'Symbol';
    } else {
      return `Symbol(${description})`;
    }
  }
  if (type == 'function') {
    const name = val.name;
    if (typeof name == 'string' && name.length > 0) {
      return `Function(${name})`;
    } else {
      return 'Function';
    }
  }
  // objects
  if (Array.isArray(val)) {
    const length = val.length;
    let debug = '[';
    if (length > 0) {
      debug += debugString(val[0]);
    }
    for (let i = 1; i < length; i++) {
      debug += ', ' + debugString(val[i]);
    }
    debug += ']';
    return debug;
  }
  // Test for built-in
  const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
  let className;
  if (builtInMatches.length > 1) {
    className = builtInMatches[1];
  } else {
    // Failed to match the standard '[object ClassName]'
    return toString.call(val);
  }
  if (className == 'Object') {
    // we're a user defined class or Object
    // JSON.stringify avoids problems with cycles, and is generally much
    // easier than looping through ownProperties of `val`.
    try {
      return 'Object(' + JSON.stringify(val) + ')';
    } catch (_) {
      return 'Object';
    }
  }
  // errors
  if (val instanceof Error) {
    return `${val.name}: ${val.message}\n${val.stack}`;
  }
  // TODO we could test for more things here, like `Set`s and `Map`s.
  return className;
}
/**
*/

/**
* Get the version of this package.
*/

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

/**
* Get the natural logarithm of a fixed-point number.
*
* @param x - The value to calculate the natural logarithm of.
* scaled raw value.
*/

function handleError(f, args) {
  try {
    return f.apply(this, args);
  } catch (e) {
    wasm.__wbindgen_exn_store(addHeapObject(e));
  }
}
const FixedPointFinalization = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm.__wbg_fixedpoint_free(ptr >>> 0));
/**
* A number with a fixed number of decimal places.
*/

;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
module.exports.initialize = function () {
  wasm.initialize();
};
module.exports.getVersion = function () {
  let deferred1_0;
  let deferred1_1;
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    wasm.getVersion(retptr);
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    deferred1_0 = r0;
    deferred1_1 = r1;
    return getStringFromWasm0(r0, r1);
  } finally {
    wasm.__wbindgen_add_to_stack_pointer(16);
    wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
  }
};
module.exports.fixed = function (value, decimals) {
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    wasm.fixed(retptr, addHeapObject(value), isLikeNone(decimals) ? 0xFFFFFF : decimals);
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    var r2 = getInt32Memory0()[retptr / 4 + 2];
    if (r2) {
      throw takeObject(r1);
    }
    return FixedPoint.__wrap(r0);
  } finally {
    wasm.__wbindgen_add_to_stack_pointer(16);
  }
};
module.exports.parseFixed = function (value, decimals) {
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    wasm.parseFixed(retptr, addHeapObject(value), isLikeNone(decimals) ? 0xFFFFFF : decimals);
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    var r2 = getInt32Memory0()[retptr / 4 + 2];
    if (r2) {
      throw takeObject(r1);
    }
    return FixedPoint.__wrap(r0);
  } finally {
    wasm.__wbindgen_add_to_stack_pointer(16);
  }
};
module.exports.randomFixed = function (params) {
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    wasm.randomFixed(retptr, isLikeNone(params) ? 0 : addHeapObject(params));
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    var r2 = getInt32Memory0()[retptr / 4 + 2];
    if (r2) {
      throw takeObject(r1);
    }
    return FixedPoint.__wrap(r0);
  } finally {
    wasm.__wbindgen_add_to_stack_pointer(16);
  }
};
module.exports.ln = function (x) {
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    wasm.ln(retptr, addHeapObject(x));
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    var r2 = getInt32Memory0()[retptr / 4 + 2];
    if (r2) {
      throw takeObject(r1);
    }
    return FixedPoint.__wrap(r0);
  } finally {
    wasm.__wbindgen_add_to_stack_pointer(16);
  }
};
class FixedPoint {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(FixedPoint.prototype);
    obj.__wbg_ptr = ptr;
    FixedPointFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    FixedPointFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_fixedpoint_free(ptr);
  }
  /**
  * The number of decimal places in the fixed-point number.
  * @returns {number}
  */
  get decimals() {
    const ret = wasm.__wbg_get_fixedpoint_decimals(this.__wbg_ptr);
    return ret;
  }
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
  constructor(value, decimals) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.fixedpoint_new(retptr, addHeapObject(value), isLikeNone(decimals) ? 0xFFFFFF : decimals);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var r2 = getInt32Memory0()[retptr / 4 + 2];
      if (r2) {
        throw takeObject(r1);
      }
      this.__wbg_ptr = r0 >>> 0;
      return this;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
  * Create a fixed-point number representing one unit.
  *
  * @param decimals - The number of decimal places to use. Max is `18`.
  * Defaults to `18`.
  */
  static one(decimals) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.fixedpoint_one(retptr, isLikeNone(decimals) ? 0xFFFFFF : decimals);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var r2 = getInt32Memory0()[retptr / 4 + 2];
      if (r2) {
        throw takeObject(r1);
      }
      return FixedPoint.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
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
  static random(params) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.fixedpoint_random(retptr, isLikeNone(params) ? 0 : addHeapObject(params));
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var r2 = getInt32Memory0()[retptr / 4 + 2];
      if (r2) {
        throw takeObject(r1);
      }
      return FixedPoint.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
  * Get the scaled bigint representation of this fixed-point number.
  */
  get bigint() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.fixedpoint_bigint(retptr, this.__wbg_ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var r2 = getInt32Memory0()[retptr / 4 + 2];
      if (r2) {
        throw takeObject(r1);
      }
      return takeObject(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
  * Get the absolute value of this fixed-point number.
  */
  abs() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.fixedpoint_abs(retptr, this.__wbg_ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var r2 = getInt32Memory0()[retptr / 4 + 2];
      if (r2) {
        throw takeObject(r1);
      }
      return FixedPoint.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
  * Get the absolute difference between this number and another.
  */
  absDiff(other, decimals) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.fixedpoint_absDiff(retptr, this.__wbg_ptr, addHeapObject(other), isLikeNone(decimals) ? 0xFFFFFF : decimals);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var r2 = getInt32Memory0()[retptr / 4 + 2];
      if (r2) {
        throw takeObject(r1);
      }
      return FixedPoint.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
  * Add a fixed-point number to this one.
  */
  add(other, decimals) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.fixedpoint_add(retptr, this.__wbg_ptr, addHeapObject(other), isLikeNone(decimals) ? 0xFFFFFF : decimals);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var r2 = getInt32Memory0()[retptr / 4 + 2];
      if (r2) {
        throw takeObject(r1);
      }
      return FixedPoint.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
  * Subtract a fixed-point number from this one.
  */
  sub(other, decimals) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.fixedpoint_sub(retptr, this.__wbg_ptr, addHeapObject(other), isLikeNone(decimals) ? 0xFFFFFF : decimals);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var r2 = getInt32Memory0()[retptr / 4 + 2];
      if (r2) {
        throw takeObject(r1);
      }
      return FixedPoint.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
  * Multiply this fixed-point number by another, then divide by a divisor,
  * rounding down.
  */
  mulDivDown(other, divisor, decimals) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.fixedpoint_mulDivDown(retptr, this.__wbg_ptr, addHeapObject(other), addHeapObject(divisor), isLikeNone(decimals) ? 0xFFFFFF : decimals);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var r2 = getInt32Memory0()[retptr / 4 + 2];
      if (r2) {
        throw takeObject(r1);
      }
      return FixedPoint.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
  * Multiply this fixed-point number by another, then divide by a divisor,
  * rounding up.
  */
  mulDivUp(other, divisor, decimals) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.fixedpoint_mulDivUp(retptr, this.__wbg_ptr, addHeapObject(other), addHeapObject(divisor), isLikeNone(decimals) ? 0xFFFFFF : decimals);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var r2 = getInt32Memory0()[retptr / 4 + 2];
      if (r2) {
        throw takeObject(r1);
      }
      return FixedPoint.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
  * Multiply this fixed-point number by another, truncating the result.
  */
  mulDown(other, decimals) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.fixedpoint_mulDown(retptr, this.__wbg_ptr, addHeapObject(other), isLikeNone(decimals) ? 0xFFFFFF : decimals);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var r2 = getInt32Memory0()[retptr / 4 + 2];
      if (r2) {
        throw takeObject(r1);
      }
      return FixedPoint.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
  * Multiply this fixed-point number by another, rounding up.
  */
  mulUp(other, decimals) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.fixedpoint_mulUp(retptr, this.__wbg_ptr, addHeapObject(other), isLikeNone(decimals) ? 0xFFFFFF : decimals);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var r2 = getInt32Memory0()[retptr / 4 + 2];
      if (r2) {
        throw takeObject(r1);
      }
      return FixedPoint.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
  * Multiply this fixed-point number by another. Rounding to the nearest integer.
  */
  mul(other, decimals) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.fixedpoint_mul(retptr, this.__wbg_ptr, addHeapObject(other), isLikeNone(decimals) ? 0xFFFFFF : decimals);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var r2 = getInt32Memory0()[retptr / 4 + 2];
      if (r2) {
        throw takeObject(r1);
      }
      return FixedPoint.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
  * Divide this fixed-point number by another, truncating the result.
  */
  divDown(other, decimals) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.fixedpoint_divDown(retptr, this.__wbg_ptr, addHeapObject(other), isLikeNone(decimals) ? 0xFFFFFF : decimals);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var r2 = getInt32Memory0()[retptr / 4 + 2];
      if (r2) {
        throw takeObject(r1);
      }
      return FixedPoint.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
  * Divide this fixed-point number by another, rounding up.
  */
  divUp(other, decimals) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.fixedpoint_divUp(retptr, this.__wbg_ptr, addHeapObject(other), isLikeNone(decimals) ? 0xFFFFFF : decimals);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var r2 = getInt32Memory0()[retptr / 4 + 2];
      if (r2) {
        throw takeObject(r1);
      }
      return FixedPoint.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
  * Divide this fixed-point number by another.
  */
  div(other, decimals) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.fixedpoint_div(retptr, this.__wbg_ptr, addHeapObject(other), isLikeNone(decimals) ? 0xFFFFFF : decimals);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var r2 = getInt32Memory0()[retptr / 4 + 2];
      if (r2) {
        throw takeObject(r1);
      }
      return FixedPoint.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
  * Raise this fixed-point number to the power of another.
  */
  pow(other, decimals) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.fixedpoint_pow(retptr, this.__wbg_ptr, addHeapObject(other), isLikeNone(decimals) ? 0xFFFFFF : decimals);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var r2 = getInt32Memory0()[retptr / 4 + 2];
      if (r2) {
        throw takeObject(r1);
      }
      return FixedPoint.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
  * Find out if this number is equal to another.
  */
  eq(other, decimals) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.fixedpoint_eq(retptr, this.__wbg_ptr, addHeapObject(other), isLikeNone(decimals) ? 0xFFFFFF : decimals);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var r2 = getInt32Memory0()[retptr / 4 + 2];
      if (r2) {
        throw takeObject(r1);
      }
      return r0 !== 0;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
  * Find out if this number is not equal to another.
  */
  ne(other, decimals) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.fixedpoint_ne(retptr, this.__wbg_ptr, addHeapObject(other), isLikeNone(decimals) ? 0xFFFFFF : decimals);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var r2 = getInt32Memory0()[retptr / 4 + 2];
      if (r2) {
        throw takeObject(r1);
      }
      return r0 !== 0;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
  * Find out if this number is greater than another.
  */
  gt(other, decimals) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.fixedpoint_gt(retptr, this.__wbg_ptr, addHeapObject(other), isLikeNone(decimals) ? 0xFFFFFF : decimals);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var r2 = getInt32Memory0()[retptr / 4 + 2];
      if (r2) {
        throw takeObject(r1);
      }
      return r0 !== 0;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
  * Find out if this number is greater than or equal to another.
  */
  gte(other, decimals) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.fixedpoint_gte(retptr, this.__wbg_ptr, addHeapObject(other), isLikeNone(decimals) ? 0xFFFFFF : decimals);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var r2 = getInt32Memory0()[retptr / 4 + 2];
      if (r2) {
        throw takeObject(r1);
      }
      return r0 !== 0;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
  * Find out if this number is less than another.
  */
  lt(other, decimals) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.fixedpoint_lt(retptr, this.__wbg_ptr, addHeapObject(other), isLikeNone(decimals) ? 0xFFFFFF : decimals);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var r2 = getInt32Memory0()[retptr / 4 + 2];
      if (r2) {
        throw takeObject(r1);
      }
      return r0 !== 0;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
  * Find out if this number is less than or equal to another.
  */
  lte(other, decimals) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.fixedpoint_lte(retptr, this.__wbg_ptr, addHeapObject(other), isLikeNone(decimals) ? 0xFFFFFF : decimals);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var r2 = getInt32Memory0()[retptr / 4 + 2];
      if (r2) {
        throw takeObject(r1);
      }
      return r0 !== 0;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
  * Get the minimum of this number and another.
  *
  * If the numbers are equal, the number with the fewest decimal places will be returned.
  */
  min(other, decimals) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.fixedpoint_min(retptr, this.__wbg_ptr, addHeapObject(other), isLikeNone(decimals) ? 0xFFFFFF : decimals);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var r2 = getInt32Memory0()[retptr / 4 + 2];
      if (r2) {
        throw takeObject(r1);
      }
      return FixedPoint.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
  * Get the maximum of this number and another.
  *
  * If the numbers are equal, the number with the most decimal places will be returned.
  */
  max(other, decimals) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.fixedpoint_max(retptr, this.__wbg_ptr, addHeapObject(other), isLikeNone(decimals) ? 0xFFFFFF : decimals);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var r2 = getInt32Memory0()[retptr / 4 + 2];
      if (r2) {
        throw takeObject(r1);
      }
      return FixedPoint.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
  * Clamp this number to a range.
  */
  clamp(min, max, decimals) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.fixedpoint_clamp(retptr, this.__wbg_ptr, addHeapObject(min), addHeapObject(max), isLikeNone(decimals) ? 0xFFFFFF : decimals);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var r2 = getInt32Memory0()[retptr / 4 + 2];
      if (r2) {
        throw takeObject(r1);
      }
      return FixedPoint.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
  * Get the decimal string representation of this fixed-point number.
  */
  toString() {
    let deferred1_0;
    let deferred1_1;
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.fixedpoint_toString(retptr, this.__wbg_ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      deferred1_0 = r0;
      deferred1_1 = r1;
      return getStringFromWasm0(r0, r1);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
  * Get the scaled hexadecimal string representation of this fixed-point
  * number with the `0x` prefix.
  *
  * @example
  * ```ts
  * const num = fixed(1_123456789012345678n);
  * console.log(num.toHex());
  * // 0xf9751ff4d94f34e
  * ```
  * @returns {string}
  */
  toHex() {
    let deferred2_0;
    let deferred2_1;
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.fixedpoint_toHex(retptr, this.__wbg_ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var r2 = getInt32Memory0()[retptr / 4 + 2];
      var r3 = getInt32Memory0()[retptr / 4 + 3];
      var ptr1 = r0;
      var len1 = r1;
      if (r3) {
        ptr1 = 0;
        len1 = 0;
        throw takeObject(r2);
      }
      deferred2_0 = ptr1;
      deferred2_1 = len1;
      return getStringFromWasm0(ptr1, len1);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      wasm.__wbindgen_free(deferred2_0, deferred2_1, 1);
    }
  }
  /**
  * Get the float representation of this fixed-point number.
  *
  * __Caution__: This method may lose precision.
  *
  * @example
  *
  * ```ts
  * const num = fixed(1_123456789012345678n);
  * console.log(num.toNumber());
  * // 1.1234567890123457
  * ```
  */
  toNumber() {
    const ret = wasm.fixedpoint_toNumber(this.__wbg_ptr);
    return ret;
  }
  /**
  */
  valueOf() {
    let deferred1_0;
    let deferred1_1;
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.fixedpoint_toString(retptr, this.__wbg_ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      deferred1_0 = r0;
      deferred1_1 = r1;
      return getStringFromWasm0(r0, r1);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
  */
  is_fixed_point() {
    const ret = wasm.fixedpoint_is_fixed_point(this.__wbg_ptr);
    return ret !== 0;
  }
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
  toFixed(decimals) {
    const ret = wasm.fixedpoint_toFixed(this.__wbg_ptr, decimals);
    return FixedPoint.__wrap(ret);
  }
  /**
  * Format this fixed-point number for display.
  */
  format(options) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.fixedpoint_format(retptr, this.__wbg_ptr, isLikeNone(options) ? 0 : addHeapObject(options));
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var r2 = getInt32Memory0()[retptr / 4 + 2];
      if (r2) {
        throw takeObject(r1);
      }
      return takeObject(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
  * Format this fixed-point number as a currency.
  */
  formatCurrency(options) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.fixedpoint_formatCurrency(retptr, this.__wbg_ptr, isLikeNone(options) ? 0 : addHeapObject(options));
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var r2 = getInt32Memory0()[retptr / 4 + 2];
      if (r2) {
        throw takeObject(r1);
      }
      return takeObject(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
}
module.exports.FixedPoint = FixedPoint;
module.exports.__wbg_decimals_a541bdca42ab014a = function (arg0) {
  const ret = getObject(arg0).decimals;
  return isLikeNone(ret) ? 0xFFFFFF : ret;
};
module.exports.__wbg_trailingzeros_9096a6ab91b51e44 = function (arg0) {
  const ret = getObject(arg0).trailingZeros;
  return isLikeNone(ret) ? 0xFFFFFF : ret ? 1 : 0;
};
module.exports.__wbg_rounding_c350167b8df80b07 = function (arg0, arg1) {
  const ret = getObject(arg1).rounding;
  var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
  var len1 = WASM_VECTOR_LEN;
  getInt32Memory0()[arg0 / 4 + 1] = len1;
  getInt32Memory0()[arg0 / 4 + 0] = ptr1;
};
module.exports.__wbg_locale_a918594d3477235b = function (arg0, arg1) {
  const ret = getObject(arg1).locale;
  var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
  var len1 = WASM_VECTOR_LEN;
  getInt32Memory0()[arg0 / 4 + 1] = len1;
  getInt32Memory0()[arg0 / 4 + 0] = ptr1;
};
module.exports.__wbg_group_86d366de8415706a = function (arg0) {
  const ret = getObject(arg0).group;
  return isLikeNone(ret) ? 0xFFFFFF : ret ? 1 : 0;
};
module.exports.__wbg_compactdisplay_127b425ebfa60bdc = function (arg0, arg1) {
  const ret = getObject(arg1).compactDisplay;
  var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
  var len1 = WASM_VECTOR_LEN;
  getInt32Memory0()[arg0 / 4 + 1] = len1;
  getInt32Memory0()[arg0 / 4 + 0] = ptr1;
};
module.exports.__wbg_percent_cc5505344128f19c = function (arg0) {
  const ret = getObject(arg0).percent;
  return isLikeNone(ret) ? 0xFFFFFF : ret ? 1 : 0;
};
module.exports.__wbindgen_string_new = function (arg0, arg1) {
  const ret = getStringFromWasm0(arg0, arg1);
  return addHeapObject(ret);
};
module.exports.__wbindgen_object_drop_ref = function (arg0) {
  takeObject(arg0);
};
module.exports.__wbg_currency_0427be2fbd58aac9 = function (arg0, arg1) {
  const ret = getObject(arg1).currency;
  var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
  var len1 = WASM_VECTOR_LEN;
  getInt32Memory0()[arg0 / 4 + 1] = len1;
  getInt32Memory0()[arg0 / 4 + 0] = ptr1;
};
module.exports.__wbg_compact_b12854d8be2b4fde = function (arg0) {
  const ret = getObject(arg0).compact;
  return isLikeNone(ret) ? 0xFFFFFF : ret ? 1 : 0;
};
module.exports.__wbg_display_77f4912e8d74140b = function (arg0, arg1) {
  const ret = getObject(arg1).display;
  var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
  var len1 = WASM_VECTOR_LEN;
  getInt32Memory0()[arg0 / 4 + 1] = len1;
  getInt32Memory0()[arg0 / 4 + 0] = ptr1;
};
module.exports.__wbindgen_number_new = function (arg0) {
  const ret = arg0;
  return addHeapObject(ret);
};
module.exports.__wbg_isfixedpoint_fa266c8734e20abe = function (arg0) {
  const ret = getObject(arg0).is_fixed_point;
  return isLikeNone(ret) ? 0xFFFFFF : ret ? 1 : 0;
};
module.exports.__wbg_min_dd5b7833862b3395 = function (arg0) {
  const ret = getObject(arg0).min;
  return isLikeNone(ret) ? 0 : addHeapObject(ret);
};
module.exports.__wbg_max_b053e66e4d9490e3 = function (arg0) {
  const ret = getObject(arg0).max;
  return isLikeNone(ret) ? 0 : addHeapObject(ret);
};
module.exports.__wbg_decimals_dc46e19a958765cd = function (arg0) {
  const ret = getObject(arg0).decimals;
  return isLikeNone(ret) ? 0xFFFFFF : ret;
};
module.exports.__wbg_toString_291859a3b4c5463a = function (arg0) {
  const ret = getObject(arg0).toString();
  return addHeapObject(ret);
};
module.exports.__wbindgen_typeof = function (arg0) {
  const ret = typeof getObject(arg0);
  return addHeapObject(ret);
};
module.exports.__wbindgen_string_get = function (arg0, arg1) {
  const obj = getObject(arg1);
  const ret = typeof obj === 'string' ? obj : undefined;
  var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
  var len1 = WASM_VECTOR_LEN;
  getInt32Memory0()[arg0 / 4 + 1] = len1;
  getInt32Memory0()[arg0 / 4 + 0] = ptr1;
};
module.exports.__wbg_new_abda76e883ba8a5f = function () {
  const ret = new Error();
  return addHeapObject(ret);
};
module.exports.__wbg_stack_658279fe44541cf6 = function (arg0, arg1) {
  const ret = getObject(arg1).stack;
  const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
  const len1 = WASM_VECTOR_LEN;
  getInt32Memory0()[arg0 / 4 + 1] = len1;
  getInt32Memory0()[arg0 / 4 + 0] = ptr1;
};
module.exports.__wbg_error_f851667af71bcfc6 = function (arg0, arg1) {
  let deferred0_0;
  let deferred0_1;
  try {
    deferred0_0 = arg0;
    deferred0_1 = arg1;
    console.error(getStringFromWasm0(arg0, arg1));
  } finally {
    wasm.__wbindgen_free(deferred0_0, deferred0_1, 1);
  }
};
module.exports.__wbindgen_ge = function (arg0, arg1) {
  const ret = getObject(arg0) >= getObject(arg1);
  return ret;
};
module.exports.__wbg_crypto_1d1f22824a6a080c = function (arg0) {
  const ret = getObject(arg0).crypto;
  return addHeapObject(ret);
};
module.exports.__wbindgen_is_object = function (arg0) {
  const val = getObject(arg0);
  const ret = typeof val === 'object' && val !== null;
  return ret;
};
module.exports.__wbg_process_4a72847cc503995b = function (arg0) {
  const ret = getObject(arg0).process;
  return addHeapObject(ret);
};
module.exports.__wbg_versions_f686565e586dd935 = function (arg0) {
  const ret = getObject(arg0).versions;
  return addHeapObject(ret);
};
module.exports.__wbg_node_104a2ff8d6ea03a2 = function (arg0) {
  const ret = getObject(arg0).node;
  return addHeapObject(ret);
};
module.exports.__wbindgen_is_string = function (arg0) {
  const ret = typeof getObject(arg0) === 'string';
  return ret;
};
module.exports.__wbg_require_cca90b1a94a0255b = function () {
  return handleError(function () {
    const ret = module.require;
    return addHeapObject(ret);
  }, arguments);
};
module.exports.__wbindgen_is_function = function (arg0) {
  const ret = typeof getObject(arg0) === 'function';
  return ret;
};
module.exports.__wbg_msCrypto_eb05e62b530a1508 = function (arg0) {
  const ret = getObject(arg0).msCrypto;
  return addHeapObject(ret);
};
module.exports.__wbg_randomFillSync_5c9c955aa56b6049 = function () {
  return handleError(function (arg0, arg1) {
    getObject(arg0).randomFillSync(takeObject(arg1));
  }, arguments);
};
module.exports.__wbg_getRandomValues_3aa56aa6edec874c = function () {
  return handleError(function (arg0, arg1) {
    getObject(arg0).getRandomValues(getObject(arg1));
  }, arguments);
};
module.exports.__wbg_BigInt_42b692c18e1ac6d6 = function (arg0) {
  const ret = BigInt(getObject(arg0));
  return addHeapObject(ret);
};
module.exports.__wbg_newnoargs_e258087cd0daa0ea = function (arg0, arg1) {
  const ret = new Function(getStringFromWasm0(arg0, arg1));
  return addHeapObject(ret);
};
module.exports.__wbg_call_27c0f87801dedf93 = function () {
  return handleError(function (arg0, arg1) {
    const ret = getObject(arg0).call(getObject(arg1));
    return addHeapObject(ret);
  }, arguments);
};
module.exports.__wbg_new_72fb9a18b5ae2624 = function () {
  const ret = new Object();
  return addHeapObject(ret);
};
module.exports.__wbg_length_dee433d4c85c9387 = function (arg0) {
  const ret = getObject(arg0).length;
  return ret;
};
module.exports.__wbindgen_object_clone_ref = function (arg0) {
  const ret = getObject(arg0);
  return addHeapObject(ret);
};
module.exports.__wbg_self_ce0dbfc45cf2f5be = function () {
  return handleError(function () {
    const ret = self.self;
    return addHeapObject(ret);
  }, arguments);
};
module.exports.__wbg_window_c6fb939a7f436783 = function () {
  return handleError(function () {
    const ret = window.window;
    return addHeapObject(ret);
  }, arguments);
};
module.exports.__wbg_globalThis_d1e6af4856ba331b = function () {
  return handleError(function () {
    const ret = globalThis.globalThis;
    return addHeapObject(ret);
  }, arguments);
};
module.exports.__wbg_global_207b558942527489 = function () {
  return handleError(function () {
    const ret = global.global;
    return addHeapObject(ret);
  }, arguments);
};
module.exports.__wbindgen_is_undefined = function (arg0) {
  const ret = getObject(arg0) === undefined;
  return ret;
};
module.exports.__wbg_parseFloat_c070db336d687e53 = function (arg0, arg1) {
  const ret = parseFloat(getStringFromWasm0(arg0, arg1));
  return ret;
};
module.exports.__wbg_of_4a2b313a453ec059 = function (arg0) {
  const ret = Array.of(getObject(arg0));
  return addHeapObject(ret);
};
module.exports.__wbg_BigInt_f00b864098012725 = function () {
  return handleError(function (arg0) {
    const ret = BigInt(getObject(arg0));
    return addHeapObject(ret);
  }, arguments);
};
module.exports.__wbg_toString_66be3c8e1c6a7c76 = function () {
  return handleError(function (arg0, arg1) {
    const ret = getObject(arg0).toString(arg1);
    return addHeapObject(ret);
  }, arguments);
};
module.exports.__wbg_toString_0b527fce0e8f2bab = function (arg0, arg1, arg2) {
  const ret = getObject(arg1).toString(arg2);
  const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
  const len1 = WASM_VECTOR_LEN;
  getInt32Memory0()[arg0 / 4 + 1] = len1;
  getInt32Memory0()[arg0 / 4 + 0] = ptr1;
};
module.exports.__wbg_new_28c511d9baebfa89 = function (arg0, arg1) {
  const ret = new Error(getStringFromWasm0(arg0, arg1));
  return addHeapObject(ret);
};
module.exports.__wbg_call_b3ca7c6051f9bec1 = function () {
  return handleError(function (arg0, arg1, arg2) {
    const ret = getObject(arg0).call(getObject(arg1), getObject(arg2));
    return addHeapObject(ret);
  }, arguments);
};
module.exports.__wbg_new_5dd86ebc917d9f52 = function (arg0, arg1) {
  const ret = new TypeError(getStringFromWasm0(arg0, arg1));
  return addHeapObject(ret);
};
module.exports.__wbg_concat_3de229fe4fe90fea = function (arg0, arg1) {
  const ret = getObject(arg0).concat(getObject(arg1));
  return addHeapObject(ret);
};
module.exports.__wbg_replaceAll_9d77c8a2430eaa16 = function (arg0, arg1, arg2, arg3, arg4) {
  const ret = getObject(arg0).replaceAll(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
  return addHeapObject(ret);
};
module.exports.__wbg_slice_52fb626ffdc8da8f = function (arg0, arg1, arg2) {
  const ret = getObject(arg0).slice(arg1 >>> 0, arg2 >>> 0);
  return addHeapObject(ret);
};
module.exports.__wbg_startsWith_d7a64d9510774e8f = function (arg0, arg1, arg2, arg3) {
  const ret = getObject(arg0).startsWith(getStringFromWasm0(arg1, arg2), arg3 >>> 0);
  return ret;
};
module.exports.__wbg_toLowerCase_caa2632b439e88ec = function (arg0) {
  const ret = getObject(arg0).toLowerCase();
  return addHeapObject(ret);
};
module.exports.__wbg_trim_ca7d536bc83f0eb4 = function (arg0) {
  const ret = getObject(arg0).trim();
  return addHeapObject(ret);
};
module.exports.__wbg_buffer_12d079cc21e14bdb = function (arg0) {
  const ret = getObject(arg0).buffer;
  return addHeapObject(ret);
};
module.exports.__wbg_newwithbyteoffsetandlength_aa4a17c33a06e5cb = function (arg0, arg1, arg2) {
  const ret = new Uint8Array(getObject(arg0), arg1 >>> 0, arg2 >>> 0);
  return addHeapObject(ret);
};
module.exports.__wbg_new_63b92bc8671ed464 = function (arg0) {
  const ret = new Uint8Array(getObject(arg0));
  return addHeapObject(ret);
};
module.exports.__wbg_set_a47bac70306a19a7 = function (arg0, arg1, arg2) {
  getObject(arg0).set(getObject(arg1), arg2 >>> 0);
};
module.exports.__wbg_newwithlength_e9b4878cebadb3d3 = function (arg0) {
  const ret = new Uint8Array(arg0 >>> 0);
  return addHeapObject(ret);
};
module.exports.__wbg_subarray_a1f73cd4b5b42fe1 = function (arg0, arg1, arg2) {
  const ret = getObject(arg0).subarray(arg1 >>> 0, arg2 >>> 0);
  return addHeapObject(ret);
};
module.exports.__wbg_new_9b92e4a30b8fb05f = function (arg0, arg1) {
  const ret = new Intl.NumberFormat(getObject(arg0), getObject(arg1));
  return addHeapObject(ret);
};
module.exports.__wbg_format_0d1a43422b065409 = function (arg0) {
  const ret = getObject(arg0).format;
  return addHeapObject(ret);
};
module.exports.__wbg_set_1f9b04f170055d33 = function () {
  return handleError(function (arg0, arg1, arg2) {
    const ret = Reflect.set(getObject(arg0), getObject(arg1), getObject(arg2));
    return ret;
  }, arguments);
};
module.exports.__wbindgen_debug_string = function (arg0, arg1) {
  const ret = debugString(getObject(arg1));
  const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
  const len1 = WASM_VECTOR_LEN;
  getInt32Memory0()[arg0 / 4 + 1] = len1;
  getInt32Memory0()[arg0 / 4 + 0] = ptr1;
};
module.exports.__wbindgen_throw = function (arg0, arg1) {
  throw new Error(getStringFromWasm0(arg0, arg1));
};
module.exports.__wbindgen_memory = function () {
  const ret = wasm.memory;
  return addHeapObject(ret);
};
const path = require('path').join(__dirname, 'fixed_point_wasm_bg.wasm');
const bytes = require('fs').readFileSync(path);

const wasmModule = new WebAssembly.Module(bytes);
const wasmInstance = new WebAssembly.Instance(wasmModule, imports);
wasm = wasmInstance.exports;
module.exports.__wasm = wasm;