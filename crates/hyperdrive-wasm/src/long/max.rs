use delv_core::{
    conversions::{ToBigInt, ToI256, ToU256},
    error::{Error, ToResult},
};
use js_sys::BigInt;
use ts_macro::ts;
use wasm_bindgen::prelude::wasm_bindgen;

use crate::types::IStateParams;

#[ts(extends = IStateParams)]
struct MaxLongParams {
    /// The maximum amount of base tokens that can be spent.
    budget: BigInt,
    /// The exposure of the pool's current checkpoint.
    checkpoint_exposure: BigInt,
    /// The maximum number of iterations to run the Netwon's method for.
    max_iterations: Option<u8>,
}

/// Calculates the max amount of base that can be used to open a long given a
/// budget.
#[wasm_bindgen(skip_jsdoc)]
pub fn maxLong(params: IMaxLongParams) -> Result<BigInt, Error> {
    let state = params.to_state()?;

    let result_fp = state
        .calculate_max_long(
            params.budget().to_u256()?,
            params.checkpoint_exposure().to_i256()?,
            params.max_iterations().map(|x| x.into()),
        )
        .to_result()?;

    result_fp.to_bigint()
}
