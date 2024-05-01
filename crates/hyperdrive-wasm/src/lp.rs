use ethers::types::U256;
use fixed_point::FixedPoint;
use fixed_point_macros::fixed;
use hyperdrive_math::State;
use wasm_bindgen::prelude::wasm_bindgen;

use crate::{
    types::{JsPoolConfig, JsPoolInfo},
    utils::set_panic_hook,
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
) -> String {
    set_panic_hook();
    let state = State {
        info: poolInfo.into(),
        config: poolConfig.into(),
    };
    let current_time = U256::from_dec_str(currentTime).unwrap();
    let contribution = FixedPoint::from(U256::from_dec_str(contribution).unwrap());

    let as_base = asBase.unwrap_or(true);

    let min_lp_share_price = match minLpSharePrice {
        Some(min_lp_share_price) => {
            FixedPoint::from(U256::from_dec_str(&min_lp_share_price).unwrap())
        }
        None => fixed!(0),
    };

    let min_apr = match minApr {
        Some(min_apr) => FixedPoint::from(U256::from_dec_str(&min_apr).unwrap()),
        None => fixed!(0),
    };

    let max_apr = match maxApr {
        Some(max_apr) => FixedPoint::from(U256::from_dec_str(&max_apr).unwrap()),
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
        .unwrap();

    U256::from(result_fp).to_string()
}
