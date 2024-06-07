use hyperdrive_math::State;
use wasm_bindgen::{prelude::wasm_bindgen, JsValue};

use crate::{
    error::ToJsResult,
    types::{JsPoolConfig, JsPoolInfo},
    utils::ToU256,
};

/// Calculates the amount of shares the trader will receive after fees for
/// closing a long
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
pub fn calcCloseLong(
    poolInfo: &JsPoolInfo,
    poolConfig: &JsPoolConfig,
    bondAmount: &str,
    maturityTime: &str,
    currentTime: &str,
) -> Result<String, JsValue> {
    let state = State {
        info: poolInfo.try_into()?,
        config: poolConfig.try_into()?,
    };
    let bond_amount = bondAmount.to_u256()?;
    let maturity_time = maturityTime.to_u256()?;
    let current_time = currentTime.to_u256()?;

    let result_fp = state
        .calculate_close_long(bond_amount, maturity_time, current_time)
        .to_js_result()?;

    Ok(result_fp.to_u256()?.to_string())
}
