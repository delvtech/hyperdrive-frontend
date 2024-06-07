use ethers::types::{Address, I256, U256};
use fixed_point::FixedPoint;
use js_sys::BigInt;
use std::{panic::Location, str::FromStr};

use crate::{error::HyperdriveWasmError, type_error_at};

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

// Conversions //

/// Convert a value to a `Result<U256, HyperdriveWasmError>` via `.to_u256()`
pub trait ToU256 {
    fn to_u256(&self) -> Result<U256, HyperdriveWasmError>;
}

impl ToU256 for String {
    #[track_caller]
    fn to_u256(&self) -> Result<U256, HyperdriveWasmError> {
        let location = Location::caller();
        U256::from_dec_str(self)
            .map_err(|error| type_error_at!(location, "Invalid uint256: {}\n    {error}", self))
    }
}

impl ToU256 for &str {
    #[track_caller]
    fn to_u256(&self) -> Result<U256, HyperdriveWasmError> {
        let location = Location::caller();
        U256::from_dec_str(self)
            .map_err(|error| type_error_at!(location, "Invalid uint256: {}\n    {error}", self))
    }
}

impl ToU256 for FixedPoint {
    #[track_caller]
    fn to_u256(&self) -> Result<U256, HyperdriveWasmError> {
        Ok(self.to_owned().into())
    }
}

/// Convert a value to a `Result<I256, HyperdriveWasmError>` via `.to_i256()`
pub trait ToI256 {
    fn to_i256(&self) -> Result<I256, HyperdriveWasmError>;
}

impl ToI256 for String {
    #[track_caller]
    fn to_i256(&self) -> Result<I256, HyperdriveWasmError> {
        let location = Location::caller();
        I256::from_dec_str(self)
            .map_err(|error| type_error_at!(location, "Invalid int256: {}\n    {error}", self))
    }
}
impl ToI256 for &str {
    fn to_i256(&self) -> Result<I256, HyperdriveWasmError> {
        let location = Location::caller();
        I256::from_dec_str(self)
            .map_err(|error| type_error_at!(location, "Invalid int256: {}\n    {error}", self))
    }
}

impl ToI256 for FixedPoint {
    #[track_caller]
    fn to_i256(&self) -> Result<I256, HyperdriveWasmError> {
        let location = Location::caller();
        I256::try_from(self.to_owned())
            .map_err(|error| type_error_at!(location, "Invalid int256: {}\n    {error}", self))
    }
}

/// Convert a value to a `Result<FixedPoint, HyperdriveWasmError>` via `.to_fixed_point()`
pub trait ToFixedPoint {
    fn to_fixed_point(&self) -> Result<FixedPoint, HyperdriveWasmError>;
}

impl ToFixedPoint for U256 {
    #[track_caller]
    fn to_fixed_point(&self) -> Result<FixedPoint, HyperdriveWasmError> {
        Ok(FixedPoint::from(self.to_owned()))
    }
}

// If a value can `.to_u256()`, it can `.to_fixed_point()`
impl<T> ToFixedPoint for T
where
    T: ToU256,
{
    #[track_caller]
    fn to_fixed_point(&self) -> Result<FixedPoint, HyperdriveWasmError> {
        Ok(FixedPoint::from(self.to_u256()?))
    }
}

/// Convert a value to a `Result<Address, HyperdriveWasmError>` via `.to_address()`
pub trait ToAddress {
    fn to_address(&self) -> Result<Address, HyperdriveWasmError>;
}

impl ToAddress for String {
    #[track_caller]
    fn to_address(&self) -> Result<Address, HyperdriveWasmError> {
        let location = Location::caller();
        Address::from_str(&self.to_string())
            .map_err(|e| type_error_at!(location, "Invalid address: {}\n    {e}", self.to_string()))
    }
}

impl ToAddress for &str {
    fn to_address(&self) -> Result<Address, HyperdriveWasmError> {
        let location = Location::caller();
        Address::from_str(self)
            .map_err(|e| type_error_at!(location, "Invalid address: {}\n    {e}", self))
    }
}

/// Convert a value to a `Result<BigInt, HyperdriveWasmError>` via `.to_big_int()`
pub trait ToBigInt {
    fn to_big_int(&self) -> Result<BigInt, HyperdriveWasmError>;
}

impl ToBigInt for String {
    #[track_caller]
    fn to_big_int(&self) -> Result<BigInt, HyperdriveWasmError> {
        let location = Location::caller();
        BigInt::from_str(&self).map_err(|_| type_error_at!(location, "Invalid BigInt: {}", self))
    }
}

impl ToBigInt for &str {
    #[track_caller]
    fn to_big_int(&self) -> Result<BigInt, HyperdriveWasmError> {
        let location = Location::caller();
        BigInt::from_str(&self).map_err(|_| type_error_at!(location, "Invalid BigInt: {}", self))
    }
}

impl ToBigInt for U256 {
    #[track_caller]
    fn to_big_int(&self) -> Result<BigInt, HyperdriveWasmError> {
        let location = Location::caller();
        BigInt::from_str(&self.to_string())
            .map_err(|_| type_error_at!(location, "Invalid BigInt: {}", self))
    }
}

impl ToBigInt for I256 {
    #[track_caller]
    fn to_big_int(&self) -> Result<BigInt, HyperdriveWasmError> {
        let location = Location::caller();
        BigInt::from_str(&self.to_string())
            .map_err(|_| type_error_at!(location, "Invalid BigInt: {}", self))
    }
}

impl ToBigInt for FixedPoint {
    #[track_caller]
    fn to_big_int(&self) -> Result<BigInt, HyperdriveWasmError> {
        let location = Location::caller();
        BigInt::from_str(&self.to_u256()?.to_string())
            .map_err(|_| type_error_at!(location, "Invalid BigInt: {}", self))
    }
}

#[cfg(test)]
mod tests {
    use std::ops::Neg;

    use fixed_point::{fixed, int256, uint256};

    use super::*;

    #[test]
    fn test_to_u256() {
        assert_eq!("0".to_u256().unwrap(), uint256!(0));
        assert_eq!("1".to_u256().unwrap(), uint256!(1));
        assert_eq!(
            "1000000000000000000".to_u256().unwrap(),
            uint256!(1_000_000_000_000_000_000)
        );
    }

    #[test]
    fn test_to_i256() {
        assert_eq!("0".to_i256().unwrap(), int256!(0));
        assert_eq!("1".to_i256().unwrap(), int256!(1));
        assert_eq!("-1".to_i256().unwrap(), int256!(1).neg());
        assert_eq!(
            "1000000000000000000".to_i256().unwrap(),
            int256!(1_000_000_000_000_000_000)
        );
        assert_eq!(
            "-1000000000000000000".to_i256().unwrap(),
            int256!(1_000_000_000_000_000_000).neg()
        );
    }

    #[test]
    fn test_to_fixed_point() {
        assert_eq!("0".to_fixed_point().unwrap(), fixed!(0));
        assert_eq!("1".to_fixed_point().unwrap(), fixed!(1));
        assert_eq!(
            "1000000000000000000".to_fixed_point().unwrap(),
            fixed!(1_000_000_000_000_000_000)
        );
    }
}
