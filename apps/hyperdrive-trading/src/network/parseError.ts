import {
  BaseError as BaseViemError,
  type DecodeErrorResultReturnType,
} from "viem";

/**
 * Parses an viem/wagmi error to get a displayable string
 * @param error - error object
 * @returns parsed error string
 */
export function parseError({ error }: { error: any }): string {
  let message: string = error.message ?? "An unknown error occurred";
  if (error instanceof BaseViemError) {
    if (error.details) {
      message = error.details;
    } else if (error.shortMessage) {
      message = error.shortMessage;
      const cause = error.cause as
        | { data?: DecodeErrorResultReturnType }
        | undefined;
      // if its not generic error, append custom error name and its args to message
      if (cause?.data && cause.data?.errorName !== "Error") {
        const customErrorArgs = cause.data.args?.toString() ?? "";
        message = `${message.replace(/reverted\.$/, "reverted with following reason:")}\n${
          cause.data.errorName
        }(${customErrorArgs})`;
      }
    } else if (error.message) {
      message = error.message;
    } else if (error.name) {
      message = error.name;
    }
  }

  return message;
}
