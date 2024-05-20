import { ERC20ForwarderFactory } from "@delvtech/hyperdrive-artifacts/ERC20ForwarderFactory";
import { ERC20Mintable } from "@delvtech/hyperdrive-artifacts/ERC20Mintable";
import { ERC4626HyperdriveCoreDeployer } from "@delvtech/hyperdrive-artifacts/ERC4626HyperdriveCoreDeployer";
import { ERC4626HyperdriveDeployerCoordinator } from "@delvtech/hyperdrive-artifacts/ERC4626HyperdriveDeployerCoordinator";
import { ERC4626Target0Deployer } from "@delvtech/hyperdrive-artifacts/ERC4626Target0Deployer";
import { ERC4626Target1Deployer } from "@delvtech/hyperdrive-artifacts/ERC4626Target1Deployer";
import { ERC4626Target2Deployer } from "@delvtech/hyperdrive-artifacts/ERC4626Target2Deployer";
import { ERC4626Target3Deployer } from "@delvtech/hyperdrive-artifacts/ERC4626Target3Deployer";
import { ERC4626Target4Deployer } from "@delvtech/hyperdrive-artifacts/ERC4626Target4Deployer";
import { HyperdriveRegistry } from "@delvtech/hyperdrive-artifacts/HyperdriveRegistry";
import { MockERC4626 } from "@delvtech/hyperdrive-artifacts/MockERC4626";
import { MockLido } from "@delvtech/hyperdrive-artifacts/MockLido";
import { StETHHyperdriveCoreDeployer } from "@delvtech/hyperdrive-artifacts/StETHHyperdriveCoreDeployer";
import { StETHHyperdriveDeployerCoordinator } from "@delvtech/hyperdrive-artifacts/StETHHyperdriveDeployerCoordinator";
import { StETHTarget0Deployer } from "@delvtech/hyperdrive-artifacts/StETHTarget0Deployer";
import { StETHTarget1Deployer } from "@delvtech/hyperdrive-artifacts/StETHTarget1Deployer";
import { StETHTarget2Deployer } from "@delvtech/hyperdrive-artifacts/StETHTarget2Deployer";
import { StETHTarget3Deployer } from "@delvtech/hyperdrive-artifacts/StETHTarget3Deployer";
import { StETHTarget4Deployer } from "@delvtech/hyperdrive-artifacts/StETHTarget4Deployer";
import { command } from "clide-js";
import signale from "signale";
import { Address, getContract, parseUnits } from "viem";
import { adminOption } from "../../common-options/admin.js";
import { chainOption } from "../../common-options/chain.js";
import { competitionModeOption } from "../../common-options/competition-mode.js";
import { rpcUrlOption } from "../../common-options/rpc-url.js";
import { walletKeyOption } from "../../common-options/wallet-key.js";
import { DeployedContractInfo } from "../../deploy/DeploymentJson.js";
import { DeployData } from "../deploy.js";
import deployHyperdriveFactory from "./hyperdrivefactory.js";

