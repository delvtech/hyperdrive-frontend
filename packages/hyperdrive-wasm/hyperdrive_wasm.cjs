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
module.exports.__wbg_poolinfo_d1c50339108cb204 = function (arg0) {
  const ret = getObject(arg0).poolInfo;
  return addHeapObject(ret);
};
module.exports.__wbg_poolconfig_cf01275bd19467e3 = function (arg0) {
  const ret = getObject(arg0).poolConfig;
  return addHeapObject(ret);
};
module.exports.__wbg_apr_ea5e5661d2eb210b = function (arg0) {
  const ret = getObject(arg0).apr;
  return addHeapObject(ret);
};
module.exports.__wbg_positionduration_5d4801d01ff684a7 = function (arg0) {
  const ret = getObject(arg0).positionDuration;
  return addHeapObject(ret);
};
module.exports.__wbg_apy_e81b159d41ac05bb = function (arg0) {
  const ret = getObject(arg0).apy;
  return addHeapObject(ret);
};
module.exports.__wbg_positionduration_0f708452e312bbf9 = function (arg0) {
  const ret = getObject(arg0).positionDuration;
  return addHeapObject(ret);
};
module.exports.__wbg_currenttime_be9f32cac3d32fae = function (arg0) {
  const ret = getObject(arg0).currentTime;
  return addHeapObject(ret);
};
module.exports.__wbg_price_302b243339b584ad = function (arg0) {
  const ret = getObject(arg0).price;
  return addHeapObject(ret);
};
module.exports.__wbg_positionduration_de7f72119ffda336 = function (arg0) {
  const ret = getObject(arg0).positionDuration;
  return addHeapObject(ret);
};
module.exports.__wbg_currenttime_4147f7fa260720e2 = function (arg0) {
  const ret = getObject(arg0).currentTime;
  return addHeapObject(ret);
};
module.exports.__wbg_contribution_ce6db9a0cd13654b = function (arg0) {
  const ret = getObject(arg0).contribution;
  return addHeapObject(ret);
};
module.exports.__wbg_asbase_64ffe5935d105a21 = function (arg0) {
  const ret = getObject(arg0).asBase;
  return isLikeNone(ret) ? 0xFFFFFF : ret ? 1 : 0;
};
module.exports.__wbg_minlpshareprice_e9866265f546af38 = function (arg0) {
  const ret = getObject(arg0).minLpSharePrice;
  return isLikeNone(ret) ? 0 : addHeapObject(ret);
};
module.exports.__wbg_minapr_1d7f6c030aa25b3e = function (arg0) {
  const ret = getObject(arg0).minApr;
  return isLikeNone(ret) ? 0 : addHeapObject(ret);
};
module.exports.__wbg_maxapr_6d6e07a592274f09 = function (arg0) {
  const ret = getObject(arg0).maxApr;
  return isLikeNone(ret) ? 0 : addHeapObject(ret);
};
module.exports.__wbg_budget_f96051b09f55775c = function (arg0) {
  const ret = getObject(arg0).budget;
  return addHeapObject(ret);
};
module.exports.__wbg_openvaultshareprice_dcc48d765c59e58c = function (arg0) {
  const ret = getObject(arg0).openVaultSharePrice;
  return addHeapObject(ret);
};
module.exports.__wbg_checkpointexposure_707cda52ec17c2d4 = function (arg0) {
  const ret = getObject(arg0).checkpointExposure;
  return addHeapObject(ret);
};
module.exports.__wbg_conservativeprice_5d36b9a584baadf7 = function (arg0) {
  const ret = getObject(arg0).conservativePrice;
  return isLikeNone(ret) ? 0 : addHeapObject(ret);
};
module.exports.__wbg_maxiterations_a3dae0873cf00796 = function (arg0) {
  const ret = getObject(arg0).maxIterations;
  return isLikeNone(ret) ? 0xFFFFFF : ret;
};
module.exports.__wbg_checkpointexposure_1d1902acb7eea276 = function (arg0) {
  const ret = getObject(arg0).checkpointExposure;
  return addHeapObject(ret);
};
module.exports.__wbg_maxiterations_655eb33a3d8fca51 = function (arg0, arg1) {
  const ret = getObject(arg1).maxIterations;
  getInt32Memory0()[arg0 / 4 + 1] = isLikeNone(ret) ? 0 : ret;
  getInt32Memory0()[arg0 / 4 + 0] = !isLikeNone(ret);
};
module.exports.__wbg_bondamount_39949cf2713240c0 = function (arg0) {
  const ret = getObject(arg0).bondAmount;
  return addHeapObject(ret);
};
module.exports.__wbg_openvaultshareprice_07553e2c7ba55424 = function (arg0) {
  const ret = getObject(arg0).openVaultSharePrice;
  return addHeapObject(ret);
};
module.exports.__wbg_bondamount_80bd054fa5e57795 = function (arg0) {
  const ret = getObject(arg0).bondAmount;
  return addHeapObject(ret);
};
module.exports.__wbg_bondamount_45f632e33d563dad = function (arg0) {
  const ret = getObject(arg0).bondAmount;
  return addHeapObject(ret);
};
module.exports.__wbg_openvaultshareprice_8122157ff7aa0c9f = function (arg0) {
  const ret = getObject(arg0).openVaultSharePrice;
  return addHeapObject(ret);
};
module.exports.__wbg_variableapy_f79f84b536b46a47 = function (arg0) {
  const ret = getObject(arg0).variableApy;
  return addHeapObject(ret);
};
module.exports.__wbg_targetbaseamount_516a89103df73064 = function (arg0) {
  const ret = getObject(arg0).targetBaseAmount;
  return addHeapObject(ret);
};
module.exports.__wbg_openvaultshareprice_81b43695851056c2 = function (arg0) {
  const ret = getObject(arg0).openVaultSharePrice;
  return addHeapObject(ret);
};
module.exports.__wbg_absolutemaxbondamount_e580d568ee040ef5 = function (arg0) {
  const ret = getObject(arg0).absoluteMaxBondAmount;
  return addHeapObject(ret);
};
module.exports.__wbg_maybetolerance_6d3c852834cc587f = function (arg0) {
  const ret = getObject(arg0).maybeTolerance;
  return isLikeNone(ret) ? 0 : addHeapObject(ret);
};
module.exports.__wbg_maybemaxiterations_7becd5ca1400f61c = function (arg0) {
  const ret = getObject(arg0).maybeMaxIterations;
  return isLikeNone(ret) ? 0xFFFFFF : ret;
};
module.exports.__wbg_curve_d4852b09915609fe = function (arg0) {
  const ret = getObject(arg0).curve;
  return addHeapObject(ret);
};
module.exports.__wbg_flat_f1fb64e297ce3608 = function (arg0) {
  const ret = getObject(arg0).flat;
  return addHeapObject(ret);
};
module.exports.__wbg_governancelp_20658b3a41401e71 = function (arg0) {
  const ret = getObject(arg0).governanceLP;
  return addHeapObject(ret);
};
module.exports.__wbg_governancezombie_7cb0dd066e9bc29e = function (arg0) {
  const ret = getObject(arg0).governanceZombie;
  return addHeapObject(ret);
};
module.exports.__wbg_baseamount_6bdb37f8cf16a62f = function (arg0) {
  const ret = getObject(arg0).baseAmount;
  return addHeapObject(ret);
};
module.exports.__wbg_baseamount_67a1ec449e4a8fda = function (arg0) {
  const ret = getObject(arg0).baseAmount;
  return addHeapObject(ret);
};
module.exports.__wbg_bondamount_6ff5d93ad16e9c3f = function (arg0) {
  const ret = getObject(arg0).bondAmount;
  return addHeapObject(ret);
};
module.exports.__wbg_maturitytime_714a397c17c3b958 = function (arg0) {
  const ret = getObject(arg0).maturityTime;
  return addHeapObject(ret);
};
module.exports.__wbg_currenttime_211c409d4e3cc661 = function (arg0) {
  const ret = getObject(arg0).currentTime;
  return addHeapObject(ret);
};
module.exports.__wbg_bondamount_395143df49a9c10f = function (arg0) {
  const ret = getObject(arg0).bondAmount;
  return addHeapObject(ret);
};
module.exports.__wbg_bondamount_f06ea3415611e19e = function (arg0) {
  const ret = getObject(arg0).bondAmount;
  return addHeapObject(ret);
};
module.exports.__wbg_openvaultshareprice_e57e6ea2b5bb73cf = function (arg0) {
  const ret = getObject(arg0).openVaultSharePrice;
  return addHeapObject(ret);
};
module.exports.__wbg_closevaultshareprice_ab051d805b460aba = function (arg0) {
  const ret = getObject(arg0).closeVaultSharePrice;
  return addHeapObject(ret);
};
module.exports.__wbg_initialvaultshareprice_3a3f860bfb9dee04 = function (arg0) {
  const ret = getObject(arg0).initialVaultSharePrice;
  return addHeapObject(ret);
};
module.exports.__wbg_minimumsharereserves_c97e03f796a1f173 = function (arg0) {
  const ret = getObject(arg0).minimumShareReserves;
  return addHeapObject(ret);
};
module.exports.__wbg_minimumtransactionamount_3c1ab7b38606a7a3 = function (arg0) {
  const ret = getObject(arg0).minimumTransactionAmount;
  return addHeapObject(ret);
};
module.exports.__wbg_circuitbreakerdelta_eb8afe641128a095 = function (arg0) {
  const ret = getObject(arg0).circuitBreakerDelta;
  return addHeapObject(ret);
};
module.exports.__wbg_positionduration_17206d28262060f6 = function (arg0) {
  const ret = getObject(arg0).positionDuration;
  return addHeapObject(ret);
};
module.exports.__wbg_checkpointduration_3724b58b6a0f7e1a = function (arg0) {
  const ret = getObject(arg0).checkpointDuration;
  return addHeapObject(ret);
};
module.exports.__wbg_timestretch_45005af88610590f = function (arg0) {
  const ret = getObject(arg0).timeStretch;
  return addHeapObject(ret);
};
module.exports.__wbg_fees_a78115ca3fb6ae73 = function (arg0) {
  const ret = getObject(arg0).fees;
  return addHeapObject(ret);
};
module.exports.__wbg_checkpointrewarder_a600e31536240197 = function (arg0, arg1) {
  const ret = getObject(arg1).checkpointRewarder;
  const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
  const len1 = WASM_VECTOR_LEN;
  getInt32Memory0()[arg0 / 4 + 1] = len1;
  getInt32Memory0()[arg0 / 4 + 0] = ptr1;
};
module.exports.__wbg_feecollector_21321ea3f6baf5b9 = function (arg0, arg1) {
  const ret = getObject(arg1).feeCollector;
  const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
  const len1 = WASM_VECTOR_LEN;
  getInt32Memory0()[arg0 / 4 + 1] = len1;
  getInt32Memory0()[arg0 / 4 + 0] = ptr1;
};
module.exports.__wbg_sweepcollector_e3d7a2b012a5066e = function (arg0, arg1) {
  const ret = getObject(arg1).sweepCollector;
  const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
  const len1 = WASM_VECTOR_LEN;
  getInt32Memory0()[arg0 / 4 + 1] = len1;
  getInt32Memory0()[arg0 / 4 + 0] = ptr1;
};
module.exports.__wbg_governance_59542dfd5eb2f8c2 = function (arg0, arg1) {
  const ret = getObject(arg1).governance;
  const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
  const len1 = WASM_VECTOR_LEN;
  getInt32Memory0()[arg0 / 4 + 1] = len1;
  getInt32Memory0()[arg0 / 4 + 0] = ptr1;
};
module.exports.__wbg_basetoken_61f50370a0057676 = function (arg0, arg1) {
  const ret = getObject(arg1).baseToken;
  const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
  const len1 = WASM_VECTOR_LEN;
  getInt32Memory0()[arg0 / 4 + 1] = len1;
  getInt32Memory0()[arg0 / 4 + 0] = ptr1;
};
module.exports.__wbg_vaultsharestoken_1187935d83cb98ab = function (arg0, arg1) {
  const ret = getObject(arg1).vaultSharesToken;
  const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
  const len1 = WASM_VECTOR_LEN;
  getInt32Memory0()[arg0 / 4 + 1] = len1;
  getInt32Memory0()[arg0 / 4 + 0] = ptr1;
};
module.exports.__wbg_linkerfactory_2d721a3cea8520e4 = function (arg0, arg1) {
  const ret = getObject(arg1).linkerFactory;
  const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
  const len1 = WASM_VECTOR_LEN;
  getInt32Memory0()[arg0 / 4 + 1] = len1;
  getInt32Memory0()[arg0 / 4 + 0] = ptr1;
};
module.exports.__wbg_linkercodehash_57a63fa4ef9fd58b = function (arg0, arg1) {
  const ret = getObject(arg1).linkerCodeHash;
  const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
  const len1 = WASM_VECTOR_LEN;
  getInt32Memory0()[arg0 / 4 + 1] = len1;
  getInt32Memory0()[arg0 / 4 + 0] = ptr1;
};
module.exports.__wbg_lptotalsupply_ad1a760795273a86 = function (arg0) {
  const ret = getObject(arg0).lpTotalSupply;
  return addHeapObject(ret);
};
module.exports.__wbg_lpshareprice_d9b39949e33a06e8 = function (arg0) {
  const ret = getObject(arg0).lpSharePrice;
  return addHeapObject(ret);
};
module.exports.__wbg_bondreserves_159480d77ed8f09c = function (arg0) {
  const ret = getObject(arg0).bondReserves;
  return addHeapObject(ret);
};
module.exports.__wbg_sharereserves_fa39ec77de114a06 = function (arg0) {
  const ret = getObject(arg0).shareReserves;
  return addHeapObject(ret);
};
module.exports.__wbg_shareadjustment_70c8024ab89b7821 = function (arg0) {
  const ret = getObject(arg0).shareAdjustment;
  return addHeapObject(ret);
};
module.exports.__wbg_vaultshareprice_466cbbb5755d50de = function (arg0) {
  const ret = getObject(arg0).vaultSharePrice;
  return addHeapObject(ret);
};
module.exports.__wbg_longexposure_1a8fd022c16f1e41 = function (arg0) {
  const ret = getObject(arg0).longExposure;
  return addHeapObject(ret);
};
module.exports.__wbg_longsoutstanding_da3f5f624fddf653 = function (arg0) {
  const ret = getObject(arg0).longsOutstanding;
  return addHeapObject(ret);
};
module.exports.__wbg_longaveragematuritytime_60d5e28e7ef6ed58 = function (arg0) {
  const ret = getObject(arg0).longAverageMaturityTime;
  return addHeapObject(ret);
};
module.exports.__wbg_shortsoutstanding_9f1bf6839ed7bf12 = function (arg0) {
  const ret = getObject(arg0).shortsOutstanding;
  return addHeapObject(ret);
};
module.exports.__wbg_shortaveragematuritytime_ae7f2a1e3d547192 = function (arg0) {
  const ret = getObject(arg0).shortAverageMaturityTime;
  return addHeapObject(ret);
};
module.exports.__wbg_withdrawalsharesreadytowithdraw_8ef2dd51f43ba439 = function (arg0) {
  const ret = getObject(arg0).withdrawalSharesReadyToWithdraw;
  return addHeapObject(ret);
};
module.exports.__wbg_withdrawalsharesproceeds_9b11adf03591d399 = function (arg0) {
  const ret = getObject(arg0).withdrawalSharesProceeds;
  return addHeapObject(ret);
};
module.exports.__wbg_zombiebaseproceeds_a168facf4faba434 = function (arg0) {
  const ret = getObject(arg0).zombieBaseProceeds;
  return addHeapObject(ret);
};
module.exports.__wbg_zombiesharereserves_e325c92cd907163f = function (arg0) {
  const ret = getObject(arg0).zombieShareReserves;
  return addHeapObject(ret);
};
module.exports.__wbg_budget_f0625c53486693e2 = function (arg0) {
  const ret = getObject(arg0).budget;
  return addHeapObject(ret);
};
module.exports.__wbg_checkpointexposure_28fc9d166dc2d912 = function (arg0) {
  const ret = getObject(arg0).checkpointExposure;
  return addHeapObject(ret);
};
module.exports.__wbg_maxiterations_2103e72d3a59378a = function (arg0) {
  const ret = getObject(arg0).maxIterations;
  return isLikeNone(ret) ? 0xFFFFFF : ret;
};
module.exports.__wbg_baseamount_3eac047b98e9d287 = function (arg0) {
  const ret = getObject(arg0).baseAmount;
  return addHeapObject(ret);
};
module.exports.__wbg_baseamount_01d607b23ea12c99 = function (arg0) {
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