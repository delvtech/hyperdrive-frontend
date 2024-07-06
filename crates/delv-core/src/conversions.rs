use ethers::types::{Address, I256, U256};
use fixedpointmath::FixedPoint;
use js_sys::BigInt;
use std::{panic::Location, str::FromStr};
use wasm_bindgen::{JsCast, JsValue};

use crate::{
    error::{Error, ToResult},
    type_error_at,
};

// Address //

/// Convert a value to a `Result<Address, Error>` via
/// `.to_address()`
pub trait ToAddress {
    fn to_address(&self) -> Result<Address, Error>;
}

impl ToAddress for String {
    #[track_caller]
    fn to_address(&self) -> Result<Address, Error> {
        let location = Location::caller();
        Address::from_str(&self.to_string())
            .map_err(|e| type_error_at!(location, "Invalid address: {}\n    {e}", self.to_string()))
    }
}

impl ToAddress for &str {
    fn to_address(&self) -> Result<Address, Error> {
        let location = Location::caller();
        Address::from_str(self)
            .map_err(|e| type_error_at!(location, "Invalid address: {}\n    {e}", self))
    }
}

impl ToAddress for JsValue {
    #[track_caller]
    fn to_address(&self) -> Result<Address, Error> {
        let location = Location::caller();
        self.as_string().to_result_at(location)?.to_address()
    }
}

// U256 //

/// Convert a value to a `Result<U256, Error>` via `.to_u256()`
pub trait ToU256 {
    fn to_u256(&self) -> Result<U256, Error>;
}

impl ToU256 for String {
    #[track_caller]
    fn to_u256(&self) -> Result<U256, Error> {
        let location = Location::caller();
        U256::from_dec_str(self)
            .map_err(|error| type_error_at!(location, "Invalid uint256: {}\n    {error}", self))
    }
}

impl ToU256 for &str {
    #[track_caller]
    fn to_u256(&self) -> Result<U256, Error> {
        let location = Location::caller();
        U256::from_dec_str(self)
            .map_err(|error| type_error_at!(location, "Invalid uint256: {}\n    {error}", self))
    }
}

impl ToU256 for JsValue {
    fn to_u256(&self) -> Result<U256, Error> {
        self.to_bigint()?.to_u256()
    }
}

impl ToU256 for BigInt {
    #[track_caller]
    fn to_u256(&self) -> Result<U256, Error> {
        let location = Location::caller();
        let dec_str: String = self
            .to_string(10)
            .map_err(|_| type_error_at!(location, "Failed to parse BigInt: {:?}", self))?
            .into();
        U256::from_dec_str(&dec_str)
            .map_err(|error| type_error_at!(location, "Invalid uint256: {}\n    {error}", self))
    }
}

impl ToU256 for FixedPoint {
    #[track_caller]
    fn to_u256(&self) -> Result<U256, Error> {
        Ok(U256::from(*self))
    }
}

// I256 //

/// Convert a value to a `Result<I256, Error>` via `.to_i256()`
pub trait ToI256 {
    fn to_i256(&self) -> Result<I256, Error>;
}

impl ToI256 for String {
    #[track_caller]
    fn to_i256(&self) -> Result<I256, Error> {
        let location = Location::caller();
        I256::from_dec_str(self)
            .map_err(|error| type_error_at!(location, "Invalid int256: {}\n    {error}", self))
    }
}
impl ToI256 for &str {
    fn to_i256(&self) -> Result<I256, Error> {
        let location = Location::caller();
        I256::from_dec_str(self)
            .map_err(|error| type_error_at!(location, "Invalid int256: {}\n    {error}", self))
    }
}

impl ToI256 for JsValue {
    fn to_i256(&self) -> Result<I256, Error> {
        self.to_bigint()?.to_i256()
    }
}

impl ToI256 for BigInt {
    #[track_caller]
    fn to_i256(&self) -> Result<I256, Error> {
        let location = Location::caller();
        let dec_str: String = self
            .to_string(10)
            .map_err(|_| type_error_at!(location, "Failed to parse BigInt: {:?}", self))?
            .into();
        I256::from_dec_str(&dec_str)
            .map_err(|error| type_error_at!(location, "Invalid int256: {}\n    {error}", self))
    }
}

