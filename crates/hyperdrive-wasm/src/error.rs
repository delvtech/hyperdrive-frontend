use std::{fmt::Debug, panic::Location};
use thiserror::Error;
use wasm_bindgen::JsValue;

/// A custom error type for the HyperdriveWasm library that can be converted to
/// a JsValue for passing to JavaScript.
#[derive(Error, Debug)]
pub enum HyperdriveWasmError {
    #[error("TypeError: {message:?}\n    Location: {location:?}")]
    TypeError { message: String, location: String },
    #[error("Error: {message:?}\n    Location: {location:?}")]
    Generic { message: String, location: String },
}

// Macros //

#[macro_export]
macro_rules! error_at {
    ($location:expr, $($arg:tt)*) => {
        $crate::error::HyperdriveWasmError::Generic {
            message: format!($($arg)*),
            location: $location.to_string(),
        }
    };
}

#[macro_export]
macro_rules! error {
    ($($arg:tt)*) => {
        $crate::error_at!(::std::panic::Location::caller(), $($arg)*)
    };
}

#[macro_export]
macro_rules! type_error_at {
    ($location:expr, $($arg:tt)*) => {
        $crate::error::HyperdriveWasmError::TypeError {
            message: format!($($arg)*),
            location: $location.to_string()
        }
    };
}

#[macro_export]
macro_rules! type_error {
    ($($arg:tt)*) => {
        $crate::type_error_at!(::std::panic::Location::caller(), $($arg)*)
    };
}

// Conversions //

// Convert a HyperdriveWasmError to a JsValue via `.into()` or `::from()`
impl From<HyperdriveWasmError> for JsValue {
    fn from(error: HyperdriveWasmError) -> JsValue {
        error.to_string().into()
    }
}

impl From<String> for HyperdriveWasmError {
    #[track_caller]
    fn from(value: String) -> Self {
        let location = Location::caller();
        value.to_error_at(location)
    }
}

impl From<&str> for HyperdriveWasmError {
    #[track_caller]
    fn from(value: &str) -> Self {
        let location = Location::caller();
        value.to_error_at(location)
    }
}

impl From<JsValue> for HyperdriveWasmError {
    #[track_caller]
    fn from(value: JsValue) -> Self {
        let location = Location::caller();
        value.as_string().to_error_at(location)
    }
}

/// Convert a value to a `HyperdriveWasmError` via `.to_error()`
pub trait ToHyperdriveWasmError {
    /// Convert a value to a `HyperdriveWasmError`, capturing the current location
    #[track_caller]
    fn to_error(&self) -> HyperdriveWasmError {
        self.to_error_at(Location::caller())
    }

    fn to_error_at(&self, location: &Location) -> HyperdriveWasmError;
}

// If a value can `.fmt()` as Debug, it can `.to_error()`
impl<T> ToHyperdriveWasmError for T
where
    T: Debug,
{
    fn to_error_at(&self, location: &Location) -> HyperdriveWasmError {
        HyperdriveWasmError::Generic {
            message: format!("{:?}", self),
            location: location.to_string(),
        }
    }
}

/// Convert a value to `Result<T, HyperdriveWasmError>` via `.to_result()`
pub trait ToHyperdriveWasmResult<T> {
    /// Convert a value to a `Result<T, HyperdriveWasmError>`, capturing the current location
    #[track_caller]
    fn to_result(self) -> Result<T, HyperdriveWasmError>
    where
        Self: Sized,
    {
        self.to_result_at(Location::caller())
    }

    /// Convert a value to a `Result<T, HyperdriveWasmError>` with a provided location
    fn to_result_at(self, location: &Location) -> Result<T, HyperdriveWasmError>;
}

// If the error type of a Result can `.to_error()`, the Result can `.to_result()`
impl<T, E> ToHyperdriveWasmResult<T> for Result<T, E>
where
    E: ToHyperdriveWasmError,
{
    fn to_result_at(self, location: &Location) -> Result<T, HyperdriveWasmError> {
        self.map_err(|e| e.to_error_at(location))
    }
}

impl<T> ToHyperdriveWasmResult<T> for Option<T>
where
    T: ToHyperdriveWasmError,
{
    fn to_result_at(self, location: &Location) -> Result<T, HyperdriveWasmError> {
        self.ok_or_else(|| error_at!(location, "Expected a value, found None"))
    }
}

#[cfg(test)]
mod tests {
    use std::panic::Location;

    #[test]
    fn test_type_error() {
        let error = type_error!("Bad value: {}", "Foo");
        assert!(error
            .to_string()
            .starts_with(&format!("TypeError: Bad value: Foo\n    Location: ")));
    }

    #[test]
    fn test_type_error_at() {
        let location = Location::caller().to_string();
        let error = type_error_at!(location, "Bad value: {}", "Foo");
        assert!(error.to_string().starts_with(
            format!("TypeError: Bad value: Foo\n    Location: {}", location).as_str()
        ));
    }

    #[test]
    fn test_generic_error() {
        let error = error!("Bad value: {}", "Foo");
        assert!(error
            .to_string()
            .starts_with("Error: Bad value: Foo\n    Location: "));
    }

    #[test]
    fn test_generic_error_at() {
        let location = Location::caller().to_string();
        let error = error_at!(location, "Bad value: {}", "Foo");
        assert!(error
            .to_string()
            .starts_with(format!("Error: Bad value: Foo\n    Location: {}", location).as_str()));
    }
}
