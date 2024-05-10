#![allow(non_snake_case)]

mod long;
mod lp;
mod short;
mod types;
mod utils;

use ethers::types::U256;
use hyperdrive_math::State;
use types::{JsPoolConfig, JsPoolInfo};
use utils::set_panic_hook;
use wasm_bindgen::prelude::*;

/// Calculates the pool's spot price, i.e. the price to open a long of 1.
///
/// @param poolInfo - The current state of the pool
///
/// @param poolConfig - The pool's configuration
#[wasm_bindgen(skip_jsdoc)]
pub fn spotPrice(poolInfo: &JsPoolInfo, poolConfig: &JsPoolConfig) -> String {
    set_panic_hook();
    let state = State {
        config: poolConfig.into(),
        info: poolInfo.into(),
    };
    let result_fp = state.calculate_spot_price();
    U256::from(result_fp).to_string()
}

/// Calculates the pool's idle liquidity in base
///
/// @param poolInfo - The current state of the pool
///
/// @param poolConfig - The pool's configuration
#[wasm_bindgen(skip_jsdoc)]
pub fn idleShareReservesInBase(poolInfo: &JsPoolInfo, poolConfig: &JsPoolConfig) -> String {
    set_panic_hook();
    let state = State {
        config: poolConfig.into(),
        info: poolInfo.into(),
    };
    let result_fp = state.calculate_idle_share_reserves_in_base();
    U256::from(result_fp).to_string()
}

/// Calculates the pool's present value in base
///
/// @param poolInfo - The current state of the pool
///
/// @param poolConfig - The pool's configuration
///
/// @param currentTime - The time at which to grab the present value
#[wasm_bindgen(skip_jsdoc)]
pub fn presentValue(poolInfo: &JsPoolInfo, poolConfig: &JsPoolConfig, currentTime: &str) -> String {
    set_panic_hook();
    let state = State {
        config: poolConfig.into(),
        info: poolInfo.into(),
    };
    let current_time = U256::from_dec_str(currentTime).unwrap();
    let result_fp = state.calculate_present_value(current_time).unwrap();
    U256::from(result_fp).to_string()
}

/// Calculates the pool's fixed APR, i.e. the fixed rate a user locks in when
/// they open a long.
///
/// @param poolInfo - The current state of the pool
///
/// @param poolConfig - The pool's configuration
#[wasm_bindgen(skip_jsdoc)]
pub fn spotRate(poolInfo: &JsPoolInfo, poolConfig: &JsPoolConfig) -> String {
    set_panic_hook();
    let state = State {
        info: poolInfo.into(),
        config: poolConfig.into(),
    };
    let result_fp = state.calculate_spot_rate();
    U256::from(result_fp).to_string()
}
