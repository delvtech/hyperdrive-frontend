#![allow(non_snake_case)]

use core::fmt;
use std::str::FromStr;

use delv_core::{
    conversions::{ToBigInt, ToFixedPoint, ToI256},
    error::{Error, ToResult},
};
use fixedpointmath::FixedPoint;
use js_sys::BigInt;
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
    /// Create a new `Fixed` instance from an 18-decimal scaled bigint.
    #[wasm_bindgen(constructor)]
    pub fn new(raw: Option<BigInt>) -> Result<Fixed, Error> {
        Ok(Fixed(raw.to_fixed()?))
    }

    pub fn valueOf(&self) -> Result<BigInt, Error> {
        self.0.to_bigint()
    }

    /// Get the 18-decimal scaled bigint representation of this fixed-point number.
    #[wasm_bindgen(getter)]
    pub fn bigint(&self) -> Result<BigInt, Error> {
        self.0.to_bigint()
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

/// Create a new `Fixed` instance from a bigint.
///
/// @example
//
/// ```js
/// const x = fixed(BigInt(15e17));
/// console.log(x.toString());
/// // => 1.500000000000000000
/// ```
#[wasm_bindgen]
pub fn fixed(raw: Option<BigInt>) -> Result<Fixed, Error> {
    Fixed::new(raw)
}

/// Parses a scaled string into a `Fixed` instance.
///
/// @example
///
/// ```js
/// const x = parseFixed('1.5e18');
/// console.log(x.toString());
/// // => 1.500000000000000000
/// ```
#[wasm_bindgen]
pub fn parseFixed(string: &str) -> Result<Fixed, Error> {
    Ok(Fixed(FixedPoint::from_str(string).to_result()?))
}

#[wasm_bindgen]
pub fn ln(x: BigInt) -> Result<Fixed, Error> {
    let int = FixedPoint::ln(x.to_i256()?).to_result()?;
    Ok(Fixed(FixedPoint::try_from(int).to_result()?))
}

#[wasm_bindgen]
pub fn randInRange(min: BigInt, max: BigInt) -> Result<Fixed, Error> {
    let mut rng = thread_rng();
    Ok(Fixed(rng.gen_range(min.to_fixed()?..max.to_fixed()?)))
}

// Types //

#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(typescript_type = "Fixed | bigint")]
    pub type Other;

    #[wasm_bindgen(method)]
    fn valueOf(this: &Other) -> BigInt;
}

impl ToFixedPoint for &Other {
    fn to_fixed(&self) -> Result<FixedPoint, Error> {
        self.valueOf().to_fixed()
    }
}
