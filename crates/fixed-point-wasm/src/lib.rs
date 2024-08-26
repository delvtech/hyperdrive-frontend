pub mod formatting;
pub mod utils;

use core::fmt;

use delv_core::{
    conversions::{ToBigInt, ToI256},
    error::{Error, ToResult},
};
use ethers::types::I256;
use fixedpointmath::{i256_from_str, prelude::*};
use js_sys::{parse_float, BigInt, JsString};
use rand::{thread_rng, Rng};
use ts_macro::ts;
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

const INNER_DECIMALS: u8 = 18;

/// A number with a fixed number of decimal places.
#[wasm_bindgen(js_name = FixedPoint)]
pub struct WasmFixedPoint {
    inner: FixedPoint<I256>,
    /// The number of decimal places in the fixed-point number.
    #[wasm_bindgen(readonly)]
    pub decimals: u8,
}

impl fmt::Display for WasmFixedPoint {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "{}", self.inner)
    }
}

// Methods //

#[wasm_bindgen(js_class = FixedPoint)]
impl WasmFixedPoint {
    // Constructors //

    /// Create a new fixed-point number from a scaled value or another
    /// fixed-point number. If the value is already a fixed-point number, the
    /// number of decimal places will be adjusted to match the new value.
    ///
    /// @param value - A scaled value between `-2^255` and `2^255 - 1` (signed
    /// 256-bit integer).
    ///
    /// @param decimals - The number of decimal places to use. Max is `18`.
    /// Defaults to `18`.
    #[wasm_bindgen(constructor, skip_jsdoc)]
    pub fn new(value: Numberish, decimals: Option<u8>) -> Result<WasmFixedPoint, Error> {
        let decimals = decimals.unwrap_or(INNER_DECIMALS);
        let is_fixed_point = value.is_fixed_point();
        let mut fixed_value: FixedPoint<I256> = value.try_into()?;

        if is_fixed_point == Some(true) {
            fixed_value /= WasmFixedPoint::scale_factor(decimals);
        }

        Ok(WasmFixedPoint {
            inner: fixed_value * WasmFixedPoint::scale_factor(decimals),
            decimals,
        })
    }

    /// Create a fixed-point number representing one unit.
    ///
    /// @param decimals - The number of decimal places to use. Max is `18`.
    /// Defaults to `18`.
    #[wasm_bindgen(skip_jsdoc)]
    pub fn one(decimals: Option<u8>) -> Result<WasmFixedPoint, Error> {
        let decimals = decimals.unwrap_or(INNER_DECIMALS);
        Ok(WasmFixedPoint {
            inner: FixedPoint::from(10u128.pow(decimals as u32)),
            decimals,
        })
    }

    /// Create a random fixed-point number with and optional min and max.
    ///
    /// **Note**:
    ///
    /// @example
    ///
    /// ```ts
    /// const random = FixedPoint.random();
    /// console.log(random.toString());
    /// // => 0.472987274007185487
    /// ```
    #[wasm_bindgen(skip_jsdoc)]
    pub fn random(params: Option<IGenerateRandomParams>) -> Result<WasmFixedPoint, Error> {
        let _params = match params {
            Some(params) => params.parse(),
            None => GenerateRandomParams {
                min: None,
                max: None,
                decimals: None,
            },
        };
        let fixed_min: FixedPoint<I256> = match _params.min {
            Some(min) => min.try_into()?,
            None => FixedPoint::zero(),
        };
        let fixed_max: FixedPoint<I256> = match _params.max {
            Some(max) => max.try_into()?,
            None => fixed_min + fixed_min.one(),
        };
        Ok(WasmFixedPoint {
            inner: thread_rng().gen_range(fixed_min..fixed_max),
            decimals: _params.decimals.unwrap_or(INNER_DECIMALS),
        })
    }

    /// Get the scaled bigint representation of this fixed-point number.
    #[wasm_bindgen(skip_jsdoc, getter)]
    pub fn bigint(&self) -> Result<BigInt, Error> {
        let adjusted = self.inner / WasmFixedPoint::scale_factor(self.decimals);
        adjusted.to_bigint()
    }

