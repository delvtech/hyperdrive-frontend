// This constant is meant to be used in places where === matters. Specifically,
// this is useful for selectors, where we want to return a constant value for an
// empty result without breaking memoization.
export const EMPTY_ARRAY = [];
// Freezing this after creation ensures we can use it without having to cast it
// everywhere as an array of some type.
Object.freeze(EMPTY_ARRAY);
