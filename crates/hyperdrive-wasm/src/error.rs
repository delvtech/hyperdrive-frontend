use std::panic::Location;
use thiserror::Error;
use wasm_bindgen::JsValue;

/// A custom error type for the HyperdriveWasm library that can be converted to
/// a JsValue for passing to JavaScript.
#[derive(Error, Debug)]
pub enum HyperdriveWasmError {
    #[error("TypeError: {0}\n    Location: {1}")]
    TypeError(String, String),
    #[error("Error: {0}\n    Location: {1}")]
    Generic(String, String),
}

// Conversions //

// Convert a HyperdriveWasmError to a JsValue via `.into()` or `::from()`
impl From<HyperdriveWasmError> for JsValue {
    fn from(error: HyperdriveWasmError) -> JsValue {
        error.to_string().into()
    }
}

/// Convert a value to a `HyperdriveWasmError` via `.to_error()`
pub trait ToHyperdriveWasmError {
    /// Convert a value to a `HyperdriveWasmError`, capturing the current location
    #[track_caller]
    fn to_error(&self) -> HyperdriveWasmError {
        self.to_error_at(&Location::caller().to_string())
    }

    fn to_error_at(&self, location: &str) -> HyperdriveWasmError;
}

// If a value can `.to_string()`, it can `.to_error()`
impl<T> ToHyperdriveWasmError for T
where
    T: ToString,
{
    fn to_error_at(&self, location: &str) -> HyperdriveWasmError {
        HyperdriveWasmError::Generic(self.to_string(), location.to_string())
    }
}

// If a value can `.into()` a String, it can `.into()` a HyperdriveWasmError
impl<T> From<T> for HyperdriveWasmError
where
    T: Into<String>,
{
    #[track_caller]
    fn from(t: T) -> Self {
        t.into().to_error_at(&Location::caller().to_string())
    }
}

/// Convert a value to a `Result<T, JsValue>` via `.to_js_result()`
pub trait ToJsResult<T> {
    /// Convert a value to a `Result<T, JsValue>`, capturing the current location
    #[track_caller]
    fn to_js_result(self) -> Result<T, JsValue>
    where
        Self: Sized,
    {
        self.to_js_result_at(&Location::caller().to_string())
    }

    fn to_js_result_at(self, location: &str) -> Result<T, JsValue>;
}

// If a Result's error type can `.to_error()`, the Result can be
// converted to a `Result<T, JsValue>`
impl<T, E> ToJsResult<T> for Result<T, E>
where
    E: ToHyperdriveWasmError,
{
    fn to_js_result_at(self, location: &str) -> Result<T, JsValue> {
        self.map_err(|e| e.to_error_at(location).into())
    }
}

// Macros //

#[macro_export]
macro_rules! error {
    ($($arg:tt)*) => {
      $crate::error::HyperdriveWasmError::Generic(format!($($arg)*), format!("{}", ::std::panic::Location::caller()))
    };
}

#[macro_export]
macro_rules! type_error {
  ($($arg:tt)*) => {
    $crate::error::HyperdriveWasmError::TypeError(format!($($arg)*), format!("{}", ::std::panic::Location::caller()))
  };
}

#[cfg(test)]
mod tests {

    #[test]
    fn test_conversion_error() {
        let error = type_error!("Bad value: {}", "Foo");
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
