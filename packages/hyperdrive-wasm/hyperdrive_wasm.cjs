let imports = {};
imports['__wbindgen_placeholder__'] = module.exports;
let wasm;
const { TextDecoder, TextEncoder } = require(`util`);

const heap = new Array(128).fill(undefined);

heap.push(undefined, null, true, false);

function getObject(idx) { return heap[idx]; }

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

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });

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
/**
* Calculates the curve fee paid in bonds by traders when they open a long.
*/
module.exports.openLongCurveFee = function(params) {
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

/**
* Calculates the governance fee paid in bonds by traders when they open a
* long.
*/
module.exports.openLongGovernanceFee = function(params) {
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

/**
* Calculates the curve fee paid in shares or base by traders when they close a
* long.
*/
module.exports.closeLongCurveFee = function(params) {
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

/**
* Calculates the flat fee paid in shares or base by traders when they close a
* long.
*/
module.exports.closeLongFlatFee = function(params) {
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

/**
* Calculates the max amount of base that can be used to open a long given a
* budget.
*/
module.exports.maxLong = function(params) {
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

/**
* Calculates the amount of shares the trader will receive after fees for
* closing a short
*/
module.exports.calcCloseShort = function(params) {
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
module.exports.calcShortMarketValue = function(params) {
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

/**
* Calculates the long amount that will be opened for a given base amount.
*/
module.exports.calcOpenLong = function(params) {
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

/**
* Calculates the spot price after opening a Hyperdrive long.
*/
module.exports.spotPriceAfterLong = function(params) {
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

/**
* Calculates the amount of lp shares the trader will receive after adding
* liquidity.
*/
module.exports.calcAddLiquidity = function(params) {
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

/**
*/
module.exports.calcCloseLong = function(params) {
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

/**
* Calculates the curve fee paid by the trader when they open a short.
*/
module.exports.openShortCurveFee = function(params) {
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

/**
* Calculates the governance fee paid by the trader when they open a short.
*/
module.exports.openShortGovernanceFee = function(params) {
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

/**
* Calculates the curve fee paid by the trader when they close a short.
*/
module.exports.closeShortCurveFee = function(params) {
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

/**
* Calculates the flat fee paid by the trader when they close a short.
*/
module.exports.closeShortFlatFee = function(params) {
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

/**
* Calculates the max amount of bonds that can be shorted given a budget and
* the current state of the pool.
*/
module.exports.maxShort = function(params) {
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

/**
* Calculates the max amount of bonds that can be shorted given the current
* state of the pool.
*/
module.exports.absoluteMaxShort = function(params) {
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

/**
* Calculates the amount of base the trader will need to deposit for a short of
* a given size.
*/
module.exports.calcOpenShort = function(params) {
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

/**
* Calculates the spot price after opening the short on the YieldSpace curve
* and before calculating the fees.
*/
module.exports.spotPriceAfterShort = function(params) {
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

/**
* Calculate the implied rate of opening a short at a given size. This rate is
* calculated as an APY.
*/
module.exports.calcImpliedRate = function(params) {
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

/**
* Calculates the amount of bonds that will be shorted given a target base
* deposit amount.
*/
module.exports.shortBondsGivenDeposit = function(params) {
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

/**
*/
module.exports.initialize = function() {
    wasm.initialize();
};

/**
*/
module.exports.getVersion = function() {
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

/**
* Calculates the pool's spot price, i.e. the price to open a long of 1.
*/
module.exports.spotPrice = function(params) {
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

/**
* Calculate the holding period return (HPR) given a non-compounding,
* annualized rate (APR).
*/
module.exports.calcHprGivenApr = function(params) {
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

/**
* Calculate the holding period return (HPR) given a compounding, annualized
* rate (APY).
*/
module.exports.calcHprGivenApy = function(params) {
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

/**
* Calculates the pool's idle liquidity in base.
*/
module.exports.idleShareReservesInBase = function(params) {
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

/**
* Calculates the present value in shares of LP's capital in the pool.
*/
module.exports.presentValue = function(params) {
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

/**
* Calculates the pool's fixed APR, i.e. the fixed rate a user locks in when
* they open a long.
*/
module.exports.spotRate = function(params) {
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

/**
* Calculate an APR from a fixed price.
*/
module.exports.calcAprGivenFixedPrice = function(params) {
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

function handleError(f, args) {
    try {
        return f.apply(this, args);
    } catch (e) {
        wasm.__wbindgen_exn_store(addHeapObject(e));
    }
}

module.exports.__wbindgen_object_drop_ref = function(arg0) {
    takeObject(arg0);
};

module.exports.__wbindgen_string_new = function(arg0, arg1) {
    const ret = getStringFromWasm0(arg0, arg1);
    return addHeapObject(ret);
};

module.exports.__wbg_baseamount_4ece0044229bd079 = function(arg0) {
    const ret = getObject(arg0).baseAmount;
    return addHeapObject(ret);
};

module.exports.__wbg_poolinfo_f674b4ff47cf3881 = function(arg0) {
    const ret = getObject(arg0).poolInfo;
    return addHeapObject(ret);
};

module.exports.__wbg_poolconfig_53703338b5baf6f9 = function(arg0) {
    const ret = getObject(arg0).poolConfig;
    return addHeapObject(ret);
};

module.exports.__wbg_baseamount_2b6e384359c0e45c = function(arg0) {
    const ret = getObject(arg0).baseAmount;
    return addHeapObject(ret);
};

module.exports.__wbg_bondamount_3bcab989220c86b6 = function(arg0) {
    const ret = getObject(arg0).bondAmount;
    return addHeapObject(ret);
};

module.exports.__wbg_maturitytime_4917f699576a2e24 = function(arg0) {
    const ret = getObject(arg0).maturityTime;
    return addHeapObject(ret);
};

module.exports.__wbg_currenttime_3e344686dfd0784f = function(arg0) {
    const ret = getObject(arg0).currentTime;
    return addHeapObject(ret);
};

module.exports.__wbg_budget_43d76e32c997fa9f = function(arg0) {
    const ret = getObject(arg0).budget;
    return addHeapObject(ret);
};

module.exports.__wbg_checkpointexposure_71dfa8c199e26a34 = function(arg0) {
    const ret = getObject(arg0).checkpointExposure;
    return addHeapObject(ret);
};

module.exports.__wbg_maxiterations_2e7c3e15dc92cbc3 = function(arg0) {
    const ret = getObject(arg0).maxIterations;
    return isLikeNone(ret) ? 0xFFFFFF : ret;
};

module.exports.__wbg_openvaultshareprice_014a2cf5f27c8693 = function(arg0) {
    const ret = getObject(arg0).openVaultSharePrice;
    return addHeapObject(ret);
};

module.exports.__wbg_closevaultshareprice_f8afd37e1ebaaa0e = function(arg0) {
    const ret = getObject(arg0).closeVaultSharePrice;
    return addHeapObject(ret);
};

module.exports.__wbg_baseamount_b5e1e85d42170391 = function(arg0) {
    const ret = getObject(arg0).baseAmount;
    return addHeapObject(ret);
};

module.exports.__wbg_baseamount_8faddf517c21e61f = function(arg0) {
    const ret = getObject(arg0).baseAmount;
    return addHeapObject(ret);
};

module.exports.__wbg_currenttime_57a06c053653e1e1 = function(arg0) {
    const ret = getObject(arg0).currentTime;
    return addHeapObject(ret);
};

module.exports.__wbg_contribution_2b4f07f35fa385fe = function(arg0) {
    const ret = getObject(arg0).contribution;
    return addHeapObject(ret);
};

module.exports.__wbg_asbase_c51dd8355d10c11f = function(arg0) {
    const ret = getObject(arg0).asBase;
    return isLikeNone(ret) ? 0xFFFFFF : ret ? 1 : 0;
};

module.exports.__wbg_minlpshareprice_745cf415e75f8a01 = function(arg0) {
    const ret = getObject(arg0).minLpSharePrice;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
};

module.exports.__wbg_minapr_c86cf17354483eee = function(arg0) {
    const ret = getObject(arg0).minApr;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
};

module.exports.__wbg_maxapr_8ab14316b2b102e4 = function(arg0) {
    const ret = getObject(arg0).maxApr;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
};

module.exports.__wbg_curve_eb2742840ebcb56c = function(arg0) {
    const ret = getObject(arg0).curve;
    return addHeapObject(ret);
};

module.exports.__wbg_flat_cf06809b26a0e357 = function(arg0) {
    const ret = getObject(arg0).flat;
    return addHeapObject(ret);
};

module.exports.__wbg_governancelp_69beec7767be8c46 = function(arg0) {
    const ret = getObject(arg0).governanceLP;
    return addHeapObject(ret);
};

module.exports.__wbg_governancezombie_6a8c970793fd9a97 = function(arg0) {
    const ret = getObject(arg0).governanceZombie;
    return addHeapObject(ret);
};

module.exports.__wbg_bondamount_5cdfc1bca38de684 = function(arg0) {
    const ret = getObject(arg0).bondAmount;
    return addHeapObject(ret);
};

module.exports.__wbg_bondamount_18359b2503f6d4db = function(arg0) {
    const ret = getObject(arg0).bondAmount;
    return addHeapObject(ret);
};

module.exports.__wbg_budget_7ff300c4bccac295 = function(arg0) {
    const ret = getObject(arg0).budget;
    return addHeapObject(ret);
};

module.exports.__wbg_openvaultshareprice_2998a5471c105e58 = function(arg0) {
    const ret = getObject(arg0).openVaultSharePrice;
    return addHeapObject(ret);
};

module.exports.__wbg_checkpointexposure_4a32fedd5e95730c = function(arg0) {
    const ret = getObject(arg0).checkpointExposure;
    return addHeapObject(ret);
};

module.exports.__wbg_conservativeprice_a8b6132d42841d20 = function(arg0) {
    const ret = getObject(arg0).conservativePrice;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
};

module.exports.__wbg_maxiterations_f617db5d18287e9a = function(arg0) {
    const ret = getObject(arg0).maxIterations;
    return isLikeNone(ret) ? 0xFFFFFF : ret;
};

module.exports.__wbg_checkpointexposure_e64f06867a56e8a3 = function(arg0) {
    const ret = getObject(arg0).checkpointExposure;
    return addHeapObject(ret);
};

module.exports.__wbg_maxiterations_77a1bff238c55759 = function(arg0, arg1) {
    const ret = getObject(arg1).maxIterations;
    getInt32Memory0()[arg0 / 4 + 1] = isLikeNone(ret) ? 0 : ret;
    getInt32Memory0()[arg0 / 4 + 0] = !isLikeNone(ret);
};

module.exports.__wbg_initialvaultshareprice_80f1d02bab6f097b = function(arg0) {
    const ret = getObject(arg0).initialVaultSharePrice;
    return addHeapObject(ret);
};

module.exports.__wbg_minimumsharereserves_dafc122b333170de = function(arg0) {
    const ret = getObject(arg0).minimumShareReserves;
    return addHeapObject(ret);
};

module.exports.__wbg_minimumtransactionamount_341002ea641383d9 = function(arg0) {
    const ret = getObject(arg0).minimumTransactionAmount;
    return addHeapObject(ret);
};

module.exports.__wbg_circuitbreakerdelta_8fe51e10c8d4c18a = function(arg0) {
    const ret = getObject(arg0).circuitBreakerDelta;
    return addHeapObject(ret);
};

module.exports.__wbg_positionduration_f46c3bbd10d78a53 = function(arg0) {
    const ret = getObject(arg0).positionDuration;
    return addHeapObject(ret);
};

module.exports.__wbg_checkpointduration_cbc655f040932234 = function(arg0) {
    const ret = getObject(arg0).checkpointDuration;
    return addHeapObject(ret);
};

module.exports.__wbg_timestretch_2be55cd5cf37cb9e = function(arg0) {
    const ret = getObject(arg0).timeStretch;
    return addHeapObject(ret);
};

module.exports.__wbg_fees_1f98991d4d602650 = function(arg0) {
    const ret = getObject(arg0).fees;
    return addHeapObject(ret);
};

module.exports.__wbg_checkpointrewarder_029db606d3fbf350 = function(arg0, arg1) {
    const ret = getObject(arg1).checkpointRewarder;
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len1;
    getInt32Memory0()[arg0 / 4 + 0] = ptr1;
};

module.exports.__wbg_feecollector_d575523eef9ec83a = function(arg0, arg1) {
    const ret = getObject(arg1).feeCollector;
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len1;
    getInt32Memory0()[arg0 / 4 + 0] = ptr1;
};

module.exports.__wbg_sweepcollector_57ae70ac80d457d5 = function(arg0, arg1) {
    const ret = getObject(arg1).sweepCollector;
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len1;
    getInt32Memory0()[arg0 / 4 + 0] = ptr1;
};

module.exports.__wbg_governance_65707d475e34bee1 = function(arg0, arg1) {
    const ret = getObject(arg1).governance;
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len1;
    getInt32Memory0()[arg0 / 4 + 0] = ptr1;
};

module.exports.__wbg_basetoken_7b5e1420855478e7 = function(arg0, arg1) {
    const ret = getObject(arg1).baseToken;
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len1;
    getInt32Memory0()[arg0 / 4 + 0] = ptr1;
};

module.exports.__wbg_vaultsharestoken_e27fe9173be44106 = function(arg0, arg1) {
    const ret = getObject(arg1).vaultSharesToken;
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len1;
    getInt32Memory0()[arg0 / 4 + 0] = ptr1;
};

module.exports.__wbg_linkerfactory_93da8c0071e26eda = function(arg0, arg1) {
    const ret = getObject(arg1).linkerFactory;
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len1;
    getInt32Memory0()[arg0 / 4 + 0] = ptr1;
};

module.exports.__wbg_linkercodehash_957563aafd8c1751 = function(arg0, arg1) {
    const ret = getObject(arg1).linkerCodeHash;
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len1;
    getInt32Memory0()[arg0 / 4 + 0] = ptr1;
};

module.exports.__wbg_lptotalsupply_823eefe4f00aa977 = function(arg0) {
    const ret = getObject(arg0).lpTotalSupply;
    return addHeapObject(ret);
};

module.exports.__wbg_lpshareprice_f887619b5932ca30 = function(arg0) {
    const ret = getObject(arg0).lpSharePrice;
    return addHeapObject(ret);
};

module.exports.__wbg_bondreserves_bceb7aec3912ba6b = function(arg0) {
    const ret = getObject(arg0).bondReserves;
    return addHeapObject(ret);
};

module.exports.__wbg_sharereserves_67e9b017ec505f41 = function(arg0) {
    const ret = getObject(arg0).shareReserves;
    return addHeapObject(ret);
};

module.exports.__wbg_shareadjustment_810469030b2053ab = function(arg0) {
    const ret = getObject(arg0).shareAdjustment;
    return addHeapObject(ret);
};

module.exports.__wbg_vaultshareprice_9a73f604734fba08 = function(arg0) {
    const ret = getObject(arg0).vaultSharePrice;
    return addHeapObject(ret);
};

module.exports.__wbg_longexposure_816cba497f771bd5 = function(arg0) {
    const ret = getObject(arg0).longExposure;
    return addHeapObject(ret);
};

module.exports.__wbg_longsoutstanding_db5d35f065955e30 = function(arg0) {
    const ret = getObject(arg0).longsOutstanding;
    return addHeapObject(ret);
};

module.exports.__wbg_longaveragematuritytime_ee2f1fb2959d827a = function(arg0) {
    const ret = getObject(arg0).longAverageMaturityTime;
    return addHeapObject(ret);
};

module.exports.__wbg_shortsoutstanding_525bea9b067db5aa = function(arg0) {
    const ret = getObject(arg0).shortsOutstanding;
    return addHeapObject(ret);
};

module.exports.__wbg_shortaveragematuritytime_247f928bf48ad17c = function(arg0) {
    const ret = getObject(arg0).shortAverageMaturityTime;
    return addHeapObject(ret);
};

module.exports.__wbg_withdrawalsharesreadytowithdraw_723419c69269b4a6 = function(arg0) {
    const ret = getObject(arg0).withdrawalSharesReadyToWithdraw;
    return addHeapObject(ret);
};

module.exports.__wbg_withdrawalsharesproceeds_6995611d9e31abd2 = function(arg0) {
    const ret = getObject(arg0).withdrawalSharesProceeds;
    return addHeapObject(ret);
};

module.exports.__wbg_zombiebaseproceeds_158e847c735fef65 = function(arg0) {
    const ret = getObject(arg0).zombieBaseProceeds;
    return addHeapObject(ret);
};

module.exports.__wbg_zombiesharereserves_0c3cb87347c4e8bb = function(arg0) {
    const ret = getObject(arg0).zombieShareReserves;
    return addHeapObject(ret);
};

module.exports.__wbg_bondamount_75e8b0532b4f6e97 = function(arg0) {
    const ret = getObject(arg0).bondAmount;
    return addHeapObject(ret);
};

module.exports.__wbg_openvaultshareprice_2f866dce6a452451 = function(arg0) {
    const ret = getObject(arg0).openVaultSharePrice;
    return addHeapObject(ret);
};

module.exports.__wbg_bondamount_9bad012cec592b12 = function(arg0) {
    const ret = getObject(arg0).bondAmount;
    return addHeapObject(ret);
};

module.exports.__wbg_bondamount_8f42bffe79e7c78e = function(arg0) {
    const ret = getObject(arg0).bondAmount;
    return addHeapObject(ret);
};

module.exports.__wbg_openvaultshareprice_992040d441c1d176 = function(arg0) {
    const ret = getObject(arg0).openVaultSharePrice;
    return addHeapObject(ret);
};

module.exports.__wbg_variableapy_03eefdcc15e11a42 = function(arg0) {
    const ret = getObject(arg0).variableApy;
    return addHeapObject(ret);
};

module.exports.__wbg_targetbaseamount_3c3c8d8ad95b7605 = function(arg0) {
    const ret = getObject(arg0).targetBaseAmount;
    return addHeapObject(ret);
};

module.exports.__wbg_openvaultshareprice_a36fb3fade3b9c84 = function(arg0) {
    const ret = getObject(arg0).openVaultSharePrice;
    return addHeapObject(ret);
};

module.exports.__wbg_absolutemaxbondamount_d2e197b014725c10 = function(arg0) {
    const ret = getObject(arg0).absoluteMaxBondAmount;
    return addHeapObject(ret);
};

module.exports.__wbg_maybetolerance_df507747e3830c21 = function(arg0) {
    const ret = getObject(arg0).maybeTolerance;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
};

module.exports.__wbg_maybemaxiterations_189430699f3f4593 = function(arg0) {
    const ret = getObject(arg0).maybeMaxIterations;
    return isLikeNone(ret) ? 0xFFFFFF : ret;
};

module.exports.__wbg_apr_7e7d9dd9b3e90490 = function(arg0) {
    const ret = getObject(arg0).apr;
    return addHeapObject(ret);
};

module.exports.__wbg_positionduration_f0bbb71e645a1bab = function(arg0) {
    const ret = getObject(arg0).positionDuration;
    return addHeapObject(ret);
};

module.exports.__wbg_apy_6d35982fcbcc9287 = function(arg0) {
    const ret = getObject(arg0).apy;
    return addHeapObject(ret);
};

module.exports.__wbg_positionduration_42689bcde8452f52 = function(arg0) {
    const ret = getObject(arg0).positionDuration;
    return addHeapObject(ret);
};

module.exports.__wbg_currenttime_d9a6c391fb7a27a7 = function(arg0) {
    const ret = getObject(arg0).currentTime;
    return addHeapObject(ret);
};

module.exports.__wbg_price_e357b0329781bed9 = function(arg0) {
    const ret = getObject(arg0).price;
    return addHeapObject(ret);
};

module.exports.__wbg_positionduration_4b733b17ff9b63ac = function(arg0) {
    const ret = getObject(arg0).positionDuration;
    return addHeapObject(ret);
};

module.exports.__wbg_new_abda76e883ba8a5f = function() {
    const ret = new Error();
    return addHeapObject(ret);
};

module.exports.__wbg_stack_658279fe44541cf6 = function(arg0, arg1) {
    const ret = getObject(arg1).stack;
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len1;
    getInt32Memory0()[arg0 / 4 + 0] = ptr1;
};

module.exports.__wbg_error_f851667af71bcfc6 = function(arg0, arg1) {
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

module.exports.__wbindgen_number_new = function(arg0) {
    const ret = arg0;
    return addHeapObject(ret);
};

module.exports.__wbindgen_ge = function(arg0, arg1) {
    const ret = getObject(arg0) >= getObject(arg1);
    return ret;
};

module.exports.__wbindgen_string_get = function(arg0, arg1) {
    const obj = getObject(arg1);
    const ret = typeof(obj) === 'string' ? obj : undefined;
    var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len1 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len1;
    getInt32Memory0()[arg0 / 4 + 0] = ptr1;
};

module.exports.__wbg_BigInt_42b692c18e1ac6d6 = function(arg0) {
    const ret = BigInt(getObject(arg0));
    return addHeapObject(ret);
};

module.exports.__wbg_BigInt_f00b864098012725 = function() { return handleError(function (arg0) {
    const ret = BigInt(getObject(arg0));
    return addHeapObject(ret);
}, arguments) };

module.exports.__wbg_toString_66be3c8e1c6a7c76 = function() { return handleError(function (arg0, arg1) {
    const ret = getObject(arg0).toString(arg1);
    return addHeapObject(ret);
}, arguments) };

module.exports.__wbg_toString_0b527fce0e8f2bab = function(arg0, arg1, arg2) {
    const ret = getObject(arg1).toString(arg2);
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len1;
    getInt32Memory0()[arg0 / 4 + 0] = ptr1;
};

module.exports.__wbg_new_28c511d9baebfa89 = function(arg0, arg1) {
    const ret = new Error(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
};

module.exports.__wbg_new_5dd86ebc917d9f52 = function(arg0, arg1) {
    const ret = new TypeError(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
};

module.exports.__wbindgen_debug_string = function(arg0, arg1) {
    const ret = debugString(getObject(arg1));
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len1;
    getInt32Memory0()[arg0 / 4 + 0] = ptr1;
};

module.exports.__wbindgen_throw = function(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
};

const path = require('path').join(__dirname, 'hyperdrive_wasm_bg.wasm');
const bytes = require('fs').readFileSync(path);

const wasmModule = new WebAssembly.Module(bytes);
const wasmInstance = new WebAssembly.Instance(wasmModule, imports);
wasm = wasmInstance.exports;
module.exports.__wasm = wasm;

wasm.__wbindgen_start();

