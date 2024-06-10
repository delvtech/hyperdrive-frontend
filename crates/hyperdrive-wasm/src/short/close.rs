use std::ops::{Div, Mul, Sub};

use fixed_point::FixedPoint;
use hyperdrive_math::State;
use wasm_bindgen::{prelude::wasm_bindgen, JsValue};

use crate::{
    error::ToJsResult,
    types::{JsPoolConfig, JsPoolInfo},
    utils::{ToFixedPoint, ToU256},
};

/// Calculates the amount of shares the trader will receive after fees for
/// closing a short
///
/// @param poolInfo - The current state of the pool
///
/// @param poolConfig - The pool's configuration
///
/// @param bondAmount - The number of short bonds to close
///
/// @param openVaultSharePrice - The vault share price at the checkpoint when
/// the position was opened
///
/// @param closeVaultSharePrice - The current vault share price, or if the
/// position has matured, the vault share price from the closing checkpoint
///
/// @param maturityTime - The maturity timestamp of the short (in seconds)
///
/// @param currentTime - The current timestamp (in seconds)
#[wasm_bindgen(skip_jsdoc)]
pub fn calcCloseShort(
    poolInfo: &JsPoolInfo,
    poolConfig: &JsPoolConfig,
    bondAmount: &str,
    openVaultSharePrice: &str,
    closeVaultSharePrice: &str,
    maturityTime: &str,
    currentTime: &str,
) -> Result<String, JsValue> {
    let state = State {
        info: poolInfo.try_into()?,
        config: poolConfig.try_into()?,
    };
    let bond_amount = bondAmount.to_u256()?;
    let open_vault_share_price = openVaultSharePrice.to_u256()?;
    let close_vault_share_price = closeVaultSharePrice.to_u256()?;
    let maturity_time = maturityTime.to_u256()?;
    let current_time = currentTime.to_u256()?;

    let result_fp = state
        .calculate_close_short(
            bond_amount,
            open_vault_share_price,
            close_vault_share_price,
            maturity_time,
            current_time,
        )
        .to_js_result()?;

    Ok(result_fp.to_u256()?.to_string())
}

/// Calculates the market value of a short position using the equation:
/// c / c0 * dy * (1 - p)
///
/// @param poolInfo - The current state of the pool
///
/// @param poolConfig - The pool's configuration
///
/// @param bondAmount - The number of short bonds to close
///
/// @param openVaultSharePrice - The vault share price at the checkpoint when
/// the position was opened
///
/// @param closeVaultSharePrice - The current vault share price, or if the
/// position has matured, the vault share price from the closing checkpoint
///
/// @param maturityTime - The maturity timestamp of the short (in seconds)
///
/// @param currentTime - The current timestamp (in seconds)
#[wasm_bindgen(skip_jsdoc)]
pub fn calcShortMarketValue(
    poolInfo: &JsPoolInfo,
    poolConfig: &JsPoolConfig,
    bondAmount: &str,
    openVaultSharePrice: &str,
    closeVaultSharePrice: &str,
) -> Result<String, JsValue> {
    let state = State {
        info: poolInfo.try_into()?,
        config: poolConfig.try_into()?,
    };

    // p is the current pool spot price
    let spot_price = state.calculate_spot_price().unwrap().to_fixed_point()?;

    //
    // c is the current vault share price if the position hasn't matured, or it is the share price at the maturity checkpoint
    // c0 is the open vault share price
    // dy is the amount of bonds they shorted
    let bond_amount = bondAmount.to_fixed_point()?;
    let open_vault_share_price = openVaultSharePrice.to_fixed_point()?;
    let close_vault_share_price = closeVaultSharePrice.to_fixed_point()?;

    // account for variable interest accrued
    //  (c/c0 * dy)
    let interest = close_vault_share_price
        .div(open_vault_share_price)
        .mul(bond_amount);

    // 1 - p
    let one_minus_p = FixedPoint::from(1).sub(spot_price);

    let result = interest.mul(one_minus_p);

    Ok(result.to_u256()?.to_string())
}
