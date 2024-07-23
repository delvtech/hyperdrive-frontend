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

/// Get the version of this package.
#[wasm_bindgen(skip_jsdoc)]
pub fn getVersion() -> String {
    env!("CARGO_PKG_VERSION").to_string()
}

/// An 18-decimal fixed-point number.
#[wasm_bindgen(skip_jsdoc)]
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
    pub fn new(value: Option<Numberish>) -> Result<Fixed, Error> {
        Ok(Fixed(match value {
            Some(value) => value.to_fixed()?,
            None => FixedPoint::default(),
        }))
    }

    pub fn valueOf(&self) -> Result<BigInt, Error> {
        self.0.to_bigint()
    }

    /// Get the 18-decimal scaled bigint representation of this fixed-point
    /// number.
    #[wasm_bindgen(skip_jsdoc, getter)]
    pub fn bigint(&self) -> Result<BigInt, Error> {
        self.0.to_bigint()
    }

    /// Get the float representation of this fixed-point number.
    ///
    /// __Caution__: This method may lose precision.
    #[wasm_bindgen(skip_jsdoc)]
    pub fn toNumber(&self) -> f64 {
        parse_float(&self.0.to_string())
    }

    /// Get the formatted string representation of this fixed-point number.
    #[wasm_bindgen(skip_jsdoc)]
    pub fn toString(&self) -> String {
        self.0.to_string()
    }

    /// Add a fixed-point number to this one.
    #[wasm_bindgen(skip_jsdoc)]
    pub fn add(&self, other: &Numberish) -> Result<Fixed, Error> {
        Ok(Fixed(self.0 + other.to_fixed()?))
    }

    /// Subtract a fixed-point number from this one.
    #[wasm_bindgen(skip_jsdoc)]
    pub fn sub(&self, other: &Numberish) -> Result<Fixed, Error> {
        Ok(Fixed(self.0 - other.to_fixed()?))
    }

    /// Multiply this fixed-point number by another.
    #[wasm_bindgen(skip_jsdoc)]
    pub fn mul(&self, other: &Numberish) -> Result<Fixed, Error> {
        Ok(Fixed(self.0 * other.to_fixed()?))
    }

    /// Divide this fixed-point number by another.
    #[wasm_bindgen(skip_jsdoc)]
    pub fn div(&self, other: &Numberish) -> Result<Fixed, Error> {
        Ok(Fixed(self.0 / other.to_fixed()?))
    }

    /// Multiply this fixed-point number by another, then divide by a divisor,
    /// rounding down.
    #[wasm_bindgen(skip_jsdoc)]
    pub fn mulDivDown(&self, other: &Numberish, divisor: &Numberish) -> Result<Fixed, Error> {
        Ok(Fixed(
            self.0.mul_div_down(other.to_fixed()?, divisor.to_fixed()?),
        ))
    }

    /// Multiply this fixed-point number by another, then divide by a divisor,
    /// rounding up.
    #[wasm_bindgen(skip_jsdoc)]
    pub fn mulDivUp(&self, other: &Numberish, divisor: &Numberish) -> Result<Fixed, Error> {
        Ok(Fixed(
            self.0.mul_div_up(other.to_fixed()?, divisor.to_fixed()?),
        ))
    }

    /// Multiply this fixed-point number by another, rounding down.
    #[wasm_bindgen(skip_jsdoc)]
    pub fn mulDown(&self, other: &Numberish) -> Result<Fixed, Error> {
        Ok(Fixed(self.0.mul_down(other.to_fixed()?)))
    }

    /// Multiply this fixed-point number by another, rounding up.
    #[wasm_bindgen(skip_jsdoc)]
    pub fn mulUp(&self, other: &Numberish) -> Result<Fixed, Error> {
        Ok(Fixed(self.0.mul_up(other.to_fixed()?)))
    }

    /// Divide this fixed-point number by another, rounding down.
    #[wasm_bindgen(skip_jsdoc)]
    pub fn divDown(&self, other: &Numberish) -> Result<Fixed, Error> {
        Ok(Fixed(self.0.div_down(other.to_fixed()?)))
    }

    /// Divide this fixed-point number by another, rounding up.
    #[wasm_bindgen(skip_jsdoc)]
    pub fn divUp(&self, other: &Numberish) -> Result<Fixed, Error> {
        Ok(Fixed(self.0.div_up(other.to_fixed()?)))
    }

    /// Raise this fixed-point number to the power of another.
    #[wasm_bindgen(skip_jsdoc)]
    pub fn pow(&self, other: &Numberish) -> Result<Fixed, Error> {
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
///
/// @param value - An 18-decimal scaled raw value.
#[wasm_bindgen(skip_jsdoc)]
pub fn fixed(value: Numberish) -> Result<Fixed, Error> {
    Fixed::new(Some(value))
}

/// Create a random `Fixed` instance within a given range.
///
/// @param min - The minimum value of the range as an 18-decimal scaled raw
/// value.
///
/// @param max - The maximum value of the range as an 18-decimal scaled raw
/// value.
#[wasm_bindgen(skip_jsdoc)]
pub fn randInRange(min: Numberish, max: Numberish) -> Result<Fixed, Error> {
    let mut rng = thread_rng();
    Ok(Fixed(rng.gen_range(min.to_fixed()?..max.to_fixed()?)))
}

/// Get the natural logarithm of a fixed-point number.
///
/// @param x - The number to calculate the natural logarithm of as an 18-decimal
/// scaled raw value.
#[wasm_bindgen(skip_jsdoc)]
pub fn ln(x: Numberish) -> Result<Fixed, Error> {
    let int = x.to_fixed()?.to_i256()?;
    let result = FixedPoint::ln(int).to_result()?;
    Ok(Fixed(FixedPoint::try_from(result).to_result()?))
}

// Types //

#[wasm_bindgen(typescript_custom_section)]
const _: &'static str = r#"
/**
 * An 18-decimal fixed-point number.
 */
export type Numberish = Fixed | bigint | number | string;
"#;

#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(typescript_type = Numberish)]
    pub type Numberish;

    #[wasm_bindgen(method)]
    fn valueOf(this: &Numberish) -> Numberish;

    #[wasm_bindgen(method)]
    fn toString(this: &Numberish) -> JsString;
}

impl ToFixedPoint for Fixed {
    fn to_fixed(&self) -> Result<FixedPoint, Error> {
        Ok(self.0)
    }
}

impl ToFixedPoint for Numberish {
    #[track_caller]
    fn to_fixed(&self) -> Result<FixedPoint, Error> {
        let type_of = self.js_typeof();
        if type_of == "bigint" {
            self.toString().to_fixed()
        } else if type_of == "string" || type_of == "number" {
            let str = self.valueOf().toString().as_string().unwrap_or_default();
            FixedPoint::from_str(&str).to_result()
        } else {
            let str = format!("{}e18", self.toString().as_string().unwrap_or_default());
            FixedPoint::from_str(&str).to_result()
        }
    }
}
