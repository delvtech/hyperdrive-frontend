import { Drift } from "@delvtech/drift";
import { viemAdapter } from "@delvtech/drift-viem";
import { ReadHyperdrive } from "@delvtech/hyperdrive-js";
import { publicClient } from "../client";

const drift = new Drift(viemAdapter({ publicClient }));

const pool = new ReadHyperdrive({
  address: "0x324395D5d835F84a02A75Aa26814f6fD22F25698",
  drift,
});

const kind = await pool.getKind();
const config = await pool.getPoolConfig();

console.log(`
  address: ${pool.address}
  kind: ${kind}
  baseToken: ${config.baseToken}
  sharesToken: ${config.vaultSharesToken}
`);
