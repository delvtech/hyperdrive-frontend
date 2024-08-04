import { APP_VERSION } from "src/version.output";

export function logAppVersion(): void {
  const repoUrl = "https://github.com/delvtech/hyperdrive-frontend";
  const versionUrl = `${repoUrl}/commit/${APP_VERSION}`;
  const unreleasedUrl = `${repoUrl}/compare/${APP_VERSION}...main`;

  // biome-ignore lint/nursery/noConsole:
  console.log(`App version: ${versionUrl}`);
  // biome-ignore lint/nursery/noConsole:
  console.log(`Unreleased commits: ${unreleasedUrl}`);
}
