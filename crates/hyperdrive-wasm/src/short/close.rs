use js_sys::BigInt;
use ts_macro::ts;
use wasm_bindgen::prelude::wasm_bindgen;

use crate::{
    error::{HyperdriveWasmError, ToHyperdriveWasmResult},
    types::IStateParams,
    utils::{ToBigInt, ToU256},
};

#[ts(extends = IStateParams)]
struct CloseShortParams {
    bond_amount: BigInt,
    open_vault_share_price: BigInt,
    close_vault_share_price: BigInt,
    maturity_time: BigInt,
    current_time: BigInt,
}

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
pub fn calcCloseShort(params: ICloseShortParams) -> Result<BigInt, HyperdriveWasmError> {
    let state = params.to_state()?;
    let bond_amount = params.bond_amount().to_u256()?;
    let open_vault_share_price = params.open_vault_share_price().to_u256()?;
    let close_vault_share_price = params.close_vault_share_price().to_u256()?;
    let maturity_time = params.maturity_time().to_u256()?;
    let current_time = params.current_time().to_u256()?;

    let result_fp = state
        .calculate_close_short(
            bond_amount,
            open_vault_share_price,
            close_vault_share_price,
            maturity_time,
            current_time,
        )
        .to_result()?;

    result_fp.to_bigint()
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

    // c is the closing vault share price
    let close_vault_share_price = closeVaultSharePrice.to_fixed_point()?;

    // c0 is the open vault share price
    let open_vault_share_price = openVaultSharePrice.to_fixed_point()?;

    let maturity_time = maturityTime.to_fixed_point()?;
    let current_time = currentTime.to_fixed_point()?;

    // p is the current pool spot price
    let spot_price = state
        .calculate_spot_price()
        .to_js_result()?
        .to_fixed_point()?;

    // t is the time remaining
    // (maturity_time - latest_checkpoint) / position_duration
    let latest_checkpoint = state.to_checkpoint(current_time.into()).to_fixed_point()?;
    let time_remaining = if maturity_time > latest_checkpoint {
        // NOTE: Round down to underestimate the time remaining.
        (maturity_time.sub(latest_checkpoint))
            .div_down(state.config.position_duration.to_fixed_point()?)
    } else {
        fixed!(0)
    };

    // yield accrued
    // dy * (c-c0)/c0
    let yield_accrued = bond_amount
        .mul(close_vault_share_price.sub(open_vault_share_price))
        .div(open_vault_share_price);

    // trading_proceeds
    // dy * (1 - p) * t
    let trading_proceeds = bond_amount
        .mul(fixed!(1e18).sub(spot_price))
        .mul(time_remaining);

    // curve_fees_paid = trading_proceeds * curve_fee
    let curve_fees_paid = trading_proceeds.mul(state.config.fees.curve.to_fixed_point()?);

    // flat_fees_returned = dy * t * flat_fee
    let flat_fees_returned = bond_amount
        .mul(time_remaining)
        .mul(state.config.fees.flat.to_fixed_point()?);

    let result = yield_accrued + trading_proceeds - curve_fees_paid + flat_fees_returned;

    Ok(result.to_u256()?.to_string())
}
