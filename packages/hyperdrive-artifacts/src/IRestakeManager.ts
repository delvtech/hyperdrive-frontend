export const IRestakeManager = {
  name: 'IRestakeManager' as const,
  abi: [
  {
    "type": "function",
    "name": "calculateTVLs",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "uint256[][]",
        "internalType": "uint256[][]"
      },
      {
        "name": "",
        "type": "uint256[]",
        "internalType": "uint256[]"
      },
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "depositETH",
    "inputs": [],
    "outputs": [],
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "ezETH",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "renzoOracle",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  }
] as const,
  bytecode: '0x' as `0x${string}`,
  methodIdentifiers: {
  "calculateTVLs()": "ff9969cd",
  "depositETH()": "f6326fb3",
  "ezETH()": "13a73c78",
  "renzoOracle()": "892866a4"
} as const
};
