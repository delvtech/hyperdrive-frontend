use delv_core::error::{Error, ToResult};
use js_sys::{Array, Intl, JsString, Object, Reflect};
use ts_macro::ts;
use wasm_bindgen::prelude::*;

use crate::Fixed;

// Methods //

#[wasm_bindgen(js_class = FixedPoint)]
impl Fixed {
    /// Format this fixed-point number for display.
    #[wasm_bindgen(skip_jsdoc)]
    pub fn format(&self, options: Option<IFormatOptions>) -> Result<JsString, Error> {
        let options = options.unwrap_or_default();

        // parse base options
        let mut base_options = options.obj.parse();

        // modify base options if necessary
        if options.compact_display().is_none() && options.percent() != Some(true) {
            base_options.decimals = Some(options.decimals().unwrap_or(self.decimals));
        }

        // get base format args
        let FormatArgs {
            locales_arr,
            options_obj,
        } = self.base_format_args(&base_options)?;

        // modify base options arg if necessary
        if let Some(mode) = options.compact_display() {
            Reflect::set(&options_obj, &"notation".into(), &"compact".into())?;
            Reflect::set(&options_obj, &"compactDisplay".into(), &mode.into())?;
        }
        if options.percent() == Some(true) {
            Reflect::set(&options_obj, &"style".into(), &"percent".into())?;
        }

        // create formatter and return formatted value
        let formatter = Intl::NumberFormat::new(&locales_arr, &options_obj);
        Ok(formatter
            .format()
            .call1(&JsValue::NULL, &self.to_string().into())
            .to_result()?
            .into())
    }

    /// Format this fixed-point number as a currency.
    #[wasm_bindgen(skip_jsdoc, js_name = formatCurrency)]
    pub fn format_currency(
        &self,
        options: Option<ICurrencyFormatOptions>,
    ) -> Result<JsString, Error> {
        let options = options.unwrap_or_default();

        // parse base options
        let base_options = options.obj.parse();

        // get base format args
        let FormatArgs {
            locales_arr,
            options_obj,
        } = self.base_format_args(&base_options)?;

        // modify base options arg
        Reflect::set(&options_obj, &"style".into(), &"currency".into())?;
        Reflect::set(
            &options_obj,
            &"currency".into(),
            &options.currency().unwrap_or("USD".to_string()).into(),
        )?;
        if options.compact() == Some(true) {
            Reflect::set(&options_obj, &"notation".into(), &"compact".into())?;
            Reflect::set(&options_obj, &"compactDisplay".into(), &"short".into())?;
        }
        if let Some(mode) = options.display() {
            Reflect::set(&options_obj, &"currencyDisplay".into(), &mode.into())?;
        }

        // create formatter and return formatted value
        let formatter = Intl::NumberFormat::new(&locales_arr, &options_obj);
        Ok(formatter
            .format()
            .call1(&JsValue::NULL, &self.to_string().into())
            .to_result()?
            .into())
    }

    fn base_format_args(&self, options: &BaseFormatOptions) -> Result<FormatArgs, Error> {
        let options_obj = Object::new();

        let decimals = options.decimals;
        if decimals.is_some() {
            Reflect::set(
                &options_obj,
                &"maximumFractionDigits".into(),
                &decimals.unwrap().into(),
            )?;
        }

        if options.trailing_zeros == Some(true)
            || (decimals.is_some() && options.trailing_zeros != Some(false))
        {
            Reflect::set(
                &options_obj,
                &"minimumFractionDigits".into(),
                &decimals.unwrap_or(self.decimals).into(),
            )?;
        }

        if let Some(mode) = &options.rounding {
            Reflect::set(&options_obj, &"roundingMode".into(), &mode.into())?;
        }

        if let Some(group) = options.group {
            Reflect::set(&options_obj, &"useGrouping".into(), &group.into())?;
        }

        let locales_str = match &options.locale {
            Some(locale) => locale,
            _ => &"en-US".to_string(),
        };
        let locales_arr = Array::of1(&locales_str.into());

        Ok(FormatArgs {
            locales_arr,
            options_obj,
        })
    }
}

// Types //

#[ts]
struct BaseFormatOptions {
    /// The number of decimal places to display.
    ///
    /// @default compactDisplay ? 0 : this.decimals
    decimals: Option<u8>,

    /// Whether to include trailing zeros.
    ///
    /// @default `false`
    trailing_zeros: Option<bool>,

