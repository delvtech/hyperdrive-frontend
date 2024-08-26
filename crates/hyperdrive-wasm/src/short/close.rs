use delv_core::{
    conversions::{ToBigInt, ToU256},
    error::{Error, ToResult},
};
use fixedpointmath::{fixed, Fixed};
use js_sys::BigInt;
use ts_macro::ts;
use wasm_bindgen::prelude::wasm_bindgen;

use crate::types::IClosePositionParams;

#[ts(extends = IClosePositionParams)]
struct CloseShortParams {
    /// The vault share price at the checkpoint when the position was opened.
    open_vault_share_price: BigInt,
    /// The current vault share price, or if the position has matured, the vault
    /// share price from the closing checkpoint.
    close_vault_share_price: BigInt,
}

/// Calculates the amount of shares the trader will receive after fees for
/// closing a short
#[wasm_bindgen(skip_jsdoc)]
pub fn calcCloseShort(params: ICloseShortParams) -> Result<BigInt, Error> {
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
/// market_estimate = yield_accrued + trading_proceeds - curve_fees_paid +
/// flat_fees_returned
///
/// yield_accrued      = dy * (c-c0)/c0 trading_proceeds   = dy * (1 - p) * t
/// curve_fees_paid    = trading_proceeds * curve_fee flat_fees_returned = dy *
/// t * flat_fee
///
/// dy = bond amount c  = closeVaultSharePrice (current if non-matured, or
/// checkpoint's if matured) c0 = openVaultSharePrice p  = spotPrice t  =
/// timeRemaining
#[wasm_bindgen(skip_jsdoc)]
pub fn calcShortMarketValue(params: ICloseShortParams) -> Result<BigInt, Error> {
    let state = params.to_state()?;
    // dy is the bonds shorted
    let bond_amount = params.bond_amount().to_u256()?.fixed();

    // c is the closing vault share price
    let close_vault_share_price = params.close_vault_share_price().to_u256()?.fixed();

    // c0 is the open vault share price
    let open_vault_share_price = params.open_vault_share_price().to_u256()?.fixed();

    let maturity_time = params.maturity_time().to_u256()?.fixed();
    let current_time = params.current_time().to_u256()?.fixed();

    // p is the current pool spot price
    let spot_price = state.calculate_spot_price().to_result()?;

    // t is the time remaining (maturity_time - latest_checkpoint) /
    // position_duration
    let latest_checkpoint = state.to_checkpoint(current_time.into()).fixed();
    let time_remaining = if maturity_time > latest_checkpoint {
        // NOTE: Round down to underestimate the time remaining.
        (maturity_time - latest_checkpoint).div_down(state.config.position_duration.fixed())
    } else {
        fixed!(0)
    };

    // yield accrued dy * (c-c0)/c0
    let yield_accrued =
        bond_amount * (close_vault_share_price - open_vault_share_price) / open_vault_share_price;

    // trading_proceeds dy * (1 - p) * t
    let trading_proceeds = bond_amount * (fixed!(1e18) - spot_price) * time_remaining;

    // curve_fees_paid = trading_proceeds * curve_fee
    let curve_fees_paid = trading_proceeds * state.config.fees.curve.fixed();

    // flat_fees_returned = dy * t * flat_fee
    let flat_fees_returned = bond_amount * time_remaining * state.config.fees.flat.fixed();

    let result = yield_accrued + trading_proceeds - curve_fees_paid + flat_fees_returned;

    result.to_bigint()
}
