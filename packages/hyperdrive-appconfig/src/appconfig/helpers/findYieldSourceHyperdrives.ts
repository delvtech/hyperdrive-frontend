import { AppConfig } from "src/appconfig/AppConfig";
import { findYieldSourceToken } from "src/appconfig/helpers/findYieldSourceToken";
import { HyperdriveConfig } from "src/hyperdrives/HyperdriveConfig";
import { YieldSource } from "src/yieldSources/extensions";

export function findYieldSourceHyperdrives({
  yieldSourceId,
  appConfig: { hyperdrives, tokens },
}: {
  yieldSourceId: YieldSource["protocol"];
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
