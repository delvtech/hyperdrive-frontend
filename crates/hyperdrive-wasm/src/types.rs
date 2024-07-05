use delv_core::{
    conversions::{ToAddress, ToI256, ToU256},
    error::{Error, ToResult},
};
use hyperdrive_math::State;
use hyperdrive_wrappers::wrappers::ihyperdrive;
use js_sys::BigInt;
use ts_macro::ts;
use wasm_bindgen::prelude::*;

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
    pub fn to_state(&self) -> Result<State, Error> {
        self.parse().try_into()
    }
}

impl TryFrom<StateParams> for State {
    type Error = Error;

    fn try_from(params: StateParams) -> Result<Self, Self::Error> {
        Ok(State {
            info: params.pool_info.parse().try_into()?,
            config: params.pool_config.parse().try_into()?,
        })
    }
}

impl TryFrom<PoolInfo> for ihyperdrive::PoolInfo {
    type Error = Error;

    fn try_from(params: PoolInfo) -> Result<Self, Self::Error> {
        Ok(ihyperdrive::PoolInfo {
            share_reserves: params.share_reserves.to_u256()?,
            share_adjustment: params.share_adjustment.to_i256()?,
            bond_reserves: params.bond_reserves.to_u256()?,
            lp_total_supply: params.lp_total_supply.to_u256()?,
            vault_share_price: params.vault_share_price.to_u256()?,
            longs_outstanding: params.longs_outstanding.to_u256()?,
            long_average_maturity_time: params.long_average_maturity_time.to_u256()?,
            shorts_outstanding: params.shorts_outstanding.to_u256()?,
            short_average_maturity_time: params.short_average_maturity_time.to_u256()?,
            withdrawal_shares_ready_to_withdraw: params
                .withdrawal_shares_ready_to_withdraw
                .to_u256()?,
            withdrawal_shares_proceeds: params.withdrawal_shares_proceeds.to_u256()?,
            lp_share_price: params.lp_share_price.to_u256()?,
            long_exposure: params.long_exposure.to_u256()?,
            zombie_base_proceeds: params.zombie_base_proceeds.to_u256()?,
            zombie_share_reserves: params.zombie_share_reserves.to_u256()?,
        })
    }
}

impl TryFrom<PoolConfig> for ihyperdrive::PoolConfig {
    type Error = Error;

    fn try_from(params: PoolConfig) -> Result<Self, Self::Error> {
        Ok(ihyperdrive::PoolConfig {
            base_token: params.base_token.to_address()?,
            sweep_collector: params.sweep_collector.to_address()?,
            governance: params.governance.to_address()?,
            fee_collector: params.fee_collector.to_address()?,
            fees: ihyperdrive::Fees {
                curve: params.fees.curve().to_u256()?,
                flat: params.fees.flat().to_u256()?,
                governance_lp: params.fees.governance_lp().to_u256()?,
                governance_zombie: params.fees.governance_zombie().to_u256()?,
            },
            initial_vault_share_price: params.initial_vault_share_price.to_u256()?,
            minimum_share_reserves: params.minimum_share_reserves.to_u256()?,
            minimum_transaction_amount: params.minimum_transaction_amount.to_u256()?,
            time_stretch: params.time_stretch.to_u256()?,
            position_duration: params.position_duration.to_u256()?,
            checkpoint_duration: params.checkpoint_duration.to_u256()?,
            checkpoint_rewarder: params.checkpoint_rewarder.to_address()?,
            linker_factory: params.linker_factory.to_address()?,
            linker_code_hash: const_hex::decode(&params.linker_code_hash)
                .to_result()?
                .try_into()
                .to_result()?,
            vault_shares_token: params.vault_shares_token.to_address()?,
            circuit_breaker_delta: params.circuit_breaker_delta.to_u256()?,
        })
    }
}

#[ts(extends = IStateParams)]
struct ClosePositionParams {
    /// The amount of bonds to close.
    bond_amount: BigInt,
    /// The maturity timestamp of the position (in seconds).
    maturity_time: BigInt,
    /// The current timestamp (in seconds).
    current_time: BigInt,
}
