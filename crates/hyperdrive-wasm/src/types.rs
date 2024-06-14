use hyperdrive_wrappers::wrappers::ihyperdrive::{Fees, PoolConfig, PoolInfo};
use js_sys::Reflect;
use wasm_bindgen::prelude::*;

use crate::{
    error::{HyperdriveWasmError, ToHyperdriveWasmResult},
    utils::{ToAddress, ToI256, ToU256},
};

// Add typescript types to the generated JS bindings
#[wasm_bindgen(typescript_custom_section)]
const FEES: &'static str = r#"
interface Fees {
    curve: bigint;
    flat: bigint;
    governanceLP: bigint;
    governanceZombie: bigint;
}"#;

#[wasm_bindgen(typescript_custom_section)]
const POOL_CONFIG: &'static str = r#"
interface PoolConfig {
    baseToken: string,
    initialVaultSharePrice: bigint,
    minimumShareReserves: bigint,
    minimumTransactionAmount: bigint,
    positionDuration: bigint,
    checkpointDuration: bigint,
    checkpointRewarder: String,
    timeStretch: bigint,
    governance: string,
    feeCollector: string,
    sweepCollector: string,
    fees: Fees,
    linkerFactory: string,
    linkerCodeHash: string,
    vaultSharesToken: string,
}"#;

#[wasm_bindgen(typescript_custom_section)]
const POOL_INFO: &'static str = r#"
interface PoolInfo {
    shareReserves: bigint,
    shareAdjustment: bigint,
    bondReserves: bigint,
    lpTotalSupply: bigint,
    vaultSharePrice: bigint,
    longsOutstanding: bigint,
    longAverageMaturityTime: bigint,
    shortsOutstanding: bigint,
    shortAverageMaturityTime: bigint,
    withdrawalSharesReadyToWithdraw: bigint,
    withdrawalSharesProceeds: bigint,
    lpSharePrice: bigint,
    longExposure: bigint,
    zombieBaseProceeds: bigint,
    zombieShareReserves: bigint,
}
"#;

// Reference the generated typescript types for argument types
#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(typescript_type = "Fees")]
    pub type JsFees;

    #[wasm_bindgen(typescript_type = "PoolConfig")]
    pub type JsPoolConfig;

    #[wasm_bindgen(typescript_type = "PoolInfo")]
    pub type JsPoolInfo;
}

pub trait GetJsField {
    fn get(&self, field: &str) -> Result<JsValue, HyperdriveWasmError>;
}

impl GetJsField for JsValue {
    fn get(&self, field: &str) -> Result<JsValue, HyperdriveWasmError> {
        Reflect::get(self, &field.into()).to_result()
    }
}

impl TryFrom<JsPoolInfo> for PoolInfo {
    type Error = HyperdriveWasmError;

    fn try_from(pool_info: JsPoolInfo) -> Result<Self, HyperdriveWasmError> {
        Ok(PoolInfo {
            share_reserves: pool_info.get("shareReserves")?.to_u256()?,
            share_adjustment: pool_info.get("shareAdjustment")?.to_i256()?,
            bond_reserves: pool_info.get("bondReserves")?.to_u256()?,
            lp_total_supply: pool_info.get("lpTotalSupply")?.to_u256()?,
            vault_share_price: pool_info.get("vaultSharePrice")?.to_u256()?,
            longs_outstanding: pool_info.get("longsOutstanding")?.to_u256()?,
            long_average_maturity_time: pool_info.get("longAverageMaturityTime")?.to_u256()?,
            shorts_outstanding: pool_info.get("shortsOutstanding")?.to_u256()?,
            short_average_maturity_time: pool_info.get("shortAverageMaturityTime")?.to_u256()?,
            withdrawal_shares_ready_to_withdraw: pool_info
                .get("withdrawalSharesReadyToWithdraw")?
                .to_u256()?,
            withdrawal_shares_proceeds: pool_info.get("withdrawalSharesProceeds")?.to_u256()?,
            lp_share_price: pool_info.get("lpSharePrice")?.to_u256()?,
            long_exposure: pool_info.get("longExposure")?.to_u256()?,
            zombie_base_proceeds: pool_info.get("zombieBaseProceeds")?.to_u256()?,
            zombie_share_reserves: pool_info.get("zombieShareReserves")?.to_u256()?,
        })
    }
}

impl TryFrom<JsPoolConfig> for PoolConfig {
    type Error = HyperdriveWasmError;

    fn try_from(pool_config: JsPoolConfig) -> Result<Self, HyperdriveWasmError> {
        let fees = pool_config.get("fees")?;
        Ok(PoolConfig {
            base_token: pool_config.get("baseToken")?.to_address()?,
            sweep_collector: pool_config.get("sweepCollector")?.to_address()?,
            governance: pool_config.get("governance")?.to_address()?,
            fee_collector: pool_config.get("feeCollector")?.to_address()?,
            fees: Fees {
                curve: fees.get("curve")?.to_u256()?,
                flat: fees.get("flat")?.to_u256()?,
                governance_lp: fees.get("governanceLP")?.to_u256()?,
                governance_zombie: fees.get("governanceZombie")?.to_u256()?,
            },
            initial_vault_share_price: pool_config.get("initialVaultSharePrice")?.to_u256()?,
            minimum_share_reserves: pool_config.get("minimumShareReserves")?.to_u256()?,
            minimum_transaction_amount: pool_config.get("minimumTransactionAmount")?.to_u256()?,
            time_stretch: pool_config.get("timeStretch")?.to_u256()?,
            position_duration: pool_config.get("positionDuration")?.to_u256()?,
            checkpoint_duration: pool_config.get("checkpointDuration")?.to_u256()?,
            checkpoint_rewarder: pool_config.get("checkpointRewarder")?.to_address()?,
            linker_factory: pool_config.get("linkerFactory")?.to_address()?,
            linker_code_hash: hex::decode(
                &pool_config.get("linkerCodeHash")?.as_string().to_result()?,
            )
            .to_result()?
            .try_into()
            .to_result()?,
            vault_shares_token: pool_config.get("vaultSharesToken")?.to_address()?,
            circuit_breaker_delta: pool_config.get("circuitBreakerDelta")?.to_u256()?,
        })
    }
}
