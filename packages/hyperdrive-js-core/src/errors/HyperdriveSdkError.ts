export class HyperdriveSdkError extends Error {
  constructor(...[message, options]: Parameters<ErrorConstructor>) {
    super(message, options);
    this.name = "HyperdriveSdkError";
  }
}
