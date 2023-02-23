import { BigNumber, Contract } from "ethers";
import { parseUnits } from "ethers/lib/utils.js";
import { hyperdriveABI } from "generated";
import { Market } from "hyperdrive/types";
import { useQuery } from "react-query";
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
    queryKey: ["preview-close-long", account, market, bondAmount, tokenId],
    enabled:
      !!account &&
      !!tokenId &&
      !!provider &&
      !!bondAmount &&
      bondAmount !== "0" &&
      !!signer,
    queryFn: async () => {
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
        );

      return out;
    },
  });
}
