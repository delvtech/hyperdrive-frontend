import { BigNumber } from "ethers";
import { Market } from "hyperdrive/types";
import { useQuery, UseQueryResult } from "react-query";
import { Address, useProvider, useSigner } from "wagmi";

export function usePreviewCloseShort(
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
      return BigNumber.from(0);
    },
  });
}
