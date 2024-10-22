import {
  HyperdriveConfig,
  mainnetAppConfig,
} from "@delvtech/hyperdrive-appconfig";
import { IHyperdrive } from "@delvtech/hyperdrive-artifacts/IHyperdrive";
import { ReadHyperdrive } from "@delvtech/hyperdrive-viem";
import { publicClients } from "../client";
import { getLpApy } from "./getLpApy";

await (async function () {
  const hyperdrive = mainnetAppConfig.hyperdrives[0];
  const readHyperdrive = new ReadHyperdrive({
    publicClient: publicClients[hyperdrive.chainId],
    address: hyperdrive.address,
  });
  console.time("1 pool");
  await readHyperdrive.getPoolConfig();
  await readHyperdrive.getPoolInfo();
  await getLpApy({ readHyperdrive, hyperdrive });
  console.timeEnd("1 pool");
})();

await (async function () {
  const promises = mainnetAppConfig.hyperdrives.map(async (hyperdrive) => {
    const readHyperdrive = new ReadHyperdrive({
      publicClient: publicClients[hyperdrive.chainId],
      address: hyperdrive.address,
    });
    await readHyperdrive.getPoolConfig();
    await readHyperdrive.getPoolInfo();
    // await getLpApy({ readHyperdrive, hyperdrive });
    return;
  });
  console.time(
    `via ReadHyperdrive ${mainnetAppConfig.hyperdrives.length} pools`,
  );
  await Promise.all(promises);
  console.timeEnd(
    `via ReadHyperdrive ${mainnetAppConfig.hyperdrives.length} pools`,
  );
})();

await (async function () {
  const hyperdrivesByChain: Record<number, HyperdriveConfig[]> = {};
  // group hyperdrives by chain
  mainnetAppConfig.hyperdrives.forEach((hyperdrive) => {
    if (hyperdrivesByChain[hyperdrive.chainId]) {
      hyperdrivesByChain[hyperdrive.chainId] = [
        ...hyperdrivesByChain[hyperdrive.chainId],
        hyperdrive,
      ];
    } else {
      hyperdrivesByChain[hyperdrive.chainId] = [hyperdrive];
    }
  });

  // Use multicall3 to request all hyperdrive poolConfig and poolInfo per chain
  const promises: any[] = [];
  Object.entries(hyperdrivesByChain).forEach(([chainId, hyperdrives]) => {
    const client = publicClients[Number(chainId)];
    promises.push(
      client.multicall({
        contracts: [
          ...hyperdrives.map((h) => ({
            abi: IHyperdrive.abi,
            address: h.address,
            functionName: "getPoolConfig",
          })),
          ...hyperdrives.map((h) => ({
            abi: IHyperdrive.abi,
            address: h.address,
            functionName: "getPoolInfo",
          })),
        ],
        multicallAddress: "0xcA11bde05977b3631167028862bE2a173976CA11",
      }),
    );
  });

  console.time(`via multicall3 ${mainnetAppConfig.hyperdrives.length} pools`);
  await Promise.all(promises);
  console.timeEnd(
    `via multicall3 ${mainnetAppConfig.hyperdrives.length} pools`,
  );
})();
