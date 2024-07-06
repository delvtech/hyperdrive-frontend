use std::{fmt::Debug, panic::Location};
use wasm_bindgen::JsValue;

/// A simple error that can be converted to a JsValue for passing to JavaScript.
#[derive(thiserror::Error, Debug)]
pub enum Error {
    #[error("TypeError: {message:?}\n    Location: {location:?}")]
    TypeError { message: String, location: String },
    #[error("Error: {message:?}\n    Location: {location:?}")]
    Generic { message: String, location: String },
}

// Macros //

#[macro_export]
macro_rules! error_at {
    ($location:expr, $($arg:tt)*) => {
        $crate::error::Error::Generic {
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
        $crate::error::Error::TypeError {
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

// Convert a Error to a JsValue via `.into()` or `::from()`
impl From<Error> for JsValue {
    fn from(error: Error) -> JsValue {
        error.to_string().into()
    }
}

impl From<String> for Error {
    #[track_caller]
    fn from(value: String) -> Self {
        let location = Location::caller();
        value.to_error_at(location)
    }
}

impl From<&str> for Error {
    #[track_caller]
    fn from(value: &str) -> Self {
        let location = Location::caller();
        value.to_error_at(location)
    }
}

impl From<JsValue> for Error {
    #[track_caller]
    fn from(value: JsValue) -> Self {
        let location = Location::caller();
        value.as_string().to_error_at(location)
    }
}

/// Convert a value to a `Error` via `.to_error()`
pub trait ToError {
    /// Convert a value to a `Error`, capturing the current
    /// location
    #[track_caller]
    fn to_error(&self) -> Error {
        self.to_error_at(Location::caller())
    }

    fn to_error_at(&self, location: &Location) -> Error;
}

// If a value can `.fmt()` as Debug, it can `.to_error()`
impl<T> ToError for T
where
    T: Debug,
{
    fn to_error_at(&self, location: &Location) -> Error {
        Error::Generic {
            message: format!("{:?}", self),
            location: location.to_string(),
        }
    }
}

/// Convert a value to `Result<T, Error>` via `.to_result()`
pub trait ToResult<T> {
    /// Convert a value to a `Result<T, Error>`, capturing the
    /// current location
    #[track_caller]
    fn to_result(self) -> Result<T, Error>
    where
        Self: Sized,
    {
        self.to_result_at(Location::caller())
    }

    /// Convert a value to a `Result<T, Error>` with a provided
    /// location
    fn to_result_at(self, location: &Location) -> Result<T, Error>;
}

// If the error type of a Result can `.to_error()`, the Result can
// `.to_result()`
impl<T, E> ToResult<T> for Result<T, E>
where
    E: ToError,
{
    fn to_result_at(self, location: &Location) -> Result<T, Error> {
        self.map_err(|e| e.to_error_at(location))
    }
}

impl<T> ToResult<T> for Option<T>
where
    T: ToError,
{
    fn to_result_at(self, location: &Location) -> Result<T, Error> {
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
