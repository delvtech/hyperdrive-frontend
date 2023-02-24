import { BigNumber, Contract } from "ethers";
import { parseUnits } from "ethers/lib/utils.js";
import { hyperdriveABI } from "generated";
import { Market } from "hyperdrive/types";
import { useQuery, UseQueryResult } from "react-query";
import { isValidTokenAmount } from "utils";
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
      const bondAmountBN = parseUnits(bondAmount, market.baseToken.decimals);

      if (bondAmountBN.isZero()) {
        return BigNumber.from(0);
      }

      const hyperdriveContract = new Contract(
        market.address,
        hyperdriveABI,
        provider,
      );

      const out: BigNumber = await hyperdriveContract
        .connect(signer!)
        .callStatic.closeLong(
          tokenId,
          parseUnits(bondAmount, market.baseToken.decimals),
          0,
          account,
          false,
        );

      return out;
    },
  });
}
