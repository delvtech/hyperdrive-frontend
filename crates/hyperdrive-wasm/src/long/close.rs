use js_sys::BigInt;
use ts_macro::ts;
use wasm_bindgen::prelude::wasm_bindgen;

use crate::{
    error::{HyperdriveWasmError, ToHyperdriveWasmResult},
    types::IStateParams,
    utils::{ToBigInt, ToU256},
};

#[ts(extends = IStateParams)]
struct CalcCloseLongParams {
    /// The amount of bonds to close.
    bond_amount: BigInt,
    /// The maturity timestamp of the long (in seconds).
    maturity_time: BigInt,
    /// The current timestamp (in seconds).
    current_time: BigInt,
}

#[wasm_bindgen(skip_jsdoc)]
pub fn calcCloseLong(params: ICalcCloseLongParams) -> Result<BigInt, HyperdriveWasmError> {
    let state = params.to_state()?;

    let result_fp = state
        .calculate_close_long(
            params.bond_amount().to_u256()?,
            params.maturity_time().to_u256()?,
            params.current_time().to_u256()?,
        )
        .to_result()?;

    result_fp.to_bigint()
}
