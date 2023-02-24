import { BigNumber, constants, Contract } from "ethers";
import { parseUnits } from "ethers/lib/utils.js";
import { hyperdriveABI } from "generated";
import { Market } from "hyperdrive/types";
import { getAssetTimestampFromTokenId } from "hyperdrive/utils";
import { useQuery, UseQueryResult } from "react-query";
import { isValidTokenAmount } from "utils";
import { Address, useProvider, useSigner } from "wagmi";

export function usePreviewCloseShort(
  account: Address | undefined,
  market: Market,
  tokenId: string | undefined,
  shortAmount: string,
): UseQueryResult<BigNumber> {
  const provider = useProvider();

  const { data: signer } = useSigner();

  const enabled =
    !!account &&
    !!provider &&
    !!signer &&
    !!tokenId &&
    isValidTokenAmount(shortAmount);
  return useQuery({
    queryKey: [account, tokenId, market, shortAmount],
    enabled: enabled,
    queryFn: enabled
      ? async () => {
          const shortAmountBN = parseUnits(
            shortAmount,
            market.baseToken.decimals,
          );

          if (shortAmountBN.isZero()) {
            return BigNumber.from(0);
          }

          const hyperdriveContract = new Contract(
            market.address,
            hyperdriveABI,
            provider,
          );

          const out = await hyperdriveContract
            .connect(signer)
            .callStatic.closeShort(
              getAssetTimestampFromTokenId(BigNumber.from(tokenId)),
              shortAmountBN,
              // todo support slippage
              constants.Zero,
              account,
              false,
            );

          return out;
        }
      : undefined,
  });
}
