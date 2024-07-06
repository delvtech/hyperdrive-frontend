use std::{fmt, panic::Location, str::FromStr, vec};

mod macros;

use lazy_static::lazy_static;
use regex::Regex;
use syn::{GenericArgument, PathArguments, Type};

lazy_static! {
    /// A regex to match an `Option` type and capture the inner type.
    static ref OPTION_REGEX: Regex = Regex::new(r"^Option<(.+)>$").unwrap();
    /// A regex to match a `Vec` type and capture the inner type.
    static ref VEC_REGEX: Regex = Regex::new(r"^Vec<(.+)>$").unwrap();
}

/// A TypeScript type.
///
/// This type is used to represent TypeScript types in a Rust-friendly way.
///
/// Note: This is not an exhaustive representation of TypeScript types.
#[derive(Clone, Eq, PartialEq, Hash)]
pub enum TsType {
    /// A single type, e.g., `string`.
    Base(String),
    Array(Box<TsType>),
    Paren(Box<TsType>),
    Tuple(Vec<TsType>),
    Union(Vec<TsType>),
    Intersection(Vec<TsType>),
    /// A generic type with arguments, e.g., `Set<string, number>`.
    Generic(Box<TsType>, Vec<TsType>),
    /// A type with an indexing key type, e.g., `Car["make"]`.
    IndexedAccess(Box<TsType>, Box<TsType>),
}

impl Default for TsType {
    fn default() -> Self {
        TsType::Base("any".to_string())
    }
}

// Error //

pub struct TsTypeError {
    pub message: String,
    pub location: String,
}

impl fmt::Display for TsTypeError {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(
            f,
            "TypeError: {}\n    Location: {}",
            self.message, self.location
        )
    }
}

impl fmt::Debug for TsTypeError {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(
            f,
            "TypeError: {}\n    Location: {}",
            self.message, self.location
        )
    }
}

// Methods //

impl TsType {
    /// Find out if this type is a union with another type
    pub fn is_union_with(&self, other: &Self) -> bool {
        match self {
            Self::Union(types) => types.iter().any(|ty| ty == other),
            _ => false,
        }
    }

    /// Find out if this type contains another type e.g. `(string | number)[]`
    /// contains `string`
    pub fn contains(&self, other: &Self) -> bool {
        match self {
            Self::Base(name) => match other {
                // compare the names of 2 base types
                Self::Base(other_name) => name == other_name,
                // a base type can't contain anything other than itself
                _ => false,
            },
            Self::Array(inner) => inner.contains(other),
            Self::Paren(inner) => inner.contains(other),
            Self::IndexedAccess(base, key) => base.contains(other) || key.contains(other),
            Self::Generic(base, args) => {
                if base.contains(other) {
                    return true;
                }
                for arg in args {
                    if arg.contains(other) {
                        return true;
                    }
                }
                false
            }
            Self::Union(types) => types.iter().any(|ty| ty.contains(other)),
            Self::Intersection(types) => types.iter().any(|ty| ty.contains(other)),
            Self::Tuple(types) => types.iter().any(|ty| ty.contains(other)),
        }
    }

    /// convert this type to a generic with arguments
    pub fn as_generic(self, args: Vec<Self>) -> Self {
        match self {
            Self::Base(_) => Self::Generic(Box::new(self), args),
            Self::IndexedAccess(_, _) => Self::Generic(Box::new(self), args),
            _ => panic!("Type can't be generic."),
        }
    }

    /// convert this type to an indexed access type with a key
    pub fn property(self, key: Self) -> Self {
        Self::IndexedAccess(Box::new(self), Box::new(key))
    }

    /// place this type in an array
    pub fn in_array(self) -> Self {
        Self::Array(Box::new(self))
    }

    /// place this type in parentheses
    pub fn in_parens(self) -> Self {
        match self {
            Self::Intersection(_) => Self::Paren(Box::new(self)),
            Self::Union(_) => Self::Paren(Box::new(self)),
            // parens have no effect on base types
            _ => self,
        }
    }

