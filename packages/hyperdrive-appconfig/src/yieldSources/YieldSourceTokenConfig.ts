import type { protocols } from "src/protocols/protocols";

export interface YieldSourceExtensions {
  shortName: string;
  protocol: keyof typeof protocols;
  isSharesPeggedToBase: boolean;
}
