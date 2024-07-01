use js_sys::BigInt;
use wasm_bindgen::prelude::wasm_bindgen;

use crate::{
    error::{HyperdriveWasmError, ToHyperdriveWasmResult},
    types::IClosePositionParams,
    utils::{ToBigInt, ToU256},
};

#[wasm_bindgen(skip_jsdoc)]
pub fn calcCloseLong(params: IClosePositionParams) -> Result<BigInt, HyperdriveWasmError> {
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
