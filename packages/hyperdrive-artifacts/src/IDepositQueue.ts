export const IDepositQueue = {
  name: 'IDepositQueue' as const,
  abi: [
  {
    "type": "function",
    "name": "depositETHFromProtocol",
    "inputs": [],
    "outputs": [],
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "totalEarned",
    "inputs": [
      {
        "name": "tokenAddress",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  }
] as const,
  bytecode: '0x' as `0x${string}`,
  methodIdentifiers: {
  "depositETHFromProtocol()": "d123ccd5",
  "totalEarned(address)": "649aca4a"
} as const
};
