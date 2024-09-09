import "dotenv/config";
import camelCase from "lodash.camelcase";
import { AppConfig } from "src/appconfig/AppConfig";
import { getAppConfig } from "src/appconfig/getAppConfig";
import { writeAppConfigToFile } from "src/appconfig/writeAppConfigToFile";
import { chains, gnosisChainConfig } from "src/chains/chains";
import { cloudChain } from "src/chains/cloudChain";
import { protocols } from "src/protocols";
import { yieldSources } from "src/yieldSources";
import { Address, Chain, createPublicClient, http } from "viem";
import { gnosis, mainnet, sepolia } from "viem/chains";

interface ChainConfig {
  chain: Chain;
  rpcUrl: string;
  registryAddress: Address;
  earliestBlock?: bigint;
}
const chainConfigs: ChainConfig[] = [
  {
    chain: cloudChain,
    rpcUrl: process.env.CLOUDCHAIN_NODE_RPC_URL as string,
    registryAddress: "0xbe082293b646cb619a638d29e8eff7cf2f46aa3a",
  },
  {
    chain: mainnet,
    rpcUrl: process.env.MAINNET_NODE_RPC_URL as string,
    registryAddress: "0xbe082293b646cb619a638d29e8eff7cf2f46aa3a",
  },
  {
    chain: sepolia,
    rpcUrl: process.env.SEPOLIA_NODE_RPC_URL as string,
    registryAddress: "0x03f6554299acf544ac646305800f57db544b837a",
  },
  // { // TODO: Re-enable this when needed
  //   chain: gnosisFork,
  //   rpcUrl: process.env.GNOSIS_FORK_NODE_RPC_URL as string,
  //   registryAddress: "0x666fa9ef9bca174a042c4c306b23ba8ee0c59666",
  //   earliestBlock: gnosisChainConfig.earliestBlock,
  // },
  {
    chain: gnosis,
    rpcUrl: process.env.GNOSIS_NODE_RPC_URL as string,
    registryAddress: "0x666fa9ef9bca174a042c4c306b23ba8ee0c59666",
    earliestBlock: gnosisChainConfig.earliestBlock,
  },
  // {
  //   chain: linea,
  //   rpcUrl: process.env.LINEA_NODE_RPC_URL as string,
  //   registryAddress: "0x6668310631Ad5a5ac92dC9549353a5BaaE16C666",
  //   earliestBlock: lineaChainConfig.earliestBlock,
  // },

  // Add more chains here
];

// Initialize an empty AppConfig that we'll populate with all the multi-chain
// app config info
const combinedAppConfig: AppConfig = {
  hyperdrives: [],
  tokens: [],
  registries: {},
  protocols,
  yieldSources,
  chains,
};

for (const { chain, rpcUrl, registryAddress, earliestBlock } of chainConfigs) {
  const publicClient = createPublicClient({
    chain,
    transport: http(rpcUrl),
  });

  console.log(`Generating app config for ${chain.name}, chain id: ${chain.id}`);
  const appConfig = await getAppConfig({
    registryAddress,
    publicClient,
    earliestBlock,
  });

  // Merge the current appConfig with the combinedAppConfig
  combinedAppConfig.hyperdrives.push(...appConfig.hyperdrives);
  combinedAppConfig.tokens.push(...appConfig.tokens);
  combinedAppConfig.registries[chain.id] = registryAddress;

  // Optionally, write individual app configs to files
  writeAppConfigToFile({
    filename: `./src/generated/${chain.id}.appconfig.ts`,
    appConfig,
    appConfigName: `${camelCase(chain.name)}AppConfig`,
  });
}

writeAppConfigToFile({
  filename: `./src/generated/all.appconfig.ts`,
  appConfig: combinedAppConfig,
  appConfigName: "appConfig",
});
