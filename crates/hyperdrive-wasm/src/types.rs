use hyperdrive_wrappers::wrappers::ihyperdrive::{Fees, PoolConfig, PoolInfo};
use serde::{Deserialize, Serialize};
use wasm_bindgen::prelude::*;

use crate::{
    error::HyperdriveWasmError,
    utils::{ToAddress, ToI256, ToU256},
};

// Add typescript types to the generated JS bindings
#[wasm_bindgen(typescript_custom_section)]
const JS_FEES: &'static str = r#"
interface JsFees {
    curve: string;
    flat: string;
    governanceLP: string;
    governanceZombie: string;
}"#;

#[wasm_bindgen(typescript_custom_section)]
const JS_POOL_CONFIG: &'static str = r#"
interface JsPoolConfig {
    baseToken: string,
    initialVaultSharePrice: string,
    minimumShareReserves: string,
    minimumTransactionAmount: string,
    positionDuration: string,
    checkpointDuration: string,
    timeStretch: string,
    governance: string,
    feeCollector: string,
    sweepCollector: string,
    fees: Fees,
    linkerFactory: string,
    linkerCodeHash: string,
    vaultSharesToken: string,
}"#;

#[wasm_bindgen(typescript_custom_section)]
const JS_POOL_INFO: &'static str = r#"
interface JsPoolInfo {
    shareReserves: string,
    shareAdjustment: string,
    bondReserves: string,
    lpTotalSupply: string,
    vaultSharePrice: string,
    longsOutstanding: string,
    longAverageMaturityTime: string,
    shortsOutstanding: string,
    shortAverageMaturityTime: string,
    withdrawalSharesReadyToWithdraw: string,
    withdrawalSharesProceeds: string,
    lpSharePrice: string,
    longExposure: string,
    zombieBaseProceeds: string,
    zombieShareReserves: string,
}
"#;

// Reference the generated typescript types for argument types
#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(typescript_type = "JsFees")]
    pub type JsFees;

    #[wasm_bindgen(typescript_type = "JsPoolConfig")]
    pub type JsPoolConfig;

    #[wasm_bindgen(typescript_type = "JsPoolInfo")]
    pub type JsPoolInfo;
}

// Create serde-compatible structs for the generated typescript types
#[derive(Serialize, Deserialize)]
pub struct StringFees {
    pub curve: String,
    pub flat: String,
    pub governanceLP: String,
    pub governanceZombie: String,
}

#[derive(Serialize, Deserialize)]
pub struct StringPoolConfig {
    pub baseToken: String,
    pub initialVaultSharePrice: String,
    pub minimumShareReserves: String,
    pub minimumTransactionAmount: String,
    pub positionDuration: String,
    pub checkpointDuration: String,
    pub timeStretch: String,
    pub governance: String,
    pub feeCollector: String,
    pub sweepCollector: String,
    pub fees: StringFees,
    pub linkerFactory: String,
    pub linkerCodeHash: String,
    pub vaultSharesToken: String,
    pub circuitBreakerDelta: String,
}

#[derive(Serialize, Deserialize)]
pub struct StringPoolInfo {
    pub shareReserves: String,
    pub shareAdjustment: String,
    pub bondReserves: String,
    pub lpTotalSupply: String,
    pub vaultSharePrice: String,
    pub longsOutstanding: String,
    pub longAverageMaturityTime: String,
    pub shortsOutstanding: String,
    pub shortAverageMaturityTime: String,
    pub withdrawalSharesReadyToWithdraw: String,
    pub withdrawalSharesProceeds: String,
    pub lpSharePrice: String,
    pub longExposure: String,
    pub zombieBaseProceeds: String,
    pub zombieShareReserves: String,
}

impl TryFrom<&JsPoolInfo> for PoolInfo {
    type Error = HyperdriveWasmError;

    fn try_from(pool_info: &JsPoolInfo) -> Result<Self, HyperdriveWasmError> {
        let js_pool_info: StringPoolInfo =
            serde_wasm_bindgen::from_value(pool_info.into()).unwrap();
        Ok(PoolInfo {
            share_reserves: js_pool_info.shareReserves.to_u256()?,
            share_adjustment: js_pool_info.shareAdjustment.to_i256()?,
            bond_reserves: js_pool_info.bondReserves.to_u256()?,
            long_exposure: js_pool_info.longExposure.to_u256()?,
            vault_share_price: js_pool_info.vaultSharePrice.to_u256()?,
            longs_outstanding: js_pool_info.longsOutstanding.to_u256()?,
            shorts_outstanding: js_pool_info.shortsOutstanding.to_u256()?,
            long_average_maturity_time: js_pool_info.longAverageMaturityTime.to_u256()?,
            short_average_maturity_time: js_pool_info.shortAverageMaturityTime.to_u256()?,
            lp_total_supply: js_pool_info.lpTotalSupply.to_u256()?,
            lp_share_price: js_pool_info.lpSharePrice.to_u256()?,
            withdrawal_shares_proceeds: js_pool_info.withdrawalSharesProceeds.to_u256()?,
            withdrawal_shares_ready_to_withdraw: js_pool_info
                .withdrawalSharesReadyToWithdraw
                .to_u256()?,
            zombie_base_proceeds: js_pool_info.zombieBaseProceeds.to_u256()?,
            zombie_share_reserves: js_pool_info.zombieShareReserves.to_u256()?,
        })
    }
}

impl TryFrom<&JsPoolConfig> for PoolConfig {
    type Error = HyperdriveWasmError;

    fn try_from(pool_config: &JsPoolConfig) -> Result<Self, HyperdriveWasmError> {
        let js_pool_config: StringPoolConfig =
            serde_wasm_bindgen::from_value(pool_config.into()).unwrap();
        Ok(PoolConfig {
            base_token: js_pool_config.baseToken.to_address()?,
            sweep_collector: js_pool_config.sweepCollector.to_address()?,
            governance: js_pool_config.governance.to_address()?,
            fee_collector: js_pool_config.feeCollector.to_address()?,
            fees: Fees {
                curve: js_pool_config.fees.curve.to_u256()?,
                flat: js_pool_config.fees.flat.to_u256()?,
                governance_lp: js_pool_config.fees.governanceLP.to_u256()?,
                governance_zombie: js_pool_config.fees.governanceZombie.to_u256()?,
            },
            initial_vault_share_price: js_pool_config.initialVaultSharePrice.to_u256()?,
            minimum_share_reserves: js_pool_config.minimumShareReserves.to_u256()?,
            minimum_transaction_amount: js_pool_config.minimumTransactionAmount.to_u256()?,
            time_stretch: js_pool_config.timeStretch.to_u256()?,
            position_duration: js_pool_config.positionDuration.to_u256()?,
            checkpoint_duration: js_pool_config.checkpointDuration.to_u256()?,
            linker_factory: js_pool_config.linkerFactory.to_address()?,
            linker_code_hash: hex::decode(&js_pool_config.linkerCodeHash)
                .unwrap()
                .try_into()
                .unwrap(),
            vault_shares_token: js_pool_config.vaultSharesToken.to_address()?,
            circuit_breaker_delta: js_pool_config.circuitBreakerDelta.to_u256()?,
            checkpoint_rewarder: js_pool_config.checkpointDuration.to_address()?,
        })
    }
}
