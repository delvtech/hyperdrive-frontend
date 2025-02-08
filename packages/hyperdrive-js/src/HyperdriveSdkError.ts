import { DriftError } from "@delvtech/drift";

export class HyperdriveSdkError extends DriftError {
  constructor(error: string, options?: ErrorOptions) {
    super(error, {
      prefix: "ᛋ ",
      name: "Hyperdrive SDK Error",
      ...options,
    });
  }
}
