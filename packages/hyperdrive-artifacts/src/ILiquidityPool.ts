export const ILiquidityPool = {
  name: 'ILiquidityPool' as const,
  abi: [
  {
    "type": "function",
    "name": "addEthAmountLockedForWithdrawal",
    "inputs": [
      {
        "name": "_amount",
        "type": "uint128",
        "internalType": "uint128"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "amountForShare",
    "inputs": [
      {
        "name": "_share",
        "type": "uint256",
        "internalType": "uint256"
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
  },
  {
    "type": "function",
    "name": "deposit",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "deposit",
    "inputs": [
      {
        "name": "_referral",
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
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "deposit",
    "inputs": [
      {
        "name": "_user",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "_referral",
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
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "depositToRecipient",
    "inputs": [
      {
        "name": "_recipient",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "_amount",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_referral",
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
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "eETH",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "contract IEETH"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getTotalEtherClaimOf",
    "inputs": [
      {
        "name": "_user",
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
  },
  {
    "type": "function",
    "name": "getTotalPooledEther",
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
    "name": "numPendingDeposits",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "uint32",
        "internalType": "uint32"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "rebase",
    "inputs": [
      {
        "name": "_accruedRewards",
        "type": "int128",
        "internalType": "int128"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "reduceEthAmountLockedForWithdrawal",
    "inputs": [
      {
        "name": "_amount",
        "type": "uint128",
        "internalType": "uint128"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "sharesForAmount",
    "inputs": [
      {
        "name": "_amount",
        "type": "uint256",
        "internalType": "uint256"
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
  },
  {
    "type": "function",
    "name": "sharesForWithdrawalAmount",
    "inputs": [
      {
        "name": "_amount",
        "type": "uint256",
        "internalType": "uint256"
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
  },
  {
    "type": "function",
    "name": "totalValueInLp",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "uint128",
        "internalType": "uint128"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "totalValueOutOfLp",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "uint128",
        "internalType": "uint128"
      }
    ],
    "stateMutability": "view"
  }
] as const,
  bytecode: '0x' as `0x${string}`,
  methodIdentifiers: {
  "addEthAmountLockedForWithdrawal(uint128)": "1665f66d",
  "amountForShare(uint256)": "561bddf8",
  "deposit()": "d0e30db0",
  "deposit(address)": "f340fa01",
  "deposit(address,address)": "f9609f08",
  "depositToRecipient(address,uint256,address)": "b46a130e",
  "eETH()": "0de371e2",
  "getTotalEtherClaimOf(address)": "51199700",
  "getTotalPooledEther()": "37cfdaca",
  "numPendingDeposits()": "e4537934",
  "rebase(int128)": "c00b2d61",
  "reduceEthAmountLockedForWithdrawal(uint128)": "8a1b58b1",
  "sharesForAmount(uint256)": "3a53acb0",
  "sharesForWithdrawalAmount(uint256)": "917266fa",
  "totalValueInLp()": "7c90fbf0",
  "totalValueOutOfLp()": "456a23a6"
} as const
};
