import { BigNumber, Contract, Signer } from "ethers";
import { parseUnits } from "ethers/lib/utils.js";
import { hyperdriveABI } from "generated";
import { Market } from "hyperdrive/types";
import { useQuery, UseQueryResult } from "react-query";
import { isValidTokenAmount } from "utils";
import { Address, useProvider, useSigner } from "wagmi";

export function usePreviewOpenLp(
  account: Address | undefined,
  market: Market,
  baseAmount: string,
): UseQueryResult<BigNumber> {
  const provider = useProvider();

  const { data: signer } = useSigner();

  return useQuery({
    queryKey: [account, market, baseAmount],
    enabled:
      !!account && !!provider && isValidTokenAmount(baseAmount) && !!signer,
    queryFn: async () => {
      const baseAmountBN = parseUnits(baseAmount, market.baseToken.decimals);

      if (baseAmountBN.isZero()) {
        return BigNumber.from(0);
      }
      const hyperdriveContract = new Contract(
        market.address,
        hyperdriveABI,
        provider,
      );

      const out = await hyperdriveContract
        .connect(signer as Signer)
        .callStatic.addLiquidity(baseAmount, 0, account, false);

      return out;
    },
  });
}
