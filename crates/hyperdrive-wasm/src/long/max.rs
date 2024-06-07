use hyperdrive_math::State;
use wasm_bindgen::{prelude::wasm_bindgen, JsValue};

use crate::{
    error::ToJsResult,
    types::{JsPoolConfig, JsPoolInfo},
    utils::{ToI256, ToU256},
};

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
pub fn maxLong(
    poolInfo: &JsPoolInfo,
    poolConfig: &JsPoolConfig,
    budget: &str,
    checkpointExposure: &str,
    maybeMaxIterations: Option<u8>,
) -> Result<String, JsValue> {
    let state = State {
        info: poolInfo.try_into()?,
        config: poolConfig.try_into()?,
    };
    let _budget = budget.to_u256()?;
    let checkpoint_exposure = checkpointExposure.to_i256()?;

    let result_fp = state
        .calculate_max_long(
            _budget,
            checkpoint_exposure,
            maybeMaxIterations.map(|x| x.into()),
        )
        .to_js_result()?;

    Ok(result_fp.to_u256()?.to_string())
}