    /// Change the number of decimal places in this fixed-point.
    /// This will scale or truncate the value as necessary.
    ///
    /// @example
    /// ```ts
    /// const fixed = new FixedPoint(1_123456789012345678n);
    /// fixed.setDecimals(6);;
    /// console.log(fixed.toString());
    /// // => 1.123456
    /// ```
    #[wasm_bindgen(skip_jsdoc, js_name = setDecimals)]
    pub fn set_decimals(&mut self, decimals: u8) {
        self.inner = self.inner / WasmFixedPoint::scale_factor(decimals)
            * WasmFixedPoint::scale_factor(decimals);
        self.decimals = decimals;
    }

    /// Add a fixed-point number to this one.
    #[wasm_bindgen(skip_jsdoc)]
    pub fn add(&self, other: Numberish, decimals: Option<u8>) -> Result<WasmFixedPoint, Error> {
        Ok(WasmFixedPoint {
            inner: self.inner + WasmFixedPoint::new(other, decimals)?.inner,
            decimals: self.decimals,
        })
    }

    /// Subtract a fixed-point number from this one.
    #[wasm_bindgen(skip_jsdoc)]
    pub fn sub(&self, other: Numberish, decimals: Option<u8>) -> Result<WasmFixedPoint, Error> {
        Ok(WasmFixedPoint {
            inner: self.inner - WasmFixedPoint::new(other, decimals)?.inner,
            decimals: self.decimals,
        })
    }

    /// Multiply this fixed-point number by another, then divide by a divisor,
    /// rounding down.
    #[wasm_bindgen(skip_jsdoc, js_name = mulDivDown)]
    pub fn mul_div_down(
        &self,
        other: Numberish,
        divisor: Numberish,
        decimals: Option<u8>,
    ) -> Result<WasmFixedPoint, Error> {
        Ok(WasmFixedPoint {
            inner: self.inner.mul_div_down(
                WasmFixedPoint::new(other, decimals)?.inner,
                WasmFixedPoint::new(divisor, decimals)?.inner,
            ),
            decimals: self.decimals,
        })
    }

    /// Multiply this fixed-point number by another, then divide by a divisor,
    /// rounding up.
    #[wasm_bindgen(skip_jsdoc, js_name = mulDivUp)]
    pub fn mul_div_up(
        &self,
        other: Numberish,
        divisor: Numberish,
        decimals: Option<u8>,
    ) -> Result<WasmFixedPoint, Error> {
        Ok(WasmFixedPoint {
            inner: self.inner.mul_div_up(
                WasmFixedPoint::new(other, decimals)?.inner,
                WasmFixedPoint::new(divisor, decimals)?.inner,
            ),
            decimals: self.decimals,
        })
    }

    /// Multiply this fixed-point number by another, truncating the result.
    #[wasm_bindgen(skip_jsdoc, js_name = mulDown)]
    pub fn mul_down(
        &self,
        other: Numberish,
        decimals: Option<u8>,
    ) -> Result<WasmFixedPoint, Error> {
        Ok(WasmFixedPoint {
            inner: self
                .inner
                .mul_down(WasmFixedPoint::new(other, decimals)?.inner),
            decimals: self.decimals,
        })
    }

    /// Multiply this fixed-point number by another, rounding up.
    #[wasm_bindgen(skip_jsdoc, js_name = mulUp)]
    pub fn mul_up(&self, other: Numberish, decimals: Option<u8>) -> Result<WasmFixedPoint, Error> {
        Ok(WasmFixedPoint {
            inner: self
                .inner
                .mul_up(WasmFixedPoint::new(other, decimals)?.inner),
            decimals: self.decimals,
        })
    }

    /// Multiply this fixed-point number by another. Rounding to the nearest integer.
    #[wasm_bindgen(skip_jsdoc)]
    pub fn mul(&self, other: Numberish, decimals: Option<u8>) -> Result<WasmFixedPoint, Error> {
        Ok(WasmFixedPoint {
            inner: self.inner * WasmFixedPoint::new(other, decimals)?.inner,
            decimals: self.decimals,
        })
    }

    /// Divide this fixed-point number by another, truncating the result.
    #[wasm_bindgen(skip_jsdoc, js_name = divDown)]
    pub fn div_down(
        &self,
        other: Numberish,
        decimals: Option<u8>,
    ) -> Result<WasmFixedPoint, Error> {
        Ok(WasmFixedPoint {
            inner: self
                .inner
                .div_down(WasmFixedPoint::new(other, decimals)?.inner),
            decimals: self.decimals,
        })
    }

