use ethers::types::{I256, U256};
use fixed_point::FixedPoint;

use crate::{conversion_error, error::HyperdriveWasmError};

pub fn set_panic_hook() {
    // When the `console_error_panic_hook` feature is enabled, we can call the
    // `set_panic_hook` function at least once during initialization, and then
    // we will get better error messages if our code ever panics.
    //
    // For more details see
    // https://github.com/rustwasm/console_error_panic_hook#readme
    #[cfg(feature = "console_error_panic_hook")]
    console_error_panic_hook::set_once();
}

/// Conversions ///

pub trait ToU256 {
    /// Convert a string to a U256, returning an error if the string is invalid.
    fn to_u256(&self) -> Result<U256, HyperdriveWasmError>;
}

impl ToU256 for str {
    fn to_u256(&self) -> Result<U256, HyperdriveWasmError> {
        U256::from_dec_str(self).map_err(|e| conversion_error!("Invalid uint256: {self}\n    {e}"))
    }
}

impl ToU256 for FixedPoint {
    fn to_u256(&self) -> Result<U256, HyperdriveWasmError> {
        Ok(U256::from(self.to_owned()))
    }
}

pub trait ToI256 {
    fn to_i256(&self) -> Result<I256, HyperdriveWasmError>;
}

impl ToI256 for str {
    fn to_i256(&self) -> Result<I256, HyperdriveWasmError> {
        I256::from_dec_str(self).map_err(|e| conversion_error!("Invalid int256: {self}\n    {e}"))
    }
}

impl ToI256 for FixedPoint {
    fn to_i256(&self) -> Result<I256, HyperdriveWasmError> {
        U256::from(self.to_owned())
            .try_into()
            .map_err(|e| conversion_error!("Invalid int256: {self}\n    {e}"))
    }
}

pub trait ToFixedPoint {
    fn to_fixed_point(&self) -> Result<FixedPoint, HyperdriveWasmError>;
}

impl ToFixedPoint for str {
    fn to_fixed_point(&self) -> Result<FixedPoint, HyperdriveWasmError> {
        Ok(FixedPoint::from(self.to_u256()?))
    }
}
