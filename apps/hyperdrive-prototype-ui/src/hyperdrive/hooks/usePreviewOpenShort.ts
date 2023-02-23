import { BigNumber, constants, Contract } from "ethers";
import { parseUnits } from "ethers/lib/utils.js";
import { hyperdriveABI } from "generated";
import { Market } from "hyperdrive/types";
import { useQuery, UseQueryResult } from "react-query";
import { isValidTokenAmount } from "utils";
import { Address, useProvider, useSigner } from "wagmi";

export function usePreviewOpenShort(
  account: Address | undefined,
  market: Market,
  bondAmount: string,
): UseQueryResult<BigNumber> {
  const provider = useProvider();

  const { data: signer } = useSigner();

  const enabled =
    !!account && !!provider && !!signer && isValidTokenAmount(bondAmount);

  return useQuery({
    queryKey: [account, market, bondAmount],
    enabled: enabled,
    queryFn: enabled
      ? async () => {
          const bondAmountBN = parseUnits(
            bondAmount,
            market.baseToken.decimals,
          );

          if (bondAmountBN.isZero()) {
            return BigNumber.from(0);
          }

          const hyperdriveContract = new Contract(
            market.address,
            hyperdriveABI,
            provider,
          );

          const out = await hyperdriveContract
            .connect(signer)
            .callStatic.openShort(
              bondAmountBN,
              // todo support slippage
              constants.MaxUint256,
              account,
              false,
            );

          return out;
        }
      : undefined,
  });
}
