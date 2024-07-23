pub mod utils;

use core::fmt;
use std::str::FromStr;

use delv_core::{
    conversions::{ToBigInt, ToFixedPoint},
    error,
    error::{Error, ToResult},
};
use ethers::types::U256;
use fixedpointmath::{uint256, FixedPoint};
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

/// Get the version of this package.
#[wasm_bindgen(skip_jsdoc, js_name = getVersion)]
pub fn get_version() -> String {
    env!("CARGO_PKG_VERSION").to_string()
}

/// A number with a fixed number of decimal places.
#[wasm_bindgen(js_name = FixedPoint, skip_jsdoc)]
pub struct Fixed {
    inner: FixedPoint,
    /// The number of decimal places in the fixed-point number.
    pub decimals: u8,
}

impl fmt::Display for Fixed {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "{}", self.inner)
    }
}

// Methods //

#[wasm_bindgen(js_class = FixedPoint)]
impl Fixed {
    /// Create a new fixed-point number from a scaled value.
    ///
    /// @param value - A scaled value.
    ///
    /// @param decimals - The number of decimal places to use. Max is `18`.
    /// Defaults to `18`.
    #[wasm_bindgen(constructor, skip_jsdoc)]
    pub fn new(value: Option<Numberish>, decimals: Option<u8>) -> Result<Fixed, Error> {
        let _decimals = decimals.unwrap_or(18);
        if _decimals > 18 {
            return Err(error!(
                "Invalid fixed point decimals: {_decimals}. Max is 18."
            ));
        }
        let inner = match value {
            Some(value) => value.to_fixed()?,
            None => FixedPoint::default(),
        };
        Ok(Fixed {
            inner: inner * Fixed::scale_adjustment(_decimals),
            decimals: _decimals,
        })
    }

    /// Create a random fixed-point number with and optional min and max.
    ///
    /// @example
    ///
    /// ```ts
    /// const random = Fixed.random();
    /// console.log(random.toString());
    /// // => 0.472987274007185487
    /// ```
    #[wasm_bindgen(skip_jsdoc)]
    pub fn random(params: Option<IGenerateRandomParams>) -> Result<Fixed, Error> {
        let _params = match params {
            Some(params) => params.parse(),
            None => GenerateRandomParams {
                min: None,
                max: None,
                decimals: None,
            },
        };
        let fixed_min = _params.min.to_fixed()?;
        let fixed_max = match _params.max {
            Some(max) => max.to_fixed()?,
            None => fixed_min + fixedpointmath::fixed!(1e18),
        };
        Ok(Fixed {
            inner: thread_rng().gen_range(fixed_min..fixed_max),
            decimals: _params.decimals.unwrap_or(18),
        })
    }

    /// Get the scaled bigint representation of this fixed-point number.
    #[wasm_bindgen(skip_jsdoc, getter)]
    pub fn bigint(&self) -> Result<BigInt, Error> {
        let adjusted = self.inner / Fixed::scale_adjustment(self.decimals);
        adjusted.to_bigint()
    }

    /// Get the scaled bigint representation of this fixed-point number.
    #[wasm_bindgen(skip_jsdoc, js_name = valueOf)]
    pub fn value_of(&self) -> Result<BigInt, Error> {
        self.bigint()
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
        parse_float(&self.inner.to_string())
    }

    /// Get the formatted string representation of this fixed-point number.
    #[wasm_bindgen(skip_jsdoc, js_name = toString)]
    pub fn to_string(&self) -> String {
        let decimals_delta = 18 - self.decimals;
        let str = self.inner.to_string();
        str[..str.len() - decimals_delta as usize].to_string()
    }

    /// Add a fixed-point number to this one.
    #[wasm_bindgen(skip_jsdoc)]
    pub fn add(&self, other: &Numberish) -> Result<Fixed, Error> {
        let result = Fixed {
            inner: self.inner + other.to_fixed()?,
            decimals: self.decimals,
        };
        Ok(result)
    }

    /// Subtract a fixed-point number from this one.
    #[wasm_bindgen(skip_jsdoc)]
    pub fn sub(&self, other: &Numberish) -> Result<Fixed, Error> {
        let result = Fixed {
            inner: self.inner - other.to_fixed()?,
            decimals: self.decimals,
        };
        Ok(result)
    }

    /// Multiply this fixed-point number by another.
    #[wasm_bindgen(skip_jsdoc)]
    pub fn mul(&self, other: &Numberish) -> Result<Fixed, Error> {
        let result = Fixed {
            inner: self.inner * other.to_fixed()?,
            decimals: self.decimals,
        };
        Ok(result)
    }

    /// Divide this fixed-point number by another.
    #[wasm_bindgen(skip_jsdoc)]
    pub fn div(&self, other: &Numberish) -> Result<Fixed, Error> {
        let result = Fixed {
            inner: self.inner / other.to_fixed()?,
            decimals: self.decimals,
        };
        Ok(result)
    }

