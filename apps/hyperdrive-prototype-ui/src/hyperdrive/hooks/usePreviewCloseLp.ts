import { BigNumber, Contract, Signer } from "ethers";
import { parseUnits } from "ethers/lib/utils.js";
import { hyperdriveABI } from "generated";
import { Market } from "hyperdrive/types";
import { useQuery, UseQueryResult } from "react-query";
import { isValidTokenAmount } from "utils";
import { Address, useProvider, useSigner } from "wagmi";

export function usePreviewCloseLp(
  account: Address | undefined,
  market: Market,
  lpShares: string,
): UseQueryResult<BigNumber> {
  const provider = useProvider();

  const { data: signer } = useSigner();

  return useQuery({
    queryKey: [account, market, lpShares],
    enabled:
      !!account && !!provider && isValidTokenAmount(lpShares) && !!signer,
    queryFn: async () => {
      const lpSharesBN = parseUnits(lpShares, market.baseToken.decimals);

      if (lpSharesBN.isZero()) {
        return BigNumber.from(0);
      }
      const hyperdriveContract = new Contract(
        market.address,
        hyperdriveABI,
        provider,
      );

      const out = await hyperdriveContract
        .connect(signer as Signer)
        .callStatic.removeLiquidity(lpShares, 0, account, false);

      return out;
    },
  });
}
