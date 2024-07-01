extern crate proc_macro;

use heck::{ToLowerCamelCase, ToPascalCase};
use proc_macro::TokenStream;
use quote::{format_ident, quote};
use syn::{
    parse::{Parse, ParseStream},
    parse_macro_input,
    punctuated::Punctuated,
    Error, Fields, FieldsNamed, Ident, ItemStruct, Lit, Meta, MetaNameValue, NestedMeta, Token,
};
use ts_type::{ts_type, ToTsType, TsType};

/// A helper designed for use within procedural macros that constructs a token
/// stream that directly expands into a formatted [`compile_error!`] at the
/// location where the procedural macro is invoked.
///
/// [`compile_error!`]: https://doc.rust-lang.org/std/macro.compile_error.html
macro_rules! macro_panic {
    ($($arg:tt)*) => {{
        let msg = format!($($arg)*);
        return TokenStream::from(quote! {
            compile_error!(#msg);
        });
    }};
}

struct TsArgs {
    name: Option<Ident>,
    extends: Option<Punctuated<Ident, Token![,]>>,
}

impl Parse for TsArgs {
    fn parse(input: ParseStream) -> Result<Self, Error> {
        let mut args = TsArgs {
            name: None,
            extends: None,
        };

        while !input.is_empty() {
            let key = input.parse::<Ident>()?;
            input.parse::<Token![=]>()?;

            match key.to_string().as_str() {
                "name" => args.name = Some(input.parse()?),
                "extends" => args.extends = Some(input.parse_terminated(Ident::parse)?),
                _ => {
                    return Err(Error::new(
                        key.span(),
                        &format!("Unknown argument: `{}`", key),
                    ))
                }
            }

            if !input.is_empty() {
                input.parse::<Token![,]>()?;
            }
        }

        Ok(args)
    }
}

/// Generate TypeScript interface bindings for a Rust struct.
///
/// Each field of the struct will be included in a TypeScript interface
/// definition with camelCase field names and the corresponding TypeScript
/// types.
///
/// # Example
///
/// ```rust
/// #[ts]
/// struct Token {
///     symbol: String,
///     /// Defaults to 18
///     decimals: Option(Number),
///     total_supply: BigInt,
/// }
///
/// #[wasm_bindgen]
/// pub fn handle_token(token: IToken) {
///     // Access fields via JS bindings
///     let symbol = token.symbol();
///     let decimals = token.decimals().unwrap_or(18.into());
///     let total_supply = token.total_supply();
///
///     // Convert the JS binding into the Rust struct via `parse`
///     let token = token.parse();
///
///     // Convert the Rust struct into the JS binding via `Into` / `From`
///     let token: Token = token.into();
/// }
/// ```
///
/// Under the hood, this will generate a TypeScript interface with JS bindings:
///
/// ```typescript
/// interface IToken {
///   symbol: string;
///   /**
///    * Defaults to 18
///    */
///   decimals?: number | undefined;
///   totalSupply: bigint;
/// }
/// ```
///
/// ## Nested Structs
///
/// To nest structs, the `ts` attribute must be applied to each struct
/// individually. Then, the bindings can be used as fields in other structs.
///
/// ```rust
/// #[ts]
/// struct Order {
///     account: String,
///     amount: BigInt,
///     token: IToken, // Binding to the `Token` struct
/// }
/// ```
///
/// ## Arguments
///
/// The `ts` attribute accepts the following arguments when applied to a struct:
///
/// - `name`: The name of the TypeScript interface and binding. Defaults to
///   `I{StructName}`.
/// - `extends`: A comma-separated list of interfaces to extend.
///
/// ```rust
/// #[ts(name = JsToken)]
/// struct Token {
///     symbol: String,
///     decimals: Number,
///     total_supply: BigInt,
/// }
///
/// #[ts(name = JsShareToken, extends = JsToken)]
/// struct ShareToken {
///     price: BigInt,
/// }
///
/// #[wasm_bindgen]
/// pub fn handle_token(token: JsShareToken) {
///     let symbol = token.symbol(); // Access base struct fields
/// }
/// ```
///
/// This will generate the following TypeScript interfaces:
///
/// ```typescript
/// interface JsToken {
///   // ...
/// }
/// interface JsShareToken extends JsToken {
///   // ...
/// }
/// ```
///
/// ## Field Attributes
///
/// To customize the TypeScript interface, the `ts` attribute can be applied to
/// individual fields of the struct. The attribute accepts the following
/// arguments when applied to a field:
///
/// - `name`: The  name of the field in the TypeScript interface as a string. Defaults to the
///  camelCase version of the Rust field name.
/// - `type`: The TypeScript type of the field as a string. Defaults to best-effort
///   inferred.
/// - `optional`: Whether the field is optional in TypeScript. Defaults to
///   inferred.
///
/// ```rust
/// #[ts]
/// struct Params {
///     #[ts(name = "specialCASING")]
///     special_casing: String,
///
///    #[ts(type = "`0x${string}`")]
///    special_format: String,
///
///     // The `Option` type is inferred as optional
///     optional_field_and_value: Option<String>,
///
///     #[ts(optional = false)]
///     optional_value: Option<String>,
///
///     // CAUTION: This will make the field optional in TypeScript, but Rust
///     // will still expect a String, requiring manual runtime checks.
///     #[ts(optional = true)]
///     optional_field: String,
/// }
/// ```
///
/// This will generate the following TypeScript interface:
///
/// ```typescript
/// interface IParams {
///    specialCASING: string;
///    specialFormat: `0x${string}`;
///    optionalFieldAndValue?: string | undefined;
///    optionalField?: string;
///    optionalValue: string | undefined;
/// }
/// ```
#[proc_macro_attribute]
pub fn ts(attr: TokenStream, input: TokenStream) -> TokenStream {
    let args = parse_macro_input!(attr as TsArgs);
    let item = parse_macro_input!(input as ItemStruct);

    // Ensure the input is a struct with named fields
    let (struct_name, fields) = match &item {
        ItemStruct {
            ident,
            fields: Fields::Named(fields),
            ..
        } => (ident, fields),
        _ => macro_panic!("The `ts` attribute can only be used on structs with named fields."),
    };

    let ts_name = match args.name {
        Some(name) => format_ident!("{}", name),
        None => format_ident!("I{}", struct_name),
    };
    let mut ts_fields = vec![];
    let mut field_conversions = vec![];
    let mut field_getters = vec![];
    let mut processed_fields = vec![];

    // Iterate over the fields of the struct to generate entries for the
    // TypeScript interface and the field conversions
    for field in &fields.named {
        let field_type = &field.ty;
        let field_name = field.ident.as_ref().unwrap();
        let mut field = field.clone();
        let mut doc_lines = vec![];
        let mut is_optional = false;

        // Convert the Rust field name to a camelCase TypeScript field name
        let mut ts_field_name = format_ident!("{}", field_name.to_string().to_lower_camel_case());

        // Convert the Rust type to a TypeScript type
        let mut ts_field_type = match field_type.to_ts_type() {
            Ok(ts_type) => {
                // if the type is `undefined` or unioned with `undefined`, make
                // it optional
                let undefined = ts_type!(undefined);
                if ts_type == undefined || ts_type.is_union_with(&undefined) {
                    is_optional = true;
                }

                ts_type
            }
            Err(err) => macro_panic!("{}", err),
        };

        // Iterate over the attributes of the field to extract the `ts`
        // attribute and doc comments
        let mut i = 0;
        while i < field.attrs.len() {
            let attr = &field.attrs[i];

            // Collect doc comments
            if attr.path.is_ident("doc") {
                if let Meta::NameValue(MetaNameValue {
                    lit: Lit::Str(lit_str),
                    ..
                }) = attr.parse_meta().unwrap()
                {
                    doc_lines.push(lit_str.value());
                }
                field.attrs.remove(i);
                continue;
            }

            if !attr.path.is_ident("ts") {
                i += 1;
                continue;
            }

            // Ensure the attribute is a list
            let args_list = match attr.parse_meta().unwrap() {
                Meta::List(list) => list,
                _ => macro_panic!(
                    "`ts` attribute for field `{}` must be a list, e.g. `#[ts(type = \"{}\")]`.",
                    field_name.to_string(),
                    field_name.to_string().to_pascal_case(),
                ),
            };

            // Iterate over the items in the list and extract the values
            for arg in args_list.nested {
                // Ensure the items in the list are name-value pairs
                match arg {
                        NestedMeta::Meta(Meta::NameValue(arg)) => {
                            let key = arg.path.get_ident().unwrap().to_string();

                            // Match the key to extract the value
                            match key.as_str() {
                                "name" => {
                                    match arg.lit {
                                        Lit::Str(lit_str) => ts_field_name = format_ident!("{}", lit_str.value()),
                                        _ => macro_panic!("`name` for field `{field_name}` must be a string literal."),
                                    };
                                }
                                "type" => {
                                    match arg.lit {
                                        Lit::Str(lit_str) => {
                                            let ts_type = TsType::from_ts_str(lit_str.value().as_str());
                                            ts_field_type = match ts_type {
                                                Ok(ts_type) => ts_type,
                                                Err(err) => macro_panic!("{}", err),
                                            }
                                        }
                                        _ => macro_panic!("`type` for field `{field_name}` must be a string literal."),
                                    };
                                }
                                "optional" => {
                                    match arg.lit {
                                        Lit::Bool(bool_lit) => is_optional = bool_lit.value,
                                        _ => macro_panic!("`optional` for field `{field_name}` must be a boolean literal."),
                                    };
                                }
                                unknown => macro_panic!(
                                    r#"Unknown argument for field `{field}`: `{attr}`. Options are:
    - type: The TypeScript type of the field
    - name: The name of the field in the TypeScript interface
    - optional: Whether the field is optional in TypeScript"#,
                                    field = field_name.to_string(),
                                    attr = unknown
                                ),
                            }
                        }
                        _ => macro_panic!(
                            "`ts` attribute for field `{}` must be a list of name-value pairs, e.g. `#[ts(type = \"{}\")]`.",
                            field_name.to_string(),
                            field_name.to_string().to_pascal_case()
                        )
                    };
            }

            // Remove the attribute from the field
            field.attrs.remove(i);
        }

        // Add an entry for the TypeScript interface
        let optional_char = match is_optional {
            true => "?",
            false => "",
        };
        let ts_doc_comment = match doc_lines.is_empty() {
            true => "".to_string(),
            false => format!("/**\n   * {}\n   */\n  ", doc_lines.join("\n   * ")),
        };
        ts_fields.push(format!(
            "{ts_doc_comment}{ts_field_name}{optional_char}: {ts_field_type};"
        ));

        // Add a getter for the field to the binding
        let rs_doc_comment = doc_lines.iter().map(|line| quote! { #[doc = #line] });
        field_getters.push(quote! {
            #(#rs_doc_comment)*
            #[wasm_bindgen(method, getter = #ts_field_name)]
            pub fn #field_name(this: &#ts_name) -> #field_type;
        });

        // Add an entry for the `From` implementation using reflection
        field_conversions.push(quote! {
            #field_name: js_value.#field_name()
        });

        // Add the processed field to the struct
        processed_fields.push(field);
    }

    // Generate the TypeScript interface definition
    let const_name = format_ident!("{}", &ts_name.to_string().to_uppercase());
    let (extends_clause, extends) = match args.extends {
        Some(extends) => (
            format!(
                " extends {}",
                extends
                    .iter()
                    .map(|base| base.to_string())
                    .collect::<Vec<String>>()
                    .join(", ")
            ),
            extends.into_iter().collect(),
        ),
        None => ("".to_string(), vec![]),
    };
    let ts_definition = format!(
        r#"interface {ts_name}{extends_clause} {{
  {}
}}"#,
        ts_fields.join("\n  ")
    );

    // Prep the expanded struct with the processed attributes removed
    let processed_struct = ItemStruct {
        fields: Fields::Named(FieldsNamed {
            named: Punctuated::from_iter(processed_fields.into_iter()),
            brace_token: fields.brace_token,
        }),
        ..item.clone()
    };

    let expanded = quote! {
        #[wasm_bindgen(typescript_custom_section)]
        const #const_name: &'static str = #ts_definition;

        #[wasm_bindgen]
        extern "C" {
            #[wasm_bindgen(typescript_type = #ts_name, #(extends = #extends),*)]
            pub type #ts_name;

            #(#field_getters)*
        }

        impl From<#ts_name> for #struct_name {
            /// Convert the JS binding into the Rust struct
            fn from(js_value: #ts_name) -> Self {
                js_value.parse()
            }
        }

        impl #ts_name {
            /// Parse the JS binding into its Rust struct
            pub fn parse(&self) -> #struct_name {
                let js_value = self;
                #struct_name {
                    #(#field_conversions),*
                }
            }
        }

        #[allow(unused)]
        #processed_struct
    };

    TokenStream::from(expanded)
}
