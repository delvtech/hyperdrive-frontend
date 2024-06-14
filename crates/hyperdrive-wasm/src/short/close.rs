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
/// market_estimate = yield_accrued + trading_proceeds - curve_fees_paid + flat_fees_returned
///
/// yield_accrued      = dy * (c-c0)/c0
/// trading_proceeds   = dy * (1 - p) * t
/// curve_fees_paid    = trading_proceeds * curve_fee
/// flat_fees_returned = dy * t * flat_fee
///
/// dy = bond amount
/// c  = closeVaultSharePrice (current if non-matured, or checkpoint's if matured)
/// c0 = openVaultSharePrice
/// p  = spotPrice
/// t  = timeRemaining
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
    maturityTime: &str,
    currentTime: &str,
) -> Result<String, JsValue> {
    let state = State {
        info: poolInfo.try_into()?,
        config: poolConfig.try_into()?,
    };
    // dy is the bonds shorted
    let bond_amount = bondAmount.to_fixed_point()?;
    console::log_2(&"bond_amount".into(), &format!("{:?}", bond_amount).into());

    // c is the closing vault share price
    let close_vault_share_price = closeVaultSharePrice.to_fixed_point()?;
    console::log_2(
        &"close_vault_share_price".into(),
        &format!("{:?}", close_vault_share_price).into(),
    );

    // c0 is the open vault share price
    let open_vault_share_price = openVaultSharePrice.to_fixed_point()?;
    console::log_2(
        &"open_vault_share_price".into(),
        &format!("{:?}", open_vault_share_price).into(),
    );

    let maturity_time = maturityTime.to_fixed_point()?;
    let current_time = currentTime.to_fixed_point()?;

    // p is the current pool spot price
    let spot_price = state
        .calculate_spot_price()
        .to_js_result()?
        .to_fixed_point()?;
    console::log_2(&"spot_price".into(), &format!("{:?}", spot_price).into());

    // t is the time remaining
    // (maturity_time - latest_checkpoint) / position_duration
    let latest_checkpoint = state.to_checkpoint(current_time.into()).to_fixed_point()?;
    let time_remaining = 
        if maturity_time > latest_checkpoint {
            // NOTE: Round down to underestimate the time remaining.
            (maturity_time.sub(latest_checkpoint)).div_down(state.config.position_duration.to_fixed_point()?)
        } else {
            fixed!(0)
        };

    // yield accrued
    // dy * (c-c0)/c0
    let yield_accrued = bond_amount
        .mul(close_vault_share_price.sub(open_vault_share_price))
        .div(open_vault_share_price);
    console::log_2(&"yield_accrued".into(), &format!("{:?}", yield_accrued).into());

    // trading_proceeds
    // dy * (1 - p) * t
    let trading_proceeds = bond_amount
        .mul(fixed!(1e18).sub(spot_price))
        .mul(time_remaining);
    console::log_2(&"trading_proceeds".into(), &format!("{:?}", trading_proceeds).into());

    // curve_fees_paid = trading_proceeds * curve_fee
    let curve_fees_paid = trading_proceeds
        .mul(state.config.fees.curve.to_fixed_point()?);
    console::log_2(&"curve_fees_paid".into(), &format!("{:?}", curve_fees_paid).into());

    // flat_fees_returned = dy * t * flat_fee
    let flat_fees_returned = bond_amount
        .mul(time_remaining)
        .mul(state.config.fees.flat.to_fixed_point()?);
    console::log_2(&"flat_fees_returned".into(), &format!("{:?}", flat_fees_returned).into());

    let result = yield_accrued + trading_proceeds - curve_fees_paid + flat_fees_returned;
    console::log_2(&"result".into(), &format!("{:?}", result).into());

    Ok(result.to_u256()?.to_string())
}