    /// Multiply this fixed-point number by another, then divide by a divisor,
    /// rounding down.
    #[wasm_bindgen(skip_jsdoc, js_name = mulDivDown)]
    pub fn mul_div_down(&self, other: &Numberish, divisor: &Numberish) -> Result<Fixed, Error> {
        let result = Fixed {
            inner: self
                .inner
                .mul_div_down(other.to_fixed()?, divisor.to_fixed()?),
            decimals: self.decimals,
        };
        Ok(result)
    }

    /// Multiply this fixed-point number by another, then divide by a divisor,
    /// rounding up.
    #[wasm_bindgen(skip_jsdoc, js_name = mulDivUp)]
    pub fn mul_div_up(&self, other: &Numberish, divisor: &Numberish) -> Result<Fixed, Error> {
        let result = Fixed {
            inner: self
                .inner
                .mul_div_up(other.to_fixed()?, divisor.to_fixed()?),
            decimals: self.decimals,
        };
        Ok(result)
    }

    /// Multiply this fixed-point number by another, rounding down.
    #[wasm_bindgen(skip_jsdoc, js_name = mulDown)]
    pub fn mul_down(&self, other: &Numberish) -> Result<Fixed, Error> {
        let result = Fixed {
            inner: self.inner.mul_down(other.to_fixed()?),
            decimals: self.decimals,
        };
        Ok(result)
    }

    /// Multiply this fixed-point number by another, rounding up.
    #[wasm_bindgen(skip_jsdoc, js_name = mulUp)]
    pub fn mul_up(&self, other: &Numberish) -> Result<Fixed, Error> {
        let result = Fixed {
            inner: self.inner.mul_up(other.to_fixed()?),
            decimals: self.decimals,
        };
        Ok(result)
    }

    /// Divide this fixed-point number by another, rounding down.
    #[wasm_bindgen(skip_jsdoc, js_name = divDown)]
    pub fn div_down(&self, other: &Numberish) -> Result<Fixed, Error> {
        let result = Fixed {
            inner: self.inner.div_down(other.to_fixed()?),
            decimals: self.decimals,
        };
        Ok(result)
    }

    /// Divide this fixed-point number by another, rounding up.
    #[wasm_bindgen(skip_jsdoc, js_name = divUp)]
    pub fn div_up(&self, other: &Numberish) -> Result<Fixed, Error> {
        let result = Fixed {
            inner: self.inner.div_up(other.to_fixed()?),
            decimals: self.decimals,
        };
        Ok(result)
    }

    /// Raise this fixed-point number to the power of another.
    #[wasm_bindgen(skip_jsdoc)]
    pub fn pow(&self, other: &Numberish) -> Result<Fixed, Error> {
        let result = Fixed {
            inner: self.inner.pow(other.to_fixed()?).to_result()?,
            decimals: self.decimals,
        };
        Ok(result)
    }

    fn scale_adjustment(decimals: u8) -> FixedPoint {
        let adjustment = uint256!(10).pow(U256::from(18 + 18 - decimals));
        FixedPoint::from(adjustment)
    }
}

// Types //

#[wasm_bindgen(typescript_custom_section)]
const _: &'static str = r#"
/**
 * An 18-decimal fixed-point number.
 */
export type Numberish = FixedPoint | bigint | number | string;
"#;

#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(typescript_type = Numberish)]
    pub type Numberish;

    #[wasm_bindgen(js_name = valueOf, method)]
    fn value_of(this: &Numberish) -> Numberish;

    #[wasm_bindgen(js_name = toString, method)]
    fn to_string(this: &Numberish) -> JsString;
}

impl ToFixedPoint for Fixed {
    fn to_fixed(&self) -> Result<FixedPoint, Error> {
        Ok(self.inner)
    }
}

impl ToFixedPoint for Numberish {
    #[track_caller]
    fn to_fixed(&self) -> Result<FixedPoint, Error> {
        let type_of = self.js_typeof();
        if type_of == "bigint" {
            self.to_string().to_fixed()
        } else if type_of == "string" || type_of == "number" {
            let str = self.value_of().to_string().as_string().unwrap_or_default();
            FixedPoint::from_str(&str).to_result()
        } else {
            let str = format!("{}e18", self.to_string().as_string().unwrap_or_default());
            FixedPoint::from_str(&str).to_result()
        }
    }
}

#[ts]
struct GenerateRandomParams {
    /// The minimum value to generate. Defaults to `0`.
    min: Option<Numberish>,
    /// The maximum value to generate. Defaults to 1.0 (scaled) more than `min`.
    max: Option<Numberish>,
    /// The number of decimal places to use. Max is `18`. Defaults to `18`.
    decimals: Option<u8>,
}
