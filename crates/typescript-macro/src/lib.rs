extern crate proc_macro;

use heck::ToLowerCamelCase;
use proc_macro::TokenStream;
use quote::{format_ident, quote};
use syn::{parse_macro_input, Data, DeriveInput, Fields, Lit, Meta, NestedMeta};

/// A non-exhaustive list of common types and their corresponding TypeScript types.
/// This is used if no custom type is specified with the `ts_interface` attribute.
fn to_ts_type(rust_type: &str) -> &str {
    match rust_type {
        "BigInt" => "bigint",
        "Boolean" => "boolean",
        "JsString" | "String" => "string",
        "Number" => "number",
        "Object" => "object",
        _ => rust_type,
    }
}

/// Derive the TypeScript interface, JS bindings, and `From` implementation for
/// a struct.
/// 
/// Each field of the struct will be included in a TypeScript interface
/// definition with camelCase field names and the corresponding TypeScript
/// types.
/// 
/// # Example
/// 
/// ```rust
/// #[derive(Typescript)]
/// struct Token {
///     symbol: String,
///     decimals: Number,
///     total_supply: BigInt,
/// }
/// 
/// pub fn handle_token(token: JsToken) {
///     let token = Token::from(token);
///     let symbol = token.symbol;
///     let decimals = token.decimals;
///     let total_supply = token.total_supply;
/// }
/// ```
/// 
/// Under the hood, this will generate a TypeScript interface, a JS binding (
/// the name of the struct prefixed with `"Js"`):
/// 
/// ```typescript
/// interface Token {
///    symbol: string;
///    decimals: number;
///    totalSupply: bigint;
/// }
/// ```
/// 
/// And a `From` implementation for the JS binding:
/// 
/// ```rust
/// impl From<JsToken> for Token { ... }
/// ```
/// 
/// The struct field types must implement `From<JsValue>` to be converted from
/// the JS binding to the Rust struct.
/// 
/// ## Nested Structs
/// 
/// To nest structs, the `Typescript` derive must be applied to each struct
/// individually. Then, the JS bindings can be used as fields in other structs.
/// 
/// The `ts_interface` attribute can be used to customize the TypeScript type
/// and field name for a field. This is useful for fields that are not directly
/// mappable to a TypeScript type, such as a nested struct.
/// 
/// ```rust
/// #[derive(Typescript)]
/// struct Order {
///     account: String,
///     amount: BigInt,
/// 
///    #[ts_interface(type = "Token")]
///     token: JsToken,
/// }
#[proc_macro_derive(Typescript, attributes(ts_interface))]
pub fn ts_interface_derive(input: TokenStream) -> TokenStream {
    let input = parse_macro_input!(input as DeriveInput);
    let struct_name = input.ident;
    let struct_name_str = struct_name.to_string();
    let const_name = format_ident!("TS_INTERFACE_{}", struct_name_str.to_uppercase());
    let js_name = format_ident!("Js{}", struct_name);
    let mut ts_fields = vec![];
    let mut field_conversions = vec![];

    // Ensure the input is a struct
    let struct_data = match input.data {
        Data::Struct(data) => data,
        _ => panic!("TsInterface can only be derived for structs"),
    };

    // Ensure the struct has named fields
    let fields = match struct_data.fields {
        Fields::Named(fields) => fields.named,
         _ => panic!("TsInterface can only be derived for structs with named fields"),
    };

    // Iterate over the fields of the struct to generate entries for the
    // TypeScript interface and the `TryFrom` implementation
    for field in fields {
        let field_name = field.ident.as_ref().unwrap();
        let field_type = &field.ty;
        let mut ts_field_name = field_name
            .to_string()
            .to_lower_camel_case();
        let mut ts_field_type = to_ts_type(&format!("{}", quote! { #field_type })).to_string();

        // Look for a `ts_interface` attribute on the field
        field
            .attrs
            .iter()
            .find(|attr| attr.path.is_ident("ts_interface"))
            // If found, parse the attribute and extract the `type` and `name` values
            .map(|attr| {
                let meta = attr.parse_meta().unwrap();
    
                // Ensure the attribute is a list
                let meta_list = match meta {
                    Meta::List(list) => list,
                    _ => panic!("ts_interface attribute must be a list, e.g. #[ts_interface(type = \"PoolInfo\")]"),
                };
    
                // Iterate over the name-value pairs in the list and extract the values
                for meta in meta_list.nested {
                    match meta {
                        NestedMeta::Meta(Meta::NameValue(entry)) => {
                            let key = entry.path.get_ident().unwrap().to_string();
                            match key.as_str() {
                                "type" => {
                                    ts_field_type = match entry.lit {
                                        Lit::Str(lit_str) => lit_str.value(),
                                        _ => panic!("type must be a string literal"),
                                    };
                                }
                                "name" => {
                                    ts_field_name = match entry.lit {
                                        Lit::Str(lit_str) => lit_str.value(),
                                        _ => panic!("name must be a string literal"),
                                    };
                                }
                                unknown => panic!("Unknown ts_interface attribute: {}. Options are: type, name", unknown),
                            }
                        }
                        _ => panic!("ts_interface attribute must be a list of name-value pairs, e.g. #[ts_interface(type = \"PoolInfo\")]"),
                    }

                }
        
            });

        // Add an entry for the TypeScript interface
        ts_fields.push(format!("{}: {}", ts_field_name, ts_field_type));

        // Add an entry for the `TryFrom` implementation using reflection
        let field_conversion = quote! {
            #field_name: js_sys::Reflect::get(&js_value.obj, &wasm_bindgen::JsValue::from_str(#ts_field_name))
                .unwrap()
                .into()
        };
    
        field_conversions.push(field_conversion);
    }

    let ts_interface_def = format!(
r#"interface {struct_name} {{
    {}
}}"#,
        ts_fields.join("\n    ")
    );

    let expanded = quote! {
        #[wasm_bindgen(typescript_custom_section)]
        const #const_name: &'static str = #ts_interface_def;

        #[wasm_bindgen]
        extern "C" {
            #[wasm_bindgen(typescript_type = #struct_name_str)]
            pub type #js_name;
        }

        impl From<#js_name> for #struct_name {
            fn from(js_value: #js_name) -> Self {
                Self {
                    #(#field_conversions),*
                }
            }
        }
    };

    TokenStream::from(expanded)
}