import { OptionConfig, OptionsConfig, OptionsGetter } from "clide-js";

export const walletKeyOption = {
  alias: ["wallet-key"],
  description: "A wallet key to sign and pay for the transaction",
  type: "string",
  required: true,
  default: process.env.WALLET_PRIVATE_KEY,
} satisfies OptionConfig;

// TODO: This type param can be removed once the typescript version of the
// monorepo is updated to >=5.2 (Yay for smarter type inference!)
export function getWalletKey<T extends OptionsConfig>(
  options: OptionsGetter<T>,
): Promise<string> {
  return options.walletKey({
    prompt: "Enter wallet key",
  }) as Promise<string>;
}
