import { AppConfig } from "src/appconfig/AppConfig";
import { findYieldSourceToken } from "src/appconfig/helpers/findYieldSourceToken";
import { HyperdriveConfig } from "src/hyperdrives/HyperdriveConfig";
import { YieldSourceExtensions } from "src/yieldSources/YieldSourceTokenConfig";

export function findYieldSourceHyperdrives({
  yieldSourceId,
  appConfig: { hyperdrives, tokens },
}: {
  yieldSourceId: YieldSourceExtensions["protocol"];
  appConfig: AppConfig;
}): HyperdriveConfig[] {
  return hyperdrives.filter((hyperdrive) => {
    const sharesToken = findYieldSourceToken({
      tokens,
      yieldSourceTokenAddress: hyperdrive.sharesToken,
    });
    return sharesToken.extensions.protocol === yieldSourceId;
  });
}
