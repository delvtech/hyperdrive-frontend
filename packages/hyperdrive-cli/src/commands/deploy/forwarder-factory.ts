import { ForwarderFactory } from "@hyperdrive/artifacts/dist/ForwarderFactory.js";
import { command } from "clide-js";
import signale from "signale";
import { PrivateKeyAccount } from "viem";
import { Chain } from "viem/chains";
import {
  DeployedContract,
  deployContract,
} from "../../utils/deployContract.js";
import { DeployOptions } from "../deploy.js";

export default command({
  description: "Deploy an ForwarderFactory contract",

  handler: async ({ data, next }) => {
    const { account, chain, rpcUrl } = data as DeployOptions;

    signale.pending("Deploying ForwarderFactory...");

    const { address } = await deployForwarderFactory({
      account,
      rpcUrl,
      chain,
      onSubmitted: (txHash) => {
        signale.pending(`ForwarderFactory deployment tx submitted: ${txHash}`);
      },
    });

    signale.success(`ForwarderFactory deployed @ ${address}`);
    next(address);
  },
});

export interface DeployForwarderFactoryOptions {
  account: PrivateKeyAccount;
  rpcUrl: string;
  chain: Chain;
  onSubmitted?: (txHash: string) => void;
}

export async function deployForwarderFactory({
  account,
  rpcUrl,
  chain,
  onSubmitted,
}: DeployForwarderFactoryOptions): Promise<DeployedContract> {
  return await deployContract({
    abi: ForwarderFactory.abi,
    args: undefined,
    bytecode: ForwarderFactory.bytecode.object as `0x${string}`,
    account,
    rpcUrl,
    chain,
    onSubmitted,
  });
}