    /// union this type with another
    pub fn or(self, other: Self) -> Self {
        match self {
            Self::Union(mut types) => match other {
                // a | b or c | d -> a | b | c | d
                Self::Union(mut other_types) => {
                    types.append(&mut other_types);
                    Self::Union(types)
                }
                // a | b or _ => a | b | _
                _ => {
                    types.push(other);
                    Self::Union(types)
                }
            },
            _ => match other {
                // _ or a | b -> _ | a | b
                Self::Union(mut other_types) => {
                    other_types.insert(0, self);
                    Self::Union(other_types)
                }
                // _ or _ -> _ | _
                _ => Self::Union(vec![self, other]),
            },
        }
    }

    /// intersect this type with another
    pub fn and(self, other: Self) -> Self {
        match self {
            Self::Intersection(mut types) => match other {
                // a & b and c & d -> a & b & c & d
                Self::Intersection(mut other_types) => {
                    types.append(&mut other_types);
                    Self::Intersection(types)
                }
                // a & b and _ -> a & b & _
                _ => {
                    types.push(other);
                    Self::Intersection(types)
                }
            },
            _ => match other {
                // _ and a & b -> _ & a & b
                Self::Intersection(mut types) => {
                    types.insert(0, self);
                    Self::Intersection(types)
                }
                // _ and _ -> _ & _
                _ => Self::Intersection(vec![self, other]),
            },
        }
    }

