use delv_core::error::{Error, ToResult};
use ethers::types::I256;
use fixedpointmath::{Fixed, FixedPoint};
use wasm_bindgen::prelude::*;

use crate::{IGenerateRandomParams, Numberish, WasmFixedPoint, INNER_DECIMALS};

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
pub fn fixed(value: Numberish, decimals: Option<u8>) -> Result<WasmFixedPoint, Error> {
    WasmFixedPoint::new(value, decimals)
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
pub fn parse_fixed(value: Numberish, decimals: Option<u8>) -> Result<WasmFixedPoint, Error> {
    // If the value is already a fixed-point number, it's already scaled.
    if value.is_fixed_point() == Some(true) {
        return fixed(value, decimals);
    }

    let decimals = decimals.unwrap_or(INNER_DECIMALS);
    let mut s = value.to_string().as_string().unwrap_or_default();

    if s.contains("e") {
        let mut parts = s.split("e");
        let mantissa_str = parts.next().unwrap_or_default();
        let exponent_str = parts.next().unwrap_or_default();
        let exponent = u8::from_str_radix(exponent_str, 10).to_result()?;
        let mut mantissa_parts = mantissa_str.split(".");
        let int_str = mantissa_parts.next().unwrap_or_default();
        let fraction_str = mantissa_parts.next().unwrap_or_default();
        let mut inner = I256::from_dec_str(&format!("{int_str}{fraction_str}"))
            .to_result()?
            .fixed();
        let fraction_digits = fraction_str.len() as u8;

        if fraction_digits > exponent {
            inner /= (10u32.pow((fraction_digits - exponent) as u32)).into();
            return Ok(WasmFixedPoint { inner, decimals });
        }

        let unscaled = inner.raw() * I256::from(10u32.pow((exponent - fraction_digits) as u32));
        s = unscaled.to_string();
    } else if !s.contains(".") {
        let unscaled_value: FixedPoint<I256> = value.try_into()?;
        s = unscaled_value.raw().to_string();
    }

    let scaled_str = format!("{s}e{decimals}",);
    fixed(JsValue::from(scaled_str).into(), Some(decimals))
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
pub fn random_fixed(params: Option<IGenerateRandomParams>) -> Result<WasmFixedPoint, Error> {
    WasmFixedPoint::random(params)
}

/// Get the natural logarithm of a fixed-point number.
///
/// @param x - The value to calculate the natural logarithm of.
/// scaled raw value.
#[wasm_bindgen(skip_jsdoc)]
pub fn ln(x: Numberish) -> Result<WasmFixedPoint, Error> {
    let fixed: FixedPoint<I256> = x.try_into()?;
    let int_result = fixedpointmath::ln(fixed.raw()).to_result()?;
    let result = WasmFixedPoint {
        inner: int_result.fixed(),
        decimals: fixed.decimals(),
    };
    Ok(result)
}
