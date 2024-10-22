import { IHyperdrive } from "@delvtech/hyperdrive-artifacts/IHyperdrive";
import { ReadHyperdrive } from "@delvtech/hyperdrive-viem";
import { mainnetPublicClient } from "../client";

const pool = new ReadHyperdrive({
  address: "0x1cB0E96C07910fee9a22607bb9228c73848903a3",
  publicClient: mainnetPublicClient,
});

const kind = await pool.getKind();
const name = await mainnetPublicClient.readContract({
  abi: IHyperdrive.abi,
  address: "0x1cB0E96C07910fee9a22607bb9228c73848903a3",
  functionName: "name",
});
const config = await pool.getPoolConfig();
console.log(`
  kind: ${kind}
  name: ${name}
  baseToken: ${config.baseToken}
  sharesToken: ${config.vaultSharesToken}
`);
