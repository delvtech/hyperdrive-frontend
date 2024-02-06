// TODO: As of contracts version 0.7.0, the ForwarderFactory no longer exists
// import { ForwarderFactory } from "@hyperdrive/artifacts/ForwarderFactory";
import { command } from "clide-js";
import signale from "signale";
import { PrivateKeyAccount } from "viem";
import { Chain } from "viem/chains";
import { DeployOptions } from "../deploy.js";

export default command({
  description: "Deploy a ForwarderFactory contract",

  handler: async ({ data, next }) => {
    const { account, chain, rpcUrl } = data as DeployOptions;

    signale.pending("Deploying ForwarderFactory...");

    // TODO: As of contracts version 0.7.0, the ForwarderFactory no longer exists
    // const { address } = await deployForwarderFactory({
    //   account,
    //   rpcUrl,
    //   chain,
    //   onSubmitted: (txHash) => {
    //     signale.pending(`ForwarderFactory deployment tx submitted: ${txHash}`);
    //   },
    // });

    // signale.success(`ForwarderFactory deployed @ ${address}`);
    // next(address);
  },
});

export interface DeployForwarderFactoryOptions {
  account: PrivateKeyAccount;
  rpcUrl: string;
  chain: Chain;
  onSubmitted?: (txHash: string) => void;
}

// TODO: As of contracts version 0.7.0, the ForwarderFactory no longer exists
// export async function deployForwarderFactory({
//   account,
//   rpcUrl,
//   chain,
//   onSubmitted,
// }: DeployForwarderFactoryOptions): Promise<DeployedContract> {
//   return await deployContract({
//     abi: ForwarderFactory.abi,
//     args: undefined,
//     bytecode: ForwarderFactory.bytecode.object as `0x${string}`,
//     account,
//     rpcUrl,
//     chain,
//     onSubmitted,
//   });
// }
