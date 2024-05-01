use ethers::types::{I256, U256};
use fixed_point::FixedPoint;
use hyperdrive_math::State;
use wasm_bindgen::prelude::wasm_bindgen;

use crate::{
    types::{JsPoolConfig, JsPoolInfo},
    utils::set_panic_hook,
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
    poolInfo: &JsPoolInfo,
    poolConfig: &JsPoolConfig,
    bondAmount: &str,
    openVaultSharePrice: &str,
) -> String {
    set_panic_hook();
    let state = State {
        info: poolInfo.into(),
        config: poolConfig.into(),
    };
    let bond_amount = FixedPoint::from(U256::from_dec_str(bondAmount).unwrap());
    let open_vault_share_price = FixedPoint::from(U256::from_dec_str(openVaultSharePrice).unwrap());

    let result_fp = state
        .calculate_open_short(bond_amount, open_vault_share_price)
        .unwrap();

    U256::from(result_fp).to_string()
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
    poolInfo: &JsPoolInfo,
    poolConfig: &JsPoolConfig,
    bondAmount: &str,
) -> String {
    set_panic_hook();
    let state = State {
        info: poolInfo.into(),
        config: poolConfig.into(),
    };
    let bond_amount = FixedPoint::from(U256::from_dec_str(bondAmount).unwrap());

    let result_fp = state
        .calculate_spot_price_after_short(bond_amount, None)
        .unwrap();

    U256::from(result_fp).to_string()
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
    poolInfo: &JsPoolInfo,
    poolConfig: &JsPoolConfig,
    bondAmount: &str,
    openVaultSharePrice: &str,
    variableApy: &str,
) -> String {
    set_panic_hook();
    let state = State {
        info: poolInfo.into(),
        config: poolConfig.into(),
    };
    let bond_amount = FixedPoint::from(U256::from_dec_str(bondAmount).unwrap());
    let open_vault_share_price = FixedPoint::from(U256::from_dec_str(openVaultSharePrice).unwrap());
    let variable_apy = FixedPoint::from(U256::from_dec_str(variableApy).unwrap());

    let result_fp = state
        .calculate_implied_rate(bond_amount, open_vault_share_price, variable_apy)
        .unwrap();

    I256::from(result_fp).to_string()
}
