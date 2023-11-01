import { ERC20Mintable } from "@hyperdrive/artifacts/dist/ERC20Mintable";
import signale from "signale";
import { chainOption, requiredChain } from "src/options/chain";
import { requiredRpcUrl, rpcUrlOption } from "src/options/rpc-url";
import { requiredString } from "src/options/utils/requiredString";
import { requiredWalletKey, walletKeyOption } from "src/options/wallet-key";
import { createCommandModule } from "src/utils/createCommandModule";
import {
  Hex,
  createPublicClient,
  createWalletClient,
  http,
  parseUnits,
} from "viem";
import { privateKeyToAccount } from "viem/accounts";

export const { command, aliases, describe, builder, handler } =
  createCommandModule({
    command: "mint [OPTIONS]",
    describe: "Mint ERC20Mintable tokens",

    builder: (yargs) => {
      return yargs.options({
        a: {
          alias: ["address"],
          describe: "The address of the ERC20Mintable contract",
          type: "string",
        },
        m: {
          alias: ["amount"],
          describe: "The amount to mint",
          type: "string",
        },
        c: chainOption,
        r: rpcUrlOption,
        w: walletKeyOption,
      });
    },

    handler: async (args) => {
      const chain = await requiredChain(args.chain);
      const rpcUrl = await requiredRpcUrl(args.rpcUrl);
      const walletKey = await requiredWalletKey(args.walletKey);

      const account = privateKeyToAccount(walletKey as Hex);

      const address = await requiredString(args.address, {
        name: "address",
        message: "Enter token address",
      });

      const amount = await requiredString(args.amount, {
        name: "amount",
        message: "Enter amount",
      });

      const publicClient = createPublicClient({
        transport: http(rpcUrl),
        chain,
      });

      const decimals = (await publicClient.readContract({
        abi: ERC20Mintable.abi,
        address: address as `0x${string}`,
        functionName: "decimals",
      })) as number;

      const walletClient = createWalletClient({
        account,
        transport: http(rpcUrl),
        chain,
      });

      signale.pending("Minting...");

      const hash = await walletClient.writeContract({
        abi: ERC20Mintable.abi,
        address: address as Hex,
        functionName: "mint",
        args: [parseUnits(amount, decimals)],
      });

      signale.pending(`Mint tx submitted: ${hash}`);

      await publicClient.waitForTransactionReceipt({ hash });

      signale.success(`Minted ${amount} tokens to ${address}`);
    },
  });
