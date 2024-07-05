use delv_core::{
    conversions::{ToBigInt, ToU256},
    error::{Error, ToResult},
};
use js_sys::BigInt;
use wasm_bindgen::prelude::wasm_bindgen;

use crate::types::IClosePositionParams;

#[wasm_bindgen(skip_jsdoc)]
pub fn calcCloseLong(params: IClosePositionParams) -> Result<BigInt, Error> {
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
