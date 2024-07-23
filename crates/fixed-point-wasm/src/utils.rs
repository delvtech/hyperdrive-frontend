use delv_core::{
    conversions::{ToFixedPoint, ToI256},
    error::{Error, ToResult},
};
use fixedpointmath::FixedPoint;
use wasm_bindgen::prelude::*;

use crate::{Fixed, IGenerateRandomParams, Numberish};

/// Create a new fixed-point number from a scaled value.
///
/// @param value - A scaled value.
///
/// @param decimals - The number of decimal places to use. Max is `18`.
/// Defaults to `18`.
///
/// @example
//
/// ```js
/// const fromBigint = fixed(1500000000000000000n);
/// const fromNumber = fixed(1.5e18);
/// const fromString = fixed('1.5e18');
/// const withDecimals = fixed(1.5e6, 6);
///
/// console.log(fromBigint.toString());
/// // => 1.500000000000000000
///
/// console.log(fromNumber.toString());
/// // => 1.500000000000000000
///
/// console.log(fromString.toString());
/// // => 1.500000000000000000
///
/// console.log(withDecimals.toString());
/// // => 1.500000
/// ```
#[wasm_bindgen(skip_jsdoc)]
pub fn fixed(value: Numberish, decimals: Option<u8>) -> Result<Fixed, Error> {
    Fixed::new(Some(value), decimals)
}

/// Create a random fixed-point number with an optional min and max.
///
/// @example
///
/// ```ts
/// const random = randomFixed();
///
/// console.log(random.toString());
/// // => 0.472987274007185487
/// ```
#[wasm_bindgen(skip_jsdoc, js_name = randomFixed)]
pub fn random_fixed(params: Option<IGenerateRandomParams>) -> Result<Fixed, Error> {
    Fixed::random(params)
}

/// Get the natural logarithm of a fixed-point number.
///
/// @param x - The value to calculate the natural logarithm of.
/// scaled raw value.
#[wasm_bindgen(skip_jsdoc)]
pub fn ln(x: Numberish) -> Result<Fixed, Error> {
    let int = x.to_fixed()?.to_i256()?;
    let int_result = FixedPoint::ln(int).to_result()?;
    let result = Fixed {
        inner: FixedPoint::try_from(int_result).to_result()?,
        decimals: 18,
    };
    Ok(result)
}
