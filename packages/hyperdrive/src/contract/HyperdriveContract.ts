import { HyperdriveABI } from "src/abis/Hyperdrive";
import { Contract } from "src/contract/Contract";

export type HyperdriveContract = Contract<typeof HyperdriveABI>;
