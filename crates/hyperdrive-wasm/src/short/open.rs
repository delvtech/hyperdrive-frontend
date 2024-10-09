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
struct OpenShortParams {
    /// The amount of bonds to short.
    bond_amount: BigInt,
    /// The vault share price at the start of the checkpoint.
    open_vault_share_price: BigInt,
}

/// Calculates the amount of base the trader will need to deposit for a short of
/// a given size.
#[wasm_bindgen(skip_jsdoc)]
pub fn calcOpenShort(params: IOpenShortParams) -> Result<BigInt, Error> {
    let state = params.to_state()?;
    let bond_amount = params.bond_amount().to_u256()?.fixed();
    let open_vault_share_price = params.open_vault_share_price().to_u256()?.fixed();

    let result_fp = state
        .calculate_open_short(bond_amount, open_vault_share_price)
        .to_result()?;

    result_fp.to_bigint()
}

#[ts(extends = IStateParams)]
struct SpotPriceAfterShortParams {
    /// The amount of bonds to short.
    bond_amount: BigInt,
}

/// Calculates the spot price after opening the short on the YieldSpace curve
/// and before calculating the fees.
#[wasm_bindgen(skip_jsdoc)]
pub fn spotPriceAfterShort(params: ISpotPriceAfterShortParams) -> Result<BigInt, Error> {
    let state = params.to_state()?;
    let bond_amount = params.bond_amount().to_u256()?.fixed();

    let result_fp = state
        .calculate_spot_price_after_short(bond_amount, None)
        .to_result()?;

    result_fp.to_bigint()
}

#[ts(extends = IStateParams)]
struct ImpliedRateParams {
    /// The amount of bonds to short.
    bond_amount: BigInt,
    /// The vault share price at the start of the checkpoint.
    open_vault_share_price: BigInt,
    /// The variable apy.
    variable_apy: BigInt,
}

/// Calculate the implied rate of opening a short at a given size. This rate is
/// calculated as an APY.
#[wasm_bindgen(skip_jsdoc)]
pub fn calcImpliedRate(params: IImpliedRateParams) -> Result<BigInt, Error> {
    let state = params.to_state()?;

    let result_fp = state
        .calculate_implied_rate(
            params.bond_amount().to_u256()?.fixed(),
            params.open_vault_share_price().to_u256()?.fixed(),
            params.variable_apy().to_u256()?.fixed(),
        )
        .to_result()?;

    result_fp.to_bigint()
}

#[ts(extends = IStateParams)]
struct ShortBondsGivenDepositParams {
    /// The target base deposit amount.
    target_base_amount: BigInt,
    /// The vault share price at the start of the checkpoint.
    open_vault_share_price: BigInt,
    /// The pool's absolute maximum bond amount at the time of opening.
    absolute_max_bond_amount: BigInt,
    /// The maximum difference between the target and actual base amount.
    ///
    /// @default 1e9
    maybe_tolerance: Option<BigInt>,
    /// The maximum number of iterations to run the Newton's method for.
    ///
    /// @default 500
    maybe_max_iterations: Option<u16>,
}

/// Calculates the amount of bonds that will be shorted given a target base
/// deposit amount.
#[wasm_bindgen(skip_jsdoc)]
pub fn shortBondsGivenDeposit(params: IShortBondsGivenDepositParams) -> Result<BigInt, Error> {
    params
        .to_state()?
        .calculate_short_bonds_given_deposit(
            params.target_base_amount().to_u256()?.fixed(),
            params.open_vault_share_price().to_u256()?.fixed(),
            params.absolute_max_bond_amount().to_u256()?.fixed(),
            match params.maybe_tolerance() {
                Some(tolerance) => Some(tolerance.to_u256()?.fixed()),
                None => None,
            },
            match params.maybe_max_iterations() {
                Some(max_iterations) => Some(max_iterations as usize),
                None => None,
            },
        )
        .to_result()?
        .to_bigint()
}
