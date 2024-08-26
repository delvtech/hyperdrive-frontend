use delv_core::{
    conversions::{ToBigInt, ToU256},
    error::{Error, ToResult},
};
use fixedpointmath::Fixed;
use js_sys::BigInt;
use ts_macro::ts;
use wasm_bindgen::prelude::wasm_bindgen;

use crate::types::IStateParams;

#[ts(extends = IStateParams)]
struct OpenLongParams {
    /// The amount of base tokens to open a long for.
    base_amount: BigInt,
}

/// Calculates the long amount that will be opened for a given base amount.
#[wasm_bindgen(skip_jsdoc)]
pub fn calcOpenLong(params: IOpenLongParams) -> Result<BigInt, Error> {
    let state = params.to_state()?;
    let base_amount = params.base_amount().to_u256()?.fixed();

    let result_fp = state.calculate_open_long(base_amount).to_result()?;

    result_fp.to_bigint()
}

#[ts(extends = IStateParams)]
struct SpotPriceAfterLongParams {
    /// The amount of base tokens to open a long for.
    base_amount: BigInt,
}

/// Calculates the spot price after opening a Hyperdrive long.
#[wasm_bindgen(skip_jsdoc)]
pub fn spotPriceAfterLong(params: ISpotPriceAfterLongParams) -> Result<BigInt, Error> {
    let state = params.to_state()?;
    let base_amount = params.base_amount().to_u256()?.fixed();

    let result_fp = state
        .calculate_spot_price_after_long(base_amount, None)
        .to_result()?;

    result_fp.to_bigint()
}
