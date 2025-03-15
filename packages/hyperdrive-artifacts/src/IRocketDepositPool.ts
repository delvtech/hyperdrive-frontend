export const IRocketDepositPool = {
  name: 'IRocketDepositPool' as const,
  abi: [
  {
    "type": "function",
    "name": "assignDeposits",
    "inputs": [],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "deposit",
    "inputs": [],
    "outputs": [],
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "getBalance",
    "inputs": [],
    "outputs": [
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
    "name": "getExcessBalance",
    "inputs": [],
    "outputs": [
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
    "name": "getMaximumDepositAmount",
    "inputs": [],
    "outputs": [
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
    "name": "getNodeBalance",
    "inputs": [],
    "outputs": [
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
    "name": "getUserBalance",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "int256",
        "internalType": "int256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "maybeAssignDeposits",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "nodeCreditWithdrawal",
    "inputs": [
      {
        "name": "_amount",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "nodeDeposit",
    "inputs": [
      {
        "name": "_totalAmount",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "recycleDissolvedDeposit",
    "inputs": [],
    "outputs": [],
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "recycleExcessCollateral",
    "inputs": [],
    "outputs": [],
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "recycleLiquidatedStake",
    "inputs": [],
    "outputs": [],
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "withdrawExcessBalance",
    "inputs": [
      {
        "name": "_amount",
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
  "assignDeposits()": "27c8f193",
  "deposit()": "d0e30db0",
  "getBalance()": "12065fe0",
  "getExcessBalance()": "888b042f",
  "getMaximumDepositAmount()": "1eddb626",
  "getNodeBalance()": "1e35fed8",
  "getUserBalance()": "b7013dc1",
  "maybeAssignDeposits()": "3b36f592",
  "nodeCreditWithdrawal(uint256)": "606b6497",
  "nodeDeposit(uint256)": "22b1751d",
  "recycleDissolvedDeposit()": "72f5158d",
  "recycleExcessCollateral()": "db82047b",
  "recycleLiquidatedStake()": "1b7dd4c0",
  "withdrawExcessBalance(uint256)": "63a5db9e"
} as const
};
