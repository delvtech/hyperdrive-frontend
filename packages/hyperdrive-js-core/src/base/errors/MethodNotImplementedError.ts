export interface MethodNotImplementedErrorOptions {
  /**
   * The name of the object that the method was not implemented in.
   */
  objectName: string;
  /**
   * The name of the method that was not implemented.
   */
  methodName: string;
}

/**
 * An error that is thrown when a method is not implemented in an object.
 */
export class MethodNotImplementedError extends Error {
  constructor({ methodName, objectName }: MethodNotImplementedErrorOptions) {
    super(`${objectName} does not implement the method ${methodName}.`);
    this.name = "MethodNotImplemented";
  }
}