    /// Divide this fixed-point number by another, rounding up.
    #[wasm_bindgen(skip_jsdoc, js_name = divUp)]
    pub fn div_up(&self, other: Numberish, decimals: Option<u8>) -> Result<WasmFixedPoint, Error> {
        Ok(WasmFixedPoint {
            inner: self
                .inner
                .div_up(WasmFixedPoint::new(other, decimals)?.inner),
            decimals: self.decimals,
        })
    }

    /// Divide this fixed-point number by another.
    #[wasm_bindgen(skip_jsdoc)]
    pub fn div(&self, other: Numberish, decimals: Option<u8>) -> Result<WasmFixedPoint, Error> {
        Ok(WasmFixedPoint {
            inner: self.inner / WasmFixedPoint::new(other, decimals)?.inner,
            decimals: self.decimals,
        })
    }

    /// Raise this fixed-point number to the power of another.
    #[wasm_bindgen(skip_jsdoc)]
    pub fn pow(&self, other: Numberish, decimals: Option<u8>) -> Result<WasmFixedPoint, Error> {
        Ok(WasmFixedPoint {
            inner: self
                .inner
                .pow(WasmFixedPoint::new(other, decimals)?.inner)
                .to_result()?,
            decimals: self.decimals,
        })
    }

    /// Find out if this number is equal to another.
    #[wasm_bindgen(skip_jsdoc)]
    pub fn eq(&self, other: Numberish, decimals: Option<u8>) -> Result<bool, Error> {
        Ok(self.inner == WasmFixedPoint::new(other, decimals)?.inner)
    }

    /// Find out if this number is not equal to another.
    #[wasm_bindgen(skip_jsdoc)]
    pub fn ne(&self, other: Numberish, decimals: Option<u8>) -> Result<bool, Error> {
        Ok(self.inner != WasmFixedPoint::new(other, decimals)?.inner)
    }

    /// Find out if this number is greater than another.
    #[wasm_bindgen(skip_jsdoc)]
    pub fn gt(&self, other: Numberish, decimals: Option<u8>) -> Result<bool, Error> {
        Ok(self.inner > WasmFixedPoint::new(other, decimals)?.inner)
    }

    /// Find out if this number is greater than or equal to another.
    #[wasm_bindgen(skip_jsdoc)]
    pub fn gte(&self, other: Numberish, decimals: Option<u8>) -> Result<bool, Error> {
        Ok(self.inner >= WasmFixedPoint::new(other, decimals)?.inner)
    }

    /// Find out if this number is less than another.
    #[wasm_bindgen(skip_jsdoc)]
    pub fn lt(&self, other: Numberish, decimals: Option<u8>) -> Result<bool, Error> {
        Ok(self.inner < WasmFixedPoint::new(other, decimals)?.inner)
    }

    /// Find out if this number is less than or equal to another.
    #[wasm_bindgen(skip_jsdoc)]
    pub fn lte(&self, other: Numberish, decimals: Option<u8>) -> Result<bool, Error> {
        Ok(self.inner <= WasmFixedPoint::new(other, decimals)?.inner)
    }

    /// Get the minimum of this number and another.
    ///
    /// If the numbers are equal, the number with the fewest decimal places will be returned.
    #[wasm_bindgen(skip_jsdoc)]
    pub fn min(&self, other: Numberish, decimals: Option<u8>) -> Result<WasmFixedPoint, Error> {
        Ok(WasmFixedPoint {
            inner: self.inner.min(WasmFixedPoint::new(other, decimals)?.inner),
            decimals: self.decimals,
        })
    }

    /// Get the maximum of this number and another.
    ///
    /// If the numbers are equal, the number with the most decimal places will be returned.
    #[wasm_bindgen(skip_jsdoc)]
    pub fn max(&self, other: Numberish, decimals: Option<u8>) -> Result<WasmFixedPoint, Error> {
        Ok(WasmFixedPoint {
            inner: self.inner.max(WasmFixedPoint::new(other, decimals)?.inner),
            decimals: self.decimals,
        })
    }

