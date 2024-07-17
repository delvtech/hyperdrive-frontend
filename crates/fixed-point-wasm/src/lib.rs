#![allow(non_snake_case)]

use core::fmt;
use std::str::FromStr;

use delv_core::{
    conversions::{ToBigInt, ToFixedPoint, ToI256},
    error::{Error, ToResult},
};
use fixedpointmath::FixedPoint;
use js_sys::{parse_float, BigInt, JsString};
use rand::{thread_rng, Rng};
use wasm_bindgen::prelude::*;

// Initialization function
#[wasm_bindgen(start)]
pub fn initialize() {
    // When the `console_error_panic_hook` feature is enabled, we can call the
    // `set_panic_hook` function at least once during initialization, and then
    // we will get better error messages if our code ever panics.
    //
    // For more details see
    // https://github.com/rustwasm/console_error_panic_hook#readme
    #[cfg(feature = "console_error_panic_hook")]
    console_error_panic_hook::set_once();
}

#[wasm_bindgen(skip_jsdoc)]
pub fn getVersion() -> String {
    env!("CARGO_PKG_VERSION").to_string()
}

/// An 18-decimal fixed-point number.
#[wasm_bindgen]
pub struct Fixed(FixedPoint);

impl fmt::Display for Fixed {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "{}", self.0)
    }
}

// Methods //

#[wasm_bindgen]
impl Fixed {
    /// Create a new `Fixed` instance from an 18-decimal scaled raw value.
    #[wasm_bindgen(constructor)]
    pub fn new(value: Option<RawValue>) -> Result<Fixed, Error> {
        Ok(Fixed(match value {
            Some(value) => value.to_fixed()?,
            None => FixedPoint::default(),
        }))
    }

    pub fn valueOf(&self) -> Result<BigInt, Error> {
        self.0.to_bigint()
    }

    /// Get the 18-decimal scaled bigint representation of this fixed-point number.
    #[wasm_bindgen(getter)]
    pub fn bigint(&self) -> Result<BigInt, Error> {
        self.0.to_bigint()
    }

    /// Get the float representation of this fixed-point number.
    ///
    /// __Caution__: This method may lose precision.
    pub fn toNumber(&self) -> f64 {
        parse_float(&self.0.to_string())
    }

    /// Get the formatted string representation of this fixed-point number.
    pub fn toString(&self) -> String {
        self.0.to_string()
    }

    /// Add a fixed-point number to this one.
    pub fn add(&self, other: &Other) -> Result<Fixed, Error> {
        Ok(Fixed(self.0 + other.to_fixed()?))
    }

    /// Subtract a fixed-point number from this one.
    pub fn sub(&self, other: &Other) -> Result<Fixed, Error> {
        Ok(Fixed(self.0 - other.to_fixed()?))
    }

    /// Multiply this fixed-point number by another.
    pub fn mul(&self, other: &Other) -> Result<Fixed, Error> {
        Ok(Fixed(self.0 * other.to_fixed()?))
    }

    /// Divide this fixed-point number by another.
    pub fn div(&self, other: &Other) -> Result<Fixed, Error> {
        Ok(Fixed(self.0 / other.to_fixed()?))
    }

    /// Multiply this fixed-point number by another, then divide by a divisor,
    /// rounding down.
    pub fn mulDivDown(&self, other: &Other, divisor: &Other) -> Result<Fixed, Error> {
        Ok(Fixed(
            self.0.mul_div_down(other.to_fixed()?, divisor.to_fixed()?),
        ))
    }

    /// Multiply this fixed-point number by another, then divide by a divisor,
    /// rounding up.
    pub fn mulDivUp(&self, other: &Other, divisor: &Other) -> Result<Fixed, Error> {
        Ok(Fixed(
            self.0.mul_div_up(other.to_fixed()?, divisor.to_fixed()?),
        ))
    }

    /// Multiply this fixed-point number by another, rounding down.
    pub fn mulDown(&self, other: &Other) -> Result<Fixed, Error> {
        Ok(Fixed(self.0.mul_down(other.to_fixed()?)))
    }

    /// Multiply this fixed-point number by another, rounding up.
    pub fn mulUp(&self, other: &Other) -> Result<Fixed, Error> {
        Ok(Fixed(self.0.mul_up(other.to_fixed()?)))
    }

    /// Divide this fixed-point number by another, rounding down.
    pub fn divDown(&self, other: &Other) -> Result<Fixed, Error> {
        Ok(Fixed(self.0.div_down(other.to_fixed()?)))
    }

    /// Divide this fixed-point number by another, rounding up.
    pub fn divUp(&self, other: &Other) -> Result<Fixed, Error> {
        Ok(Fixed(self.0.div_up(other.to_fixed()?)))
    }

    /// Raise this fixed-point number to the power of another.
    pub fn pow(&self, other: &Other) -> Result<Fixed, Error> {
        Ok(Fixed(self.0.pow(other.to_fixed()?).to_result()?))
    }
}

// Utils //

/// Create a new `Fixed` instance from an 18-decimal scaled raw value.
///
/// @example
//
/// ```js
/// const fromBigint = fixed(1500000000000000000n);
/// const fromNumber = fixed(1.5e18);
/// const fromString = fixed('1.5e18');
///
/// console.log(fromBigint.toString());
/// // => 1.500000000000000000
///
/// console.log(fromNumber.toString());
/// // => 1.500000000000000000
///
/// console.log(fromString.toString());
/// // => 1.500000000000000000
/// ```
#[wasm_bindgen]
pub fn fixed(raw: RawValue) -> Result<Fixed, Error> {
    Fixed::new(Some(raw))
}

#[wasm_bindgen]
pub fn randInRange(min: RawValue, max: RawValue) -> Result<Fixed, Error> {
    let mut rng = thread_rng();
    Ok(Fixed(rng.gen_range(min.to_fixed()?..max.to_fixed()?)))
}

#[wasm_bindgen]
pub fn ln(x: Other) -> Result<Fixed, Error> {
    let int = FixedPoint::ln(x.to_i256()?).to_result()?;
    Ok(Fixed(FixedPoint::try_from(int).to_result()?))
}

// Types //

#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(typescript_type = "bigint | number | string")]
    pub type RawValue;

    #[wasm_bindgen(method)]
    fn toString(this: &RawValue) -> JsString;

    #[wasm_bindgen(method)]
    fn valueOf(this: &RawValue) -> BigInt;

    #[wasm_bindgen(typescript_type = "Fixed | bigint")]
    pub type Other;

    #[wasm_bindgen(method)]
    fn valueOf(this: &Other) -> BigInt;
}

impl ToFixedPoint for RawValue {
    fn to_fixed(&self) -> Result<FixedPoint, Error> {
        let str = self.toString().as_string().unwrap_or_default();
        if self.js_typeof() == "string" || self.js_typeof() == "number" {
            FixedPoint::from_str(&str).to_result()
        } else {
            str.to_fixed()
        }
    }
}

impl ToFixedPoint for &Other {
    fn to_fixed(&self) -> Result<FixedPoint, Error> {
        self.valueOf().to_fixed()
    }
}
