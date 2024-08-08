import { AppConfig } from "src/appconfig/AppConfig";
import { HyperdriveConfig } from "src/hyperdrives/HyperdriveConfig";
import { YieldSourceId } from "src/yieldSources";

export function findYieldSourceHyperdrives({
  yieldSourceId,
  appConfig: { hyperdrives, yieldSources },
}: {
  yieldSourceId: YieldSourceId;
  appConfig: AppConfig;
}): HyperdriveConfig[] {
  return hyperdrives.filter((hyperdrive) => {
    const yieldSource = yieldSources[hyperdrive.yieldSource];
    return yieldSource?.id === yieldSourceId;
  });
}
