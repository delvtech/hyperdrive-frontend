#![allow(non_snake_case)]

mod error;
mod long;
mod lp;
mod short;
mod types;
mod utils;

use error::ToJsResult;
use hyperdrive_math::{calculate_hpr_given_apr, calculate_hpr_given_apy, State};
use types::{JsPoolConfig, JsPoolInfo};
use utils::{set_panic_hook, ToFixedPoint, ToI256, ToU256};
use wasm_bindgen::{prelude::*, JsValue};

// Initialization function
#[wasm_bindgen(start)]
pub fn initialize() {
    set_panic_hook();
}

/// Calculates the pool's spot price, i.e. the price to open a long of 1.
///
/// @param poolInfo - The current state of the pool
///
/// @param poolConfig - The pool's configuration
#[wasm_bindgen(skip_jsdoc)]
pub fn spotPrice(poolInfo: &JsPoolInfo, poolConfig: &JsPoolConfig) -> Result<String, JsValue> {
    let state = State {
        config: poolConfig.try_into()?,
        info: poolInfo.try_into()?,
    };
    let result_fp = state.calculate_spot_price().to_js_result()?;

    Ok(result_fp.to_u256()?.to_string())
}

/// Calculate the holding period return (HPR) given a non-compounding,
/// annualized rate (APR).
///
/// @param apr - The annualized rate
///
/// @param positionDuration - The position duration in seconds
#[wasm_bindgen(skip_jsdoc)]
pub fn calcHprGivenApr(apr: &str, positionDuration: &str) -> Result<String, JsValue> {
    let position_duration = positionDuration.to_fixed_point()?;
    let apr_int = apr.to_i256()?;
    let result_fp = calculate_hpr_given_apr(apr_int, position_duration).to_js_result()?;

    Ok(result_fp.to_string())
}

/// Calculate the holding period return (HPR) given a compounding, annualized
/// rate (APY).
///
/// @param apy - The annualized rate
///
/// @param positionDuration - The position duration in seconds
#[wasm_bindgen(skip_jsdoc)]
pub fn calcHprGivenApy(apy: &str, positionDuration: &str) -> Result<String, JsValue> {
    let apy_fp = apy.to_i256()?;
    let position_duration_fp = positionDuration.to_fixed_point()?;
    let result_fp = calculate_hpr_given_apy(apy_fp, position_duration_fp).to_js_result()?;

    Ok(result_fp.to_string())
}

/// Calculates the pool's idle liquidity in base
///
/// @param poolInfo - The current state of the pool
///
/// @param poolConfig - The pool's configuration
#[wasm_bindgen(skip_jsdoc)]
pub fn idleShareReservesInBase(
    poolInfo: &JsPoolInfo,
    poolConfig: &JsPoolConfig,
) -> Result<String, JsValue> {
    let state = State {
        config: poolConfig.try_into()?,
        info: poolInfo.try_into()?,
    };

    let result_fp = state.calculate_idle_share_reserves_in_base();
    Ok(result_fp.to_u256()?.to_string())
}

/// Calculates the pool's present value in shares
///
/// @param poolInfo - The current state of the pool
///
/// @param poolConfig - The pool's configuration
///
/// @param currentTime - The time at which to grab the present value
#[wasm_bindgen(skip_jsdoc)]
pub fn presentValue(
    poolInfo: &JsPoolInfo,
    poolConfig: &JsPoolConfig,
    currentTime: &str,
) -> Result<String, JsValue> {
    let state = State {
        config: poolConfig.try_into()?,
        info: poolInfo.try_into()?,
    };
    let currentTime = currentTime.to_u256()?;
    let result_fp = state.calculate_present_value(currentTime).to_js_result()?;

    Ok(result_fp.to_u256()?.to_string())
}

/// Calculates the pool's fixed APR, i.e. the fixed rate a user locks in when
/// they open a long.
///
/// @param poolInfo - The current state of the pool
///
/// @param poolConfig - The pool's configuration
#[wasm_bindgen(skip_jsdoc)]
pub fn spotRate(poolInfo: &JsPoolInfo, poolConfig: &JsPoolConfig) -> Result<String, JsValue> {
    let state = State {
        info: poolInfo.try_into()?,
        config: poolConfig.try_into()?,
    };
    let result_fp = state.calculate_spot_rate().to_js_result()?;

    Ok(result_fp.to_u256()?.to_string())
}
