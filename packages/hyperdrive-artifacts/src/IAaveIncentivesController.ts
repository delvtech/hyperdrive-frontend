export const IAaveIncentivesController = {
  name: 'IAaveIncentivesController' as const,
  abi: [
  {
    "type": "function",
    "name": "handleAction",
    "inputs": [
      {
        "name": "user",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "totalSupply",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "userBalance",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  }
] as const,
  bytecode: '0x' as `0x${string}`,
  methodIdentifiers: {
  "handleAction(address,uint256,uint256)": "31873e2e"
} as const
};
