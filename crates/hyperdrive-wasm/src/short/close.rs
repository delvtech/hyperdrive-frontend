use std::ops::{Div, Mul, Sub};

use fixed_point::{fixed, FixedPoint};
use hyperdrive_math::State;
use wasm_bindgen::{prelude::wasm_bindgen, JsValue};
use web_sys::console;

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
    let spot_price = state
        .calculate_spot_price()
        .to_js_result()?
        .to_fixed_point()?;

    console::log_2(&"spot_price".into(), &format!("{:?}", spot_price).into());

    // dy is the bonds shorted
    let bond_amount = bondAmount.to_fixed_point()?;
    console::log_2(&"bond_amount".into(), &format!("{:?}", bond_amount).into());

    // c0 is the open vault share price
    let open_vault_share_price = openVaultSharePrice.to_fixed_point()?;
    console::log_2(
        &"open_vault_share_price".into(),
        &format!("{:?}", open_vault_share_price).into(),
    );

    // c is the closing vault share price
    let close_vault_share_price = closeVaultSharePrice.to_fixed_point()?;
    console::log_2(
        &"close_vault_share_price".into(),
        &format!("{:?}", close_vault_share_price).into(),
    );

    // account for variable interest accrued
    //  (c/c0 * dy)
    let interest = close_vault_share_price
        .div(open_vault_share_price)
        .mul(bond_amount);
    console::log_2(&"interest".into(), &format!("{:?}", interest).into());

    // 1 - p
    let one_minus_p = fixed!(1e18).sub(spot_price);
    console::log_2(&"one_minus_p".into(), &format!("{:?}", one_minus_p).into());

    let result = interest.mul(one_minus_p);
    console::log_2(&"result".into(), &format!("{:?}", result).into());

    Ok(result.to_u256()?.to_string())
}
