use js_sys::BigInt;
use ts_macro::ts;
use wasm_bindgen::prelude::wasm_bindgen;

use crate::{
    error::{HyperdriveWasmError, ToHyperdriveWasmResult},
    types::IStateParams,
    utils::{ToBigInt, ToFixedPoint, ToI256, ToU256},
};

#[ts(extends = IStateParams)]
struct MaxShortParams {
    budget: BigInt,
    open_vault_share_price: BigInt,
    checkpoint_exposure: BigInt,
    conservative_price: Option<BigInt>,
    max_iterations: Option<u8>,
}

/// Calculates the max amount of longs that can be shorted given the current
/// state of the pool.
///
/// @param poolInfo - The current state of the pool
///
/// @param poolConfig - The pool's configuration
///
/// @param openVaultSharePrice - The open share price of the pool's current
/// checkpoint
///
/// @param checkpointExposure - The exposure of the pool's current checkpoint
///
/// @param maybeConservativePrice - A lower bound on the realized price that the
/// short will pay. This is used to help the algorithm converge faster in real
/// world situations. If this is `None`, then we'll use the theoretical worst
/// case realized price.
///
/// @param maybeMaxIterations - The maximum number of iterations to run the
/// binary search for
#[wasm_bindgen(skip_jsdoc)]
pub fn maxShort(params: IMaxShortParams) -> Result<BigInt, HyperdriveWasmError> {
    let state = params.to_state()?;

    let result_fp = state
        .calculate_max_short(
            params.budget().to_u256()?,
            params.open_vault_share_price().to_u256()?,
            params.checkpoint_exposure().to_i256()?,
            params
                .conservative_price()
                .map(|x| x.to_fixed())
                .transpose()?,
            params.max_iterations().map(|x| x.into()),
        )
        .to_result()?;

    result_fp.to_bigint()
}
