import chalk from "chalk";
import "dotenv/config";
import camelCase from "lodash.camelcase";
import { AppConfig } from "src/appconfig/AppConfig";
import { getAppConfig } from "src/appconfig/getAppConfig";
import { getMainnetAndTestnetAppConfigs } from "src/appconfig/getMainnetAndTestnetAppConfigs";
import { writeAppConfigToFile } from "src/appconfig/writeAppConfigToFile";
import {
  baseChainConfig,
  chains,
  gnosisChainConfig,
  lineaChainConfig,
} from "src/chains/chains";
import { protocols } from "src/protocols";
import {
  BASE_REGISTRY_ADDRESS,
  ETHEREUM_REGISTRY_ADDRESS,
  GNOSIS_REGISTRY_ADDRESS,
  LINEA_REGISTRY_ADDRESS,
  SEPOLIA_REGISTRY_ADDRESS,
} from "src/registries";
import { yieldSources } from "src/yieldSources/yieldSources";
import { Address, Chain, createPublicClient, http } from "viem";
import { base, gnosis, linea, mainnet, sepolia } from "viem/chains";

interface ChainInitializationConfig {
  chain: Chain;
  rpcUrl: string;
  registryAddress: Address;
  earliestBlock?: bigint;
  isTestnet?: boolean;
}

const chainConfigs: ChainInitializationConfig[] = [
  // Testnet chains
  // { // TODO: Re-enable this when needed
  //   chain: cloudChain,
  //   rpcUrl: process.env.CLOUDCHAIN_RPC_URL as string,
  //   registryAddress: CLOUDCHAIN_REGISTRY_ADDRESS,
  //   isTestnet: true,
  // },
  // { // TODO: Re-enable this when needed
  //   chain: gnosisFork,
  //   rpcUrl: process.env.GNOSIS_FORK_RPC_URL as string,
  //   registryAddress: GNOSIS_FORK_REGISTRY_ADDRESS,
  //   earliestBlock: gnosisChainConfig.earliestBlock,
  //   isTestnet: true,
  // },
  {
    chain: sepolia,
    rpcUrl: process.env.SEPOLIA_RPC_URL as string,
    registryAddress: SEPOLIA_REGISTRY_ADDRESS,
    isTestnet: true,
  },

  // Mainnet chains
  {
    chain: mainnet,
    rpcUrl: process.env.ETHEREUM_RPC_URL as string,
    registryAddress: ETHEREUM_REGISTRY_ADDRESS,
  },
  {
    chain: gnosis,
    rpcUrl: process.env.GNOSIS_RPC_URL as string,
    registryAddress: GNOSIS_REGISTRY_ADDRESS,
    earliestBlock: gnosisChainConfig.earliestBlock,
  },
  {
    chain: linea,
    rpcUrl: process.env.LINEA_RPC_URL as string,
    registryAddress: LINEA_REGISTRY_ADDRESS,
    earliestBlock: lineaChainConfig.earliestBlock,
  },
  {
    chain: base,
    rpcUrl: process.env.BASE_RPC_URL as string,
    registryAddress: BASE_REGISTRY_ADDRESS,
    earliestBlock: baseChainConfig.earliestBlock,
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
        `\nGenerating app config for ${chain.name}, chain id: ${chalk.yellow(chain.id)}`,
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

console.log(
  `\n${chalk.white(chalk.underline("Combining app configs for mainnet, testnet and all chains..."))}`,
);

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
