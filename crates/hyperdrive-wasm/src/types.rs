use hyperdrive_math::State;
use hyperdrive_wrappers::wrappers::ihyperdrive;
use js_sys::BigInt;
use ts_macro::ts;
use wasm_bindgen::prelude::*;

use crate::{
    error::{HyperdriveWasmError, ToHyperdriveWasmResult},
    utils::{ToAddress, ToI256, ToU256},
};

// Create wasm_bindgen compatible versions of the ihyperdrive types

#[ts]
struct Fees {
    curve: BigInt,
    flat: BigInt,
    #[ts(name = "governanceLP")]
    governance_lp: BigInt,
    governance_zombie: BigInt,
}

#[ts]
struct PoolConfig {
    initial_vault_share_price: BigInt,
    minimum_share_reserves: BigInt,
    minimum_transaction_amount: BigInt,
    circuit_breaker_delta: BigInt,
    position_duration: BigInt,
    checkpoint_duration: BigInt,
    time_stretch: BigInt,
    fees: IFees,
    #[ts(type = "`0x${string}`")]
    checkpoint_rewarder: String,
    #[ts(type = "`0x${string}`")]
    fee_collector: String,
    #[ts(type = "`0x${string}`")]
    sweep_collector: String,
    #[ts(type = "`0x${string}`")]
    governance: String,
    #[ts(type = "`0x${string}`")]
    base_token: String,
    #[ts(type = "`0x${string}`")]
    vault_shares_token: String,
    #[ts(type = "`0x${string}`")]
    linker_factory: String,
    #[ts(type = "`0x${string}`")]
    linker_code_hash: String,
}

#[ts]
struct PoolInfo {
    lp_total_supply: BigInt,
    lp_share_price: BigInt,
    bond_reserves: BigInt,
    share_reserves: BigInt,
    share_adjustment: BigInt,
    vault_share_price: BigInt,
    long_exposure: BigInt,
    longs_outstanding: BigInt,
    long_average_maturity_time: BigInt,
    shorts_outstanding: BigInt,
    short_average_maturity_time: BigInt,
    withdrawal_shares_ready_to_withdraw: BigInt,
    withdrawal_shares_proceeds: BigInt,
    zombie_base_proceeds: BigInt,
    zombie_share_reserves: BigInt,
}

/// Base parameters that can be used to construct a State.
#[ts]
struct StateParams {
    /// The current state of the pool.
    pub pool_info: IPoolInfo,
    /// The pool's configuration.
    pub pool_config: IPoolConfig,
}

impl IStateParams {
    /// Converts the parameters into a `ihyperdrive::State`.
    pub fn to_state(&self) -> Result<State, HyperdriveWasmError> {
        self.parse().try_into()
    }
}

impl TryInto<State> for StateParams {
    type Error = HyperdriveWasmError;

    fn try_into(self) -> Result<State, HyperdriveWasmError> {
        Ok(State {
            info: self.pool_info.parse().try_into()?,
            config: self.pool_config.parse().try_into()?,
        })
    }
}

impl TryInto<ihyperdrive::PoolInfo> for PoolInfo {
    type Error = HyperdriveWasmError;

    fn try_into(self) -> Result<ihyperdrive::PoolInfo, HyperdriveWasmError> {
        Ok(ihyperdrive::PoolInfo {
            share_reserves: self.share_reserves.to_u256()?,
            share_adjustment: self.share_adjustment.to_i256()?,
            bond_reserves: self.bond_reserves.to_u256()?,
            lp_total_supply: self.lp_total_supply.to_u256()?,
            vault_share_price: self.vault_share_price.to_u256()?,
            longs_outstanding: self.longs_outstanding.to_u256()?,
            long_average_maturity_time: self.long_average_maturity_time.to_u256()?,
            shorts_outstanding: self.shorts_outstanding.to_u256()?,
            short_average_maturity_time: self.short_average_maturity_time.to_u256()?,
            withdrawal_shares_ready_to_withdraw: self
                .withdrawal_shares_ready_to_withdraw
                .to_u256()?,
            withdrawal_shares_proceeds: self.withdrawal_shares_proceeds.to_u256()?,
            lp_share_price: self.lp_share_price.to_u256()?,
            long_exposure: self.long_exposure.to_u256()?,
            zombie_base_proceeds: self.zombie_base_proceeds.to_u256()?,
            zombie_share_reserves: self.zombie_share_reserves.to_u256()?,
        })
    }
}

impl TryInto<ihyperdrive::PoolConfig> for PoolConfig {
    type Error = HyperdriveWasmError;

    fn try_into(self) -> Result<ihyperdrive::PoolConfig, HyperdriveWasmError> {
        Ok(ihyperdrive::PoolConfig {
            base_token: self.base_token.to_address()?,
            sweep_collector: self.sweep_collector.to_address()?,
            governance: self.governance.to_address()?,
            fee_collector: self.fee_collector.to_address()?,
            fees: ihyperdrive::Fees {
                curve: self.fees.curve().to_u256()?,
                flat: self.fees.flat().to_u256()?,
                governance_lp: self.fees.governance_lp().to_u256()?,
                governance_zombie: self.fees.governance_zombie().to_u256()?,
            },
            initial_vault_share_price: self.initial_vault_share_price.to_u256()?,
            minimum_share_reserves: self.minimum_share_reserves.to_u256()?,
            minimum_transaction_amount: self.minimum_transaction_amount.to_u256()?,
            time_stretch: self.time_stretch.to_u256()?,
            position_duration: self.position_duration.to_u256()?,
            checkpoint_duration: self.checkpoint_duration.to_u256()?,
            checkpoint_rewarder: self.checkpoint_rewarder.to_address()?,
            linker_factory: self.linker_factory.to_address()?,
            linker_code_hash: hex::decode(&self.linker_code_hash)
                .to_result()?
                .try_into()
                .to_result()?,
            vault_shares_token: self.vault_shares_token.to_address()?,
            circuit_breaker_delta: self.circuit_breaker_delta.to_u256()?,
        })
    }
}

#[ts(extends = IStateParams)]
struct ClosePositionParams {
    /// The amount of bonds to close.
    bond_amount: BigInt,
    /// The maturity timestamp of the long (in seconds).
    maturity_time: BigInt,
    /// The current timestamp (in seconds).
    current_time: BigInt,
}
