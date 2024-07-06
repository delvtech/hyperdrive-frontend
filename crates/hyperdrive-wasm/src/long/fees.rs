use delv_core::{
    conversions::{ToBigInt, ToFixedPoint, ToU256},
    error::{Error, ToResult},
};
use js_sys::BigInt;
use ts_macro::ts;
use wasm_bindgen::prelude::wasm_bindgen;

use crate::types::{IClosePositionParams, IStateParams};

#[ts(extends = IStateParams)]
struct OpenLongCurveFeeParams {
    /// The amount of base tokens to spend.
    base_amount: BigInt,
}

/// Calculates the curve fee paid in bonds by traders when they open a long.
#[wasm_bindgen(skip_jsdoc)]
pub fn openLongCurveFee(params: IOpenLongCurveFeeParams) -> Result<BigInt, Error> {
    let state = params.to_state()?;
    let base_amount = params.base_amount().to_fixed()?;
    let result_fp = state.open_long_curve_fee(base_amount).to_result()?;

    result_fp.to_bigint()
}

#[ts(extends = IStateParams)]
struct OpenLongGovernanceFeeParams {
    /// The amount of base tokens to spend.
    base_amount: BigInt,
}

/// Calculates the governance fee paid in bonds by traders when they open a
/// long.
#[wasm_bindgen(skip_jsdoc)]
pub fn openLongGovernanceFee(params: IOpenLongGovernanceFeeParams) -> Result<BigInt, Error> {
    let state = params.to_state()?;
    let base_amount = params.base_amount().to_fixed()?;

    let result_fp = state
        .open_long_governance_fee(base_amount, None)
        .to_result()?;

    result_fp.to_bigint()
}

/// Calculates the curve fee paid in shares or base by traders when they close a
/// long.
#[wasm_bindgen(skip_jsdoc)]
pub fn closeLongCurveFee(params: IClosePositionParams) -> Result<BigInt, Error> {
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

/// Calculates the flat fee paid in shares or base by traders when they close a
/// long.
#[wasm_bindgen(skip_jsdoc)]
pub fn closeLongFlatFee(params: IClosePositionParams) -> Result<BigInt, Error> {
    let state = params.to_state()?;

    let result_fp = state.close_long_flat_fee(
        params.bond_amount().to_fixed()?,
        params.maturity_time().to_u256()?,
        params.current_time().to_u256()?,
    );

    result_fp.to_bigint()
}
