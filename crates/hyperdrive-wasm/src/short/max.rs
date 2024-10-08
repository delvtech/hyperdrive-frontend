use delv_core::{
    conversions::{ToBigInt, ToI256, ToU256},
    error::{Error, ToResult},
};
use fixedpointmath::Fixed;
use js_sys::BigInt;
use ts_macro::ts;
use wasm_bindgen::prelude::wasm_bindgen;

use crate::types::IStateParams;

#[ts(extends = IStateParams)]
struct MaxShortParams {
    /// The maximum budget for the short.
    budget: BigInt,
    /// The open share price of the pool's current checkpoint.
    open_vault_share_price: BigInt,
    /// The exposure of the pool's current checkpoint.
    checkpoint_exposure: BigInt,
    /// A lower bound on the realized price that the short will pay. This is
    /// used to help the algorithm converge faster in real world situations. If
    /// this is `None`, then we'll use the theoretical worst case realized
    /// price.
    conservative_price: Option<BigInt>,
    /// The maximum number of iterations to run the Newton's method for.
    max_iterations: Option<u8>,
}

/// Calculates the max amount of bonds that can be shorted given a budget and
/// the current state of the pool.
#[wasm_bindgen(skip_jsdoc)]
pub fn maxShort(params: IMaxShortParams) -> Result<BigInt, Error> {
    let state = params.to_state()?;

    let result_fp = state
        .calculate_max_short(
            params.budget().to_u256()?,
            params.open_vault_share_price().to_u256()?,
            params.checkpoint_exposure().to_i256()?,
            match params.conservative_price() {
                Some(price) => Some(price.to_u256()?.fixed()),
                None => None,
            },
            params.max_iterations().map(|x| x.into()),
        )
        .to_result()?;

    result_fp.to_bigint()
}

#[ts(extends = IStateParams)]
struct AbsoluteMaxShortParams {
    /// The exposure of the pool's current checkpoint.
    checkpoint_exposure: BigInt,
    /// The maximum number of iterations to run the Newton's method for.
    max_iterations: Option<usize>,
}

/// Calculates the max amount of bonds that can be shorted given the current
/// state of the pool.
#[wasm_bindgen(skip_jsdoc)]
pub fn absoluteMaxShort(params: IAbsoluteMaxShortParams) -> Result<BigInt, Error> {
    let state = params.to_state()?;

    let result_fp = state
        .calculate_absolute_max_short(
            state.calculate_spot_price().to_result()?,
            params.checkpoint_exposure().to_i256()?,
            params.max_iterations(),
        )
        .to_result()?;

    result_fp.to_bigint()
}
