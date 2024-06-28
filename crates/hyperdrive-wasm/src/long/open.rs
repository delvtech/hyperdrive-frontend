use js_sys::BigInt;
use ts_macro::ts;
use wasm_bindgen::prelude::wasm_bindgen;

use crate::{
    error::{HyperdriveWasmError, ToHyperdriveWasmResult},
    types::IStateParams,
    utils::{ToBigInt, ToFixedPoint},
};

#[ts(extends = IStateParams)]
struct OpenLongParams {
    base_amount: BigInt,
}

/// Calculates the long amount that will be opened for a given base amount.
///
/// @param poolInfo - The current state of the pool
///
/// @param poolConfig - The pool's configuration
///
/// @param baseAmount - The amount of base tokens to open a long for
#[wasm_bindgen(skip_jsdoc)]
pub fn calcOpenLong(params: IOpenLongParams) -> Result<BigInt, HyperdriveWasmError> {
    let state = params.to_state()?;
    let base_amount = params.base_amount().to_fixed()?;

    let result_fp = state.calculate_open_long(base_amount).to_result()?;

    result_fp.to_bigint()
}

#[ts(extends = IStateParams)]
struct SpotPriceAfterLongParams {
    base_amount: BigInt,
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
    params: ISpotPriceAfterLongParams,
) -> Result<BigInt, HyperdriveWasmError> {
    let state = params.to_state()?;
    let base_amount = params.base_amount().to_fixed()?;

    let result_fp = state
        .calculate_spot_price_after_long(base_amount, None)
        .to_result()?;

    result_fp.to_bigint()
}
