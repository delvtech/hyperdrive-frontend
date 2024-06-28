#![allow(non_snake_case)]

mod error;
mod long;
mod lp;
mod short;
mod types;
mod utils;

use error::{HyperdriveWasmError, ToHyperdriveWasmResult};
use hyperdrive_math::{calculate_hpr_given_apr, calculate_hpr_given_apy};
use js_sys::{BigInt, Number};
use ts_macro::ts;
use types::IStateParams;
use utils::{set_panic_hook, ToBigInt, ToFixedPoint, ToU256};
use wasm_bindgen::prelude::*;

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
pub fn spotPrice(params: IStateParams) -> Result<BigInt, HyperdriveWasmError> {
    params
        .to_state()?
        .calculate_spot_price()
        .to_result()?
        .to_bigint()
}

#[ts]
struct CalcHprGivenAprParams {
    /// The annualized rate
    ///
    /// Multiply by 10^18 to convert to fixed point
    apr: BigInt,
    /// The position duration in seconds
    position_duration: BigInt,
    foo: Option<Number>,
}

/// Calculate the holding period return (HPR) given a non-compounding,
/// annualized rate (APR).
///
/// @param apr - The annualized rate
///
/// @param positionDuration - The position duration in seconds
#[wasm_bindgen(skip_jsdoc)]
pub fn calcHprGivenApr(params: ICalcHprGivenAprParams) -> Result<BigInt, HyperdriveWasmError> {
    calculate_hpr_given_apr(
        params.apr().to_fixed()?,
        params.position_duration().to_fixed()?,
    )
    .to_bigint()
}

#[ts]
struct CalcHprGivenApyParams {
    apy: BigInt,
    position_duration: BigInt,
}

/// Calculate the holding period return (HPR) given a compounding, annualized
/// rate (APY).
///
/// @param apy - The annualized rate
///
/// @param positionDuration - The position duration in seconds
#[wasm_bindgen(skip_jsdoc)]
pub fn calcHprGivenApy(params: ICalcHprGivenApyParams) -> Result<BigInt, HyperdriveWasmError> {
    calculate_hpr_given_apy(
        params.apy().to_fixed()?,
        params.position_duration().to_fixed()?,
    )
    .to_result()?
    .to_bigint()
}

/// Calculates the pool's idle liquidity in base
///
/// @param poolInfo - The current state of the pool
///
/// @param poolConfig - The pool's configuration
#[wasm_bindgen(skip_jsdoc)]
pub fn idleShareReservesInBase(params: IStateParams) -> Result<BigInt, HyperdriveWasmError> {
    params
        .to_state()?
        .calculate_idle_share_reserves_in_base()
        .to_bigint()
}

#[ts(extends = IStateParams)]
struct PresentValueParams {
    current_time: BigInt,
}

/// Calculates the pool's present value in shares
///
/// @param poolInfo - The current state of the pool
///
/// @param poolConfig - The pool's configuration
///
/// @param currentTime - The time at which to grab the present value
#[wasm_bindgen(skip_jsdoc)]
pub fn presentValue(params: IPresentValueParams) -> Result<BigInt, HyperdriveWasmError> {
    let current_time = params.current_time().to_u256()?;
    params
        .to_state()?
        .calculate_present_value(current_time)
        .to_result()?
        .to_bigint()
}

/// Calculates the pool's fixed APR, i.e. the fixed rate a user locks in when
/// they open a long.
///
/// @param poolInfo - The current state of the pool
///
/// @param poolConfig - The pool's configuration
#[wasm_bindgen(skip_jsdoc)]
pub fn spotRate(params: IStateParams) -> Result<BigInt, HyperdriveWasmError> {
    params
        .to_state()?
        .calculate_spot_rate()
        .to_result()?
        .to_bigint()
}
