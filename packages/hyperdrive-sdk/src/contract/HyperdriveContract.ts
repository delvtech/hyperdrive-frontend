import { HyperdriveABI } from "@hyperdrive/core";
import { Contract } from "src/contract/Contract";

export type HyperdriveContract = Contract<typeof HyperdriveABI>;
