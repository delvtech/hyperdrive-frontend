import { ERC20ForwarderFactory } from "@delvtech/hyperdrive-artifacts/ERC20ForwarderFactory";
import { command } from "clide-js";
import { DeployData } from "../deploy.js";

export default command({
  description: "Deploy an ERC20ForwarderFactory contract.",

  handler: async ({ data, next }) => {
    const { deployer } = data as DeployData;

    const deployedContract = await deployer.deploy({
      name: "ERC20ForwarderFactory",
      abi: ERC20ForwarderFactory.abi,
      bytecode: ERC20ForwarderFactory.bytecode,
      args: {},
    });

    next(deployedContract);
  },
});
