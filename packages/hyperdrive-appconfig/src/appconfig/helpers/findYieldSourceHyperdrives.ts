import { AppConfig } from "src/appconfig/AppConfig";
import { HyperdriveConfig } from "src/hyperdrives/HyperdriveConfig";

export function findYieldSourceHyperdrives({
  yieldSourceId,
  appConfig: { hyperdrives, yieldSources },
}: {
  yieldSourceId: keyof typeof yieldSources;
  appConfig: AppConfig;
}): HyperdriveConfig[] {
  return hyperdrives.filter((hyperdrive) => {
    const yieldSource = yieldSources[hyperdrive.yieldSource];
    return yieldSource?.id === yieldSourceId;
  });
}
