import chalk from "chalk";
import "dotenv/config";
import camelCase from "lodash.camelcase";
import { AppConfig } from "src/appconfig/AppConfig";
import { getAppConfig } from "src/appconfig/getAppConfig";
import { getMainnetAndTestnetAppConfigs } from "src/appconfig/getMainnetAndTestnetAppConfigs";
import { writeAppConfigToFile } from "src/appconfig/writeAppConfigToFile";
import { chains, gnosisChainConfig, lineaChainConfig } from "src/chains/chains";
import { cloudChain } from "src/chains/cloudChain";
import { protocols } from "src/protocols";
import { yieldSources } from "src/yieldSources";
import { Address, Chain, createPublicClient, http } from "viem";
import { gnosis, linea, mainnet, sepolia } from "viem/chains";

interface ChainInitializationConfig {
  chain: Chain;
  rpcUrl: string;
  registryAddress: Address;
  earliestBlock?: bigint;
  isTestnet?: boolean;
}

const chainConfigs: ChainInitializationConfig[] = [
  {
    chain: cloudChain,
    rpcUrl: process.env.CLOUDCHAIN_RPC_URL as string,
    registryAddress: "0xbe082293b646cb619a638d29e8eff7cf2f46aa3a",
    isTestnet: true,
  },
  {
    chain: mainnet,
    rpcUrl: process.env.ETHEREUM_RPC_URL as string,
    registryAddress: "0xbe082293b646cb619a638d29e8eff7cf2f46aa3a",
  },
  {
    chain: sepolia,
    rpcUrl: process.env.SEPOLIA_RPC_URL as string,
    registryAddress: "0x03f6554299acf544ac646305800f57db544b837a",
    isTestnet: true,
  },
  // { // TODO: Re-enable this when needed
  //   chain: gnosisFork,
  //   rpcUrl: process.env.GNOSIS_FORK_RPC_URL as string,
  //   registryAddress: "0x666fa9ef9bca174a042c4c306b23ba8ee0c59666",
  //   earliestBlock: gnosisChainConfig.earliestBlock,
  //   isTestnet: true,
  // },
  {
    chain: gnosis,
    rpcUrl: process.env.GNOSIS_RPC_URL as string,
    registryAddress: "0x666fa9ef9bca174a042c4c306b23ba8ee0c59666",
    earliestBlock: gnosisChainConfig.earliestBlock,
  },
  {
    chain: linea,
    rpcUrl: process.env.LINEA_RPC_URL as string,
    registryAddress: "0x6668310631Ad5a5ac92dC9549353a5BaaE16C666",
    earliestBlock: lineaChainConfig.earliestBlock,
  },

  // Add more chains here
];

// Initialize an empty AppConfig that we'll populate with all the multi-chain
// app config info, including testnet and mainnet hyperdrives
const combinedAppConfig: AppConfig = {
  hyperdrives: [],
  tokens: [],
  registries: {},
  protocols,
  yieldSources,
  chains,
};

// Generate an app config for each chain in the list above
for (const { chain, rpcUrl, registryAddress, earliestBlock } of chainConfigs) {
  const publicClient = createPublicClient({
    chain,
    transport: http(rpcUrl),
  });

  console.log(
    chalk.white(
      chalk.underline(
        `Generating app config for ${chain.name}, chain id: ${chalk.yellow(chain.id)}`,
      ),
    ),
  );
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
  await writeAppConfigToFile({
    filename: `./src/generated/${chain.id}.appconfig.ts`,
    appConfig,
    appConfigName: `${camelCase(chain.name)}AppConfig`,
  });
}

const { mainnetConfig, testnetConfig } =
  getMainnetAndTestnetAppConfigs(combinedAppConfig);

console.log("\nCombining app configs for mainnet, testnet and all chains...");

await writeAppConfigToFile({
  filename: `./src/generated/mainnet.appconfig.ts`,
  appConfig: mainnetConfig,
  appConfigName: "mainnetAppConfig",
});

await writeAppConfigToFile({
  filename: `./src/generated/testnet.appconfig.ts`,
  appConfig: testnetConfig,
  appConfigName: "testnetAppConfig",
});

await writeAppConfigToFile({
  filename: `./src/generated/all.appconfig.ts`,
  appConfig: combinedAppConfig,
  appConfigName: "appConfig",
});
