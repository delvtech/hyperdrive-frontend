#![allow(non_snake_case)]

mod error;
mod long;
mod lp;
mod short;
mod types;
mod utils;

use std::ops::Mul;

use error::ToJsResult;
use ethers::types::{Sign, I256, U256};
use fixed_point::FixedPoint;
use hyperdrive_math::{calculate_hpr_given_apr, calculate_hpr_given_apy, State};
use types::{JsPoolConfig, JsPoolInfo};
use utils::{set_panic_hook, ToFixedPoint, ToI256, ToU256};
use wasm_bindgen::{prelude::*, JsValue};
use web_sys::console;

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
    // TODO: Move this into hyperdrive-rs and call `calculate_hpr_given_apr` instead
    let holding_period_in_years =
        position_duration.div_down(FixedPoint::from((60 * 60 * 24 * 365)));

    let apr_int = apr.to_i256()?;
    let (sign, apr_uint) = apr_int.into_sign_and_abs();
    let apr_fp = apr_uint.to_fixed_point()?;

    match sign {
        Sign::Positive => Ok(apr_fp.mul(holding_period_in_years).to_u256()?.to_string()),
        Sign::Negative => {
            let result_uint = apr_fp.mul(holding_period_in_years);
            Ok(I256::try_from(result_uint)
                .to_js_result()?
                .mul(-1)
                .to_string())
        }
    }
}

/// Calculate the holding period return (HPR) given a compounding, annualized
/// rate (APY).
///
/// @param apy - The annualized rate
///
/// @param positionDuration - The position duration in seconds
#[wasm_bindgen(skip_jsdoc)]
pub fn calcHprGivenApy(apy: &str, positionDuration: &str) -> Result<String, JsValue> {
    let apy_fp = apy.to_fixed_point()?;
    let position_duration_fp = positionDuration.to_fixed_point()?;
    let result_fp = calculate_hpr_given_apy(apy_fp, position_duration_fp).to_js_result()?;

    Ok(result_fp.to_u256()?.to_string())
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

/// Calculates the pool's present value in base
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