impl ToI256 for FixedPoint {
    #[track_caller]
    fn to_i256(&self) -> Result<I256, Error> {
        let location = Location::caller();
        I256::try_from(*self)
            .map_err(|error| type_error_at!(location, "Invalid int256: {}\n    {error}", self))
    }
}

// FixedPoint //

/// Convert a value to a `Result<FixedPoint, Error>` via
/// `.to_fixed()`
pub trait ToFixedPoint {
    /// Convert a value to a `Result<FixedPoint, Error>`
    fn to_fixed(&self) -> Result<FixedPoint, Error>;
}

// If a value can `.to_u256()`, it can `.to_fixed()`
impl<T> ToFixedPoint for T
where
    T: ToU256,
{
    #[track_caller]
    fn to_fixed(&self) -> Result<FixedPoint, Error> {
        Ok(FixedPoint::from(self.to_u256()?))
    }
}

impl ToFixedPoint for U256 {
    fn to_fixed(&self) -> Result<FixedPoint, Error> {
        Ok(FixedPoint::from(*self))
    }
}

impl<T> ToFixedPoint for Option<T>
where
    T: ToFixedPoint,
{
    /// Convert an optional value to a `Result<FixedPoint, Error>`, using the
    /// default value if `None`.
    #[track_caller]
    fn to_fixed(&self) -> Result<FixedPoint, Error> {
        match self {
            Some(value) => value.to_fixed(),
            None => Ok(FixedPoint::default()),
        }
    }
}

// BigInt //

/// Create a `BigInt` from an integer literal
#[macro_export]
macro_rules! try_bigint {
    ($value:expr) => {{
        let location = std::panic::Location::caller();
        let string = stringify!($value);
        BigInt::from_str(string).map_err(|_| type_error_at!(location, "Invalid BigInt: {}", string))
    }};
}

/// Create a `BigInt` from an integer literal
#[macro_export]
macro_rules! bigint {
    ($value:expr) => {
        try_bigint!($value).unwrap()
    };
}

/// Convert a value to a `Result<BigInt, Error>` via
/// `.to_bigint()`
pub trait ToBigInt {
    fn to_bigint(&self) -> Result<BigInt, Error>;
}

impl ToBigInt for String {
    #[track_caller]
    fn to_bigint(&self) -> Result<BigInt, Error> {
        try_bigint!(self)
    }
}

impl ToBigInt for &str {
    #[track_caller]
    fn to_bigint(&self) -> Result<BigInt, Error> {
        try_bigint!(self)
    }
}

impl ToBigInt for JsValue {
    #[track_caller]
    fn to_bigint(&self) -> Result<BigInt, Error> {
        Ok(BigInt::unchecked_from_js(self.to_owned()))
    }
}

impl ToBigInt for U256 {
    #[track_caller]
    fn to_bigint(&self) -> Result<BigInt, Error> {
        let location = std::panic::Location::caller();
        let string = self.to_string();
        BigInt::from_str(&string)
            .map_err(|_| type_error_at!(location, "Invalid BigInt: {}", string))
    }
}

impl ToBigInt for I256 {
    #[track_caller]
    fn to_bigint(&self) -> Result<BigInt, Error> {
        let location = std::panic::Location::caller();
        let string = self.to_string();
        BigInt::from_str(&string)
            .map_err(|_| type_error_at!(location, "Invalid BigInt: {}", string))
    }
}

impl ToBigInt for FixedPoint {
    #[track_caller]
    fn to_bigint(&self) -> Result<BigInt, Error> {
        let location = std::panic::Location::caller();
        let string = self.to_u256()?.to_string();
        BigInt::from_str(&string)
            .map_err(|_| type_error_at!(location, "Invalid BigInt: {}", string))
    }
}

#[cfg(test)]
mod tests {
    use std::ops::Neg;

    use fixedpointmath::{fixed, int256, uint256};

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
    fn test_to_fixed() {
        assert_eq!("0".to_fixed().unwrap(), fixed!(0));
        assert_eq!("1".to_fixed().unwrap(), fixed!(1));
        assert_eq!(
            "1000000000000000000".to_fixed().unwrap(),
            fixed!(1_000_000_000_000_000_000)
        );
    }
}
