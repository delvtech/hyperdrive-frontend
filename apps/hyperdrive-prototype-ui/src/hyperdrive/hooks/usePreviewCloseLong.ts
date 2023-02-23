import { BigNumber, Contract } from "ethers";
import { parseUnits } from "ethers/lib/utils.js";
import { hyperdriveABI } from "generated";
import { Market } from "hyperdrive/types";
import { useQuery } from "react-query";
import { isValidTokenAmount } from "utils";
import { Address, useProvider, useSigner } from "wagmi";

export function usePreviewCloseLong(
  account: Address | undefined,
  market: Market,
  bondAmount: string,
  tokenId: string | undefined,
) {
  const provider = useProvider();
  const { data: signer } = useSigner();

  return useQuery({
    queryKey: [account, tokenId, bondAmount],
    enabled:
      !!account &&
      !!tokenId &&
      !!provider &&
      !!signer &&
      isValidTokenAmount(bondAmount),
    queryFn: async () => {
      const hyperdriveContract = new Contract(
        market.address,
        hyperdriveABI,
        provider,
      );

      const out: BigNumber = await hyperdriveContract
        .connect(signer!)
        .callStatic.closeLong(
          tokenId, // token id
          parseUnits(bondAmount, market.baseToken.decimals), // amount bond in
          0, // min amount out
          account, // destination
        );

      return out;
    },
  });
}