    /// Attempts to join this type with a right hand type.
    /// This is used during parsing and may not be intuitive for general use.
    pub fn join(self, other: Self) -> Result<Self, &'static str> {
        match self {
            Self::Base(mut str) => match other {
                // a join b -> ab
                Self::Base(other_str) => {
                    str.push_str(&other_str);
                    Ok(Self::Base(str))
                }
                // a join _ => _ join a
                _ => other.join(Self::Base(str)),
            },
            // a<b> join c -> a<b, c>
            Self::Generic(ty, mut args) => {
                args.push(other);
                Ok(Self::Generic(ty, args))
            }
            // a[b | c] join d -> a[b | c | d]
            Self::IndexedAccess(object, key) => {
                let key_inner = *key;
                Ok(Self::IndexedAccess(
                    object,
                    Box::new(key_inner.join(other)?),
                ))
            }
            Self::Union(mut types) => {
                match other {
                    // a | b join c | d -> a | b | c | d
                    Self::Union(mut other_types) => {
                        types.append(&mut other_types);
                        Ok(Self::Union(types))
                    }
                    // a | b join _ => a | b | _
                    _ => {
                        types.push(other);
                        Ok(Self::Union(types))
                    }
                }
            }
            Self::Intersection(mut types) => {
                match other {
                    // a & b join c & d -> a & b & c & d
                    Self::Intersection(mut other_types) => {
                        types.append(&mut other_types);
                        Ok(Self::Intersection(types))
                    }
                    // a & b join c | d -> (a & b & c) | d
                    Self::Union(mut union_types) => {
                        let first_member = union_types.remove(0);
                        let intersection = Self::Intersection(types);
                        let intersected_member = intersection.and(first_member);
                        union_types.insert(0, intersected_member);
                        Ok(Self::Union(union_types))
                    }
                    // a & b join _ -> a & b & _
                    _ => {
                        types.push(other);
                        Ok(Self::Intersection(types))
                    }
                }
            }
            // [a, b] join c -> [a, b, c]
            Self::Tuple(mut types) => {
                types.push(other);
                Ok(Self::Tuple(types))
            }
            // (a | b) join c -> (a | b | c)
            Self::Paren(inner) => inner.join(other),
            _ => Err("Type does not support joining."),
        }
    }

    /// Attempts to parse a TypeScript type from a typescript string.
    ///
    /// Returns a [`TsTypeError`] if the string is empty or contains an unexpected character.
    ///
    /// # Example
    ///
    /// ```
    /// use ts_type::TsType;
    ///
    /// let type1 = TsType::from_ts_str("string | number").unwrap();
    /// let type2 = TsType::Union(vec![
    ///     TsType::Base("string".to_string()),
    ///     TsType::Base("number".to_string()),
    /// ])
    /// assert_eq!(type1, type2);
    /// ```
    #[track_caller]
    pub fn from_ts_str(str: &str) -> Result<Self, TsTypeError> {
        let location = Location::caller();

        if str.is_empty() {
            return Err(type_error_at!(location, "Empty string."));
        }

        let mut stacks: Vec<Vec<Self>> = vec![];
        let mut pending_stack: Vec<Self> = vec![];
        let mut pending_type: Option<Self> = None;
        let mut ambiguous_bracket = false;
        let chars = str.trim().chars();

        for char in chars {
            match char {
                ' ' => continue,
                '|' => {
                    // push pending as union or an empty union since types can
                    // start with `|`
                    let member = match pending_type {
                        Some(ty) => vec![ty],
                        None => vec![],
                    };
                    let mut _union = Self::Union(member);
                    pending_stack.push(_union);
                    pending_type = None;
                }
                '&' => {
                    // push pending as union or an empty union since types can
                    // start with `&`
                    let member = match pending_type {
                        Some(ty) => vec![ty],
                        None => vec![],
                    };
                    let intersection = Self::Intersection(member);
                    pending_stack.push(intersection);
                    pending_type = None;
                }
                '<' => {
                    // push pending as generic
                    if pending_type.is_none() {
                        return Err(type_error_at!(location, "Unexpected `<` found."));
                    }
                    let inner = pending_type.unwrap();
                    let generic = inner.as_generic(vec![]);
                    pending_stack.push(generic);
                    pending_type = None;
                }
                ',' => {
                    // collapse the stack to the nearest comma delimited type,
                    // joining the pending type with the top of the stack
                    if pending_type.is_none() {
                        return Err(type_error_at!(location, "Unexpected `,` found."));
                    }
                    let mut inner = pending_type.unwrap();

                    loop {
                        let top = pending_stack.pop().unwrap();
                        inner = top.join(inner).unwrap();

                        match inner {
                            Self::Generic(_, _) => break,
                            Self::IndexedAccess(_, _) => break,
                            Self::Tuple(_) => break,
                            _ => {}
                        }

                        if pending_stack.is_empty() {
                            return Err(type_error_at!(location, "Unexpected `,` found."));
                        }
                    }
                    pending_stack.push(inner);
                    pending_type = None;
                }
                '>' => {
                    // collapse the stack to the nearest generic, joining the
                    // pending type with the top of the stack
                    if pending_type.is_none() {
                        return Err(type_error_at!(location, "Unexpected `>` found."));
                    };
                    let mut ty = pending_type.unwrap();
                    loop {
                        let top = pending_stack.pop().unwrap();
                        ty = top.join(ty).unwrap();

                        if let Self::Generic(_, _) = ty {
                            break;
                        }

                        if pending_stack.is_empty() {
                            return Err(type_error_at!(location, "Unexpected `,` found."));
                        }
                    }
                    pending_type = Some(ty);
                }
                '[' => {
                    if pending_type.is_none() {
                        // If there's no pending type, open a tuple
                        let tuple = Self::Tuple(vec![]);
                        pending_stack.push(tuple);
                    } else {
                        // Otherwise, we'll have to wait to see if it's the
                        // start of an array or an indexed access type
                        ambiguous_bracket = true;
                    }
                }
                ']' => {
                    if pending_type.is_none() {
                        return Err(type_error_at!(location, "Unexpected `]` found."));
                    };
                    let mut ty = pending_type.unwrap();

                    // If there's an ambiguous bracket, it's an array, otherwise
                    // it's the end of a bracketed type on the stack.
                    if ambiguous_bracket {
                        pending_type = Some(ty.in_array());
                        ambiguous_bracket = false;
                    } else {
                        loop {
                            let top = pending_stack.pop().unwrap();
                            ty = top.join(ty).unwrap();

                            match ty {
                                Self::IndexedAccess(_, _) => break,
                                Self::Tuple(_) => break,
                                _ => {}
                            }

                            if pending_stack.is_empty() {
                                return Err(type_error_at!(location, "Unexpected `,` found."));
                            }
                        }
                        pending_type = Some(ty);
                    }
                }
                '(' => {
                    if pending_type.is_some() {
                        return Err(type_error_at!(location, "Unexpected `(` found."));
                    };

                    // push the pending stack and start a new one for the nested type
                    stacks.push(pending_stack);
                    pending_stack = vec![];
                }
                ')' => {
                    // collapse all pending types and pop the stack to exit the
                    // nested type
                    if pending_type.is_none() {
                        return Err(type_error_at!(location, "Unexpected `)` found."));
                    };
                    let mut inner = pending_type.unwrap();

                    for _ in 0..pending_stack.len() {
                        let top = pending_stack.pop().unwrap();
                        inner = top.join(inner).unwrap();
                    }

                    pending_type = Some(inner.in_parens());
                    pending_stack = stacks.pop().unwrap();
                }
                part => {
                    match pending_type {
                        Some(pending) => {
                            // If there's a pending type, join it with the next part
                            let next = Self::Base(part.to_string());
                            pending_type = Some(pending.join(next).unwrap());
                        }
                        None => {
                            // Otherwise, start a new pending type
                            pending_type = Some(Self::Base(part.to_string()));
                        }
                    }
                }
            }
        }

        let mut final_ty = pending_type.unwrap_or_else(|| pending_stack.pop().unwrap());

        while let Some(top) = pending_stack.pop() {
            final_ty = top.join(final_ty).unwrap();
        }

        Ok(final_ty)
    }
}

