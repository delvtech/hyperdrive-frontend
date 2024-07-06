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

/// A fixed-point number.
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
    #[wasm_bindgen(constructor)]
    pub fn new(raw: Option<BigInt>) -> Result<Fixed, Error> {
        Ok(Fixed(raw.to_fixed()?))
    }

    /// Get the scaled bigint representation of this fixed-point number.
    #[wasm_bindgen(getter)]
    pub fn raw(&self) -> Result<BigInt, Error> {
        self.0.to_bigint()
    }

    /// Get the formatted string representation of this fixed-point number.
    pub fn toString(&self) -> String {
        self.0.to_string()
    }

    /// Add a fixed-point number to this one.
    pub fn add(&self, other: &Fixed) -> Fixed {
        Fixed(self.0 + other.0)
    }

    /// Subtract a fixed-point number from this one.
    pub fn sub(&self, other: &Fixed) -> Fixed {
        Fixed(self.0 - other.0)
    }

    /// Multiply this fixed-point number by another.
    pub fn mul(&self, other: &Fixed) -> Fixed {
        Fixed(self.0 * other.0)
    }

    /// Divide this fixed-point number by another.
    pub fn div(&self, other: &Fixed) -> Fixed {
        Fixed(self.0 / other.0)
    }

    /// Multiply this fixed-point number by another, then divide by a divisor,
    /// rounding down.
    pub fn mulDivDown(&self, other: &Fixed, divisor: &Fixed) -> Fixed {
        Fixed(self.0.mul_div_down(other.0, divisor.0))
    }

    /// Multiply this fixed-point number by another, then divide by a divisor,
    /// rounding up.
    pub fn mulDivUp(&self, other: &Fixed, divisor: &Fixed) -> Fixed {
        Fixed(self.0.mul_div_up(other.0, divisor.0))
    }

    /// Multiply this fixed-point number by another, rounding down.
    pub fn mulDown(&self, other: &Fixed) -> Fixed {
        Fixed(self.0.mul_down(other.0))
    }

    /// Multiply this fixed-point number by another, rounding up.
    pub fn mulUp(&self, other: &Fixed) -> Fixed {
        Fixed(self.0.mul_up(other.0))
    }

    /// Divide this fixed-point number by another, rounding down.
    pub fn divDown(&self, other: &Fixed) -> Fixed {
        Fixed(self.0.div_down(other.0))
    }

    /// Divide this fixed-point number by another, rounding up.
    pub fn divUp(&self, other: &Fixed) -> Fixed {
        Fixed(self.0.div_up(other.0))
    }

    /// Raise this fixed-point number to the power of another.
    pub fn pow(&self, other: &Fixed) -> Result<Fixed, Error> {
        Ok(Fixed(self.0.pow(other.0).to_result()?))
    }
}

// Utils //

/// Create a new [`Fixed`] instance from a bigint.
///
/// ## Example
//
/// ```js
/// import { fixed } from 'fixed-point-wasm';
///
/// const x = fixed(1_123456789012345678);
/// console.log(x.toString());
/// // => 1.500000000000000000
/// ```
#[wasm_bindgen]
pub fn fixed(raw: Option<BigInt>) -> Result<Fixed, Error> {
    Fixed::new(raw)
}

/// Parses a scaled string into a [`Fixed`] instance.
///
/// ## Example
///
/// ```js
/// import { parseFixed } from 'fixed-point-wasm';
///
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
