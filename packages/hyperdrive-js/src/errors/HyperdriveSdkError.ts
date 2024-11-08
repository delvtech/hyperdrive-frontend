import { DriftError } from "@delvtech/drift";

export class HyperdriveSdkError extends DriftError {
  constructor(message: string, options?: ErrorOptions) {
    super(message, {
      ...options,
      prefix: "ᛋ ",
      name: "Hyperdrive SDK Error",
    });
  }
}