// Formatting //

impl fmt::Display for TsType {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        match self {
            TsType::Base(name) => write!(f, "{}", name.trim()),
            TsType::Array(ty) => match ty.as_ref() {
                // Wrap the inner type in parentheses if it's a union or intersection
                // a | b[] -> (a | b)[]
                TsType::Union(_) => write!(f, "({})[]", ty),
                TsType::Intersection(_) => write!(f, "({})[]", ty),
                _ => write!(f, "{}[]", ty.to_string()),
            },
            TsType::Paren(ty) => write!(f, "({})", ty.to_string()),
            TsType::IndexedAccess(ty, key_ty) => {
                write!(f, "{}[{}]", ty.to_string(), key_ty.to_string())
            }
            TsType::Generic(name, args) => {
                let args = args
                    .iter()
                    .map(|ty| ty.to_string())
                    .collect::<Vec<_>>()
                    .join(", ");
                write!(f, "{}<{}>", name, args)
            }
            TsType::Union(types) => {
                let types = types
                    .iter()
                    .map(|ty| match ty {
                        // Wrap the inner type in parentheses if it's a intersection.
                        // a & b | c -> (a & b) | c
                        TsType::Intersection(_) => format!("({})", ty),
                        _ => ty.to_string(),
                    })
                    .collect::<Vec<_>>()
                    .join(" | ");
                write!(f, "{}", types)
            }
            TsType::Intersection(types) => {
                let types = types
                    .iter()
                    .map(|ty| ty.to_string())
                    .collect::<Vec<_>>()
                    .join(" & ");
                write!(f, "{}", types)
            }
            TsType::Tuple(types) => {
                let types = types
                    .iter()
                    .map(|ty| ty.to_string())
                    .collect::<Vec<_>>()
                    .join(", ");
                write!(f, "[{}]", types)
            }
        }
    }
}

