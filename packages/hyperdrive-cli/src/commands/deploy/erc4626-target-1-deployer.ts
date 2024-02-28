import { ERC4626Target1Deployer } from "@delvtech/hyperdrive-artifacts/ERC4626Target1Deployer";
import { command } from "clide-js";
import signale from "signale";
import { Chain, PrivateKeyAccount } from "viem";
import {
  DeployedContract,
  deployContract,
} from "../../utils/deployContract.js";
import { DeployOptions } from "../deploy.js";

export default command({
  description: "Deploy an ERC4626Target1Deployer contract",

  handler: async ({ data, next }) => {
    const { account, chain, rpcUrl } = data as DeployOptions;

    signale.pending("Deploying ERC4626Target1Deployer contract...");

    const { address } = await deployERC4626Target1Deployer({
      account,
      rpcUrl,
      chain,
      onSubmitted: (txHash) => {
        signale.pending(
          `ERC4626Target1Deployer deployment tx submitted: ${txHash}`,
        );
      },
    });

    signale.success(`ERC4626Target1Deployer deployed @ ${address}`);
    next(address);
  },
});

export interface DeployERC4626Target1DeployerOptions {
  account: PrivateKeyAccount;
  rpcUrl: string;
  chain: Chain;
  onSubmitted?: (txHash: string) => void;
}

export async function deployERC4626Target1Deployer({
  account,
  rpcUrl,
  chain,
  onSubmitted,
}: DeployERC4626Target1DeployerOptions): Promise<DeployedContract> {
  return await deployContract({
    abi: ERC4626Target1Deployer.abi,
    args: [],
    bytecode: ERC4626Target1Deployer.bytecode.object,
    account,
    rpcUrl,
    chain,
    onSubmitted,
  });
}
