import { BigNumber, Contract } from "ethers";
import { parseUnits } from "ethers/lib/utils.js";
import { hyperdriveABI } from "generated";
import { Market } from "hyperdrive/types";
import { useQuery, UseQueryResult } from "react-query";
import { Address, useProvider, useSigner } from "wagmi";

export function usePreviewOpenLong(
  account: Address | undefined,
  market: Market,
  baseAmount: string,
): UseQueryResult<BigNumber> {
  const provider = useProvider();

  const { data: signer } = useSigner();

  return useQuery({
    queryKey: ["preview-open-long", account, market, baseAmount],
    enabled:
      !!account && !!provider && !!baseAmount && baseAmount !== "0" && !!signer,
    queryFn: async () => {
      const hyperdriveContract = new Contract(
        market.address,
        hyperdriveABI,
        provider,
      );

      const out = await hyperdriveContract
        .connect(signer!)
        .callStatic.openLong(
          parseUnits(baseAmount, market.baseToken.decimals),
          0,
          account,
        );

      return out;
    },
  });
}