impl fmt::Debug for TsType {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        match self {
            TsType::Base(name) => write!(f, "Base({})", name.trim()),
            TsType::Array(ty) => write!(f, "Array({:?})", ty),
            TsType::Paren(ty) => write!(f, "Paren({:?})", ty),
            TsType::IndexedAccess(ty, key_ty) => {
                write!(f, "IndexedAccess({:?}[{:?}])", ty, key_ty)
            }
            TsType::Generic(name, args) => {
                write!(f, "Generic(")?;
                write!(f, "{:?}<", name)?;

                for (i, arg) in args.iter().enumerate() {
                    write!(f, "{:?}", arg)?;
                    if i < args.len() - 1 {
                        write!(f, ", ")?;
                    }
                }

                write!(f, ">)")
            }
            TsType::Union(types) => {
                write!(f, "Union(")?;

                for (i, ty) in types.iter().enumerate() {
                    write!(f, "{:?}", ty)?;
                    if i < types.len() - 1 {
                        write!(f, " | ")?;
                    }
                }

                write!(f, ")")
            }
            TsType::Intersection(types) => {
                write!(f, "Intersection(")?;

                for (i, ty) in types.iter().enumerate() {
                    write!(f, "{:?}", ty)?;
                    if i < types.len() - 1 {
                        write!(f, " & ")?;
                    }
                }

                write!(f, ")")
            }
            TsType::Tuple(types) => {
                write!(f, "Tuple([")?;

                for (i, ty) in types.iter().enumerate() {
                    write!(f, "{:?}", ty)?;
                    if i < types.len() - 1 {
                        write!(f, ", ")?;
                    }
                }

                write!(f, "])")
            }
        }
    }
}

// Conversions //

impl TryFrom<&Type> for TsType {
    type Error = TsTypeError;

    #[track_caller]
    fn try_from(ty: &Type) -> Result<Self, Self::Error> {
        let rust_type_str = strip_type(ty)?;

        // If it can be matched to a simple type, return the match
        if let Some(ts_type) = match_simple_type(&rust_type_str) {
            return Ok(ts_type);
        }

        // If the type is an Option, convert it to a union with `undefined`
        if let Some(captures) = OPTION_REGEX.captures(&rust_type_str) {
            let inner_rust_type_str = &captures[1];
            let ts_type = match_simple_type(inner_rust_type_str)
                .unwrap_or(TsType::from_str(inner_rust_type_str)?);
            return Ok(ts_type.or(ts_type!(undefined)));
        }

        // If the type is a Vec, convert it to an array
        if let Some(captures) = VEC_REGEX.captures(&rust_type_str) {
            let inner_rust_type_str = &captures[1];
            let ts_type = match_simple_type(inner_rust_type_str)
                .unwrap_or(TsType::from_str(inner_rust_type_str)?);
            return Ok(ts_type.in_array());
        }

        // If no supported match is found, attempt to parse the type as a
        // TypeScript type
        TsType::from_ts_str(&rust_type_str)
    }
}

impl FromStr for TsType {
    type Err = TsTypeError;

    #[track_caller]
    fn from_str(s: &str) -> Result<Self, Self::Err> {
        TsType::from_ts_str(s)
    }
}

pub trait ToTsType {
    fn to_ts_type(&self) -> Result<TsType, TsTypeError>;
}

impl ToTsType for Type {
    #[track_caller]
    fn to_ts_type(&self) -> Result<TsType, TsTypeError> {
        TsType::try_from(self)
    }
}

impl ToTsType for &Type {
    #[track_caller]
    fn to_ts_type(&self) -> Result<TsType, TsTypeError> {
        TsType::try_from(*self)
    }
}

impl ToTsType for &str {
    #[track_caller]
    fn to_ts_type(&self) -> Result<TsType, TsTypeError> {
        TsType::from_str(self)
    }
}

impl ToTsType for String {
    #[track_caller]
    fn to_ts_type(&self) -> Result<TsType, TsTypeError> {
        TsType::from_str(self.as_str())
    }
}

impl ToTsType for &String {
    #[track_caller]
    fn to_ts_type(&self) -> Result<TsType, TsTypeError> {
        TsType::from_str(self.as_str())
    }
}

// Internal helpers //

