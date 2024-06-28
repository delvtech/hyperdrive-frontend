use js_sys::BigInt;
use ts_macro::ts;
use wasm_bindgen::prelude::wasm_bindgen;

use crate::{
    error::{HyperdriveWasmError, ToHyperdriveWasmResult},
    types::IStateParams,
    utils::{ToBigInt, ToI256, ToU256},
};

#[ts(extends = IStateParams)]
struct MaxLongParams {
    budget: BigInt,
    checkpoint_exposure: BigInt,
    max_iterations: Option<u8>,
}

/// Calculates the max amount of base that can be used to open a long given a
/// budget.
///
/// @param poolInfo - The current state of the pool
///
/// @param poolConfig - The pool's configuration
///
/// @param budget - The maximum amount of base tokens that can be spent.
///
/// @param checkpointExposure - The exposure of the pool's current checkpoint
///
/// @param maybeMaxIterations - The maximum number of iterations to run the
/// binary search for
#[wasm_bindgen(skip_jsdoc)]
pub fn maxLong(params: IMaxLongParams) -> Result<BigInt, HyperdriveWasmError> {
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
