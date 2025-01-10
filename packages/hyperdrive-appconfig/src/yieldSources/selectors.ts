import { AppConfig } from "src/appconfig/AppConfig";
import { YieldSourceConfig, YieldSourceId } from "src/yieldSources/types";

export function getYieldSourceConfig({
  appConfig,
  yieldSourceId,
}: {
  yieldSourceId: YieldSourceId;
  appConfig: AppConfig;
}): YieldSourceConfig {
  return appConfig.yieldSources[yieldSourceId];
}
