import "dotenv/config";
import { getAppConfig } from "src/appconfig/getAppConfig";
import { writeAppConfigToFile } from "src/appconfig/writeAppConfigToFile";
import { gnosisFork } from "src/chains/gnosisFork";
import { createPublicClient, http } from "viem";

const rpcUrl = process.env.GNOSIS_FORK_NODE_RPC_URL as string;

const publicClient = createPublicClient({
  chain: gnosisFork,
  transport: http(rpcUrl),
});

const appConfig = await getAppConfig({
  registryAddress: "0xfbabc73b6241df6453d88ac13b556ba643f9a6ad",
  publicClient,
});

writeAppConfigToFile({
  filename: `./src/generated/${gnosisFork.id}.appconfig.ts`,
  appConfig,
  appConfigName: `${gnosisFork.name.toLowerCase()}AppConfig`,
});