    /// The rounding mode to use.
    ///
    /// `"ceil"`:
    ///
    /// Round toward +∞. Positive values round up. Negative values round "more
    /// positive".
    ///
    /// `"floor"`:
    ///
    /// Round toward -∞. Positive values round down. Negative values round "more
    /// negative".
    ///
    /// `"expand"`:
    ///
    /// round away from 0. The magnitude of the value is always increased by
    /// rounding. Positive values round up. Negative values round "more
    /// negative".
    ///
    /// `"trunc"`:
    ///
    /// Round toward 0. This magnitude of the value is always reduced by
    /// rounding. Positive values round down. Negative values round "less
    /// negative".
    ///
    /// `"halfCeil"`:
    ///
    /// ties toward +∞. Values above the half-increment round like `ceil`
    /// (towards +∞), and below like `floor` (towards -∞). On the
    /// half-increment, values round like `ceil`.
    ///
    /// `"halfFloor"`:
    ///
    /// Ties toward -∞. Values above the half-increment round like `ceil`
    /// (towards +∞), and below like `floor` (towards -∞). On the
    /// half-increment, values round like `floor`.
    ///
    /// `"halfExpand"`:
    ///
    /// Ties away from 0. Values above the half-increment round like `expand`
    /// (away from zero), and below like `trunc` (towards 0). On the
    /// half-increment, values round like `expand`.
    ///
    /// `"halfTrunc"`:
    ///
    /// Ties toward 0. Values above the half-increment round like `expand` (away
    /// from zero), and below like `trunc` (towards 0). On the half-increment,
    /// values round like `trunc`.
    ///
    /// `"halfEven"`:
    ///
    /// Ties towards the nearest even integer. Values above the half-increment
    /// round like `expand` (away from zero), and below like `trunc` (towards
    /// 0). On the half-increment values round towards the nearest even digit.
    ///
    /// @default "halfExpand"
    ///
    /// @see [MDN - NumberFormat - roundingMode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#roundingmode)
    #[ts(
        type = "'ceil' | 'floor' | 'expand' | 'trunc' | 'halfCeil' | 'halfFloor' | 'halfExpand' | 'halfTrunc' | 'halfEven'"
    )]
    rounding: Option<String>,

    /// The locale to use for formatting.
    ///
    /// @default "en-US"
    ///
    /// @see [Unicode BCP 47 Locale Identifier](https://unicode.org/reports/tr35/#Unicode_locale_identifier)
    #[ts(type = "Intl.UnicodeBCP47LocaleIdentifier")]
    locale: Option<String>,

    /// Whether to use grouping separators, i.e. commas.
    ///
    /// @default true
    ///
    /// @see [MDN - NumberFormat - useGrouping](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#usegrouping)
    group: Option<bool>,
}

impl Default for IBaseFormatOptions {
    fn default() -> Self {
        IBaseFormatOptions {
            obj: Object::default().into(),
        }
    }
}

struct FormatArgs {
    locales_arr: Array,
    options_obj: Object,
}

#[ts(extends = IBaseFormatOptions)]
struct FormatOptions {
    /// The compact display mode to use, if any.
    ///
    /// @default undefined
    ///
    /// @see [MDN - NumberFormat - compactDisplay](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#compactdisplay)
    #[ts(type = "Intl.NumberFormatOptions['compactDisplay']")]
    compact_display: Option<String>,

    /// Whether to format the number as a percentage.
    ///
    /// @example
    /// ```ts
    /// const rate = parseFixed(0.1325);
    /// console.log(`Rate: ${rate.format({ percent: true, decimals: 2 })}`);
    /// // => Rate: 13.25%
    /// ```
    percent: Option<bool>,
}

impl Default for IFormatOptions {
    fn default() -> Self {
        IFormatOptions {
            obj: IBaseFormatOptions::default(),
        }
    }
}

#[ts(extends = IBaseFormatOptions)]
struct CurrencyFormatOptions {
    /// The currency to use for formatting.
    ///
    /// @default "USD"
    ///
    /// @see [ISO 4217 Currency Codes](https://en.wikipedia.org//wiki/ISO_4217#List_of_ISO_4217_currency_codes)
    currency: Option<String>,

    /// How to display the currency in currency formatting.
    ///
    /// @see [MDN - NumberFormat - currencydisplay](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#currencydisplay)
    #[ts(type = "'symbol' | 'narrowSymbol' | 'code' | 'name'")]
    display: Option<String>,

    /// Whether to use compact notation for currency formatting.
    compact: Option<bool>,
}

impl Default for ICurrencyFormatOptions {
    fn default() -> Self {
        ICurrencyFormatOptions {
            obj: IBaseFormatOptions::default(),
        }
    }
}
