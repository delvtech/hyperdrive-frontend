export type HyphenCase<T extends string> = T extends `${infer A}${infer B}`
  ? B extends ` ${infer C}`
    ? `${Lowercase<A>}-${HyphenCase<Lowercase<C>>}`
    : `${Lowercase<A>}${HyphenCase<B>}`
  : T;
