use delv_core::{
    conversions::{ToFixedPoint, ToI256},
    error::{Error, ToResult},
};
use fixedpointmath::FixedPoint;
use wasm_bindgen::prelude::*;

use crate::{Fixed, IGenerateRandomParams, Numberish, INNER_DECIMALS};

/// Get the version of this package.
#[wasm_bindgen(skip_jsdoc, js_name = getVersion)]
pub fn get_version() -> String {
    env!("CARGO_PKG_VERSION").to_string()
}

/// Create a new fixed-point number by parsing a scaled value.
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
pub fn fixed(value: &Numberish, decimals: Option<u8>) -> Result<Fixed, Error> {
    Fixed::new(Some(value.clone()), decimals)
}

/// Create a fixed-point number by parsing a decimal value and scaling it by a
/// given number of decimal places.
///
/// @param value - A value to parse and scale.
///
/// @param decimals - The number of decimal places to use. Max is `18`. Defaults
/// to `18`.
///
/// @example
//
/// ```js
/// const fromNumber = parseFixed(1.5);
/// const fromString = parseFixed('1.5');
/// const withDecimals = parseFixed('1.5', 6);
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
#[wasm_bindgen(skip_jsdoc, js_name = parseFixed)]
pub fn parse_fixed(value: Numberish, decimals: Option<u8>) -> Result<Fixed, Error> {
    // If the value is already a fixed-point number, it's already scaled.
    if value.is_fixed_point() == Some(true) {
        return Fixed::new(Some(value), decimals);
    }

    // Scale the value by the number of decimals.
    let decimals = decimals.unwrap_or(INNER_DECIMALS);
    let scaled_str = format!(
        "{}e{}",
        value.to_string().as_string().unwrap_or_default(),
        decimals,
    );
    let scaled_value: Numberish = JsValue::from_str(&scaled_str).into();

    Fixed::new(Some(scaled_value), Some(decimals))
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
