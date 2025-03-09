let imports = {};
imports['./hyperdrive_wasm_bg.js'] = module.exports;
let wasm;
const { TextDecoder, TextEncoder } = require(`util`);
const heap = new Array(128).fill(undefined);
heap.push(undefined, null, true, false);
function getObject(idx) {
  return heap[idx];
}
let heap_next = heap.length;
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
function addHeapObject(obj) {
  if (heap_next === heap.length) heap.push(heap.length + 1);
  const idx = heap_next;
  heap_next = heap[idx];
  heap[idx] = obj;
  return idx;
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
*/

/**
* Calculates the pool's spot price, i.e. the price to open a long of 1.
*/

/**
* Calculate the holding period return (HPR) given a non-compounding,
* annualized rate (APR).
*/

/**
* Calculate the holding period return (HPR) given a compounding, annualized
* rate (APY).
*/

/**
* Calculates the pool's idle liquidity in base.
*/

/**
* Calculates the present value in shares of LP's capital in the pool.
*/

/**
* Calculates the pool's fixed APR, i.e. the fixed rate a user locks in when
* they open a long.
*/

/**
* Calculate an APR from a fixed price.
*/

/**
* Calculates the amount of lp shares the trader will receive after adding
* liquidity.
*/

/**
* Calculates the max amount of bonds that can be shorted given a budget and
* the current state of the pool.
*/

/**
* Calculates the max amount of bonds that can be shorted given the current
* state of the pool.
*/

/**
* Calculates the amount of base the trader will need to deposit for a short of
* a given size.
*/

/**
* Calculates the spot price after opening the short on the YieldSpace curve
* and before calculating the fees.
*/

/**
* Calculate the implied rate of opening a short at a given size. This rate is
* calculated as an APY.
*/

/**
* Calculates the amount of bonds that will be shorted given a target base
* deposit amount.
*/

/**
* Calculates the curve fee paid in bonds by traders when they open a long.
*/

/**
* Calculates the governance fee paid in bonds by traders when they open a
* long.
*/

/**
* Calculates the curve fee paid in shares or base by traders when they close a
* long.
*/

/**
* Calculates the flat fee paid in shares or base by traders when they close a
* long.
*/

/**
*/

/**
* Calculates the curve fee paid by the trader when they open a short.
*/

/**
* Calculates the governance fee paid by the trader when they open a short.
*/

/**
* Calculates the curve fee paid by the trader when they close a short.
*/

/**
* Calculates the flat fee paid by the trader when they close a short.
*/

/**
* Calculates the amount of shares the trader will receive after fees for
* closing a short
*/

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

/**
* Calculates the max amount of base that can be used to open a long given a
* budget.
*/

/**
* Calculates the long amount that will be opened for a given base amount.
*/

/**
* Calculates the spot price after opening a Hyperdrive long.
*/

function handleError(f, args) {
  try {
    return f.apply(this, args);
  } catch (e) {
    wasm.__wbindgen_exn_store(addHeapObject(e));
  }
}
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
module.exports.spotPrice = function (params) {
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    wasm.spotPrice(retptr, addHeapObject(params));
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
};
module.exports.calcHprGivenApr = function (params) {
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    wasm.calcHprGivenApr(retptr, addHeapObject(params));
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
};
module.exports.calcHprGivenApy = function (params) {
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    wasm.calcHprGivenApy(retptr, addHeapObject(params));
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
};
module.exports.idleShareReservesInBase = function (params) {
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    wasm.idleShareReservesInBase(retptr, addHeapObject(params));
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
};
module.exports.presentValue = function (params) {
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    wasm.presentValue(retptr, addHeapObject(params));
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
};
module.exports.spotRate = function (params) {
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    wasm.spotRate(retptr, addHeapObject(params));
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
};
module.exports.calcAprGivenFixedPrice = function (params) {
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    wasm.calcAprGivenFixedPrice(retptr, addHeapObject(params));
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
};
module.exports.calcAddLiquidity = function (params) {
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    wasm.calcAddLiquidity(retptr, addHeapObject(params));
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
};
module.exports.maxShort = function (params) {
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    wasm.maxShort(retptr, addHeapObject(params));
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
};
module.exports.absoluteMaxShort = function (params) {
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    wasm.absoluteMaxShort(retptr, addHeapObject(params));
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
};
module.exports.calcOpenShort = function (params) {
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    wasm.calcOpenShort(retptr, addHeapObject(params));
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
};
module.exports.spotPriceAfterShort = function (params) {
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    wasm.spotPriceAfterShort(retptr, addHeapObject(params));
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
};
module.exports.calcImpliedRate = function (params) {
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    wasm.calcImpliedRate(retptr, addHeapObject(params));
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
};
module.exports.shortBondsGivenDeposit = function (params) {
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    wasm.shortBondsGivenDeposit(retptr, addHeapObject(params));
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
};
module.exports.openLongCurveFee = function (params) {
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    wasm.openLongCurveFee(retptr, addHeapObject(params));
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
};
module.exports.openLongGovernanceFee = function (params) {
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    wasm.openLongGovernanceFee(retptr, addHeapObject(params));
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
};
module.exports.closeLongCurveFee = function (params) {
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    wasm.closeLongCurveFee(retptr, addHeapObject(params));
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
};
module.exports.closeLongFlatFee = function (params) {
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    wasm.closeLongFlatFee(retptr, addHeapObject(params));
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
};
module.exports.calcCloseLong = function (params) {
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    wasm.calcCloseLong(retptr, addHeapObject(params));
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
};
module.exports.openShortCurveFee = function (params) {
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    wasm.openShortCurveFee(retptr, addHeapObject(params));
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
};
module.exports.openShortGovernanceFee = function (params) {
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    wasm.openShortGovernanceFee(retptr, addHeapObject(params));
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
};
module.exports.closeShortCurveFee = function (params) {
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    wasm.closeShortCurveFee(retptr, addHeapObject(params));
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
};
module.exports.closeShortFlatFee = function (params) {
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    wasm.closeShortFlatFee(retptr, addHeapObject(params));
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
};
module.exports.calcCloseShort = function (params) {
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    wasm.calcCloseShort(retptr, addHeapObject(params));
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
};
module.exports.calcShortMarketValue = function (params) {
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    wasm.calcShortMarketValue(retptr, addHeapObject(params));
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
};
module.exports.maxLong = function (params) {
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    wasm.maxLong(retptr, addHeapObject(params));
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
};
module.exports.calcOpenLong = function (params) {
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    wasm.calcOpenLong(retptr, addHeapObject(params));
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
};
module.exports.spotPriceAfterLong = function (params) {
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    wasm.spotPriceAfterLong(retptr, addHeapObject(params));
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
};
module.exports.__wbindgen_object_drop_ref = function (arg0) {
  takeObject(arg0);
};
module.exports.__wbindgen_string_new = function (arg0, arg1) {
  const ret = getStringFromWasm0(arg0, arg1);
  return addHeapObject(ret);
};
module.exports.__wbg_poolinfo_cdd03f3e3de339c9 = function (arg0) {
  const ret = getObject(arg0).poolInfo;
  return addHeapObject(ret);
};
module.exports.__wbg_poolconfig_a67bce5bc53425f7 = function (arg0) {
  const ret = getObject(arg0).poolConfig;
  return addHeapObject(ret);
};
module.exports.__wbg_apr_1b5e9b0290dcfc99 = function (arg0) {
  const ret = getObject(arg0).apr;
  return addHeapObject(ret);
};
module.exports.__wbg_positionduration_69036d6fc08e3dab = function (arg0) {
  const ret = getObject(arg0).positionDuration;
  return addHeapObject(ret);
};
module.exports.__wbg_apy_662de9ed6228fa72 = function (arg0) {
  const ret = getObject(arg0).apy;
  return addHeapObject(ret);
};
module.exports.__wbg_positionduration_e38d5987c08ba6d1 = function (arg0) {
  const ret = getObject(arg0).positionDuration;
  return addHeapObject(ret);
};
module.exports.__wbg_currenttime_0d58e19d27e1b18f = function (arg0) {
  const ret = getObject(arg0).currentTime;
  return addHeapObject(ret);
};
module.exports.__wbg_price_dc4d83fd7bb352eb = function (arg0) {
  const ret = getObject(arg0).price;
  return addHeapObject(ret);
};
module.exports.__wbg_positionduration_fc18b815658726d6 = function (arg0) {
  const ret = getObject(arg0).positionDuration;
  return addHeapObject(ret);
};
module.exports.__wbg_currenttime_783878d66b9e5347 = function (arg0) {
  const ret = getObject(arg0).currentTime;
  return addHeapObject(ret);
};
module.exports.__wbg_contribution_827bb47a065fcda8 = function (arg0) {
  const ret = getObject(arg0).contribution;
  return addHeapObject(ret);
};
module.exports.__wbg_asbase_c69994d06b95cf41 = function (arg0) {
  const ret = getObject(arg0).asBase;
  return isLikeNone(ret) ? 0xFFFFFF : ret ? 1 : 0;
};
module.exports.__wbg_minlpshareprice_522f852e3d0dbc56 = function (arg0) {
  const ret = getObject(arg0).minLpSharePrice;
  return isLikeNone(ret) ? 0 : addHeapObject(ret);
};
module.exports.__wbg_minapr_3dff7e1d835bb9bb = function (arg0) {
  const ret = getObject(arg0).minApr;
  return isLikeNone(ret) ? 0 : addHeapObject(ret);
};
module.exports.__wbg_maxapr_4a9fcb6fd56a97c2 = function (arg0) {
  const ret = getObject(arg0).maxApr;
  return isLikeNone(ret) ? 0 : addHeapObject(ret);
};
module.exports.__wbg_budget_411d63fb6d455c8c = function (arg0) {
  const ret = getObject(arg0).budget;
  return addHeapObject(ret);
};
module.exports.__wbg_openvaultshareprice_b5b2c195d86f564e = function (arg0) {
  const ret = getObject(arg0).openVaultSharePrice;
  return addHeapObject(ret);
};
module.exports.__wbg_checkpointexposure_ed1ec486972160ed = function (arg0) {
  const ret = getObject(arg0).checkpointExposure;
  return addHeapObject(ret);
};
module.exports.__wbg_conservativeprice_a798c8641c9f68b5 = function (arg0) {
  const ret = getObject(arg0).conservativePrice;
  return isLikeNone(ret) ? 0 : addHeapObject(ret);
};
module.exports.__wbg_maxiterations_875ff04d0eb27eb5 = function (arg0) {
  const ret = getObject(arg0).maxIterations;
  return isLikeNone(ret) ? 0xFFFFFF : ret;
};
module.exports.__wbg_checkpointexposure_6a0c0ace4938689d = function (arg0) {
  const ret = getObject(arg0).checkpointExposure;
  return addHeapObject(ret);
};
module.exports.__wbg_maxiterations_1bf0e0dcf03e1c61 = function (arg0, arg1) {
  const ret = getObject(arg1).maxIterations;
  getInt32Memory0()[arg0 / 4 + 1] = isLikeNone(ret) ? 0 : ret;
  getInt32Memory0()[arg0 / 4 + 0] = !isLikeNone(ret);
};
module.exports.__wbg_bondamount_adb961c916209325 = function (arg0) {
  const ret = getObject(arg0).bondAmount;
  return addHeapObject(ret);
};
module.exports.__wbg_openvaultshareprice_ae7afad2bb4cf6c4 = function (arg0) {
  const ret = getObject(arg0).openVaultSharePrice;
  return addHeapObject(ret);
};
module.exports.__wbg_bondamount_5d944ef949f8a949 = function (arg0) {
  const ret = getObject(arg0).bondAmount;
  return addHeapObject(ret);
};
module.exports.__wbg_bondamount_ba8e8f5a54e5ede0 = function (arg0) {
  const ret = getObject(arg0).bondAmount;
  return addHeapObject(ret);
};
module.exports.__wbg_openvaultshareprice_2128c0f29d01e618 = function (arg0) {
  const ret = getObject(arg0).openVaultSharePrice;
  return addHeapObject(ret);
};
module.exports.__wbg_variableapy_157e95c6d1682d59 = function (arg0) {
  const ret = getObject(arg0).variableApy;
  return addHeapObject(ret);
};
module.exports.__wbg_targetbaseamount_e5d76fe038056242 = function (arg0) {
  const ret = getObject(arg0).targetBaseAmount;
  return addHeapObject(ret);
};
module.exports.__wbg_openvaultshareprice_a387fdfeee0dd86d = function (arg0) {
  const ret = getObject(arg0).openVaultSharePrice;
  return addHeapObject(ret);
};
module.exports.__wbg_absolutemaxbondamount_97a8b1cadb93d801 = function (arg0) {
  const ret = getObject(arg0).absoluteMaxBondAmount;
  return addHeapObject(ret);
};
module.exports.__wbg_maybetolerance_39f7de7f2b80407c = function (arg0) {
  const ret = getObject(arg0).maybeTolerance;
  return isLikeNone(ret) ? 0 : addHeapObject(ret);
};
module.exports.__wbg_maybemaxiterations_5733f8d9db09da2c = function (arg0) {
  const ret = getObject(arg0).maybeMaxIterations;
  return isLikeNone(ret) ? 0xFFFFFF : ret;
};
module.exports.__wbg_curve_b719da859177db93 = function (arg0) {
  const ret = getObject(arg0).curve;
  return addHeapObject(ret);
};
module.exports.__wbg_flat_01a61907c1571c7c = function (arg0) {
  const ret = getObject(arg0).flat;
  return addHeapObject(ret);
};
module.exports.__wbg_governancelp_f4751614810023a7 = function (arg0) {
  const ret = getObject(arg0).governanceLP;
  return addHeapObject(ret);
};
module.exports.__wbg_governancezombie_2613b3ec9d20a98e = function (arg0) {
  const ret = getObject(arg0).governanceZombie;
  return addHeapObject(ret);
};
module.exports.__wbg_baseamount_e87d794e00235079 = function (arg0) {
  const ret = getObject(arg0).baseAmount;
  return addHeapObject(ret);
};
module.exports.__wbg_baseamount_000e5dc53848689e = function (arg0) {
  const ret = getObject(arg0).baseAmount;
  return addHeapObject(ret);
};
module.exports.__wbg_bondamount_4a1b6715a88a1af5 = function (arg0) {
  const ret = getObject(arg0).bondAmount;
  return addHeapObject(ret);
};
module.exports.__wbg_maturitytime_5f679a8e6294b657 = function (arg0) {
  const ret = getObject(arg0).maturityTime;
  return addHeapObject(ret);
};
module.exports.__wbg_currenttime_4804f69351b47e68 = function (arg0) {
  const ret = getObject(arg0).currentTime;
  return addHeapObject(ret);
};
module.exports.__wbg_bondamount_160dfcbce6f94197 = function (arg0) {
  const ret = getObject(arg0).bondAmount;
  return addHeapObject(ret);
};
module.exports.__wbg_bondamount_c2119cc6cbc5714d = function (arg0) {
  const ret = getObject(arg0).bondAmount;
  return addHeapObject(ret);
};
module.exports.__wbg_openvaultshareprice_aea624f21095f333 = function (arg0) {
  const ret = getObject(arg0).openVaultSharePrice;
  return addHeapObject(ret);
};
module.exports.__wbg_closevaultshareprice_1556fc70a41ba924 = function (arg0) {
  const ret = getObject(arg0).closeVaultSharePrice;
  return addHeapObject(ret);
};
module.exports.__wbg_initialvaultshareprice_d9e8c3b2ee7ea152 = function (arg0) {
  const ret = getObject(arg0).initialVaultSharePrice;
  return addHeapObject(ret);
};
module.exports.__wbg_minimumsharereserves_8411900506b24701 = function (arg0) {
  const ret = getObject(arg0).minimumShareReserves;
  return addHeapObject(ret);
};
module.exports.__wbg_minimumtransactionamount_e6b0e3b61f17152c = function (arg0) {
  const ret = getObject(arg0).minimumTransactionAmount;
  return addHeapObject(ret);
};
module.exports.__wbg_circuitbreakerdelta_708159993d2d1838 = function (arg0) {
  const ret = getObject(arg0).circuitBreakerDelta;
  return addHeapObject(ret);
};
module.exports.__wbg_positionduration_eb4134d22ad4dc33 = function (arg0) {
  const ret = getObject(arg0).positionDuration;
  return addHeapObject(ret);
};
module.exports.__wbg_checkpointduration_1c7d4325ebf4a0be = function (arg0) {
  const ret = getObject(arg0).checkpointDuration;
  return addHeapObject(ret);
};
module.exports.__wbg_timestretch_735ee69706c2837c = function (arg0) {
  const ret = getObject(arg0).timeStretch;
  return addHeapObject(ret);
};
module.exports.__wbg_fees_59272bdf4a026ccb = function (arg0) {
  const ret = getObject(arg0).fees;
  return addHeapObject(ret);
};
module.exports.__wbg_checkpointrewarder_cf9234f7508320f2 = function (arg0, arg1) {
  const ret = getObject(arg1).checkpointRewarder;
  const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
  const len1 = WASM_VECTOR_LEN;
  getInt32Memory0()[arg0 / 4 + 1] = len1;
  getInt32Memory0()[arg0 / 4 + 0] = ptr1;
};
module.exports.__wbg_feecollector_7468d8a4b425b178 = function (arg0, arg1) {
  const ret = getObject(arg1).feeCollector;
  const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
  const len1 = WASM_VECTOR_LEN;
  getInt32Memory0()[arg0 / 4 + 1] = len1;
  getInt32Memory0()[arg0 / 4 + 0] = ptr1;
};
module.exports.__wbg_sweepcollector_088d6542c164d3c0 = function (arg0, arg1) {
  const ret = getObject(arg1).sweepCollector;
  const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
  const len1 = WASM_VECTOR_LEN;
  getInt32Memory0()[arg0 / 4 + 1] = len1;
  getInt32Memory0()[arg0 / 4 + 0] = ptr1;
};
module.exports.__wbg_governance_4cbc286f51a2bada = function (arg0, arg1) {
  const ret = getObject(arg1).governance;
  const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
  const len1 = WASM_VECTOR_LEN;
  getInt32Memory0()[arg0 / 4 + 1] = len1;
  getInt32Memory0()[arg0 / 4 + 0] = ptr1;
};
module.exports.__wbg_basetoken_7d66cf55835ffa6b = function (arg0, arg1) {
  const ret = getObject(arg1).baseToken;
  const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
  const len1 = WASM_VECTOR_LEN;
  getInt32Memory0()[arg0 / 4 + 1] = len1;
  getInt32Memory0()[arg0 / 4 + 0] = ptr1;
};
module.exports.__wbg_vaultsharestoken_6e996ab8e6854c2c = function (arg0, arg1) {
  const ret = getObject(arg1).vaultSharesToken;
  const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
  const len1 = WASM_VECTOR_LEN;
  getInt32Memory0()[arg0 / 4 + 1] = len1;
  getInt32Memory0()[arg0 / 4 + 0] = ptr1;
};
module.exports.__wbg_linkerfactory_cb351b43c4c3acc0 = function (arg0, arg1) {
  const ret = getObject(arg1).linkerFactory;
  const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
  const len1 = WASM_VECTOR_LEN;
  getInt32Memory0()[arg0 / 4 + 1] = len1;
  getInt32Memory0()[arg0 / 4 + 0] = ptr1;
};
module.exports.__wbg_linkercodehash_26016296fb5f9094 = function (arg0, arg1) {
  const ret = getObject(arg1).linkerCodeHash;
  const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
  const len1 = WASM_VECTOR_LEN;
  getInt32Memory0()[arg0 / 4 + 1] = len1;
  getInt32Memory0()[arg0 / 4 + 0] = ptr1;
};
module.exports.__wbg_lptotalsupply_e4b87049df401ce2 = function (arg0) {
  const ret = getObject(arg0).lpTotalSupply;
  return addHeapObject(ret);
};
module.exports.__wbg_lpshareprice_e3389be35e268177 = function (arg0) {
  const ret = getObject(arg0).lpSharePrice;
  return addHeapObject(ret);
};
module.exports.__wbg_bondreserves_70abc15800950de4 = function (arg0) {
  const ret = getObject(arg0).bondReserves;
  return addHeapObject(ret);
};
module.exports.__wbg_sharereserves_d659a4abca234f6f = function (arg0) {
  const ret = getObject(arg0).shareReserves;
  return addHeapObject(ret);
};
module.exports.__wbg_shareadjustment_a862c983df187dd9 = function (arg0) {
  const ret = getObject(arg0).shareAdjustment;
  return addHeapObject(ret);
};
module.exports.__wbg_vaultshareprice_b7f07b650717dd76 = function (arg0) {
  const ret = getObject(arg0).vaultSharePrice;
  return addHeapObject(ret);
};
module.exports.__wbg_longexposure_081b132db90ac898 = function (arg0) {
  const ret = getObject(arg0).longExposure;
  return addHeapObject(ret);
};
module.exports.__wbg_longsoutstanding_7780fc1b750e64ee = function (arg0) {
  const ret = getObject(arg0).longsOutstanding;
  return addHeapObject(ret);
};
module.exports.__wbg_longaveragematuritytime_0d13211e56957dcf = function (arg0) {
  const ret = getObject(arg0).longAverageMaturityTime;
  return addHeapObject(ret);
};
module.exports.__wbg_shortsoutstanding_23ebc60dffa3c7ed = function (arg0) {
  const ret = getObject(arg0).shortsOutstanding;
  return addHeapObject(ret);
};
module.exports.__wbg_shortaveragematuritytime_9ffa39ef68bbf0d4 = function (arg0) {
  const ret = getObject(arg0).shortAverageMaturityTime;
  return addHeapObject(ret);
};
module.exports.__wbg_withdrawalsharesreadytowithdraw_334d49561251fb44 = function (arg0) {
  const ret = getObject(arg0).withdrawalSharesReadyToWithdraw;
  return addHeapObject(ret);
};
module.exports.__wbg_withdrawalsharesproceeds_06306d676a9e9ec1 = function (arg0) {
  const ret = getObject(arg0).withdrawalSharesProceeds;
  return addHeapObject(ret);
};
module.exports.__wbg_zombiebaseproceeds_6240324062fcf334 = function (arg0) {
  const ret = getObject(arg0).zombieBaseProceeds;
  return addHeapObject(ret);
};
module.exports.__wbg_zombiesharereserves_ad6803fc8cc083a9 = function (arg0) {
  const ret = getObject(arg0).zombieShareReserves;
  return addHeapObject(ret);
};
module.exports.__wbg_budget_ce52ea6f48a1dc5f = function (arg0) {
  const ret = getObject(arg0).budget;
  return addHeapObject(ret);
};
module.exports.__wbg_checkpointexposure_b2355d22339cc864 = function (arg0) {
  const ret = getObject(arg0).checkpointExposure;
  return addHeapObject(ret);
};
module.exports.__wbg_maxiterations_92ded114cfb45384 = function (arg0) {
  const ret = getObject(arg0).maxIterations;
  return isLikeNone(ret) ? 0xFFFFFF : ret;
};
module.exports.__wbg_baseamount_0bb08f6826421306 = function (arg0) {
  const ret = getObject(arg0).baseAmount;
  return addHeapObject(ret);
};
module.exports.__wbg_baseamount_de339731adb4a217 = function (arg0) {
  const ret = getObject(arg0).baseAmount;
  return addHeapObject(ret);
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
module.exports.__wbindgen_number_new = function (arg0) {
  const ret = arg0;
  return addHeapObject(ret);
};
module.exports.__wbindgen_ge = function (arg0, arg1) {
  const ret = getObject(arg0) >= getObject(arg1);
  return ret;
};
module.exports.__wbindgen_string_get = function (arg0, arg1) {
  const obj = getObject(arg1);
  const ret = typeof obj === 'string' ? obj : undefined;
  var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
  var len1 = WASM_VECTOR_LEN;
  getInt32Memory0()[arg0 / 4 + 1] = len1;
  getInt32Memory0()[arg0 / 4 + 0] = ptr1;
};
module.exports.__wbg_BigInt_42b692c18e1ac6d6 = function (arg0) {
  const ret = BigInt(getObject(arg0));
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
module.exports.__wbg_new_5dd86ebc917d9f52 = function (arg0, arg1) {
  const ret = new TypeError(getStringFromWasm0(arg0, arg1));
  return addHeapObject(ret);
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
const path = require('path').join(__dirname, 'hyperdrive_wasm_bg.wasm');
const bytes = require('fs').readFileSync(path);

const wasmModule = new WebAssembly.Module(bytes);
const wasmInstance = new WebAssembly.Instance(wasmModule, imports);
wasm = wasmInstance.exports;
module.exports.__wasm = wasm;