/// Strips references, pointers, and paths to get the base type string of a Rust type.
#[track_caller]
fn strip_type(ty: &Type) -> Result<String, TsTypeError> {
    let location = Location::caller();
    match ty {
        Type::Group(group) => strip_type(&group.elem),
        Type::Paren(paren) => strip_type(&paren.elem),
        Type::Ptr(ptr) => strip_type(&ptr.elem),
        Type::Reference(reference) => strip_type(&reference.elem),
        Type::Slice(type_slice) => Ok(format!("[{}]", strip_type(&type_slice.elem)?)),
        Type::Array(type_array) => Ok(format!("[{}; _]", strip_type(&type_array.elem)?)),
        Type::Tuple(tuple) => {
            if tuple.elems.is_empty() {
                Ok("()".to_string())
            } else {
                let types = tuple
                    .elems
                    .iter()
                    .map(|elem| strip_type(elem))
                    .collect::<Result<Vec<_>, _>>()?
                    .join(", ");
                Ok(format!("({})", types))
            }
        }
        Type::Path(path) => {
            let last_segment = path
                .path
                .segments
                .last()
                .ok_or_else(|| type_error_at!(location, "No segments found"))?;
            let outer_type = last_segment.ident.to_string();

            if last_segment.arguments.is_empty() {
                Ok(outer_type)
            } else {
                let arguments = match &last_segment.arguments {
                    PathArguments::AngleBracketed(angle) => {
                        let args = angle
                            .args
                            .iter()
                            .map(|arg| match arg {
                                GenericArgument::Type(ty) => strip_type(ty),
                                _ => Err(type_error_at!(location, "Unsupported type argument.",)),
                            })
                            .collect::<Result<Vec<_>, _>>()?
                            .join(", ");
                        format!("<{}>", args)
                    }
                    PathArguments::Parenthesized(paren) => {
                        let inputs = paren
                            .inputs
                            .iter()
                            .map(strip_type)
                            .collect::<Result<Vec<_>, _>>()?
                            .join(", ");
                        format!("({})", inputs)
                    }
                    _ => String::new(),
                };

                Ok(format!("{}{}", last_segment.ident, arguments))
            }
        }

        _ => Err(type_error_at!(location, "Unsupported type.")),
    }
}

