use std::panic::Location;
use thiserror::Error;
use wasm_bindgen::JsValue;

/// A custom error type for the HyperdriveWasm library that can be converted to
/// a JsValue for passing to JavaScript.
#[derive(Error, Debug)]
pub enum HyperdriveWasmError {
    #[error("Conversion error: {0}\n    Location: {1}")]
    ConversionError(String, String),
    #[error("Error: {0}\n    Location: {1}")]
    Generic(String, String),
}

/// Conversions ///

impl From<HyperdriveWasmError> for JsValue {
    fn from(error: HyperdriveWasmError) -> JsValue {
        error.to_string().into()
    }
}

pub trait ToHyperdriveWasmError {
    /// Converts the given value to a `HyperdriveWasmError`
    fn to_error(self) -> HyperdriveWasmError;
}

// If it can `to_string`, it can `to_error``
impl<T> ToHyperdriveWasmError for T
where
    T: ToString,
{
    fn to_error(self) -> HyperdriveWasmError {
        HyperdriveWasmError::Generic(self.to_string(), format!("{}", Location::caller()))
    }
}

// If it can `into` a String, it can `into` a HyperdriveWasmError
impl<T> From<T> for HyperdriveWasmError
where
    T: Into<String>,
{
    fn from(t: T) -> Self {
        t.into().to_error()
    }
}

pub trait ToJsResult<T> {
    /// Converts a `Result` to one JavaScript can handle
    fn to_js_result(self) -> Result<T, JsValue>;
}

// If the result's error can `to_error`, the result can `to_js_result`
impl<T, E> ToJsResult<T> for Result<T, E>
where
    E: ToHyperdriveWasmError,
{
    fn to_js_result(self) -> Result<T, JsValue> {
        self.map_err(|e| e.to_error().into())
    }
}

/// Macros ///

#[macro_export]
macro_rules! error {
    ($($arg:tt)*) => {
      $crate::error::HyperdriveWasmError::Generic(format!($($arg)*), format!("{}", ::std::panic::Location::caller()))
    };
}

#[macro_export]
macro_rules! conversion_error {
  ($($arg:tt)*) => {
    $crate::error::HyperdriveWasmError::ConversionError(format!($($arg)*), format!("{}", ::std::panic::Location::caller()))
  };
}

#[cfg(test)]
mod tests {

    #[test]
    fn test_conversion_error() {
        let error = conversion_error!("Bad value: {}", "Foo");
        assert!(error
            .to_string()
            .starts_with("Conversion error: Bad value: Foo\n    Location: "));
    }

    #[test]
    fn test_generic_error() {
        let error = error!("Bad value: {}", "Foo");
        assert!(error
            .to_string()
            .starts_with("Error: Bad value: Foo\n    Location: "));
    }
}
