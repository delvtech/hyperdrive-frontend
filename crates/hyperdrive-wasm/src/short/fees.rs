use js_sys::BigInt;
use ts_macro::ts;
use wasm_bindgen::prelude::wasm_bindgen;

use crate::{
    error::{HyperdriveWasmError, ToHyperdriveWasmResult},
    types::IStateParams,
    utils::{ToBigInt, ToFixedPoint, ToU256},
};

#[ts(extends = IStateParams)]
struct OpenShortCurveFeeParams {
    /// The number of bonds to short.
    bond_amount: BigInt,
}

/// Calculates the curve fee paid by the trader when they open a short.
#[wasm_bindgen(skip_jsdoc)]
pub fn openShortCurveFee(params: IOpenShortCurveFeeParams) -> Result<BigInt, HyperdriveWasmError> {
    let state = params.to_state()?;
    let bond_amount = params.bond_amount().to_fixed()?;

    let result_fp = state.open_short_curve_fee(bond_amount).to_result()?;

    result_fp.to_bigint()
}

#[ts(extends = IStateParams)]
struct OpenShortFlatFeeParams {
    /// The number of bonds to short.
    bond_amount: BigInt,
}

/// Calculates the governance fee paid by the trader when they open a short.
#[wasm_bindgen(skip_jsdoc)]
pub fn openShortGovernanceFee(
    params: IOpenShortFlatFeeParams,
) -> Result<BigInt, HyperdriveWasmError> {
    let state = params.to_state()?;
    let bond_amount = params.bond_amount().to_fixed()?;

    let result_fp = state
        .open_short_governance_fee(bond_amount, None)
        .to_result()?;

    result_fp.to_bigint()
}

#[ts(extends = IStateParams)]
struct CloseShortCurveFeeParams {
    /// The number of shorted bonds to close.
    bond_amount: BigInt,
    /// The maturity timestamp of the short (in seconds).
    maturity_time: BigInt,
    /// The current timestamp (in seconds).
    current_time: BigInt,
}

/// Calculates the curve fee paid by the trader when they close a short.
#[wasm_bindgen(skip_jsdoc)]
pub fn closeShortCurveFee(
    params: ICloseShortCurveFeeParams,
) -> Result<BigInt, HyperdriveWasmError> {
    let state = params.to_state()?;

    let result_fp = state
        .close_short_curve_fee(
            params.bond_amount().to_fixed()?,
            params.maturity_time().to_u256()?,
            params.current_time().to_u256()?,
        )
        .to_result()?;

    result_fp.to_bigint()
}

#[ts(extends = IStateParams)]
struct CloseShortFlatFeeParams {
    /// The number of shorted bonds to close.
    bond_amount: BigInt,
    /// The maturity timestamp of the short (in seconds).
    maturity_time: BigInt,
    /// The current timestamp (in seconds).
    current_time: BigInt,
}

/// Calculates the flat fee paid by the trader when they close a short.
#[wasm_bindgen(skip_jsdoc)]
pub fn closeShortFlatFee(params: ICloseShortFlatFeeParams) -> Result<BigInt, HyperdriveWasmError> {
    let state = params.to_state()?;

    let result_fp = state.close_short_flat_fee(
        params.bond_amount().to_fixed()?,
        params.maturity_time().to_u256()?,
        params.current_time().to_u256()?,
    );

    result_fp.to_bigint()
}
