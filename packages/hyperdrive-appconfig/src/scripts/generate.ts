import chalk from "chalk";
import "dotenv/config";
import { AppConfig } from "src/appconfig/AppConfig";
import { getAppConfig } from "src/appconfig/getAppConfig";
import { getMainnetAndTestnetAppConfigs } from "src/appconfig/getMainnetAndTestnetAppConfigs";
import { writeAppConfigToFile } from "src/appconfig/writeAppConfigToFile";
import {
  baseChainConfig,
  ChainId,
  chains,
  gnosisChainConfig,
  lineaChainConfig,
  mainnetChainConfig,
  sepoliaChainConfig,
} from "src/chains/chains";
import { protocols } from "src/protocols";
import {
  BASE_REGISTRY_ADDRESS,
  ETHEREUM_REGISTRY_ADDRESS,
  GNOSIS_REGISTRY_ADDRESS,
  LINEA_REGISTRY_ADDRESS,
  SEPOLIA_REGISTRY_ADDRESS,
} from "src/registries";
import { knownTokenConfigs } from "src/rewards/knownTokenConfigs";
import { rewardFunctions } from "src/rewards/rewards";
import { getToken } from "src/tokens/selectors";
import { yieldSources } from "src/yieldSources/yieldSources";
import { Address, Chain, createPublicClient, http, PublicClient } from "viem";
import { base, gnosis, linea, mainnet, sepolia } from "viem/chains";

interface ChainInitializationConfig {
  chain: Chain;
  rpcUrl: string;
  registryAddress: Address;
  earliestBlock?: bigint;
  isTestnet?: boolean;
}

// This array should usually be empty. It's used for pools that have been added to the registry
// but we don't want to generate app configs for, or show in the UI.
const registryAddressesToSkip: Address[] = [];

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
    earliestBlock: sepoliaChainConfig.earliestBlock,
  },

  // Mainnet chains
  {
    chain: mainnet,
    rpcUrl: process.env.ETHEREUM_RPC_URL as string,
    registryAddress: ETHEREUM_REGISTRY_ADDRESS,
    earliestBlock: mainnetChainConfig.earliestBlock,
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
}

// All appconfigs have been built and combined, now let's process rewards
console.log(
  `\n${chalk.white(chalk.underline("Processing reward tokens across all yield sources and chains"))}`,
);
await addRewardTokenConfigs({ appConfig: combinedAppConfig });

// Occassionally Hyperdrives have been added to the registry, but the frontend work is not complete.
// Skipping these allows us to continue to push releases without showing these pools in the UI.
console.log(
  `\n${chalk.white(chalk.underline("Removing hyperdrives that have been added to the registry but we don't want to show in the UI"))}`,
);
combinedAppConfig.hyperdrives = combinedAppConfig.hyperdrives.filter(
  (hyperdrive) => !registryAddressesToSkip.includes(hyperdrive.address),
);

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

/**
 * Mutates the given appConfig by adding reward token configs
 */
async function addRewardTokenConfigs({ appConfig }: { appConfig: AppConfig }) {
  const publicClients: Record<ChainId, PublicClient> = {};
  chainConfigs.forEach(({ chain, rpcUrl }) => {
    publicClients[chain.id] = createPublicClient({
      chain,
      transport: http(rpcUrl),
    });
  });
  await Promise.all(
    Object.entries(yieldSources)
      .filter(([unusedKey, yieldSource]) => yieldSource.rewardsFn)
      .map(async ([unusedKey, yieldSource]) => {
        const rewardFn = rewardFunctions[yieldSource.rewardsFn!]; // safe to cast due to filter above
        const publicClient = publicClients[yieldSource.chainId];
        const rewards = await rewardFn(publicClient);

        rewards.map((reward) => {
          if (
            reward.type === "transferableToken" ||
            reward.type === "nonTransferableToken"
          ) {
            let alreadyExists = false;
            try {
              // This will throw an error if it cannot find the token
              alreadyExists = !!getToken({
                chainId: reward.chainId,
                tokenAddress: reward.tokenAddress,
                appConfig,
              });
            } catch (error) {
              // Do nothing if this errors, it simply means the reward token is
              // not already a hyperdrive base or shares token
            }

            if (alreadyExists) {
              return;
            }

            const knownTokenConfig =
              knownTokenConfigs[reward.chainId][reward.tokenAddress];

            if (knownTokenConfig) {
              appConfig.tokens.push(knownTokenConfig);
              return;
            }

            throw new Error(
              `Unknown reward token found ${reward.tokenAddress} on chain ${reward.chainId}. You must hardcode a tokenConfig for address inside knownTokenConfigs.`,
            );
          }
        });
      }),
  );
}
