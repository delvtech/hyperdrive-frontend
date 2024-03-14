export type ExtractMethodParams<
  Interface extends Record<any, any>,
  MethodName extends keyof Interface,
> = Interface[MethodName] extends (...args: any[]) => any
  ? Parameters<Interface[MethodName]>[0]
  : never;
