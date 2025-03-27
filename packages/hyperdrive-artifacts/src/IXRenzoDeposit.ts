export const IXRenzoDeposit = {
  name: 'IXRenzoDeposit' as const,
  abi: [
  {
    "type": "function",
    "name": "getMintRate",
    "inputs": [],
    "outputs": [
      {
        "name": "lastPrice",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "lastPriceTimestamp",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "xezETH",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "contract IERC20"
      }
    ],
    "stateMutability": "view"
  }
] as const,
  bytecode: '0x' as `0x${string}`,
  methodIdentifiers: {
  "getMintRate()": "96f0bd61",
  "xezETH()": "152b2c4f"
} as const
};
