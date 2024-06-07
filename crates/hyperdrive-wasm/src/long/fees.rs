use hyperdrive_math::State;
use js_sys::BigInt;
use wasm_bindgen::prelude::wasm_bindgen;

use crate::{
    error::{HyperdriveWasmError, ToHyperdriveWasmResult},
    types::{JsPoolConfig, JsPoolInfo},
    utils::{set_panic_hook, ToBigInt, ToFixedPoint, ToU256},
};

/// Calculates the curve fee paid in bonds by traders when they open a long.
///
/// @param poolInfo - The current state of the pool
///
/// @param poolConfig - The pool's configuration
///
/// @param baseAmount - The amount of base tokens to spend
#[wasm_bindgen(skip_jsdoc)]
pub fn openLongCurveFee(
    poolInfo: &JsPoolInfo,
    poolConfig: &JsPoolConfig,
    baseAmount: &str,
) -> Result<BigInt, HyperdriveWasmError> {
    let state = State {
        info: poolInfo.try_into()?,
        config: poolConfig.try_into()?,
    };
    let base_amount = baseAmount.to_fixed_point()?;
    let result_fp = state.open_long_curve_fee(base_amount).to_result()?;

    result_fp.to_big_int()
}

/// Calculates the governance fee paid in bonds by traders when they open a
/// long.
///
/// @param poolInfo - The current state of the pool
///
/// @param poolConfig - The pool's configuration
///
/// @param baseAmount - The amount of base tokens to spend
#[wasm_bindgen(skip_jsdoc)]
pub fn openLongGovernanceFee(
    poolInfo: &JsPoolInfo,
    poolConfig: &JsPoolConfig,
    baseAmount: &str,
) -> Result<BigInt, HyperdriveWasmError> {
    let state = State {
        info: poolInfo.try_into()?,
        config: poolConfig.try_into()?,
    };
    let base_amount = baseAmount.to_fixed_point()?;

    let result_fp = state
        .open_long_governance_fee(base_amount, None)
        .to_result()?;

    result_fp.to_big_int()
}

/// Calculates the curve fee paid in shares or base by traders when they close a
/// long.
///
/// @param poolInfo - The current state of the pool
///
/// @param poolConfig - The pool's configuration
///
/// @param bondAmount - The amount of bonds to close
///
/// @param maturityTime - The maturity timestamp of the long (in seconds)
///
/// @param currentTime - The current timestamp (in seconds)
#[wasm_bindgen(skip_jsdoc)]
pub fn closeLongCurveFee(
    poolInfo: &JsPoolInfo,
    poolConfig: &JsPoolConfig,
    bondAmount: &str,
    maturityTime: &str,
    currentTime: &str,
) -> Result<BigInt, HyperdriveWasmError> {
    set_panic_hook();
    let state = State {
        info: poolInfo.try_into()?,
        config: poolConfig.try_into()?,
    };
    let bond_amount = bondAmount.to_fixed_point()?;
    let maturity_time = maturityTime.to_u256()?;
    let current_time = currentTime.to_u256()?;

    let result_fp = state
        .close_long_curve_fee(bond_amount, maturity_time, current_time)
        .to_result()?;

    result_fp.to_big_int()
}

/// Calculates the flat fee paid in shares or base by traders when they close a
/// long.
///
/// @param poolInfo - The current state of the pool
///
/// @param poolConfig - The pool's configuration
///
/// @param bondAmount - The amount of bonds to close
///
/// @param maturityTime - The maturity timestamp of the long (in seconds)
///
/// @param currentTime - The current timestamp (in seconds)
#[wasm_bindgen(skip_jsdoc)]
pub fn closeLongFlatFee(
    poolInfo: &JsPoolInfo,
    poolConfig: &JsPoolConfig,
    bondAmount: &str,
    maturityTime: &str,
    currentTime: &str,
) -> Result<BigInt, HyperdriveWasmError> {
    set_panic_hook();
    let state = State {
        info: poolInfo.try_into()?,
        config: poolConfig.try_into()?,
    };

    let bond_amount = bondAmount.to_fixed_point()?;
    let maturity_time = maturityTime.to_u256()?;
    let current_time = currentTime.to_u256()?;

    let result_fp = state.close_long_flat_fee(bond_amount, maturity_time, current_time);

    result_fp.to_big_int()
}
