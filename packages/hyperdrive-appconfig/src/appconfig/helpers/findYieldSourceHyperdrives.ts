import { findYieldSourceToken } from "src/appconfig/helpers/findYieldSourceToken";
import { HyperdriveConfig } from "src/hyperdrives/HyperdriveConfig";
import { TokenConfig } from "src/tokens/getTokenConfig";
import { YieldSourceExtensions } from "src/yieldSources/YieldSourceTokenConfig";

export function findYieldSourceHyperdrives({
  yieldSourceId,
  hyperdrives,
  tokens,
}: {
  yieldSourceId: YieldSourceExtensions["protocol"];
  hyperdrives: HyperdriveConfig[];
  tokens: TokenConfig<any>[];
}): HyperdriveConfig[] {
  return hyperdrives.filter((hyperdrive) => {
    const sharesToken = findYieldSourceToken({
      tokens,
      yieldSourceTokenAddress: hyperdrive.sharesToken,
    });
    return sharesToken.extensions.protocol === yieldSourceId;
  });
}
