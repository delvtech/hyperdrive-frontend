import { ERC4626Target2Deployer } from "@delvtech/hyperdrive-artifacts/ERC4626Target2Deployer";
import { command } from "clide-js";
import signale from "signale";
import { Chain, PrivateKeyAccount } from "viem";
import {
  DeployedContract,
  deployContract,
} from "../../utils/deployContract.js";
import { DeployOptions } from "../deploy.js";

export default command({
  description: "Deploy an ERC4626Target2Deployer contract",

  handler: async ({ data, next }) => {
    const { account, chain, rpcUrl } = data as DeployOptions;

    signale.pending("Deploying ERC4626Target2Deployer contract...");

    const { address } = await deployERC4626Target2Deployer({
      account,
      rpcUrl,
      chain,
      onSubmitted: (txHash) => {
        signale.pending(
          `ERC4626Target2Deployer deployment tx submitted: ${txHash}`,
        );
      },
    });

    signale.success(`ERC4626Target2Deployer deployed @ ${address}`);
    next(address);
  },
});

export interface DeployERC4626Target2DeployerOptions {
  account: PrivateKeyAccount;
  rpcUrl: string;
  chain: Chain;
  onSubmitted?: (txHash: string) => void;
}

export async function deployERC4626Target2Deployer({
  account,
  rpcUrl,
  chain,
  onSubmitted,
}: DeployERC4626Target2DeployerOptions): Promise<DeployedContract> {
  return await deployContract({
    abi: ERC4626Target2Deployer.abi,
    args: [],
    bytecode: ERC4626Target2Deployer.bytecode.object,
    account,
    rpcUrl,
    chain,
    onSubmitted,
  });
}
