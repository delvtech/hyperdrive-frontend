use ethers::types::U256;
use fixed_point::FixedPoint;
use hyperdrive_math::State;
use wasm_bindgen::prelude::wasm_bindgen;

use crate::{
    types::{JsPoolConfig, JsPoolInfo},
    utils::set_panic_hook,
};

/// Calculates the long amount that will be opened for a given base amount.
///
/// @param poolInfo - The current state of the pool
///
/// @param poolConfig - The pool's configuration
///
/// @param baseAmount - The amount of base tokens to open a long for
#[wasm_bindgen(skip_jsdoc)]
pub fn calcOpenLong(poolInfo: &JsPoolInfo, poolConfig: &JsPoolConfig, baseAmount: &str) -> String {
    set_panic_hook();
    let state = State {
        info: poolInfo.into(),
        config: poolConfig.into(),
    };
    let base_amount: FixedPoint = FixedPoint::from(U256::from_dec_str(baseAmount).unwrap());

    let result_fp = state.calculate_open_long(base_amount).unwrap();

    U256::from(result_fp).to_string()
}

/// Calculates the spot price after opening a Hyperdrive long.
///
/// @param poolInfo - The current state of the pool
///
/// @param poolConfig - The pool's configuration
///
/// @param baseAmount - The amount of base to spend
#[wasm_bindgen(skip_jsdoc)]
pub fn spotPriceAfterLong(
    poolInfo: &JsPoolInfo,
    poolConfig: &JsPoolConfig,
    baseAmount: &str,
) -> String {
    set_panic_hook();
    let state = State {
        info: poolInfo.into(),
        config: poolConfig.into(),
    };
    let base_amount = FixedPoint::from(U256::from_dec_str(baseAmount).unwrap());

    let result_fp = state
        .calculate_spot_price_after_long(base_amount, None)
        .unwrap();

    U256::from(result_fp).to_string()
}
