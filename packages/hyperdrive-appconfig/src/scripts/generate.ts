import "dotenv/config";
import { AppConfig } from "src/appconfig/AppConfig";
import { getAppConfig } from "src/appconfig/getAppConfig";
import { writeAppConfigToFile } from "src/appconfig/writeAppConfigToFile";
import { chains } from "src/chains/chains";
import { cloudChain } from "src/chains/cloudChain";
import { protocols } from "src/protocols";
import { yieldSources } from "src/yieldSources";
import { Address, Chain, createPublicClient, http } from "viem";
import { mainnet, sepolia } from "viem/chains";

interface ChainConfig {
  chain: Chain;
  rpcUrl: string;
  registryAddress: Address;
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
  // {
  //   chain: gnosis,
  //   rpcUrl: process.env.GNOSIS_NODE_RPC_URL as string,
  //   registryAddress: "", // TODO: add registry for gnosis chain
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

for (const { chain, rpcUrl, registryAddress } of chainConfigs) {
  const publicClient = createPublicClient({
    chain,
    transport: http(rpcUrl),
  });

  console.log(`Generating app config for ${chain.name}, chain id: ${chain.id}`);
  const appConfig = await getAppConfig({
    registryAddress,
    publicClient,
  });

  // Merge the current appConfig with the combinedAppConfig
  combinedAppConfig.hyperdrives.push(...appConfig.hyperdrives);
  combinedAppConfig.tokens.push(...appConfig.tokens);
  combinedAppConfig.registries[chain.id] = registryAddress;

  // Optionally, write individual app configs to files
  writeAppConfigToFile({
    filename: `./src/generated/${chain.id}.appconfig.ts`,
    appConfig,
    appConfigName: `${chain.name.toLowerCase()}AppConfig`,
  });
}

writeAppConfigToFile({
  filename: `./src/generated/all.appconfig.ts`,
  appConfig: combinedAppConfig,
  appConfigName: "appConfig",
});
