use ethers::types::U256;
use fixed_point::{fixed, FixedPoint};
use hyperdrive_math::State;
use wasm_bindgen::{prelude::wasm_bindgen, JsValue};

use crate::{
    error::ToJsResult,
    types::{JsPoolConfig, JsPoolInfo},
    utils::{ToFixedPoint, ToU256},
};

/// Calculates the amount of lp shares the trader will receive after adding
/// liquidity.
///
/// @param poolInfo - The current state of the pool
///
/// @param poolConfig - The pool's configuration
///
/// @param currentTime - The current timestamp (in seconds)
///
/// @param contribution - The amount of base or shares to contribute
///
/// @param asBase - True if the contribution is in base, false if it's in
/// shares. Defaults to true
///
/// @param minLpSharePrice - The minimum share price the trader will accept.
/// Defaults to 0.
///
/// @param minApr - The minimum APR the trader will accept. Defaults to 0.
///
/// @param maxApr - The maximum APR the trader will accept. Defaults to the max
/// uint256.
#[wasm_bindgen(skip_jsdoc)]
pub fn calcAddLiquidity(
    poolInfo: &JsPoolInfo,
    poolConfig: &JsPoolConfig,
    currentTime: &str,
    contribution: &str,
    asBase: Option<bool>,
    minLpSharePrice: Option<String>,
    minApr: Option<String>,
    maxApr: Option<String>,
) -> Result<String, JsValue> {
    let state = State {
        info: poolInfo.try_into()?,
        config: poolConfig.try_into()?,
    };
    let current_time = currentTime.to_u256()?;
    let contribution = contribution.to_fixed_point()?;
    let as_base = asBase.unwrap_or(true);

    let min_lp_share_price = match minLpSharePrice {
        Some(min_lp_share_price) => min_lp_share_price.to_fixed_point()?,
        None => fixed!(0),
    };

    let min_apr = match minApr {
        Some(min_apr) => min_apr.to_fixed_point()?,
        None => fixed!(0),
    };

    let max_apr = match maxApr {
        Some(max_apr) => max_apr.to_fixed_point()?,
        None => FixedPoint::from(U256::MAX),
    };

    let result_fp = state
        .calculate_add_liquidity(
            current_time,
            contribution,
            min_lp_share_price,
            min_apr,
            max_apr,
            as_base,
        )
        .to_js_result()?;

    Ok(result_fp.to_u256()?.to_string())
}
