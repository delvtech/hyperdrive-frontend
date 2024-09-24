import "dotenv/config";
import camelCase from "lodash.camelcase";
import { getAppConfig } from "src/appconfig/getAppConfig";
import { writeAppConfigToFile } from "src/appconfig/writeAppConfigToFile";
import { gnosisChainConfig } from "src/chains/chains";
import { gnosisFork } from "src/chains/gnosisFork";
import { GNOSIS_FORK_REGISTRY_ADDRESS } from "src/registries";
import { createPublicClient, http } from "viem";

const rpcUrl = process.env.GNOSIS_FORK_RPC_URL as string;

const publicClient = createPublicClient({
  chain: gnosisFork,
  transport: http(rpcUrl),
});

const appConfig = await getAppConfig({
  registryAddress: GNOSIS_FORK_REGISTRY_ADDRESS,
  publicClient,
  earliestBlock: gnosisChainConfig.earliestBlock,
});

writeAppConfigToFile({
  filename: `./src/generated/${gnosisFork.id}.appconfig.ts`,
  appConfig,
  appConfigName: `${camelCase(gnosisFork.name)}AppConfig`,
});
