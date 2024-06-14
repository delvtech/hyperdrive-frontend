use hyperdrive_math::State;
use js_sys::BigInt;
use wasm_bindgen::prelude::wasm_bindgen;

use crate::{
    error::{HyperdriveWasmError, ToHyperdriveWasmResult},
    types::{JsPoolConfig, JsPoolInfo},
    utils::{ToBigInt, ToFixedPoint},
};

/// Calculates the long amount that will be opened for a given base amount.
///
/// @param poolInfo - The current state of the pool
///
/// @param poolConfig - The pool's configuration
///
/// @param baseAmount - The amount of base tokens to open a long for
#[wasm_bindgen(skip_jsdoc)]
pub fn calcOpenLong(
    poolInfo: JsPoolInfo,
    poolConfig: JsPoolConfig,
    baseAmount: BigInt,
) -> Result<BigInt, HyperdriveWasmError> {
    let state = State {
        info: poolInfo.try_into()?,
        config: poolConfig.try_into()?,
    };
    let base_amount = baseAmount.to_fixed_point()?;

    let result_fp = state.calculate_open_long(base_amount).to_result()?;

    result_fp.to_big_int()
}

/// Calculates the spot price after opening a Hyperdrive long.
///
/// @param poolInfo - The current state of the pool
///
/// @param poolConfig - The pool's configuration
///
/// @param baseAmount - The amount of base to spend
#[wasm_bindgen(skip_jsdoc)]
pub fn spotPriceAfterLong(
    poolInfo: JsPoolInfo,
    poolConfig: JsPoolConfig,
    baseAmount: BigInt,
) -> Result<BigInt, HyperdriveWasmError> {
    let state = State {
        info: poolInfo.try_into()?,
        config: poolConfig.try_into()?,
    };
    let base_amount = baseAmount.to_fixed_point()?;

    let result_fp = state
        .calculate_spot_price_after_long(base_amount, None)
        .to_result()?;

    result_fp.to_big_int()
}
