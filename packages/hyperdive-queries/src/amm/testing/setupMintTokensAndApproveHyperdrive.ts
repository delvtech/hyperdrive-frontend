import { parseUnits, Address } from "viem";
import { publicClient } from "src/testing/utils";
import { TestAddresses } from "src/addresses/test";
import { ERC20MintableABI } from "src/abis/ERC20Mintable";
import { MAX_UINT256 } from "src/base/numbers";

export async function setupMintTokensAndApproveHyperdrive(
  account: Address,
): Promise<void> {
  await publicClient.writeContract({
    abi: ERC20MintableABI,
    address: TestAddresses.baseToken,
    functionName: "mint",
    args: [account, parseUnits("100000", 18)],
    account,
  });
  await publicClient.writeContract({
    functionName: "approve",
    account,
    address: TestAddresses.baseToken,
    args: [TestAddresses.mockHyperdrive, MAX_UINT256],
    abi: ERC20MintableABI,
  });
}
