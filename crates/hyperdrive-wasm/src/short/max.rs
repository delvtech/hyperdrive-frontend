use hyperdrive_math::State;
use wasm_bindgen::{prelude::wasm_bindgen, JsValue};

use crate::{
    error::ToJsResult,
    types::{JsPoolConfig, JsPoolInfo},
    utils::{ToFixedPoint, ToI256, ToU256},
};

/// Calculates the max amount of longs that can be shorted given the current
/// state of the pool.
///
/// @param poolInfo - The current state of the pool
///
/// @param poolConfig - The pool's configuration
///
/// @param openVaultSharePrice - The open share price of the pool's current
/// checkpoint
///
/// @param checkpointExposure - The exposure of the pool's current checkpoint
///
/// @param maybeConservativePrice - A lower bound on the realized price that the
/// short will pay. This is used to help the algorithm converge faster in real
/// world situations. If this is `None`, then we'll use the theoretical worst
/// case realized price.
///
/// @param maybeMaxIterations - The maximum number of iterations to run the
/// binary search for
#[wasm_bindgen(skip_jsdoc)]
pub fn maxShort(
    poolInfo: &JsPoolInfo,
    poolConfig: &JsPoolConfig,
    budget: &str,
    openVaultSharePrice: &str,
    checkpointExposure: &str,
    maybeConservativePrice: Option<String>,
    maybeMaxIterations: Option<u8>,
) -> Result<String, JsValue> {
    let state = State {
        info: poolInfo.try_into()?,
        config: poolConfig.try_into()?,
    };
    let _budget = budget.to_u256()?;
    let checkpoint_exposure = checkpointExposure.to_i256()?;
    let open_vault_share_price = openVaultSharePrice.to_u256()?;
    let maybe_conservative_price = match maybeConservativePrice {
        Some(price_str) => Some(price_str.to_fixed_point()?),
        None => None,
    };

    let result_fp = state
        .calculate_max_short(
            _budget,
            open_vault_share_price,
            checkpoint_exposure,
            maybe_conservative_price,
            maybeMaxIterations.map(|x| x.into()),
        )
        .to_js_result()?;

    Ok(result_fp.to_u256()?.to_string())
}