/// Matches a "simple" Rust type to a TypeScript type.
///
/// Simple types are those that have a direct equivalent in TypeScript:
/// - Native types, e.g., `bool` -> `boolean`
/// - Ethers types, e.g., `U256` -> `bigint`
/// - `js-sys` types, e.g., `BigInt` -> `bigint`
/// - Other known types, e.g., `FixedPoint` -> `bigint`
fn match_simple_type(rust_type: &str) -> Option<TsType> {
    let simple_match = match rust_type {
        // native types
        "bool" => ts_type!(boolean),
        "String" | "str" | "char" => ts_type!(string),
        // Max safe JS integer: -(2^53 - 1) to 2^53 - 1 (double-precision float)
        "u8" | "i8" | "u16" | "i16" | "u32" | "i32" | "f32" | "f64" => ts_type!(number),
        "u64" | "i64" | "u128" | "i128" => ts_type!(bigint),

        // ethers types
        "U256" | "I256" => ts_type!(bigint),
        "Address" => ts_type!("`0x${string}`"),

        // js_sys types
        "BigInt" => ts_type!(bigint),
        "Boolean" => ts_type!(boolean),
        "JsString" => ts_type!(string),
        "Number" => ts_type!(number),
        "Object" => ts_type!(object),

        // other known types
        "FixedPoint" => ts_type!(bigint),

        // No simple match found
        _ => return None,
    };
    Some(simple_match)
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_formatting() {
        let base = ts_type!(string);
        assert_eq!(base.to_string(), "string");

        #[rustfmt::skip]
        let array = ts_type!(string  [  ]);
        assert_eq!(array.to_string(), "string[]");

        #[rustfmt::skip]
        let paren = ts_type!((  string |     number ));
        assert_eq!(paren.to_string(), "(string | number)");

        #[rustfmt::skip]
        let generic = ts_type!(Set< string,   number >);
        assert_eq!(generic.to_string(), "Set<string, number>");

        #[rustfmt::skip]
        let _union = ts_type!(
            | string
            | number
            | boolean
        );
        assert_eq!(_union.to_string(), "string | number | boolean");

        #[rustfmt::skip]
        let intersection = ts_type!(  Foo   &  Bar &     Baz);
        assert_eq!(intersection.to_string(), "Foo & Bar & Baz");

        #[rustfmt::skip]
        let wrapped_intersection = ts_type!(Foo |  Bar   & Baz);
        assert_eq!(wrapped_intersection.to_string(), "Foo | (Bar & Baz)");

        let template_string = TsType::from_ts_str("`0x${string}`");
        assert_eq!(template_string.unwrap().to_string(), "`0x${string}`");
    }

    #[test]
    fn test_variable_parsing() {
        let base = ts_type!(string);
        let generic = ts_type!(Set<string>);
        let group = ts_type!((string | number));
        let intersection = ts_type!(string & number);
        let _union = ts_type!(string | number);

        //  Single variable //

        let single = ts_type!((#base));
        assert_eq!(single.to_string(), "string",);

        let single_generic = ts_type!((#generic));
        assert_eq!(single_generic.to_string(), "Set<string>");

        let single_group = ts_type!((#group));
        assert_eq!(single_group.to_string(), "(string | number)");

        let single_intersection = ts_type!((#intersection));
        assert_eq!(single_intersection.to_string(), "string & number");

        let single_union = ts_type!((#_union));
        assert_eq!(single_union.to_string(), "string | number");

        // Generics //

        let generic = ts_type!(Set<(#base)>);
        assert_eq!(generic.to_string(), "Set<string>");

        let generic_two = ts_type!(Set<(#base), (#_union)>);
        assert_eq!(generic_two.to_string(), "Set<string, string | number>");

        // Unions //

        let start_union = ts_type!((#base) | true | false);
        assert_eq!(start_union.to_string(), "string | true | false");

        let mid_union = ts_type!(true | (#base) | false);
        assert_eq!(mid_union.to_string(), "true | string | false");

        let end_union = ts_type!(true | false | (#base));
        assert_eq!(end_union.to_string(), "true | false | string");

        let start_union_pair = ts_type!((#base) | true);
        assert_eq!(start_union_pair.to_string(), "string | true");

        let end_union_pair = ts_type!(true | (#base));
        assert_eq!(end_union_pair.to_string(), "true | string");

        let var_union = ts_type!((#base) | (#generic) | (#group));
        assert_eq!(
            var_union.to_string(),
            "string | Set<string> | (string | number)"
        );

        let var_union_pair = ts_type!((#base) | (#generic));
        assert_eq!(var_union_pair.to_string(), "string | Set<string>");

        // Intersections //

        let start_intersection = ts_type!((#base) & true & false);
        assert_eq!(start_intersection.to_string(), "string & true & false");

        let mid_intersection = ts_type!(true & (#base) & false);
        assert_eq!(mid_intersection.to_string(), "true & string & false");

        let end_intersection = ts_type!(true & false & (#base));
        assert_eq!(end_intersection.to_string(), "true & false & string");

        let start_intersection_pair = ts_type!((#base) & true);
        assert_eq!(start_intersection_pair.to_string(), "string & true");

        let end_intersection_pair = ts_type!(true & (#base));
        assert_eq!(end_intersection_pair.to_string(), "true & string");

        let var_intersection = ts_type!((#base) & (#generic) & (#group));
        assert_eq!(
            var_intersection.to_string(),
            "string & Set<string> & (string | number)"
        );

        let var_intersection_pair = ts_type!((#base) & (#generic));
        assert_eq!(var_intersection_pair.to_string(), "string & Set<string>");
    }
}
