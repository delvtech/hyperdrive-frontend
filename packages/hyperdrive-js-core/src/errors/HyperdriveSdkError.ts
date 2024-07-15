export class HyperdriveSdkError extends Error {
  constructor(...[message, options]: Parameters<ErrorConstructor>) {
    super(`Hyperdrive SDK Error: ${message}`, options);
    this.name = "HyperdriveSdkError";
  }
}
