export const IRocketNetworkBalances = {
  name: 'IRocketNetworkBalances' as const,
  abi: [
  {
    "type": "function",
    "name": "executeUpdateBalances",
    "inputs": [
      {
        "name": "_block",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_totalEth",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_stakingEth",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_rethSupply",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "getBalancesBlock",
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
    "name": "getETHUtilizationRate",
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
    "name": "getLatestReportableBlock",
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
    "name": "getStakingETHBalance",
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
    "name": "getTotalETHBalance",
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
    "name": "getTotalRETHSupply",
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
    "name": "submitBalances",
    "inputs": [
      {
        "name": "_block",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_total",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_staking",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_rethSupply",
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
  "executeUpdateBalances(uint256,uint256,uint256,uint256)": "56ff3625",
  "getBalancesBlock()": "9100c13d",
  "getETHUtilizationRate()": "9dba66af",
  "getLatestReportableBlock()": "a9bb16ed",
  "getStakingETHBalance()": "f1eda634",
  "getTotalETHBalance()": "964d042c",
  "getTotalRETHSupply()": "c4c8d0ad",
  "submitBalances(uint256,uint256,uint256,uint256)": "32db5470"
} as const
};