    /// Clamp this number to a range.
    #[wasm_bindgen(skip_jsdoc)]
    pub fn clamp(
        &self,
        min: Numberish,
        max: Numberish,
        decimals: Option<u8>,
    ) -> Result<WasmFixedPoint, Error> {
        Ok(WasmFixedPoint {
            inner: self.inner.clamp(
                WasmFixedPoint::new(min, decimals)?.inner,
                WasmFixedPoint::new(max, decimals)?.inner,
            ),
            decimals: self.decimals,
        })
    }

    /// Get the decimal string representation of this fixed-point number.
    #[wasm_bindgen(skip_jsdoc, js_name = toString)]
    pub fn to_string(&self) -> String {
        let decimals_delta = INNER_DECIMALS - self.decimals;
        let str = self.inner.to_string();
        str[..str.len() - decimals_delta as usize].to_string()
    }

    /// Get the float representation of this fixed-point number.
    ///
    /// __Caution__: This method may lose precision.
    ///
    /// @example
    ///
    /// ```ts
    /// const fixed = new FixedPoint(1_123456789012345678n);
    /// console.log(fixed.toNumber());
    /// // 1.1234567890123457
    /// ```
    #[wasm_bindgen(skip_jsdoc, js_name = toNumber)]
    pub fn to_number(&self) -> f64 {
        parse_float(&self.to_string())
    }

    #[wasm_bindgen(skip_jsdoc, js_name = valueOf)]
    pub fn value_of(&self) -> String {
        self.to_string()
    }

    #[wasm_bindgen(skip_jsdoc, skip_typescript)]
    pub fn is_fixed_point(&self) -> bool {
        true
    }

    fn scale_factor(decimals: u8) -> FixedPoint<I256> {
        let factor = I256::from(10).pow((INNER_DECIMALS * 2 - decimals) as u32);
        FixedPoint::from(factor)
    }
}

// Types //

#[wasm_bindgen(typescript_custom_section)]
const _: &'static str = r#"
export type Numberish = FixedPoint | bigint | number | string;
"#;

#[wasm_bindgen]
extern "C" {
    /// `FixedPoint | bigint | number | string`
    #[derive(Clone)]
    #[wasm_bindgen(typescript_type = Numberish)]
    pub type Numberish;

    #[wasm_bindgen(js_name = valueOf, method)]
    fn value_of(this: &Numberish) -> Numberish;

    #[wasm_bindgen(js_name = toString, method)]
    fn to_string(this: &Numberish) -> JsString;

    #[wasm_bindgen(getter, method)]
    fn is_fixed_point(this: &Numberish) -> Option<bool>;
}

impl TryFrom<Numberish> for FixedPoint<I256> {
    type Error = Error;

    #[track_caller]
    fn try_from(num: Numberish) -> Result<Self, Self::Error> {
        if num.is_fixed_point() == Some(true) {
            let s = format!(
                "{}e{}",
                num.to_string().as_string().unwrap_or_default(),
                INNER_DECIMALS
            );
            return FixedPoint::from_dec_str(&s).to_result();
        }

        match num.js_typeof().as_string().unwrap_or_default().as_str() {
            "bigint" | "number" => Ok(num.to_i256()?.fixed()),
            _ => {
                let mut s = num
                    .to_string()
                    .trim()
                    .to_lower_case()
                    .replace_all("_", "")
                    .replace_all(",", "");
                let mut sign = 1;
                if s.starts_with("-", 0) {
                    s = s.slice(0, s.length());
                    sign = -1;
                };
                if s.starts_with("+", 0) {
                    s = s.slice(0, s.length());
                };
                if s.starts_with("0x", 0) || s.starts_with("0b", 0) || s.starts_with("0o", 0) {
                    let int = s.to_i256()? * I256::from(sign);
                    return Ok(int.fixed());
                };
                let s = s.as_string().unwrap_or_default();
                let int = i256_from_str(&s).to_result()? * I256::from(sign);
                Ok(int.fixed())
            }
        }
    }
}

#[ts]
struct GenerateRandomParams {
    /// The minimum value to generate.
    ///
    /// @default 0
    min: Option<Numberish>,

    /// The maximum value to generate.
    ///
    /// @default min + parseFixed(1.0, decimals)
    max: Option<Numberish>,

    /// The number of decimal places to use. Max is `18`.
    ///
    /// @default 18
    decimals: Option<u8>,
}
