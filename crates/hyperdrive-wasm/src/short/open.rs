use hyperdrive_math::State;
use js_sys::BigInt;
use wasm_bindgen::prelude::wasm_bindgen;

use crate::{
    error::{HyperdriveWasmError, ToHyperdriveWasmResult},
    types::{JsPoolConfig, JsPoolInfo},
    utils::{ToBigInt, ToFixedPoint},
};

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
pub fn calcOpenShort(
    poolInfo: JsPoolInfo,
    poolConfig: JsPoolConfig,
    bondAmount: BigInt,
    openVaultSharePrice: BigInt,
) -> Result<BigInt, HyperdriveWasmError> {
    let state = State {
        info: poolInfo.try_into()?,
        config: poolConfig.try_into()?,
    };
    let bond_amount = bondAmount.to_fixed_point()?;
    let open_vault_share_price = openVaultSharePrice.to_fixed_point()?;

    let result_fp = state
        .calculate_open_short(bond_amount, open_vault_share_price)
        .to_result()?;

    result_fp.to_big_int()
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
    poolInfo: JsPoolInfo,
    poolConfig: JsPoolConfig,
    bondAmount: BigInt,
) -> Result<BigInt, HyperdriveWasmError> {
    let state = State {
        info: poolInfo.try_into()?,
        config: poolConfig.try_into()?,
    };
    let bond_amount = bondAmount.to_fixed_point()?;

    let result_fp = state
        .calculate_spot_price_after_short(bond_amount, None)
        .to_result()?;

    result_fp.to_big_int()
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
pub fn calcImpliedRate(
    poolInfo: JsPoolInfo,
    poolConfig: JsPoolConfig,
    bondAmount: BigInt,
    openVaultSharePrice: BigInt,
    variableApy: BigInt,
) -> Result<BigInt, HyperdriveWasmError> {
    let state = State {
        info: poolInfo.try_into()?,
        config: poolConfig.try_into()?,
    };
    let bond_amount = bondAmount.to_fixed_point()?;
    let open_vault_share_price = openVaultSharePrice.to_fixed_point()?;
    let variable_apy = variableApy.to_fixed_point()?;

    let result_fp = state
        .calculate_implied_rate(bond_amount, open_vault_share_price, variable_apy)
        .to_result()?;

    result_fp.to_big_int()
}
