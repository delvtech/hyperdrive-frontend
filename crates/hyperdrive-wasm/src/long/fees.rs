use ethers::types::U256;
use fixed_point::FixedPoint;
use hyperdrive_math::State;
use wasm_bindgen::prelude::wasm_bindgen;

use crate::{
    types::{JsPoolConfig, JsPoolInfo},
    utils::set_panic_hook,
};

/// Calculates the curve fee paid in bonds by traders when they open a long.
///
/// @param poolInfo - The current state of the pool
///
/// @param poolConfig - The pool's configuration
///
/// @param baseAmount - The amount of base tokens to spend
#[wasm_bindgen(skip_jsdoc)]
pub fn openLongCurveFee(
    poolInfo: &JsPoolInfo,
    poolConfig: &JsPoolConfig,
    baseAmount: &str,
) -> String {
    set_panic_hook();
    let state = State {
        info: poolInfo.into(),
        config: poolConfig.into(),
    };

    let base_amount = FixedPoint::from(U256::from_dec_str(baseAmount).unwrap());

    let result_fp = state.open_long_curve_fee(base_amount).unwrap();

    U256::from(result_fp).to_string()
}

/// Calculates the governance fee paid in bonds by traders when they open a
/// long.
///
/// @param poolInfo - The current state of the pool
///
/// @param poolConfig - The pool's configuration
///
/// @param baseAmount - The amount of base tokens to spend
#[wasm_bindgen(skip_jsdoc)]
pub fn openLongGovernanceFee(
    poolInfo: &JsPoolInfo,
    poolConfig: &JsPoolConfig,
    baseAmount: &str,
) -> String {
    set_panic_hook();
    let state = State {
        info: poolInfo.into(),
        config: poolConfig.into(),
    };
    let base_amount = FixedPoint::from(U256::from_dec_str(baseAmount).unwrap());

    let result_fp = state.open_long_governance_fee(base_amount, None).unwrap();

    U256::from(result_fp).to_string()
}

/// Calculates the curve fee paid in shares or base by traders when they close a
/// long.
///
/// @param poolInfo - The current state of the pool
///
/// @param poolConfig - The pool's configuration
///
/// @param bondAmount - The amount of bonds to close
///
/// @param maturityTime - The maturity timestamp of the long (in seconds)
///
/// @param currentTime - The current timestamp (in seconds)
#[wasm_bindgen(skip_jsdoc)]
pub fn closeLongCurveFee(
    poolInfo: &JsPoolInfo,
    poolConfig: &JsPoolConfig,
    bondAmount: &str,
    maturityTime: &str,
    currentTime: &str,
) -> String {
    set_panic_hook();
    let state = State {
        info: poolInfo.into(),
        config: poolConfig.into(),
    };

    let bond_amount = FixedPoint::from(U256::from_dec_str(bondAmount).unwrap());
    let maturity_time = U256::from_dec_str(maturityTime).unwrap();
    let current_time = U256::from_dec_str(currentTime).unwrap();

    let result_fp = state
        .close_long_curve_fee(bond_amount, maturity_time, current_time)
        .unwrap();

    U256::from(result_fp).to_string()
}

/// Calculates the flat fee paid in shares or base by traders when they close a
/// long.
///
/// @param poolInfo - The current state of the pool
///
/// @param poolConfig - The pool's configuration
///
/// @param bondAmount - The amount of bonds to close
///
/// @param maturityTime - The maturity timestamp of the long (in seconds)
///
/// @param currentTime - The current timestamp (in seconds)
#[wasm_bindgen(skip_jsdoc)]
pub fn closeLongFlatFee(
    poolInfo: &JsPoolInfo,
    poolConfig: &JsPoolConfig,
    bondAmount: &str,
    maturityTime: &str,
    currentTime: &str,
) -> String {
    set_panic_hook();
    let state = State {
        info: poolInfo.into(),
        config: poolConfig.into(),
    };

    let bond_amount = FixedPoint::from(U256::from_dec_str(bondAmount).unwrap());
    let maturity_time = U256::from_dec_str(maturityTime).unwrap();
    let current_time = U256::from_dec_str(currentTime).unwrap();

    let result_fp = state.close_long_flat_fee(bond_amount, maturity_time, current_time);

    U256::from(result_fp).to_string()
}
