/**
 * A generic constructor type.
 */
export type Constructor<
  TInstanceType = any,
  TArgs extends any[] = any[],
> = new (...args: TArgs) => TInstanceType;
