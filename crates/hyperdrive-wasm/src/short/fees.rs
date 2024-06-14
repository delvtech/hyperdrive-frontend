use hyperdrive_math::State;
use js_sys::BigInt;
use wasm_bindgen::prelude::wasm_bindgen;

use crate::{
    error::{HyperdriveWasmError, ToHyperdriveWasmResult},
    types::{JsPoolConfig, JsPoolInfo},
    utils::{ToBigInt, ToFixedPoint, ToU256},
};

/// Calculates the curve fee paid by the trader when they open a short.
///
/// @param poolInfo - The current state of the pool
///
/// @param poolConfig - The pool's configuration
///
/// @param bondAmount - The number of bonds to short
#[wasm_bindgen(skip_jsdoc)]
pub fn openShortCurveFee(
    poolInfo: JsPoolInfo,
    poolConfig: JsPoolConfig,
    bondAmount: BigInt,
) -> Result<BigInt, HyperdriveWasmError> {
    let state = State {
        info: poolInfo.try_into()?,
        config: poolConfig.try_into()?,
    };
    let bond_amount = bondAmount.to_fixed_point()?;

    let result_fp = state.open_short_curve_fee(bond_amount).to_result()?;

    result_fp.to_big_int()
}

/// Calculates the governance fee paid by the trader when they open a short.
///
/// @param poolInfo - The current state of the pool
///
/// @param poolConfig - The pool's configuration
///
/// @param bondAmount - The number of bonds to short
#[wasm_bindgen(skip_jsdoc)]
pub fn openShortGovernanceFee(
    poolInfo: JsPoolInfo,
    poolConfig: JsPoolConfig,
    bondAmount: BigInt,
) -> Result<BigInt, HyperdriveWasmError> {
    let state = State {
        info: poolInfo.try_into()?,
        config: poolConfig.try_into()?,
    };
    let bond_amount = bondAmount.to_fixed_point()?;

    let result_fp = state
        .open_short_governance_fee(bond_amount, None)
        .to_result()?;

    result_fp.to_big_int()
}

/// Calculates the curve fee paid by the trader when they close a short.
///
/// @param poolInfo - The current state of the pool
///
/// @param poolConfig - The pool's configuration
///
/// @param bondAmount - The number of shorted bonds to close
///
/// @param maturityTime - The maturity timestamp of the short (in seconds)
///
/// @param currentTime - The current timestamp (in seconds)
#[wasm_bindgen(skip_jsdoc)]
pub fn closeShortCurveFee(
    poolInfo: JsPoolInfo,
    poolConfig: JsPoolConfig,
    bondAmount: BigInt,
    maturityTime: BigInt,
    currentTime: BigInt,
) -> Result<BigInt, HyperdriveWasmError> {
    let state = State {
        info: poolInfo.try_into()?,
        config: poolConfig.try_into()?,
    };
    let bond_amount = bondAmount.to_fixed_point()?;
    let maturity_time = maturityTime.to_u256()?;
    let current_time = currentTime.to_u256()?;

    let result_fp = state
        .close_short_curve_fee(bond_amount, maturity_time, current_time)
        .to_result()?;

    result_fp.to_big_int()
}

/// Calculates the flat fee paid by the trader when they close a short.
///
/// @param poolInfo - The current state of the pool
///
/// @param poolConfig - The pool's configuration
///
/// @param bondAmount - The number of shorted bonds to close
///
/// @param maturityTime - The maturity timestamp of the short (in seconds)
///
/// @param currentTime - The current timestamp (in seconds)
#[wasm_bindgen(skip_jsdoc)]
pub fn closeShortFlatFee(
    poolInfo: JsPoolInfo,
    poolConfig: JsPoolConfig,
    bondAmount: BigInt,
    maturityTime: BigInt,
    currentTime: BigInt,
) -> Result<BigInt, HyperdriveWasmError> {
    let state = State {
        info: poolInfo.try_into()?,
        config: poolConfig.try_into()?,
    };
    let bond_amount = bondAmount.to_fixed_point()?;
    let maturity_time = maturityTime.to_u256()?;
    let current_time = currentTime.to_u256()?;

    let result_fp = state.close_short_flat_fee(bond_amount, maturity_time, current_time);

    result_fp.to_big_int()
}
