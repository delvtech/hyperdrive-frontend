use js_sys::BigInt;
use ts_macro::ts;
use wasm_bindgen::prelude::wasm_bindgen;

use crate::{
    error::{HyperdriveWasmError, ToHyperdriveWasmResult},
    types::IStateParams,
    utils::{set_panic_hook, ToBigInt, ToFixedPoint, ToU256},
};

#[ts(extends = IStateParams)]
struct OpenLongCurveFeeParams {
    base_amount: BigInt,
}

/// Calculates the curve fee paid in bonds by traders when they open a long.
///
/// @param poolInfo - The current state of the pool
///
/// @param poolConfig - The pool's configuration
///
/// @param baseAmount - The amount of base tokens to spend
#[wasm_bindgen(skip_jsdoc)]
pub fn openLongCurveFee(params: IOpenLongCurveFeeParams) -> Result<BigInt, HyperdriveWasmError> {
    let state = params.to_state()?;
    let base_amount = params.base_amount().to_fixed()?;
    let result_fp = state.open_long_curve_fee(base_amount).to_result()?;

    result_fp.to_bigint()
}

#[ts(extends = IStateParams)]
struct OpenLongGovernanceFeeParams {
    base_amount: BigInt,
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
    params: IOpenLongGovernanceFeeParams,
) -> Result<BigInt, HyperdriveWasmError> {
    let state = params.to_state()?;
    let base_amount = params.base_amount().to_fixed()?;

    let result_fp = state
        .open_long_governance_fee(base_amount, None)
        .to_result()?;

    result_fp.to_bigint()
}

#[ts(extends = IStateParams)]
struct CloseLongCurveFeeParams {
    bond_amount: BigInt,
    maturity_time: BigInt,
    current_time: BigInt,
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
pub fn closeLongCurveFee(params: ICloseLongCurveFeeParams) -> Result<BigInt, HyperdriveWasmError> {
    set_panic_hook();
    let state = params.to_state()?;

    let result_fp = state
        .close_long_curve_fee(
            params.bond_amount().to_fixed()?,
            params.maturity_time().to_u256()?,
            params.current_time().to_u256()?,
        )
        .to_result()?;

    result_fp.to_bigint()
}

#[ts(extends = IStateParams)]
struct CloseLongFlatFeeParams {
    bond_amount: BigInt,
    maturity_time: BigInt,
    current_time: BigInt,
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
pub fn closeLongFlatFee(params: ICloseLongFlatFeeParams) -> Result<BigInt, HyperdriveWasmError> {
    let state = params.to_state()?;

    let result_fp = state.close_long_flat_fee(
        params.bond_amount().to_fixed()?,
        params.maturity_time().to_u256()?,
        params.current_time().to_u256()?,
    );

    result_fp.to_bigint()
}
