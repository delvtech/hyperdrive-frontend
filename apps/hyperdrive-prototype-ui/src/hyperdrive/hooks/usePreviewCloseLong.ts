import { BigNumber, Contract } from "ethers";
import { parseUnits } from "ethers/lib/utils.js";
import { useQuery, UseQueryResult } from "react-query";
import { hyperdriveABI } from "src/generated";
import { Market } from "src/hyperdrive/types";
import { isValidTokenAmount } from "src/utils";
import { Address, useProvider, useSigner } from "wagmi";

export function usePreviewCloseLong(
  account: Address | undefined,
  market: Market,
  bondAmount: string,
  tokenId: string | undefined,
): UseQueryResult<BigNumber> {
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
