import {
  findHyperdriveConfig,
  findYieldSourceToken,
} from "@hyperdrive/appconfig";
import { useQuery } from "@tanstack/react-query";
import * as dnum from "dnum";
import { makeQueryKey } from "src/base/makeQueryKey";
import { QueryStatusWithIdle, getStatus } from "src/base/queryStatus";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "viem";

/*

input amount: 100 [stETH]
           (= 100 ETH)
           (=  98 Lido Shares)

// when users type in steth amount, this converts it to lido shares, which the
// sdk/contracts can then use
usePrepareShares(sharesAmount, hyperdrive)

// when the sdk/contracts return lido shares, this converts them back to steth
useFormatShares(sharesAmount)

const converted = useAmountIn({
 amount: 100,
 asBase: false,
 hyperdrive: "0x1234"
})
 // -> 98 Lido Shares

// asBase = false which means these are shares,
// shareToken says Shares Pegged To Base
// so amount is equivalent base and we need to convert to real shares


const previewAmount = usePreviewLong({
  amount: converted, // 98 Lido Shares
  asBase: false
}) // -> some amount of Lido shares deposit

const amountOut = useAmountOut({
  amount: previewAmount,
  asBase: false,
  hyperdrive: "0x1234"
}) // -> converted back to steth

// asBase = false which means these are shares,
// shareToken says Shares Pegged To Base
// so amount should be converted to base for display

*/

export function usePrepareShares({
  sharesAmount,
  asBase,
  hyperdrive,
}: {
  sharesAmount: bigint;
  asBase: boolean;
  hyperdrive: Address;
}): {
  amount: bigint | undefined;
  status: QueryStatusWithIdle;
} {
  const appConfig = useAppConfig();
  const readHyperdrive = useReadHyperdrive(hyperdrive);

  const hyperdriveConfig = findHyperdriveConfig({
    hyperdrives: appConfig.hyperdrives,
    hyperdriveAddress: hyperdrive,
  });
  const sharesToken = findYieldSourceToken({
    yieldSourceTokenAddress: hyperdriveConfig.sharesToken,
    tokens: appConfig.tokens,
  });

  const queryEnabled = !!readHyperdrive && !asBase;
  const { data, status, fetchStatus } = useQuery({
    queryKey: makeQueryKey("prepare-shares", {
      hyperdrive,
      amount: sharesAmount.toString(),
      asBase,
    }),
    enabled: queryEnabled,
    queryFn: queryEnabled
      ? async () => {
          if (!sharesToken.extensions.isSharesPeggedToBase) {
            return sharesAmount;
          }

          const { vaultSharePrice } = await readHyperdrive.getPoolInfo();
          return dnum.divide([sharesAmount, 18], [vaultSharePrice, 18])[0];
        }
      : undefined,
  });

  return {
    amount: data,
    status: getStatus(status, fetchStatus),
  };
}
