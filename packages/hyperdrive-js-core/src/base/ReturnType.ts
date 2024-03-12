export type ReturnType<T, K extends keyof T> = T[K] extends (
  ...args: any[]
) => infer R
  ? R
  : any;
