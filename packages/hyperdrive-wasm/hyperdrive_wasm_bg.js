let wasm;
export function __wbg_set_wasm(val) {
    wasm = val;
}


const heap = new Array(128).fill(undefined);

heap.push(undefined, null, true, false);

function getObject(idx) { return heap[idx]; }

let WASM_VECTOR_LEN = 0;

let cachedUint8Memory0 = null;

function getUint8Memory0() {
    if (cachedUint8Memory0 === null || cachedUint8Memory0.byteLength === 0) {
        cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8Memory0;
}

const lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;

let cachedTextEncoder = new lTextEncoder('utf-8');

const encodeString = (typeof cachedTextEncoder.encodeInto === 'function'
    ? function (arg, view) {
    return cachedTextEncoder.encodeInto(arg, view);
}
    : function (arg, view) {
    const buf = cachedTextEncoder.encode(arg);
    view.set(buf);
    return {
        read: arg.length,
        written: buf.length
    };
});

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

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

const lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;

let cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

function getStringFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

let cachedFloat64Memory0 = null;

function getFloat64Memory0() {
    if (cachedFloat64Memory0 === null || cachedFloat64Memory0.byteLength === 0) {
        cachedFloat64Memory0 = new Float64Array(wasm.memory.buffer);
    }
    return cachedFloat64Memory0;
}

function debugString(val) {
    // primitive types
    const type = typeof val;
    if (type == 'number' || type == 'boolean' || val == null) {
        return  `${val}`;
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
        for(let i = 1; i < length; i++) {
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

let stack_pointer = 128;

function addBorrowedObject(obj) {
    if (stack_pointer == 1) throw new Error('out of js stack');
    heap[--stack_pointer] = obj;
    return stack_pointer;
}
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
export function maxShort(poolInfo, poolConfig, budget, openVaultSharePrice, checkpointExposure, maybeConservativePrice, maybeMaxIterations) {
    let deferred5_0;
    let deferred5_1;
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passStringToWasm0(budget, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(openVaultSharePrice, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        const ptr2 = passStringToWasm0(checkpointExposure, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len2 = WASM_VECTOR_LEN;
        var ptr3 = isLikeNone(maybeConservativePrice) ? 0 : passStringToWasm0(maybeConservativePrice, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len3 = WASM_VECTOR_LEN;
        wasm.maxShort(retptr, addBorrowedObject(poolInfo), addBorrowedObject(poolConfig), ptr0, len0, ptr1, len1, ptr2, len2, ptr3, len3, isLikeNone(maybeMaxIterations) ? 0xFFFFFF : maybeMaxIterations);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        deferred5_0 = r0;
        deferred5_1 = r1;
        return getStringFromWasm0(r0, r1);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
        heap[stack_pointer++] = undefined;
        heap[stack_pointer++] = undefined;
        wasm.__wbindgen_free(deferred5_0, deferred5_1, 1);
    }
}

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
export function calcAddLiquidity(poolInfo, poolConfig, currentTime, contribution, asBase, minLpSharePrice, minApr, maxApr) {
    let deferred6_0;
    let deferred6_1;
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passStringToWasm0(currentTime, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(contribution, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        var ptr2 = isLikeNone(minLpSharePrice) ? 0 : passStringToWasm0(minLpSharePrice, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len2 = WASM_VECTOR_LEN;
        var ptr3 = isLikeNone(minApr) ? 0 : passStringToWasm0(minApr, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len3 = WASM_VECTOR_LEN;
        var ptr4 = isLikeNone(maxApr) ? 0 : passStringToWasm0(maxApr, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len4 = WASM_VECTOR_LEN;
        wasm.calcAddLiquidity(retptr, addBorrowedObject(poolInfo), addBorrowedObject(poolConfig), ptr0, len0, ptr1, len1, isLikeNone(asBase) ? 0xFFFFFF : asBase ? 1 : 0, ptr2, len2, ptr3, len3, ptr4, len4);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        deferred6_0 = r0;
        deferred6_1 = r1;
        return getStringFromWasm0(r0, r1);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
        heap[stack_pointer++] = undefined;
        heap[stack_pointer++] = undefined;
        wasm.__wbindgen_free(deferred6_0, deferred6_1, 1);
    }
}

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
export function maxLong(poolInfo, poolConfig, budget, checkpointExposure, maybeMaxIterations) {
    let deferred3_0;
    let deferred3_1;
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passStringToWasm0(budget, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(checkpointExposure, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        wasm.maxLong(retptr, addBorrowedObject(poolInfo), addBorrowedObject(poolConfig), ptr0, len0, ptr1, len1, isLikeNone(maybeMaxIterations) ? 0xFFFFFF : maybeMaxIterations);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        deferred3_0 = r0;
        deferred3_1 = r1;
        return getStringFromWasm0(r0, r1);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
        heap[stack_pointer++] = undefined;
        heap[stack_pointer++] = undefined;
        wasm.__wbindgen_free(deferred3_0, deferred3_1, 1);
    }
}

/**
* Calculates the long amount that will be opened for a given base amount.
*
* @param poolInfo - The current state of the pool
*
* @param poolConfig - The pool's configuration
*
* @param baseAmount - The amount of base tokens to open a long for
*/
export function calcOpenLong(poolInfo, poolConfig, baseAmount) {
    let deferred2_0;
    let deferred2_1;
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passStringToWasm0(baseAmount, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.calcOpenLong(retptr, addBorrowedObject(poolInfo), addBorrowedObject(poolConfig), ptr0, len0);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        deferred2_0 = r0;
        deferred2_1 = r1;
        return getStringFromWasm0(r0, r1);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
        heap[stack_pointer++] = undefined;
        heap[stack_pointer++] = undefined;
        wasm.__wbindgen_free(deferred2_0, deferred2_1, 1);
    }
}

/**
* Calculates the spot price after opening a Hyperdrive long.
*
* @param poolInfo - The current state of the pool
*
* @param poolConfig - The pool's configuration
*
* @param baseAmount - The amount of base to spend
*/
export function spotPriceAfterLong(poolInfo, poolConfig, baseAmount) {
    let deferred2_0;
    let deferred2_1;
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passStringToWasm0(baseAmount, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.spotPriceAfterLong(retptr, addBorrowedObject(poolInfo), addBorrowedObject(poolConfig), ptr0, len0);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        deferred2_0 = r0;
        deferred2_1 = r1;
        return getStringFromWasm0(r0, r1);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
        heap[stack_pointer++] = undefined;
        heap[stack_pointer++] = undefined;
        wasm.__wbindgen_free(deferred2_0, deferred2_1, 1);
    }
}

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
export function calcCloseShort(poolInfo, poolConfig, bondAmount, openVaultSharePrice, closeVaultSharePrice, maturityTime, currentTime) {
    let deferred6_0;
    let deferred6_1;
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passStringToWasm0(bondAmount, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(openVaultSharePrice, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        const ptr2 = passStringToWasm0(closeVaultSharePrice, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len2 = WASM_VECTOR_LEN;
        const ptr3 = passStringToWasm0(maturityTime, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len3 = WASM_VECTOR_LEN;
        const ptr4 = passStringToWasm0(currentTime, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len4 = WASM_VECTOR_LEN;
        wasm.calcCloseShort(retptr, addBorrowedObject(poolInfo), addBorrowedObject(poolConfig), ptr0, len0, ptr1, len1, ptr2, len2, ptr3, len3, ptr4, len4);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        deferred6_0 = r0;
        deferred6_1 = r1;
        return getStringFromWasm0(r0, r1);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
        heap[stack_pointer++] = undefined;
        heap[stack_pointer++] = undefined;
        wasm.__wbindgen_free(deferred6_0, deferred6_1, 1);
    }
}

/**
* Calculates the pool's spot price, i.e. the price to open a long of 1.
*
* @param poolInfo - The current state of the pool
*
* @param poolConfig - The pool's configuration
*/
export function spotPrice(poolInfo, poolConfig) {
    let deferred1_0;
    let deferred1_1;
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.spotPrice(retptr, addBorrowedObject(poolInfo), addBorrowedObject(poolConfig));
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        deferred1_0 = r0;
        deferred1_1 = r1;
        return getStringFromWasm0(r0, r1);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
        heap[stack_pointer++] = undefined;
        heap[stack_pointer++] = undefined;
        wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
}

/**
* Calculates the pool's idle liquidity in base
*
* @param poolInfo - The current state of the pool
*
* @param poolConfig - The pool's configuration
*/
export function idleShareReservesInBase(poolInfo, poolConfig) {
    let deferred1_0;
    let deferred1_1;
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.idleShareReservesInBase(retptr, addBorrowedObject(poolInfo), addBorrowedObject(poolConfig));
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        deferred1_0 = r0;
        deferred1_1 = r1;
        return getStringFromWasm0(r0, r1);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
        heap[stack_pointer++] = undefined;
        heap[stack_pointer++] = undefined;
        wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
}

/**
* Calculates the pool's present value in base
*
* @param poolInfo - The current state of the pool
*
* @param poolConfig - The pool's configuration
*
* @param currentTime - The time at which to grab the present value
*/
export function presentValue(poolInfo, poolConfig, currentTime) {
    let deferred2_0;
    let deferred2_1;
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passStringToWasm0(currentTime, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.presentValue(retptr, addBorrowedObject(poolInfo), addBorrowedObject(poolConfig), ptr0, len0);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        deferred2_0 = r0;
        deferred2_1 = r1;
        return getStringFromWasm0(r0, r1);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
        heap[stack_pointer++] = undefined;
        heap[stack_pointer++] = undefined;
        wasm.__wbindgen_free(deferred2_0, deferred2_1, 1);
    }
}

/**
* Calculates the pool's fixed APR, i.e. the fixed rate a user locks in when
* they open a long.
*
* @param poolInfo - The current state of the pool
*
* @param poolConfig - The pool's configuration
*/
export function spotRate(poolInfo, poolConfig) {
    let deferred1_0;
    let deferred1_1;
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.spotRate(retptr, addBorrowedObject(poolInfo), addBorrowedObject(poolConfig));
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        deferred1_0 = r0;
        deferred1_1 = r1;
        return getStringFromWasm0(r0, r1);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
        heap[stack_pointer++] = undefined;
        heap[stack_pointer++] = undefined;
        wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
}

/**
* Calculates the curve fee paid in bonds by traders when they open a long.
*
* @param poolInfo - The current state of the pool
*
* @param poolConfig - The pool's configuration
*
* @param baseAmount - The amount of base tokens to spend
*/
export function openLongCurveFee(poolInfo, poolConfig, baseAmount) {
    let deferred2_0;
    let deferred2_1;
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passStringToWasm0(baseAmount, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.openLongCurveFee(retptr, addBorrowedObject(poolInfo), addBorrowedObject(poolConfig), ptr0, len0);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        deferred2_0 = r0;
        deferred2_1 = r1;
        return getStringFromWasm0(r0, r1);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
        heap[stack_pointer++] = undefined;
        heap[stack_pointer++] = undefined;
        wasm.__wbindgen_free(deferred2_0, deferred2_1, 1);
    }
}

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
export function openLongGovernanceFee(poolInfo, poolConfig, baseAmount) {
    let deferred2_0;
    let deferred2_1;
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passStringToWasm0(baseAmount, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.openLongGovernanceFee(retptr, addBorrowedObject(poolInfo), addBorrowedObject(poolConfig), ptr0, len0);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        deferred2_0 = r0;
        deferred2_1 = r1;
        return getStringFromWasm0(r0, r1);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
        heap[stack_pointer++] = undefined;
        heap[stack_pointer++] = undefined;
        wasm.__wbindgen_free(deferred2_0, deferred2_1, 1);
    }
}

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
export function closeLongCurveFee(poolInfo, poolConfig, bondAmount, maturityTime, currentTime) {
    let deferred4_0;
    let deferred4_1;
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passStringToWasm0(bondAmount, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(maturityTime, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        const ptr2 = passStringToWasm0(currentTime, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len2 = WASM_VECTOR_LEN;
        wasm.closeLongCurveFee(retptr, addBorrowedObject(poolInfo), addBorrowedObject(poolConfig), ptr0, len0, ptr1, len1, ptr2, len2);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        deferred4_0 = r0;
        deferred4_1 = r1;
        return getStringFromWasm0(r0, r1);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
        heap[stack_pointer++] = undefined;
        heap[stack_pointer++] = undefined;
        wasm.__wbindgen_free(deferred4_0, deferred4_1, 1);
    }
}

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
export function closeLongFlatFee(poolInfo, poolConfig, bondAmount, maturityTime, currentTime) {
    let deferred4_0;
    let deferred4_1;
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passStringToWasm0(bondAmount, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(maturityTime, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        const ptr2 = passStringToWasm0(currentTime, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len2 = WASM_VECTOR_LEN;
        wasm.closeLongFlatFee(retptr, addBorrowedObject(poolInfo), addBorrowedObject(poolConfig), ptr0, len0, ptr1, len1, ptr2, len2);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        deferred4_0 = r0;
        deferred4_1 = r1;
        return getStringFromWasm0(r0, r1);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
        heap[stack_pointer++] = undefined;
        heap[stack_pointer++] = undefined;
        wasm.__wbindgen_free(deferred4_0, deferred4_1, 1);
    }
}

/**
* Calculates the curve fee paid by the trader when they open a short.
*
* @param poolInfo - The current state of the pool
*
* @param poolConfig - The pool's configuration
*
* @param bondAmount - The number of bonds to short
*/
export function openShortCurveFee(poolInfo, poolConfig, bondAmount) {
    let deferred2_0;
    let deferred2_1;
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passStringToWasm0(bondAmount, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.openShortCurveFee(retptr, addBorrowedObject(poolInfo), addBorrowedObject(poolConfig), ptr0, len0);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        deferred2_0 = r0;
        deferred2_1 = r1;
        return getStringFromWasm0(r0, r1);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
        heap[stack_pointer++] = undefined;
        heap[stack_pointer++] = undefined;
        wasm.__wbindgen_free(deferred2_0, deferred2_1, 1);
    }
}

/**
* Calculates the governance fee paid by the trader when they open a short.
*
* @param poolInfo - The current state of the pool
*
* @param poolConfig - The pool's configuration
*
* @param bondAmount - The number of bonds to short
*/
export function openShortGovernanceFee(poolInfo, poolConfig, bondAmount) {
    let deferred2_0;
    let deferred2_1;
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passStringToWasm0(bondAmount, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.openShortGovernanceFee(retptr, addBorrowedObject(poolInfo), addBorrowedObject(poolConfig), ptr0, len0);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        deferred2_0 = r0;
        deferred2_1 = r1;
        return getStringFromWasm0(r0, r1);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
        heap[stack_pointer++] = undefined;
        heap[stack_pointer++] = undefined;
        wasm.__wbindgen_free(deferred2_0, deferred2_1, 1);
    }
}

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
export function closeShortCurveFee(poolInfo, poolConfig, bondAmount, maturityTime, currentTime) {
    let deferred4_0;
    let deferred4_1;
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passStringToWasm0(bondAmount, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(maturityTime, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        const ptr2 = passStringToWasm0(currentTime, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len2 = WASM_VECTOR_LEN;
        wasm.closeShortCurveFee(retptr, addBorrowedObject(poolInfo), addBorrowedObject(poolConfig), ptr0, len0, ptr1, len1, ptr2, len2);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        deferred4_0 = r0;
        deferred4_1 = r1;
        return getStringFromWasm0(r0, r1);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
        heap[stack_pointer++] = undefined;
        heap[stack_pointer++] = undefined;
        wasm.__wbindgen_free(deferred4_0, deferred4_1, 1);
    }
}

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
export function closeShortFlatFee(poolInfo, poolConfig, bondAmount, maturityTime, currentTime) {
    let deferred4_0;
    let deferred4_1;
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passStringToWasm0(bondAmount, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(maturityTime, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        const ptr2 = passStringToWasm0(currentTime, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len2 = WASM_VECTOR_LEN;
        wasm.closeShortFlatFee(retptr, addBorrowedObject(poolInfo), addBorrowedObject(poolConfig), ptr0, len0, ptr1, len1, ptr2, len2);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        deferred4_0 = r0;
        deferred4_1 = r1;
        return getStringFromWasm0(r0, r1);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
        heap[stack_pointer++] = undefined;
        heap[stack_pointer++] = undefined;
        wasm.__wbindgen_free(deferred4_0, deferred4_1, 1);
    }
}

/**
* Calculates the amount of shares or base the trader will receive after fees
* for closing a long
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
export function calcCloseLong(poolInfo, poolConfig, bondAmount, maturityTime, currentTime) {
    let deferred4_0;
    let deferred4_1;
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passStringToWasm0(bondAmount, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(maturityTime, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        const ptr2 = passStringToWasm0(currentTime, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len2 = WASM_VECTOR_LEN;
        wasm.calcCloseLong(retptr, addBorrowedObject(poolInfo), addBorrowedObject(poolConfig), ptr0, len0, ptr1, len1, ptr2, len2);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        deferred4_0 = r0;
        deferred4_1 = r1;
        return getStringFromWasm0(r0, r1);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
        heap[stack_pointer++] = undefined;
        heap[stack_pointer++] = undefined;
        wasm.__wbindgen_free(deferred4_0, deferred4_1, 1);
    }
}

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
export function calcOpenShort(poolInfo, poolConfig, bondAmount, openVaultSharePrice) {
    let deferred3_0;
    let deferred3_1;
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passStringToWasm0(bondAmount, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(openVaultSharePrice, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        wasm.calcOpenShort(retptr, addBorrowedObject(poolInfo), addBorrowedObject(poolConfig), ptr0, len0, ptr1, len1);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        deferred3_0 = r0;
        deferred3_1 = r1;
        return getStringFromWasm0(r0, r1);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
        heap[stack_pointer++] = undefined;
        heap[stack_pointer++] = undefined;
        wasm.__wbindgen_free(deferred3_0, deferred3_1, 1);
    }
}

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
export function spotPriceAfterShort(poolInfo, poolConfig, bondAmount) {
    let deferred2_0;
    let deferred2_1;
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passStringToWasm0(bondAmount, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.spotPriceAfterShort(retptr, addBorrowedObject(poolInfo), addBorrowedObject(poolConfig), ptr0, len0);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        deferred2_0 = r0;
        deferred2_1 = r1;
        return getStringFromWasm0(r0, r1);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
        heap[stack_pointer++] = undefined;
        heap[stack_pointer++] = undefined;
        wasm.__wbindgen_free(deferred2_0, deferred2_1, 1);
    }
}

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
export function calcImpliedRate(poolInfo, poolConfig, bondAmount, openVaultSharePrice, variableApy) {
    let deferred4_0;
    let deferred4_1;
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passStringToWasm0(bondAmount, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(openVaultSharePrice, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        const ptr2 = passStringToWasm0(variableApy, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len2 = WASM_VECTOR_LEN;
        wasm.calcImpliedRate(retptr, addBorrowedObject(poolInfo), addBorrowedObject(poolConfig), ptr0, len0, ptr1, len1, ptr2, len2);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        deferred4_0 = r0;
        deferred4_1 = r1;
        return getStringFromWasm0(r0, r1);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
        heap[stack_pointer++] = undefined;
        heap[stack_pointer++] = undefined;
        wasm.__wbindgen_free(deferred4_0, deferred4_1, 1);
    }
}

export function __wbindgen_string_get(arg0, arg1) {
    const obj = getObject(arg1);
    const ret = typeof(obj) === 'string' ? obj : undefined;
    var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len1 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len1;
    getInt32Memory0()[arg0 / 4 + 0] = ptr1;
};

export function __wbindgen_object_drop_ref(arg0) {
    takeObject(arg0);
};

export function __wbindgen_is_object(arg0) {
    const val = getObject(arg0);
    const ret = typeof(val) === 'object' && val !== null;
    return ret;
};

export function __wbindgen_is_undefined(arg0) {
    const ret = getObject(arg0) === undefined;
    return ret;
};

export function __wbindgen_in(arg0, arg1) {
    const ret = getObject(arg0) in getObject(arg1);
    return ret;
};

export function __wbindgen_object_clone_ref(arg0) {
    const ret = getObject(arg0);
    return addHeapObject(ret);
};

export function __wbindgen_error_new(arg0, arg1) {
    const ret = new Error(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
};

export function __wbg_new_abda76e883ba8a5f() {
    const ret = new Error();
    return addHeapObject(ret);
};

export function __wbg_stack_658279fe44541cf6(arg0, arg1) {
    const ret = getObject(arg1).stack;
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len1;
    getInt32Memory0()[arg0 / 4 + 0] = ptr1;
};

export function __wbg_error_f851667af71bcfc6(arg0, arg1) {
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

export function __wbindgen_jsval_loose_eq(arg0, arg1) {
    const ret = getObject(arg0) == getObject(arg1);
    return ret;
};

export function __wbindgen_boolean_get(arg0) {
    const v = getObject(arg0);
    const ret = typeof(v) === 'boolean' ? (v ? 1 : 0) : 2;
    return ret;
};

export function __wbindgen_number_get(arg0, arg1) {
    const obj = getObject(arg1);
    const ret = typeof(obj) === 'number' ? obj : undefined;
    getFloat64Memory0()[arg0 / 8 + 1] = isLikeNone(ret) ? 0 : ret;
    getInt32Memory0()[arg0 / 4 + 0] = !isLikeNone(ret);
};

export function __wbindgen_string_new(arg0, arg1) {
    const ret = getStringFromWasm0(arg0, arg1);
    return addHeapObject(ret);
};

export function __wbg_getwithrefkey_edc2c8960f0f1191(arg0, arg1) {
    const ret = getObject(arg0)[getObject(arg1)];
    return addHeapObject(ret);
};

export function __wbg_instanceof_ArrayBuffer_836825be07d4c9d2(arg0) {
    let result;
    try {
        result = getObject(arg0) instanceof ArrayBuffer;
    } catch (_) {
        result = false;
    }
    const ret = result;
    return ret;
};

export function __wbg_buffer_12d079cc21e14bdb(arg0) {
    const ret = getObject(arg0).buffer;
    return addHeapObject(ret);
};

export function __wbg_new_63b92bc8671ed464(arg0) {
    const ret = new Uint8Array(getObject(arg0));
    return addHeapObject(ret);
};

export function __wbg_set_a47bac70306a19a7(arg0, arg1, arg2) {
    getObject(arg0).set(getObject(arg1), arg2 >>> 0);
};

export function __wbg_length_c20a40f15020d68a(arg0) {
    const ret = getObject(arg0).length;
    return ret;
};

export function __wbg_instanceof_Uint8Array_2b3bbecd033d19f6(arg0) {
    let result;
    try {
        result = getObject(arg0) instanceof Uint8Array;
    } catch (_) {
        result = false;
    }
    const ret = result;
    return ret;
};

export function __wbindgen_debug_string(arg0, arg1) {
    const ret = debugString(getObject(arg1));
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len1;
    getInt32Memory0()[arg0 / 4 + 0] = ptr1;
};

export function __wbindgen_throw(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
};

export function __wbindgen_memory() {
    const ret = wasm.memory;
    return addHeapObject(ret);
};