export default command({
  description: "Deploy a testnet version of the Hyperdrive protocol",

  options: {
    name: {
      alias: ["deployment-name"],
      description: "A name for the deployment.",
      type: "string",
      default: "Hyperdrive Testnet",
    },
    dai: {
      description:
        "The address of the DAI token contract. Deploys a new one if not provided. Defaults to process.env.TESTNET_DAI_ADDRESS.",
      type: "string",
      default: process.env.TESTNET_DAI_ADDRESS,
    },
    "max-dai": {
      alias: ["max-dai-mint-amount"],
      description:
        "The maximum amount of DAI that can be minted. (In DAI, not wei)",
      type: "string",
      default: "10000", // 10,000 DAI
    },
    sdai: {
      description:
        "The address of the sDAI token contract. Deploys a new one if not provided. Defaults to process.env.TESTNET_SDAI_ADDRESS.",
      type: "string",
      default: process.env.TESTNET_SDAI_ADDRESS,
    },
    "sdai-rate": {
      alias: ["sdai-initial-rate"],
      description: "The initial interest rate for sDAI. (In sDAI, not wei)",
      type: "string",
      default: "0.13", // 13%
    },
    "max-sdai": {
      alias: ["max-sdai-mint-amount"],
      description:
        "The maximum amount of sDAI that can be minted. (In sDAI, not wei)",
      type: "string",
      default: "10000", // 10,000 sDAI
    },
    steth: {
      description:
        "The address of the Lido (stETH) token contract. Deploys a new one if not provided. Defaults to process.env.TESTNET_STETH_ADDRESS.",
      type: "string",
      default: process.env.TESTNET_STETH_ADDRESS,
    },
    "steth-rate": {
      alias: ["steth-initial-rate"],
      description: "The initial interest rate for stETH. (In ETH, not wei)",
      type: "string",
      default: "0.035", // 3.5%
    },
    "max-steth": {
      alias: ["max-steth-mint-amount"],
      description:
        "The maximum amount of stETH that can be minted. (In ETH, not wei)",
      type: "string",
      default: "500", // 500 stETH
    },
    chain: {
      ...chainOption,
      default: process.env.TESTNET_CHAIN || chainOption.default,
    },
    rpc: {
      ...rpcUrlOption,
      default: process.env.TESTNET_RPC_URL || rpcUrlOption.default,
    },
    wallet: {
      ...walletKeyOption,
      default: process.env.TESTNET_WALLET_KEY || walletKeyOption.default,
    },
    admin: {
      ...adminOption,
      default: process.env.TESTNET_ADMIN_ADDRESS,
    },
    competition: {
      ...competitionModeOption,
      default:
        Boolean(process.env.TESTNET_COMPETITION_MODE) ||
        competitionModeOption.default,
    },
  },

  handler: async ({ data, options, fork, next }) => {
    const { account, deployer, walletClient } = data as DeployData;

    const isCompetitionMode = await options.competition({
      prompt: "Enable competition mode?",
    });

    const adminOptionValue = await options.admin({
      prompt: isCompetitionMode
        ? {
            message: "Enter admin address",
            initial: account.address,
          }
        : // If competition mode is disabled, the admin address has no effect,
          // so we don't need to prompt for it.
          undefined,
    });
    const admin = (adminOptionValue || account.address) as Address;

    signale.pending("Deploying Hyperdrive Testnet contracts...");

    // =========================================================================
    // 1. DAI
    // =========================================================================

    let daiAddress = await options.dai();

    if (!daiAddress) {
      const maxMintAmount = await options.maxDai();

      const { address } = await deployer.deploy({
        name: "DAI",
        abi: ERC20Mintable.abi,
        bytecode: ERC20Mintable.bytecode,
        args: {
          name: "DAI",
          symbol: "DAI",
          decimals: 18,
          admin,
          isCompetitionMode_: isCompetitionMode,
          maxMintAmount_: BigInt(parseUnits(maxMintAmount, 18)),
        },
      });

      daiAddress = address;
    }

    // =========================================================================
    // 2. sDAI
    // =========================================================================

    let sDaiAddress = await options.sdai();

    if (!sDaiAddress) {
      const rate = await options.sdaiRate();
      const maxMintAmount = await options.maxSdai();

      const { address } = await deployer.deploy({
        name: "sDAI",
        abi: MockERC4626.abi,
        bytecode: MockERC4626.bytecode,
        args: {
          _asset: daiAddress as Address,
          _name: "Savings DAI",
          _symbol: "sDAI",
          _initialRate: BigInt(parseUnits(rate, 18)),
          _admin: admin,
          _isCompetitionMode: isCompetitionMode,
          _maxMintAmount: BigInt(parseUnits(maxMintAmount, 18)),
        },
      });

      sDaiAddress = address;
    }

    // =========================================================================
    // 3. Lido (stETH)
    // =========================================================================

    let stEthAddress = await options.steth();

    if (!stEthAddress) {
      const rate = await options.stethRate();
      const maxMintAmount = await options.maxSteth();

      const { address } = await deployer.deploy({
        name: "stETH",
        abi: MockLido.abi,
        bytecode: MockLido.bytecode,
        args: {
          _initialRate: BigInt(parseUnits(rate, 18)),
          _admin: admin,
          _isCompetitionMode: isCompetitionMode,
          _maxMintAmount: BigInt(parseUnits(maxMintAmount, 18)),
        },
      });

      stEthAddress = address;
    }

    // =========================================================================
    // 4. Token capabilities
    // =========================================================================

    const dai = getContract({
      abi: ERC20Mintable.abi,
      address: daiAddress as Address,
      client: walletClient,
    });
    const sDai = getContract({
      abi: MockERC4626.abi,
      address: sDaiAddress as Address,
      client: walletClient,
    });
    const stEth = getContract({
      abi: MockLido.abi,
      address: stEthAddress as Address,
      client: walletClient,
    });

    const burnRole =
      `0x${ERC20Mintable.methodIdentifiers["burn(uint256)"]}` as const;
    const mintRole =
      `0x${ERC20Mintable.methodIdentifiers["mint(uint256)"]}` as const;

    // Set minting as a public capability on all tokens and vaults and allow
    // the vault to burn tokens.
    await dai.write.setUserRole([sDaiAddress as Address, 1, true]);
    await dai.write.setRoleCapability([1, burnRole, true]);
    await dai.write.setPublicCapability([mintRole, true]);
    await sDai.write.setPublicCapability([mintRole, true]);
    await stEth.write.setPublicCapability([mintRole, true]);

    // =========================================================================
    // 5. ERC20ForwarderFactory
    // =========================================================================

    const { address: forwarderFactoryAddress } = await deployer.deploy({
      name: "ERC20ForwarderFactory",
      abi: ERC20ForwarderFactory.abi,
      bytecode: ERC20ForwarderFactory.bytecode,
      args: {},
    });

    // =========================================================================
    // 6. HyperdriveFactory
    // =========================================================================

    const { address: factoryAddress }: DeployedContractInfo = await fork({
      commands: [deployHyperdriveFactory],
      optionValues: {
        linkerFactory: forwarderFactoryAddress,
      },
    });

    // =========================================================================
    // 6. ERC4626Hyperdrive deployers
    // =========================================================================
    {
      const core = await deployer.deploy({
        name: "ERC4626HyperdriveCoreDeployer",
        abi: ERC4626HyperdriveCoreDeployer.abi,
        bytecode: ERC4626HyperdriveCoreDeployer.bytecode,
        args: {},
      });

      const target0 = await deployer.deploy({
        name: "ERC4626Target0Deployer",
        abi: ERC4626Target0Deployer.abi,
        bytecode: ERC4626Target0Deployer.bytecode,
        args: {},
      });

      const target1 = await deployer.deploy({
        name: "ERC4626Target1Deployer",
        abi: ERC4626Target1Deployer.abi,
        bytecode: ERC4626Target1Deployer.bytecode,
        args: {},
      });

      const target2 = await deployer.deploy({
        name: "ERC4626Target2Deployer",
        abi: ERC4626Target2Deployer.abi,
        bytecode: ERC4626Target2Deployer.bytecode,
        args: {},
      });

      const target3 = await deployer.deploy({
        name: "ERC4626Target3Deployer",
        abi: ERC4626Target3Deployer.abi,
        bytecode: ERC4626Target3Deployer.bytecode,
        args: {},
      });

      const target4 = await deployer.deploy({
        name: "ERC4626Target4Deployer",
        abi: ERC4626Target4Deployer.abi,
        bytecode: ERC4626Target4Deployer.bytecode,
        args: {},
      });

      await deployer.deploy({
        name: "ERC4626HyperdriveDeployerCoordinator",
        abi: ERC4626HyperdriveDeployerCoordinator.abi,
        bytecode: ERC4626HyperdriveDeployerCoordinator.bytecode,
        args: {
          _factory: factoryAddress,
          _coreDeployer: core.address,
          _target0Deployer: target0.address,
          _target1Deployer: target1.address,
          _target2Deployer: target2.address,
          _target3Deployer: target3.address,
          _target4Deployer: target4.address,
        },
      });
    }

    // =========================================================================
    // 7. StETHHyperdrive deployers
    // =========================================================================
    {
      const core = await deployer.deploy({
        name: "StETHHyperdriveCoreDeployer",
        abi: StETHHyperdriveCoreDeployer.abi,
        bytecode: StETHHyperdriveCoreDeployer.bytecode,
        args: {},
      });

      const target0 = await deployer.deploy({
        name: "StETHTarget0Deployer",
        abi: StETHTarget0Deployer.abi,
        bytecode: StETHTarget0Deployer.bytecode,
        args: {},
      });

      const target1 = await deployer.deploy({
        name: "StETHTarget1Deployer",
        abi: StETHTarget1Deployer.abi,
        bytecode: StETHTarget1Deployer.bytecode,
        args: {},
      });

      const target2 = await deployer.deploy({
        name: "StETHTarget2Deployer",
        abi: StETHTarget2Deployer.abi,
        bytecode: StETHTarget2Deployer.bytecode,
        args: {},
      });

      const target3 = await deployer.deploy({
        name: "StETHTarget3Deployer",
        abi: StETHTarget3Deployer.abi,
        bytecode: StETHTarget3Deployer.bytecode,
        args: {},
      });

      const target4 = await deployer.deploy({
        name: "StETHTarget4Deployer",
        abi: StETHTarget4Deployer.abi,
        bytecode: StETHTarget4Deployer.bytecode,
        args: {},
      });

      await deployer.deploy({
        name: "StETHHyperdriveDeployerCoordinator",
        abi: StETHHyperdriveDeployerCoordinator.abi,
        bytecode: StETHHyperdriveDeployerCoordinator.bytecode,
        args: {
          _factory: factoryAddress,
          _coreDeployer: core.address,
          _target0Deployer: target0.address,
          _target1Deployer: target1.address,
          _target2Deployer: target2.address,
          _target3Deployer: target3.address,
          _target4Deployer: target4.address,
          _lido: stEthAddress as Address,
        },
      });
    }

    // =========================================================================
    // 8. Registry
    // =========================================================================

    {
      const { address } = await deployer.deploy({
        name: "HyperdriveRegistry",
        abi: HyperdriveRegistry.abi,
        bytecode: HyperdriveRegistry.bytecode,
        args: {},
      });

      await walletClient.writeContract({
        address,
        abi: HyperdriveRegistry.abi,
        functionName: "updateGovernance",
        args: [admin],
      });
    }

    // =========================================================================
    // Done!
    // =========================================================================

    next(deployer.deployedContracts);
  },
});
