use ethers::types::U256;
use fixed_point::fixed;
use js_sys::BigInt;
use ts_macro::ts;
use wasm_bindgen::prelude::wasm_bindgen;

use crate::{
    error::{HyperdriveWasmError, ToHyperdriveWasmResult},
    types::IStateParams,
    utils::{ToBigInt, ToFixedPoint, ToU256},
};

#[ts(extends = IStateParams)]
struct CalcAddLiquidityParams {
    /// The current timestamp (in seconds).
    current_time: BigInt,
    /// The amount of base or shares to contribute.
    contribution: BigInt,
    /// True if the contribution is in base, false if it's in shares.
    ///
    /// Default: `true`
    as_base: Option<bool>,
    /// The minimum share price the trader will accept.
    ///
    /// Default: `0`
    min_lp_share_price: Option<BigInt>,
    /// The minimum APR the trader will accept.
    ///
    /// Default: `0`
    min_apr: Option<BigInt>,
    /// The maximum APR the trader will accept.
    ///
    /// Default: max uint256
    max_apr: Option<BigInt>,
}

/// Calculates the amount of lp shares the trader will receive after adding
/// liquidity.
#[wasm_bindgen(skip_jsdoc)]
pub fn calcAddLiquidity(params: ICalcAddLiquidityParams) -> Result<BigInt, HyperdriveWasmError> {
    let state = params.to_state()?;

    let min_lp_share_price = match params.min_lp_share_price() {
        Some(min_lp_share_price) => min_lp_share_price.to_fixed()?,
        None => fixed!(0),
    };

    let min_apr = match params.min_apr() {
        Some(min_apr) => min_apr.to_fixed()?,
        None => fixed!(0),
    };

    let max_apr = match params.max_apr() {
        Some(max_apr) => max_apr.to_fixed()?,
        None => U256::MAX.to_fixed()?,
    };

    let result_fp = state
        .calculate_add_liquidity(
            params.current_time().to_u256()?,
            params.contribution().to_fixed()?,
            min_lp_share_price,
            min_apr,
            max_apr,
            params.as_base().unwrap_or(true),
        )
        .to_result()?;

    result_fp.to_bigint()
}
