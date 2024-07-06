#[macro_export]
macro_rules! type_error_at {
  ($location:expr, $($arg:tt)*) => {
      TsTypeError {
          message: format!($($arg)*),
          location: $location.to_string(),
      }
  };
}

#[macro_export]
macro_rules! ts_tt {

  // unwrap single items
  (( $single:tt )) => {{
      ts_tt!($single)
  }};

  // variable
  (( # $var:ident ))  => {{
      $var.clone()
  }};

  // paren
  (( $($items:tt)+ )) => {{
      let inner = ts_type!($($items)*);
      match inner {
          $crate::TsType::Intersection(_) => $crate::TsType::Paren(Box::new(inner)),
          $crate::TsType::Union(_) => $crate::TsType::Paren(Box::new(inner)),
          _ => inner, // remove superfluous parentheses
      }
  }};

  // tuple
  ([ $first:tt $($items:tt)* ]) => {{
      let tuple = $crate::TsType::Tuple(vec![]);
      let mut stack = vec![tuple];
      let mut first = ts_tt!($first);
      $crate::build_ts_type!(stack first $($items)*)
  }};

  // base
  ($base:tt) => {{
      $crate::TsType::Base(stringify!($base).to_string())
  }};
}

#[macro_export]
macro_rules! build_ts_type {

  // array
  ($stack:ident $ty:ident [] $($rest:tt)*) => {{
      $ty = $ty.in_array();
      $crate::build_ts_type!($stack $ty $($rest)*)
  }};

  // indexed access
  ($stack:ident $ty:ident [ $($keys:tt)+ ] $($rest:tt)*) => {{
      $ty = $ty.property(Box::new(ts_type!($($keys)+)));
      $crate::build_ts_type!($stack $ty $($rest)*)
  }};

  // intersection
  ($stack:ident $ty:ident & $other:tt $($rest:tt)*) => {{
      let intersection = $crate::TsType::Intersection(vec![$ty]);
      $stack.push(intersection);
      $ty = $crate::ts_tt!($other);
      $crate::build_ts_type!($stack $ty $($rest)*)
  }};

  // union
  ($stack:ident $ty:ident | $other:tt $($rest:tt)*) => {{
      let _union = $crate::TsType::Union(vec![$ty]);
      $stack.push(_union);
      $ty = $crate::ts_tt!($other);
      $crate::build_ts_type!($stack $ty $($rest)*)
  }};

  // generic
  ($stack:ident $ty:ident < $arg:tt $($rest:tt)*) => {{
      $ty = $ty.as_generic(vec![]);
      $stack.push($ty);
      let mut arg = $crate::ts_tt!($arg);
      $crate::build_ts_type!($stack arg $($rest)*)
  }};

  // comma
  ($stack:ident $ty:ident , $next:tt $($rest:tt)*) => {{
      let top: $crate::TsType = $stack.pop().unwrap_or_else(|| {
          panic!("Unexpected `,` found.");
      });
      $stack.push(top.join($ty).unwrap());
      #[allow(unused_mut)]
      let mut next = $crate::ts_tt!($next);
      build_ts_type!($stack next $($rest)*)
  }};

  // generic end
  ($stack:ident $arg:ident > $($rest:tt)*) => {{
      let mut ty = $arg;
      loop {
          let top: $crate::TsType = $stack.pop().unwrap_or_else(|| {
              panic!("Unmatched `>` found.");
          });
          ty = top.join(ty).unwrap();
          if let $crate::TsType::Generic(_, _) = ty {
              break;
          } else if $stack.is_empty() {
              panic!("Unmatched `>` found.");
          }
      }
      $crate::build_ts_type!($stack ty $($rest)*)
  }};

  // double generic end
  ($stack:ident $arg:ident >> $($rest:tt)*) => {{
      let mut ty = $arg;
      let mut count = 0;
      loop {
          let top: $crate::TsType = $stack.pop().unwrap_or_else(|| {
              panic!("Unmatched `>` found.");
          });
          ty = top.join(ty).unwrap();
          if let $crate::TsType::Generic(_, _) = ty {
              count += 1;
          }
          if count == 2 {
              break;
          } else if $stack.is_empty() {
              panic!("Unmatched `>` found.");
          }
      }
      $crate::build_ts_type!($stack ty $($rest)*)
  }};

  // base
  ($stack:ident $ty:ident) => {{
      let mut ty = $ty;
      for _ in 0..$stack.len() {
          let top: $crate::TsType = $stack.pop().unwrap();
          ty = top.join(ty).unwrap();
      }
      ty
  }};
}

/// Create a `TsType` using TypeScript type syntax.
#[macro_export]
macro_rules! ts_type {

  // union
  (| $member:tt $($rest:tt)*) => {{
      let _union = $crate::TsType::Union(vec![]);
      let mut stack = vec![_union];
      let mut member = $crate::ts_tt!($member);
      $crate::build_ts_type!(stack member $($rest)*)
  }};

  // array
  ($elem:tt [] $($rest:tt)*) => {{
      let mut stack = vec![];
      #[allow(unused_mut)]
      let mut array = $crate::TsType::Array(Box::new($crate::ts_tt!($elem)));
      $crate::build_ts_type!(stack array $($rest)*)
  }};

  // indexed access
  ($object:tt [ $($key:tt)+ ] $($rest:tt)*) => {{
      let mut stack = vec![];
      let mut object = $crate::TsType::IndexedAccess(Box::new(ts_tt!($object)), Box::new(ts_type!($($key)+)));
      build_ts_type!(stack object $($rest)*)
  }};

  // generic
  ($generic:tt < $arg:tt $($rest:tt)*) => {{
      let generic = $crate::TsType::Generic(Box::new(ts_tt!($generic)), vec![]);
      let mut stack = vec![generic];
      #[allow(unused_mut)]
      let mut arg = ts_tt!($arg);
      build_ts_type!(stack arg $($rest)*)
  }};

  // base
  ($base:tt $($rest:tt)*) => {{
      let mut stack = vec![];
      #[allow(unused_mut)]
      let mut base = $crate::ts_tt!($base);
      $crate::build_ts_type!(stack base $($rest)*)
  }};
}
