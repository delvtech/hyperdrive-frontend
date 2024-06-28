use js_sys::BigInt;
use ts_macro::ts;
use wasm_bindgen::prelude::wasm_bindgen;

use crate::{
    error::{HyperdriveWasmError, ToHyperdriveWasmResult},
    types::IStateParams,
    utils::{ToBigInt, ToFixedPoint},
};

#[ts(extends = IStateParams)]
struct OpenShortParams {
    bond_amount: BigInt,
    open_vault_share_price: BigInt,
}

/// Calculates the amount of base the trader will need to deposit for a short of
/// a given size.
///
/// @param poolInfo - The current state of the pool
///
/// @param poolConfig - The pool's configuration
///
/// @param bondAmount - The amount of bonds to short
///
/// @param openVaultSharePrice - The vault share price at the start of the
/// checkpoint
#[wasm_bindgen(skip_jsdoc)]
pub fn calcOpenShort(params: IOpenShortParams) -> Result<BigInt, HyperdriveWasmError> {
    let state = params.to_state()?;
    let bond_amount = params.bond_amount().to_fixed()?;
    let open_vault_share_price = params.open_vault_share_price().to_fixed()?;

    let result_fp = state
        .calculate_open_short(bond_amount, open_vault_share_price)
        .to_result()?;

    result_fp.to_bigint()
}

#[ts(extends = IStateParams)]
struct SpotPriceAfterShortParams {
    bond_amount: BigInt,
}

/// Calculates the spot price after opening the short on the YieldSpace curve
/// and before calculating the fees.
///
/// @param poolInfo - The current state of the pool
///
/// @param poolConfig - The pool's configuration
///
/// @param bondAmount - The number of bonds to short
#[wasm_bindgen(skip_jsdoc)]
pub fn spotPriceAfterShort(
    params: ISpotPriceAfterShortParams,
) -> Result<BigInt, HyperdriveWasmError> {
    let state = params.to_state()?;
    let bond_amount = params.bond_amount().to_fixed()?;

    let result_fp = state
        .calculate_spot_price_after_short(bond_amount, None)
        .to_result()?;

    result_fp.to_bigint()
}

#[ts(extends = IStateParams)]
struct ImpliedRateParams {
    bond_amount: BigInt,
    open_vault_share_price: BigInt,
    variable_apy: BigInt,
}

/// Calculate the implied rate of opening a short at a given size. This rate
/// is calculated as an APY.
/// @param poolInfo - The current state of the pool
///
/// @param poolConfig - The pool's configuration
///
/// @param bondAmount - The amount of bonds to short
///
/// @param openVaultSharePrice - The vault share price at the start of the
/// checkpoint
///
/// @param variableApy - The variable apy
#[wasm_bindgen(skip_jsdoc)]
pub fn calcImpliedRate(params: IImpliedRateParams) -> Result<BigInt, HyperdriveWasmError> {
    let state = params.to_state()?;

    let result_fp = state
        .calculate_implied_rate(
            params.bond_amount().to_fixed()?,
            params.open_vault_share_price().to_fixed()?,
            params.variable_apy().to_fixed()?,
        )
        .to_result()?;

    result_fp.to_bigint()
}
