import { ERC4626HyperdriveCoreDeployer } from "@hyperdrive/artifacts/ERC4626HyperdriveCoreDeployer";
import { command } from "clide-js";
import signale from "signale";
import { Chain, PrivateKeyAccount } from "viem";
import {
  DeployedContract,
  deployContract,
} from "../../utils/deployContract.js";
import { DeployOptions } from "../deploy.js";

export default command({
  description: "Deploy an ERC4626HyperdriveCoreDeployer contract",

  handler: async ({ data, next }) => {
    const { account, chain, rpcUrl } = data as DeployOptions;

    signale.pending("Deploying ERC4626HyperdriveCoreDeployer contract...");

    const { address } = await deployERC4626HyperdriveCoreDeployer({
      account,
      rpcUrl,
      chain,
      onSubmitted: (txHash) => {
        signale.pending(
          `ERC4626HyperdriveCoreDeployer deployment tx submitted: ${txHash}`,
        );
      },
    });

    signale.success(`ERC4626HyperdriveCoreDeployer deployed @ ${address}`);
    next(address);
  },
});

export interface DeployERC4626HyperdriveCoreDeployerOptions {
  account: PrivateKeyAccount;
  rpcUrl: string;
  chain: Chain;
  onSubmitted?: (txHash: string) => void;
}

export async function deployERC4626HyperdriveCoreDeployer({
  account,
  rpcUrl,
  chain,
  onSubmitted,
}: DeployERC4626HyperdriveCoreDeployerOptions): Promise<DeployedContract> {
  return await deployContract({
    abi: ERC4626HyperdriveCoreDeployer.abi,
    args: [],
    bytecode: ERC4626HyperdriveCoreDeployer.bytecode.object,
    account,
    rpcUrl,
    chain,
    onSubmitted,
  });
}
