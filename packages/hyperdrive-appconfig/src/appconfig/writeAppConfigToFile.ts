import chalk from "chalk";
import fs from "node:fs/promises";
import { AppConfig } from "src/appconfig/AppConfig";

// Custom replacer function to handle bigint
function replaceBigIntsWithStrings(key: string, value: any) {
  if (typeof value === "bigint") {
    // Convert bigint to a string (or another identifiable format)
    return `${value.toString()}n`; // Adding 'n' to differentiate from normal numbers
  }
  return value;
}

function generateFileString(appConfig: AppConfig, appConfigName: string) {
  // Serialize the object with the custom replacer
  const serialized = JSON.stringify(appConfig, replaceBigIntsWithStrings, 2);
  const strictRegex = /"(\d+n)"/g;

  const finalOutput = serialized.replace(strictRegex, "$1");

  return `import { AppConfig } from "src/appconfig/AppConfig";
export const ${appConfigName}: AppConfig = ${finalOutput};`;
}

// Write to a .ts file
export async function writeAppConfigToFile({
  filename,
  appConfig,
  appConfigName,
}: {
  filename: string;
  appConfig: AppConfig;
  appConfigName: string;
}): Promise<void> {
  await fs.writeFile(filename, generateFileString(appConfig, appConfigName));
  console.log(chalk.gray(`${filename} has been saved!`));
}
