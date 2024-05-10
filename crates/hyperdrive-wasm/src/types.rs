use ethers::core::types::{Address, I256, U256};
use hyperdrive_wrappers::wrappers::ihyperdrive::{Fees, PoolConfig, PoolInfo};
use serde::{Deserialize, Serialize};
use std::str::FromStr;
use wasm_bindgen::prelude::*;

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

impl From<&JsPoolInfo> for PoolInfo {
    fn from(pool_info: &JsPoolInfo) -> PoolInfo {
        let js_pool_info: StringPoolInfo =
            serde_wasm_bindgen::from_value(pool_info.into()).unwrap();
        PoolInfo {
            share_reserves: U256::from_dec_str(&js_pool_info.shareReserves).unwrap(),
            share_adjustment: I256::from_dec_str(&js_pool_info.shareAdjustment).unwrap(),
            bond_reserves: U256::from_dec_str(&js_pool_info.bondReserves).unwrap(),
            long_exposure: U256::from_dec_str(&js_pool_info.longExposure).unwrap(),
            vault_share_price: U256::from_dec_str(&js_pool_info.vaultSharePrice).unwrap(),
            longs_outstanding: U256::from_dec_str(&js_pool_info.longsOutstanding).unwrap(),
            shorts_outstanding: U256::from_dec_str(&js_pool_info.shortsOutstanding).unwrap(),
            long_average_maturity_time: U256::from_dec_str(&js_pool_info.longAverageMaturityTime)
                .unwrap(),
            short_average_maturity_time: U256::from_dec_str(&js_pool_info.shortAverageMaturityTime)
                .unwrap(),
            lp_total_supply: U256::from_dec_str(&js_pool_info.lpTotalSupply).unwrap(),
            lp_share_price: U256::from_dec_str(&js_pool_info.lpSharePrice).unwrap(),
            withdrawal_shares_proceeds: U256::from_dec_str(&js_pool_info.withdrawalSharesProceeds)
                .unwrap(),
            withdrawal_shares_ready_to_withdraw: U256::from_dec_str(
                &js_pool_info.withdrawalSharesReadyToWithdraw,
            )
            .unwrap(),
            zombie_base_proceeds: U256::from_dec_str(&js_pool_info.zombieBaseProceeds).unwrap(),
            zombie_share_reserves: U256::from_dec_str(&js_pool_info.zombieShareReserves).unwrap(),
        }
    }
}

impl From<&JsPoolConfig> for PoolConfig {
    fn from(pool_config: &JsPoolConfig) -> PoolConfig {
        let js_pool_config: StringPoolConfig =
            serde_wasm_bindgen::from_value(pool_config.into()).unwrap();
        PoolConfig {
            base_token: Address::from_str(&js_pool_config.baseToken).unwrap(),
            sweep_collector: Address::from_str(&js_pool_config.sweepCollector).unwrap(),
            governance: Address::from_str(&js_pool_config.governance).unwrap(),
            fee_collector: Address::from_str(&js_pool_config.feeCollector).unwrap(),
            fees: Fees {
                curve: U256::from_dec_str(&js_pool_config.fees.curve).unwrap(),
                flat: U256::from_dec_str(&js_pool_config.fees.flat).unwrap(),
                governance_lp: U256::from_dec_str(&js_pool_config.fees.governanceLP).unwrap(),
                governance_zombie: U256::from_dec_str(&js_pool_config.fees.governanceZombie)
                    .unwrap(),
            },
            initial_vault_share_price: U256::from_dec_str(&js_pool_config.initialVaultSharePrice)
                .unwrap(),
            minimum_share_reserves: U256::from_dec_str(&js_pool_config.minimumShareReserves)
                .unwrap(),
            minimum_transaction_amount: U256::from_dec_str(
                &js_pool_config.minimumTransactionAmount,
            )
            .unwrap(),
            time_stretch: U256::from_dec_str(&js_pool_config.timeStretch).unwrap(),
            position_duration: U256::from_dec_str(&js_pool_config.positionDuration).unwrap(),
            checkpoint_duration: U256::from_dec_str(&js_pool_config.checkpointDuration).unwrap(),
            linker_factory: Address::from_str(&js_pool_config.linkerFactory).unwrap(),
            linker_code_hash: hex::decode(&js_pool_config.linkerCodeHash)
                .unwrap()
                .try_into()
                .unwrap(),
            vault_shares_token: Address::from_str(&js_pool_config.vaultSharesToken).unwrap(),
            circuit_breaker_delta: U256::from_str(&js_pool_config.circuitBreakerDelta).unwrap(),
        }
    }
}
